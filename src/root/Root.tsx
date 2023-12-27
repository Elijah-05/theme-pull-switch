import { useAtom } from 'jotai'
import { useEffect, useState } from 'react'
import { theme } from '../store/store'
import Footer from '../components/Footer'
import moment from 'moment'
import SwitchWithRope from '../components/SwitchWithRope'
import { ActiveTimeType } from '../types/types'
import DisplayTime from '../components/DisplayTime'

const Root = () => {
    const [getTheme, setTheme] = useAtom(theme)
    const [switchHovered, setSwitchHovered] = useState(false)
    const [isSwitchClicked, setIsSwitchClicked] = useState(false)
    const [isSwitchFall, setSwitchFall] = useState(false)
    const [activeTime, setActiveTime] = useState<ActiveTimeType>({
        YYYY: moment(new Date()).format('YYYY'),
        MM: moment(new Date()).format('MMMM'),
        M: moment(new Date()).format('MM'),
        DD: moment(new Date()).format('dddd'),
        D: moment(new Date()).format('D'),
        hh: moment(new Date()).format('hh'),
        mm: moment(new Date()).format('mm'),
        ss: moment(new Date()).format('ss'),
    })
    const isDark = getTheme === 'dark' ? true : false
    const switchColor = getTheme === 'light' ? 'bg-white' : 'bg-primary'

    //Live time re-render
    useEffect(() => {
        setTimeout(() => {
            setActiveTime({
                ...activeTime,
                hh: moment(new Date()).format('hh'),
                mm: moment(new Date()).format('mm'),
                ss: moment(new Date()).format('ss'),
            })
        }, 1000)
    }, [activeTime, setActiveTime])

    //Auto Fall the switch rope from top initially
    useEffect(() => {
        setTimeout(() => {
            setSwitchFall(true)
        }, 100)
    }, [])

    //Hover on Switch button function
    const handleSwitchHover = (): void => {
        setTimeout(() => {
            setSwitchHovered(!switchHovered)
        }, 1000 * 3)
    }

    //Change Theme Function
    const handleToggleTheme = (): void => {
        localStorage.setItem(
            'theme',
            localStorage.getItem('theme') == 'light' ? 'dark' : 'light'
        )
        setTheme(getTheme == 'light' ? 'dark' : 'light')
        setIsSwitchClicked(!isSwitchClicked)
        setTimeout(() => {
            setIsSwitchClicked(isSwitchClicked)
        }, 200)
    }

    //Main Component Return
    return (
        <div className=" border-slate-70 flex h-screen max-h-screen items-center justify-center">
            {/* Switch Component */}
            <SwitchWithRope
                isSwitchFall={isSwitchFall}
                switchHovered={switchHovered}
                isSwitchClicked={isSwitchClicked}
                handleSwitchHover={handleSwitchHover}
                handleToggleTheme={handleToggleTheme}
                switchColor={switchColor}
                getTheme={getTheme}
            />
            {/* Main Time Screen */}
            <DisplayTime isDark={isDark} activeTime={activeTime} />
            <Footer />
        </div>
    )
}

export default Root

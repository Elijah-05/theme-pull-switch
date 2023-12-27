import { useAtom } from 'jotai'
import { useEffect, useState } from 'react'
import { theme } from '../store/store'
import Footer from '../components/Footer'
import moment from 'moment'

const Root = () => {
    const [getTheme, setTheme] = useAtom(theme)
    const [switchHovered, setSwitchHovered] = useState(false)
    const [isSwitchClicked, setIsSwitchClicked] = useState(false)
    const [isSwitchFall, setSwitchFall] = useState(false)
    const [activeTime, setActiveTime] = useState({
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

    useEffect(() => {
        setTimeout(() => {
            setSwitchFall(true)
        }, 100)
    }, [])

    const handleSwitchHover = () => {
        setTimeout(() => {
            setSwitchHovered(!switchHovered)
        }, 1000 * 3)
    }

    const handleToggleTheme = () => {
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
            <div className="absolute right-16 top-0 z-50 md:right-[15vw] ">
                <div
                    className={` w-1 bg-slate-600 ${
                        isSwitchFall
                            ? 'xs:h-[55vh] mmd:h-[60vh] h-[70vh] duration-1000 sm:h-[60vh] lg:h-[40vh]'
                            : 'h-0'
                    } ${
                        switchHovered
                            ? 'drop-shadow-[4px_0px_1px_rgba(0,0,0,0.2)]'
                            : 'drop-shadow-[4px_0px_3px_rgba(0,0,0,0.3)]'
                    } duration-500`}
                />
                <button
                    className={`absolute bottom-0 -mb-2 ml-[1.5px] w-10 -translate-x-1/2 ${switchColor} ${
                        isSwitchClicked
                            ? 'translate-y-8 duration-500'
                            : 'duration-1000 hover:translate-y-3'
                    } flex h-16 items-center justify-center rounded-full drop-shadow-[3px_14px_8px_rgba(0,0,0,0.2)] hover:drop-shadow-[3px_10px_4px_rgba(0,0,0,0.3)]`}
                    onMouseEnter={handleSwitchHover}
                    onMouseLeave={handleSwitchHover}
                    onClick={handleToggleTheme}
                >
                    <div className="h-8 rounded-full border border-black bg-slate-300">
                        <div
                            className={`mt-[1px] h-4 w-4 rounded-full bg-gray-700 ${
                                getTheme == 'light' ? 'translate-y-3' : ''
                            } duration-300`}
                        />
                        <div className=" font- absolute left-1/2 top-0 mt-2 -translate-x-1/2 translate-y-1/2 font-inter text-xs text-gray-700">
                            1
                        </div>
                        <div className=" font- absolute left-1/2 -mt-[1px] -translate-x-1/2 font-inter text-xs text-gray-700">
                            0
                        </div>
                    </div>
                </button>
            </div>
            {/* Main Time Screen */}
            <div
                className={`xs:-ml-24 mb-[30vh] ml-0 flex select-none flex-col text-white sm:ml-0`}
            >
                <div
                    className={`flex items-center gap-4 bg-gradient-to-t from-secondary to-primary ${
                        isDark && 'text-transparent'
                    } bg-clip-text drop-shadow-[0px_8px_10px_rgba(0,0,0,0.2)] duration-500`}
                >
                    <div className="">
                        <div className="flex flex-col sm:flex-row">
                            <span
                                className={`sm:hidden ${
                                    getTheme === 'light' ? 'text-black' : 'text'
                                } -mb-[70px] ml-1 text-center font-inter font-medium tracking-[0.1rem]`}
                            >
                                {activeTime.DD} {activeTime.D}
                            </span>
                            <span className="text-[200px] sm:text-[242px] ">
                                {activeTime.hh}
                            </span>
                            <span className="hidden text-[242px] sm:flex">
                                :
                            </span>
                            <span className="-mt-28 text-[200px] sm:mt-0 sm:text-[242px]">
                                {activeTime.mm}
                            </span>
                        </div>
                        <div className=" -mt-10 flex items-center justify-center gap-2 text-center font-inter text-base font-light tracking-wider text-white sm:-mt-12">
                            <span className="hidden text-sm sm:flex">{activeTime.DD},</span>
                            <span className=" text-sm">{activeTime.MM} </span>
                            <span className="hidden sm:flex">
                                {activeTime.D},
                            </span>
                            <span className=" text-sm">{activeTime.YYYY}</span>
                        </div>
                    </div>
                    <span className="-ml-2 mt-16 text-4xl sm:ml-0 sm:text-8xl">
                        {activeTime.ss}
                    </span>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Root

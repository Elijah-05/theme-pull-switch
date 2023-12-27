import Switch from './Switch'
import { SwitchPropType } from '../types/types'

export interface SwitchWithRopeType {
    isSwitchFall: boolean
    switchHovered: boolean
}

const SwitchWithRope = ({
    isSwitchFall,
    switchHovered,
    isSwitchClicked,
    handleSwitchHover,
    handleToggleTheme,
    switchColor,
    getTheme,
}: SwitchWithRopeType & SwitchPropType) => {
    return (
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
            <Switch
                isSwitchClicked={isSwitchClicked}
                handleSwitchHover={handleSwitchHover}
                handleToggleTheme={handleToggleTheme}
                switchColor={switchColor}
                getTheme={getTheme}
            />
        </div>
    )
}

export default SwitchWithRope

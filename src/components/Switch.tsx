import { SwitchPropType } from '../types/types'

const Switch = ({
    isSwitchClicked,
    handleSwitchHover,
    handleToggleTheme,
    getTheme,
    switchColor,
}: SwitchPropType) => {
    return (
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
    )
}

export default Switch

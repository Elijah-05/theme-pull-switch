import { useAtomValue } from 'jotai'
import { theme } from '../store/store'
import { DisplayTimePropType } from '../types/types'

const DisplayTime = ({ isDark, activeTime }: DisplayTimePropType) => {
    const getTheme = useAtomValue(theme)

    return (
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
                        <span className="hidden text-[242px] sm:flex">:</span>
                        <span className="-mt-28 text-[200px] sm:mt-0 sm:text-[242px]">
                            {activeTime.mm}
                        </span>
                    </div>
                    <div className=" -mt-10 flex items-center justify-center gap-2 text-center font-inter text-base font-light tracking-wider text-white sm:-mt-12">
                        <span className="hidden text-sm sm:flex">
                            {activeTime.DD},
                        </span>
                        <span className=" text-sm">{activeTime.MM} </span>
                        <span className="hidden sm:flex">{activeTime.D},</span>
                        <span className=" text-sm">{activeTime.YYYY}</span>
                    </div>
                </div>
                <span className="-ml-2 mt-16 text-4xl sm:ml-0 sm:text-8xl">
                    {activeTime.ss}
                </span>
            </div>
        </div>
    )
}

export default DisplayTime

export interface SwitchPropType {
    isSwitchClicked: boolean
    handleSwitchHover: () => void
    handleToggleTheme: () => void
    getTheme: string
    switchColor: string
}

export interface ActiveTimeType {
    [key: string]: string
}

export interface DisplayTimePropType {
    isDark: boolean
    activeTime: ActiveTimeType
}

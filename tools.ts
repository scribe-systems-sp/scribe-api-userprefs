export interface ToolsAPI {
    getUsersThatCanIManageUserPrefs: (key: string, writeaccess: boolean, active: boolean) => Promise<any>
    getUsersThatCanIManage: (withPrivilege: string, active: boolean) => Promise<any>
}
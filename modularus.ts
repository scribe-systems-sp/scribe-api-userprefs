import { SApi, Modularus } from '@scribe-systems/modularus'
import Axios, { AxiosStatic } from 'axios'

import { PreferencesApi } from './api'
import { Configuration } from './configuration'

declare global {
    interface Window { Modularus: Modularus; }
}

export interface UserPrefsAPI {
    usedAxios: AxiosStatic,
    preferences: PreferencesApi
}

export default class ModularusUserPrefsAPI extends SApi {
    loaded = false
    apiClient: UserPrefsAPI
    loadedInterceptors: any[] = []

    getApiIdentifier(): String {
        return "UserprefsAPI"
    }
    async isLoaded(): Promise<boolean> {
        return this.loaded
    }
    async loadApi(baseURL: string): Promise<void> {
        const configuration = new Configuration({ basePath: baseURL })

        this.apiClient = {
            usedAxios: Axios,
            preferences: new PreferencesApi(configuration, baseURL, Axios)
        } as UserPrefsAPI

        this.loaded = true
    }

    async api(): Promise<any> {
        for (let index = 0; index < this.loadedInterceptors.length; index++) {
            const element = this.loadedInterceptors[index];
            this.apiClient?.usedAxios.interceptors.request.eject(element)
        }
        
        for (let index = 0; index < window.Modularus.requestInterceptors.length; index++) {
            const element = window.Modularus.requestInterceptors[index];
            let nr = this.apiClient?.usedAxios.interceptors.request.use(element)
            this.loadedInterceptors.push(nr)
        }
        
        return this.apiClient
    }
}
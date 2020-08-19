/* tslint:disable */
/* eslint-disable */
/**
 * Preferences API
 * API for config server
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface Entry
 */
export interface Entry {
    /**
     * 
     * @type {string}
     * @memberof Entry
     */
    key: string;
    /**
     * 
     * @type {any}
     * @memberof Entry
     */
    value?: any | null;
}
/**
 * 
 * @export
 * @interface GlobalEntryPydanticWithOverride
 */
export interface GlobalEntryPydanticWithOverride {
    /**
     * 
     * @type {string}
     * @memberof GlobalEntryPydanticWithOverride
     */
    key: string;
    /**
     * 
     * @type {any}
     * @memberof GlobalEntryPydanticWithOverride
     */
    value?: any | null;
    /**
     * 
     * @type {boolean}
     * @memberof GlobalEntryPydanticWithOverride
     */
    overrideFull?: boolean;
}
/**
 * 
 * @export
 * @interface HTTPValidationError
 */
export interface HTTPValidationError {
    /**
     * 
     * @type {Array<ValidationError>}
     * @memberof HTTPValidationError
     */
    detail?: Array<ValidationError>;
}
/**
 * 
 * @export
 * @interface UserEntryPydantic
 */
export interface UserEntryPydantic {
    /**
     * 
     * @type {string}
     * @memberof UserEntryPydantic
     */
    key: string;
    /**
     * 
     * @type {any}
     * @memberof UserEntryPydantic
     */
    value?: any | null;
    /**
     * 
     * @type {number}
     * @memberof UserEntryPydantic
     */
    userId: number;
}
/**
 * 
 * @export
 * @interface UserEntryPydanticWithOverride
 */
export interface UserEntryPydanticWithOverride {
    /**
     * 
     * @type {string}
     * @memberof UserEntryPydanticWithOverride
     */
    key: string;
    /**
     * 
     * @type {any}
     * @memberof UserEntryPydanticWithOverride
     */
    value?: any | null;
    /**
     * 
     * @type {number}
     * @memberof UserEntryPydanticWithOverride
     */
    userId: number;
    /**
     * 
     * @type {boolean}
     * @memberof UserEntryPydanticWithOverride
     */
    overrideFull?: boolean;
}
/**
 * 
 * @export
 * @interface ValidationError
 */
export interface ValidationError {
    /**
     * 
     * @type {Array<string>}
     * @memberof ValidationError
     */
    loc: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ValidationError
     */
    msg: string;
    /**
     * 
     * @type {string}
     * @memberof ValidationError
     */
    type: string;
}

/**
 * PreferencesApi - axios parameter creator
 * @export
 */
export const PreferencesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Deletes global config preferences associated with provided key
         * @summary Del Global Pref
         * @param {string} key 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        delGlobalPrefApiV1PreferencesGlobalDelete: async (key: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'key' is not null or undefined
            if (key === null || key === undefined) {
                throw new RequiredError('key','Required parameter key was null or undefined when calling delGlobalPrefApiV1PreferencesGlobalDelete.');
            }
            const localVarPath = `/userprefs/api/v1/preferences/global`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("OAuth2PasswordBearer", [])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            if (key !== undefined) {
                localVarQueryParameter['key'] = key;
            }


    
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Del User Pref
         * @param {string} key 
         * @param {number} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        delUserPrefApiV1PreferencesUserDelete: async (key: string, userId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'key' is not null or undefined
            if (key === null || key === undefined) {
                throw new RequiredError('key','Required parameter key was null or undefined when calling delUserPrefApiV1PreferencesUserDelete.');
            }
            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new RequiredError('userId','Required parameter userId was null or undefined when calling delUserPrefApiV1PreferencesUserDelete.');
            }
            const localVarPath = `/userprefs/api/v1/preferences/user`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("OAuth2PasswordBearer", [])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            if (key !== undefined) {
                localVarQueryParameter['key'] = key;
            }

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }


    
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Get global config preference associated with provided key.
         * @summary Get Global Pref
         * @param {string} key 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGlobalPrefApiV1PreferencesGlobalGet: async (key: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'key' is not null or undefined
            if (key === null || key === undefined) {
                throw new RequiredError('key','Required parameter key was null or undefined when calling getGlobalPrefApiV1PreferencesGlobalGet.');
            }
            const localVarPath = `/userprefs/api/v1/preferences/global`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("OAuth2PasswordBearer", [])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            if (key !== undefined) {
                localVarQueryParameter['key'] = key;
            }


    
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Get user config preference associated with provided key.
         * @summary Get User Pref
         * @param {string} key 
         * @param {number} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserPrefApiV1PreferencesUserGet: async (key: string, userId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'key' is not null or undefined
            if (key === null || key === undefined) {
                throw new RequiredError('key','Required parameter key was null or undefined when calling getUserPrefApiV1PreferencesUserGet.');
            }
            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new RequiredError('userId','Required parameter userId was null or undefined when calling getUserPrefApiV1PreferencesUserGet.');
            }
            const localVarPath = `/userprefs/api/v1/preferences/user`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("OAuth2PasswordBearer", [])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            if (key !== undefined) {
                localVarQueryParameter['key'] = key;
            }

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }


    
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Stores global preferance in global config database
         * @summary Set Global Pref
         * @param {GlobalEntryPydanticWithOverride} globalEntryPydanticWithOverride 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setGlobalPrefApiV1PreferencesGlobalPut: async (globalEntryPydanticWithOverride: GlobalEntryPydanticWithOverride, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'globalEntryPydanticWithOverride' is not null or undefined
            if (globalEntryPydanticWithOverride === null || globalEntryPydanticWithOverride === undefined) {
                throw new RequiredError('globalEntryPydanticWithOverride','Required parameter globalEntryPydanticWithOverride was null or undefined when calling setGlobalPrefApiV1PreferencesGlobalPut.');
            }
            const localVarPath = `/userprefs/api/v1/preferences/global`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("OAuth2PasswordBearer", [])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof globalEntryPydanticWithOverride !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(globalEntryPydanticWithOverride !== undefined ? globalEntryPydanticWithOverride : {}) : (globalEntryPydanticWithOverride || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Stores user preferance in user config database
         * @summary Set User Pref
         * @param {UserEntryPydanticWithOverride} userEntryPydanticWithOverride 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setUserPrefApiV1PreferencesUserPut: async (userEntryPydanticWithOverride: UserEntryPydanticWithOverride, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'userEntryPydanticWithOverride' is not null or undefined
            if (userEntryPydanticWithOverride === null || userEntryPydanticWithOverride === undefined) {
                throw new RequiredError('userEntryPydanticWithOverride','Required parameter userEntryPydanticWithOverride was null or undefined when calling setUserPrefApiV1PreferencesUserPut.');
            }
            const localVarPath = `/userprefs/api/v1/preferences/user`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("OAuth2PasswordBearer", [])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof userEntryPydanticWithOverride !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(userEntryPydanticWithOverride !== undefined ? userEntryPydanticWithOverride : {}) : (userEntryPydanticWithOverride || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PreferencesApi - functional programming interface
 * @export
 */
export const PreferencesApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Deletes global config preferences associated with provided key
         * @summary Del Global Pref
         * @param {string} key 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async delGlobalPrefApiV1PreferencesGlobalDelete(key: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await PreferencesApiAxiosParamCreator(configuration).delGlobalPrefApiV1PreferencesGlobalDelete(key, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Del User Pref
         * @param {string} key 
         * @param {number} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async delUserPrefApiV1PreferencesUserDelete(key: string, userId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await PreferencesApiAxiosParamCreator(configuration).delUserPrefApiV1PreferencesUserDelete(key, userId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get global config preference associated with provided key.
         * @summary Get Global Pref
         * @param {string} key 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getGlobalPrefApiV1PreferencesGlobalGet(key: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Entry>> {
            const localVarAxiosArgs = await PreferencesApiAxiosParamCreator(configuration).getGlobalPrefApiV1PreferencesGlobalGet(key, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get user config preference associated with provided key.
         * @summary Get User Pref
         * @param {string} key 
         * @param {number} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserPrefApiV1PreferencesUserGet(key: string, userId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserEntryPydantic>> {
            const localVarAxiosArgs = await PreferencesApiAxiosParamCreator(configuration).getUserPrefApiV1PreferencesUserGet(key, userId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Stores global preferance in global config database
         * @summary Set Global Pref
         * @param {GlobalEntryPydanticWithOverride} globalEntryPydanticWithOverride 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async setGlobalPrefApiV1PreferencesGlobalPut(globalEntryPydanticWithOverride: GlobalEntryPydanticWithOverride, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await PreferencesApiAxiosParamCreator(configuration).setGlobalPrefApiV1PreferencesGlobalPut(globalEntryPydanticWithOverride, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Stores user preferance in user config database
         * @summary Set User Pref
         * @param {UserEntryPydanticWithOverride} userEntryPydanticWithOverride 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async setUserPrefApiV1PreferencesUserPut(userEntryPydanticWithOverride: UserEntryPydanticWithOverride, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await PreferencesApiAxiosParamCreator(configuration).setUserPrefApiV1PreferencesUserPut(userEntryPydanticWithOverride, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * PreferencesApi - factory interface
 * @export
 */
export const PreferencesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Deletes global config preferences associated with provided key
         * @summary Del Global Pref
         * @param {string} key 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        delGlobalPrefApiV1PreferencesGlobalDelete(key: string, options?: any): AxiosPromise<any> {
            return PreferencesApiFp(configuration).delGlobalPrefApiV1PreferencesGlobalDelete(key, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Del User Pref
         * @param {string} key 
         * @param {number} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        delUserPrefApiV1PreferencesUserDelete(key: string, userId: number, options?: any): AxiosPromise<any> {
            return PreferencesApiFp(configuration).delUserPrefApiV1PreferencesUserDelete(key, userId, options).then((request) => request(axios, basePath));
        },
        /**
         * Get global config preference associated with provided key.
         * @summary Get Global Pref
         * @param {string} key 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGlobalPrefApiV1PreferencesGlobalGet(key: string, options?: any): AxiosPromise<Entry> {
            return PreferencesApiFp(configuration).getGlobalPrefApiV1PreferencesGlobalGet(key, options).then((request) => request(axios, basePath));
        },
        /**
         * Get user config preference associated with provided key.
         * @summary Get User Pref
         * @param {string} key 
         * @param {number} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserPrefApiV1PreferencesUserGet(key: string, userId: number, options?: any): AxiosPromise<UserEntryPydantic> {
            return PreferencesApiFp(configuration).getUserPrefApiV1PreferencesUserGet(key, userId, options).then((request) => request(axios, basePath));
        },
        /**
         * Stores global preferance in global config database
         * @summary Set Global Pref
         * @param {GlobalEntryPydanticWithOverride} globalEntryPydanticWithOverride 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setGlobalPrefApiV1PreferencesGlobalPut(globalEntryPydanticWithOverride: GlobalEntryPydanticWithOverride, options?: any): AxiosPromise<any> {
            return PreferencesApiFp(configuration).setGlobalPrefApiV1PreferencesGlobalPut(globalEntryPydanticWithOverride, options).then((request) => request(axios, basePath));
        },
        /**
         * Stores user preferance in user config database
         * @summary Set User Pref
         * @param {UserEntryPydanticWithOverride} userEntryPydanticWithOverride 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setUserPrefApiV1PreferencesUserPut(userEntryPydanticWithOverride: UserEntryPydanticWithOverride, options?: any): AxiosPromise<any> {
            return PreferencesApiFp(configuration).setUserPrefApiV1PreferencesUserPut(userEntryPydanticWithOverride, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PreferencesApi - object-oriented interface
 * @export
 * @class PreferencesApi
 * @extends {BaseAPI}
 */
export class PreferencesApi extends BaseAPI {
    /**
     * Deletes global config preferences associated with provided key
     * @summary Del Global Pref
     * @param {string} key 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PreferencesApi
     */
    public delGlobalPrefApiV1PreferencesGlobalDelete(key: string, options?: any) {
        return PreferencesApiFp(this.configuration).delGlobalPrefApiV1PreferencesGlobalDelete(key, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Del User Pref
     * @param {string} key 
     * @param {number} userId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PreferencesApi
     */
    public delUserPrefApiV1PreferencesUserDelete(key: string, userId: number, options?: any) {
        return PreferencesApiFp(this.configuration).delUserPrefApiV1PreferencesUserDelete(key, userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get global config preference associated with provided key.
     * @summary Get Global Pref
     * @param {string} key 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PreferencesApi
     */
    public getGlobalPrefApiV1PreferencesGlobalGet(key: string, options?: any) {
        return PreferencesApiFp(this.configuration).getGlobalPrefApiV1PreferencesGlobalGet(key, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get user config preference associated with provided key.
     * @summary Get User Pref
     * @param {string} key 
     * @param {number} userId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PreferencesApi
     */
    public getUserPrefApiV1PreferencesUserGet(key: string, userId: number, options?: any) {
        return PreferencesApiFp(this.configuration).getUserPrefApiV1PreferencesUserGet(key, userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Stores global preferance in global config database
     * @summary Set Global Pref
     * @param {GlobalEntryPydanticWithOverride} globalEntryPydanticWithOverride 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PreferencesApi
     */
    public setGlobalPrefApiV1PreferencesGlobalPut(globalEntryPydanticWithOverride: GlobalEntryPydanticWithOverride, options?: any) {
        return PreferencesApiFp(this.configuration).setGlobalPrefApiV1PreferencesGlobalPut(globalEntryPydanticWithOverride, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Stores user preferance in user config database
     * @summary Set User Pref
     * @param {UserEntryPydanticWithOverride} userEntryPydanticWithOverride 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PreferencesApi
     */
    public setUserPrefApiV1PreferencesUserPut(userEntryPydanticWithOverride: UserEntryPydanticWithOverride, options?: any) {
        return PreferencesApiFp(this.configuration).setUserPrefApiV1PreferencesUserPut(userEntryPydanticWithOverride, options).then((request) => request(this.axios, this.basePath));
    }
}


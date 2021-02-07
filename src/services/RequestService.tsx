import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

/* eslint-disable-next-line @typescript-eslint/no-empty-interface */
export interface RequestConfig extends AxiosRequestConfig {}

/* eslint-disable-next-line @typescript-eslint/no-empty-interface */
export interface Response<T> extends AxiosResponse<T> {}

const instance = axios.create();

/**
 * Service to encapsulate axios in case we want to remove axios later on.
 */
class RequestService {
    /**
     * Performs a GET request.
     * @param url - Request url
     * @param config  - Request configs
     */
    public static get<T>(
        url: string,
        config: RequestConfig = {}
    ): Promise<Response<T>> {
        return instance.get<T, Response<T>>(url, config);
    }

    /**
     * Performs a POST request.
     * @param url - Request url
     * @param config  - Request configs
     */
    public static post<T>(
        url: string,
        data?: unknown,
        config?: RequestConfig
    ): Promise<Response<T>> {
        return instance.post<T, Response<T>>(url, data, config);
    }

    /**
     * Performs a PUT request.
     * @param url - Request url
     * @param config  - Request configs
     */
    public static put<T>(
        url: string,
        data?: unknown,
        config?: RequestConfig
    ): Promise<Response<T>> {
        return instance.put<T, Response<T>>(url, data, config);
    }

    /**
     * Performs a PATCH request.
     * @param url - Request url
     * @param config  - Request configs
     */
    public static patch<T>(
        url: string,
        data?: unknown,
        config?: RequestConfig
    ): Promise<Response<T>> {
        return instance.patch<T, Response<T>>(url, data, config);
    }

    /**
     * Performs a DELETE request.
     * @param url - Request url
     * @param config  - Request configs
     */
    public static delete<T>(
        url: string,
        config?: RequestConfig
    ): Promise<Response<T>> {
        return instance.delete<T, Response<T>>(url, config);
    }
}

export default RequestService;

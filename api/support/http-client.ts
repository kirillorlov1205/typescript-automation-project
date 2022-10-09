import axios from 'axios';
import http from 'http';
import https from 'https';
import { METHODS, requestDataType } from './types';
import * as axiosLogger from 'axios-Logger';

const instanse = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 10000,
    httpAgent: new http.Agent({ keepAlive: true }),
    httpsAgent: new https.Agent({ keepAlive: true })
});

instanse.interceptors.request.use(axiosLogger.requestLogger, axiosLogger.errorLogger);
instanse.interceptors.response.use(axiosLogger.responseLogger, axiosLogger.errorLogger);

class Client {
    public request(method: METHODS, data: requestDataType) {
        const { url, body, headers } = data;
        switch (method) {
            case METHODS.GET:
                return instanse.get(url, { headers });
            case METHODS.POST:
                return instanse.post(url, body, { headers });
            case METHODS.PATCH:
                return instanse.patch(url, body, { headers });
            case METHODS.PUT:
                return instanse.put(url, body, { headers });
            case METHODS.DELETE:
                return instanse.delete(url);
            default:
                throw new Error('Provide valid method name');
        }
    }
}

export const client = new Client();
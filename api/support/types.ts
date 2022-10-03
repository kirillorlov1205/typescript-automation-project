export interface Post {
    title: string,
    body: string,
    userId: number,
    [key: string]: string | number
}

export interface requestDataType {
    url: string,
    body?: any,
    headers?: any
}

export enum METHODS {
    GET = 'GET',
    POST = 'POST',
    PATCH = 'PATCH',
    PUT = 'PUT',
    DELETE = 'DELETE',
}
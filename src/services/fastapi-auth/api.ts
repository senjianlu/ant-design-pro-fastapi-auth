// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/**
 * @name 登录接口
 * @method POST
 * @param data
 * @param options
 * @returns
 */
export async function login(data: any, options?: { [key: string]: any }) {
  return request<FastAPIAuthAPI.LoginResult>('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: data,
    ...(options || {}),
  });
}

/**
 * @name 获取当前的用户信息
 * @method GET
 * @param params
 * @returns
 */
export async function me(params?: any, options?: { [key: string]: any }) {
  return request('/api/auth/me', {
    method: 'GET',
    params: params,
    ...(options || {}),
  });
}

/**
 * @name 获取当前的用户 token
 * @method GET
 * @param params
 * @returns
 */
export async function token(params?: any, options?: { [key: string]: any }) {
  return request('/api/auth/token', {
    method: 'GET',
    params: params,
    ...(options || {}),
  });
}

/**
 * @name 退出登录接口
 * @method POST
 * @param data
 * @param options
 * @returns
 */
export async function logout(data?: any, options?: { [key: string]: any }) {
  return request('/api/auth/logout', {
    method: 'POST',
    data: data,
    ...(options || {}),
  });
}

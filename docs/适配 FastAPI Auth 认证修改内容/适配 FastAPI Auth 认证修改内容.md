1. 修改项目端口至 `3031`。
2. 修改 `proxy` 代理端口至 `8000`。
3. 在 `/src/services` 中新增 `fastapi-auth` 目录，并添加相关代码。
4. 修改原来的登录、认证流程。 4.1. 添加 `src/models/currentUser.ts` 作为全局 `state`，用于存储当前用户信息。 4.2. 修改 `pages/User/Login` 页面的登录流程，使其支持 `FastAPI Auth` 认证。 4.3. 去除 `pages/User/Login` 页面除用户名密码登录外的其他登录方式。 4.4. 修改 `access.ts` 中获取用户的方式。
5. 为 `umi-request` 新增 `middleware`，来使请求携带 `token` 信息，或是接收 `token` 状态来判断是否需要重新登录。
6. 修改项目标识信息，`Ant Design Pro` -> `Ant Design Pro with FastAPI Auth`。

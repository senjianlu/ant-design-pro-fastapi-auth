// @ts-ignore
/* eslint-disable */
// export = FastAPIAuthAPI;
// export as namespace FastAPIAuthAPI;

declare namespace FastAPIAuthAPI {
  /**
   * 当前登录用户
   */
  type CurrentUser = {
    id?: string;
    username?: string;
    is_disabled?: boolean;
    is_admin?: boolean;
    nickname?: string;
  };

  /**
   * 登录结果
   */
  type LoginResult = {
    success: boolean;
    code?: number;
    message?: string;
    data: {
      token?: string;
      user?: CurrentUser;
    };
    errorCode?: number;
    errorMessage?: string;
  };
}

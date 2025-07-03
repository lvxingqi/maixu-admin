export {};
declare global {
  interface UserInfo {
    nickname: string;
    phone: string;
    avatar: string;
    sex: 0 | 1 | 2;  // 0 未知 1 男  2 女
    wx: string;
    wxid: string;
  }
}

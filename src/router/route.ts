import HomeView from "../views/home/HomeView.vue";
/* { title: "数据汇总", routePath: "dataSummary" },
  { title: "厅规则管理", routePath: "hallRulesManagement" },
  { title: "置顶卡管理", routePath: "topCardManagement" },
  { title: "厅管设置", routePath: "hallManagerSettings" },
  { title: "主持设置", routePath: "hallHostSettings" },
  { title: "招聘设置", routePath: "recruitmentSettings" },
  { title: "视频回放", routePath: "videoPlayback" }, */
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("@/views/profile/index.vue"),
    children: [
      {
        path: "", // 默认重定向
        name: "profileRedirect",
        redirect: "/profile/base",
      },
      {
        path: "base", // 对应 /profile/base
        name: "base",
        component: () => import("@/views/profile/pages/BaseInfo.vue"),
      },
      {
        path: "rechargeBenefits", // 对应 /profile/recharge-benefits
        name: "rechargeBenefits",
        component: () => import("@/views/profile/pages/RechargeBenefits.vue"),
      },
      {
        path: "vipBenefits", // 对应 /profile/vip-benefits
        name: "vipBenefits",
        component: () => import("@/views/profile/pages/VipBenefits.vue"),
      },
      {
        path: "myInvitation", // 对应 /profile/vip-benefits
        name: "myInvitation",
        component: () => import("@/views/profile/pages/MyInvitation.vue"),
      },
    ],
  },
  {
    path: "/hallmanage",
    name: "hallmanage",
    component: () => import("@/views/hall/index.vue"),
    /* children: [
      {
        path: "", // 默认重定向
        name: "voiceHallManagementRedirect",
        redirect: "/voiceHallManagement/dataSummary",
      },
      {
        path: "dataSummary",
        name: "dataSummary",
        component: () =>
          import("@/views/voiceHallManagement/pages/DataSummary.vue"),
      },
      {
        path: "hallRulesManagement",
        name: "hallRulesManagement",
        component: () =>
          import("@/views/voiceHallManagement/pages/HallRulesManagement.vue"),
      },
      {
        path: "topCardManagement",
        name: "topCardManagement",
        component: () => import("@/views/voiceHallManagement/pages/TopCardManagement.vue"),
      },
      {
        path: "hallManagerSettings",
        name: "hallManagerSettings",
        component: () => import("@/views/voiceHallManagement/pages/HallManagerSettings.vue"),
      },
      {
        path: "hallHostSettings",
        name: "hallHostSettings",
        component: () => import("@/views/voiceHallManagement/pages/HallHostSettings.vue"),
      },
      {
        path: "recruitmentSettings",
        name: "recruitmentSettings",
        component: () => import("@/views/voiceHallManagement/pages/RecruitmentSettings.vue"),
      },
      {
        path: "videoPlayback",
        name: "videoPlayback",
        component: () => import("@/views/voiceHallManagement/pages/VideoPlayback.vue"),
      },
    ], */
  },
];

export default routes;
// 移除对 WeekSummary.vue 和 MonthSummary.vue 的引用，无需其他修改。

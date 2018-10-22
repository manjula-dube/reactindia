/*eslint-disable */

export default class Routes {
  apply(routeHandler) {
    const routes = [
      {
        path: "/",
        exact: true,
        component: import("./pages/home"),
        layout: import("./components/layout/default"),
      },
      {
        path: "/contact",
        exact: true,
        component: import("./pages/contact"),
        layout: import("./components/layout/default"),
      },
      {
        path: "/about",
        exact: true,
        component: import("./pages/about"),
        layout: import("./components/layout/default"),
      },
      {
        path: "/talks",
        exact: true,
        component: import("./pages/talks"),
        layout: import("./components/layout/default"),
      },
    ];

    routeHandler.hooks.initRoutes.tapPromise("AppRoutes", async () => {
      routeHandler.addRoutes(routes);
    });
  }
}

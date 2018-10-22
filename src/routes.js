import React from "react";

import HomePage from "./pages/home";

export default class Routes {
  apply(routeHandler) {
    const routes = [
      {
        path: "/",
        exact: true,
        component: import("./pages/home"),
      },
      {
        path: "/talks",
        exact: true,
        component: import("./pages/home"),
      },
    ];

    routeHandler.hooks.initRoutes.tapPromise("AppRoutes", async () => {
      routeHandler.addRoutes(routes);
    });
  }
}

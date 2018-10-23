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

    routeHandler.setPwaSchema({
      name: 'React India',
      short_name: 'ReactIndia',

      // Possible values ltr(left to right)/rtl(right to left)
      dir: 'ltr',

      // language: Default en-US
      lang: 'en-US',
    });

    routeHandler.setDefaultSeoSchema({
      title: 'React India | First React Conference',
      site_name: 'React India',
      description: 'Description.',
      twitter: {
        site: '@reactindia',
        creator: '@reactindia',
      },
      facebook: {
        admins: [
          '1501220844',
          '765904161',
        ],
      },
      meta: [
        {
          name: 'theme-color',
          content: '#f6f6f6',
        },
      ],
    });
    routeHandler.hooks.initRoutes.tapPromise("AppRoutes", async () => {
      routeHandler.addRoutes(routes);
    });
  }
}

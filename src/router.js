import Vue from "vue";
import Router from "vue-router";
import store from "./store";
import NProgress from 'nprogress';

Vue.use(Router);

// Array of routes
const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/dashboard"
    },
    {
      path: "/login",
      name: "login",
      meta: {
        isPublic: true,
        onlyLoggedOut: true
      },
      component: () =>
        import(/* webpackChunkName: "login" */ "./views/Login.vue")
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () =>
        import(/* webpackChunkName: "Dashboard" */ "./views/Dashboard.vue")
    },
    {
      path: "/team",
      name: "team",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Team.vue")
    },
    {
      path: "/technologies",
      name: "technologies",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Technologies.vue")
    },
    {
      path: "/technologies/:id",
      name: "technologies-details",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/TechnologiesDetails.vue")
    },
    {
      path: "/news",
      name: "news",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/News.vue")
    },
    {
      path: "/blog",
      name: "blog",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Blog.vue")
    },
    {
      path: "/createBlog",
      name: "create-blog",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/CreateBlog.vue")
    },
    {
      path: "/blog/:id",
      name: "blog-details",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/BlogDetails.vue")
    },
    {
      path: "/editBlog/:id",
      name: "blog-edit",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/EditBlog.vue")
    },
    {
      path: "/interests",
      name: "interests",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Interests.vue")
    },
    {
      path: "/interests/:id",
      name: "interests-details",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/InterestsDetails.vue")
    },
    {
      path: "/profile/:id",
      name: "profile",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Profile.vue")
    },
    {
      path: "/hub",
      name: "hub",
      component: () =>
        import(/* webpackChunkName: "Hub" */ "./views/Hub.vue")
    },
    {
      path: "/hubShift",
      name: "hubShift",
      component: () =>
        import( /* webpackChunkName: "Hub" */ "./views/HubShift.vue"),
      redirect: {
        name: 'shiftVision',
      },
      children: [{
          path: "/hubShift/shiftVision",
          name: "shiftVision",
          component: () =>
            import( /* webpackChunkName: "Hub" */ "./components/hub/ShiftVision.vue")
        },
        {
          path: "/hubShift/shiftBusiness",
          name: "shiftBusiness",
          component: () =>
            import( /* webpackChunkName: "Hub" */ "./components/hub/ShiftBusiness.vue")
        },
        {
          path: "/hubShift/shiftSale",
          name: "shiftSale",
          component: () =>
            import( /* webpackChunkName: "Hub" */ "./components/hub/ShiftVision.vue")
        },
        {
          path: "/hubShift/shiftCompetitors",
          name: "shiftCompetitors",
          component: () =>
            import( /* webpackChunkName: "Hub" */ "./components/hub/ShiftVision.vue")
        },
        {
          path: "/hubShift/shiftRoadMap",
          name: "shiftRoadMap",
          component: () =>
            import( /* webpackChunkName: "Hub" */ "./components/hub/ShiftVision.vue")
        },
      ]
    },
    {
      path: "/hubFootball",
      name: "hubFootball",
      component: () =>
        import( /* webpackChunkName: "Hub" */ "./views/HubFootball.vue"),
      redirect: {
        name: 'footballVision',
      },
      children: [{
          path: "/hubFootball/footballVision",
          name: "footballVision",
          component: () =>
            import( /* webpackChunkName: "Hub" */ "./components/hub/FootballVision.vue")
        },
        {
          path: "/hubFootball/footballBusiness",
          name: "footballBusiness",
          component: () =>
            import( /* webpackChunkName: "Hub" */ "./components/hub/FootballVision.vue")
        },
        {
          path: "/hubFootball/footballSale",
          name: "footballSale",
          component: () =>
            import( /* webpackChunkName: "Hub" */ "./components/hub/FootballSale.vue")
        },
        {
          path: "/hubFootball/footballCompetitors",
          name: "footballCompetitors",
          component: () =>
            import( /* webpackChunkName: "Hub" */ "./components/hub/FootballCompetitors.vue")
        },
        {
          path: "/hubFootball/footballClients",
          name: "footballClients",
          component: () =>
            import( /* webpackChunkName: "Hub" */ "./components/hub/FootballClients.vue")
        },
        {
          path: "/hubFootball/footballRoadMap",
          name: "footballRoadMap",
          component: () =>
            import( /* webpackChunkName: "Hub" */ "./components/hub/FootballVision.vue")
        },
      ]
    },
    {
      path: "/hubBioBox",
      name: "hubBioBox",
      component: () =>
        import( /* webpackChunkName: "Hub" */ "./views/HubBioBox.vue"),
      redirect: {
        name: 'bioVision',
      },
      children: [{
          path: "/hubBioBox/BioVision",
          name: "bioVision",
          component: () =>
            import( /* webpackChunkName: "Hub" */ "./components/hub/BioVision.vue")
        },
        {
          path: "/hubBioBox/bioBusiness",
          name: "bioBusiness",
          component: () =>
            import( /* webpackChunkName: "Hub" */ "./components/hub/BioVision.vue")
        },
        {
          path: "/hubBioBox/bioSale",
          name: "bioSale",
          component: () =>
            import( /* webpackChunkName: "Hub" */ "./components/hub/BioVision.vue")
        },
        {
          path: "/hubBioBox/bioCompetitors",
          name: "bioCompetitors",
          component: () =>
            import( /* webpackChunkName: "Hub" */ "./components/hub/BioVision.vue")
        },
        {
          path: "/hubBioBox/bioClients",
          name: "bioClients",
          component: () =>
            import( /* webpackChunkName: "Hub" */ "./components/hub/BioVision.vue")
        },
        {
          path: "/hubBioBox/bioRoadMap",
          name: "bioRoadMap",
          component: () =>
            import( /* webpackChunkName: "Hub" */ "./components/hub/BioVision.vue")
        },
      ]
    },
    {
      path: "/configurations",
      name: "configurations",
      component: () =>
        import(/* webpackChunkName: "Hub" */ "./views/Configurations.vue")
    },
    {
      path: "/newsFeedConfig",
      name: "newsFeedConfig",
      component: () =>
        import(/* webpackChunkName: "Hub" */ "./views/NewsFeedConfig.vue")
    },
    {
      path: "/beeFMConfig",
      name: "beeFMConfig",
      component: () =>
        import(/* webpackChunkName: "Hub" */ "./views/BeeFMConfig.vue")
    },
    {
      path: "/carsConfig",
      name: "carsConfig",
      component: () =>
        import(/* webpackChunkName: "Hub" */ "./views/CarsConfig.vue")
    },
    {
      path: "/product",
      name: "product",
      component: () =>
        import(/* webpackChunkName: "Hub" */ "./views/Products.vue")
    },
    {
      path: "/events",
      name: "events",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Events.vue")
    },
    {
      path: "/event/:id",
      name: "event-details",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/EventDetails.vue")
    },
    {
      path: "/createEvent/:date",
      name: "createEvent",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/CreateEvent.vue")
    },
    {
      path: "/editEvent/:id",
      name: "event-edit",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/EditEvent.vue")
    },
    {
      path: "*",
      redirect: "/dashboard"
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
    /* if (to.hash) {
      return {
        selector: to.hash
        // , offset: { x: 0, y: 10 }
      }
    } */
  }
});

// Check if the user is Logged before accessing any route (view)
router.beforeEach((to, from, next) => {
  const tokens = store.state.auth.tokens;
  const isPublic = to.meta.isPublic;
  const onlyLoggedOut = to.meta.onlyLoggedOut;

  if (!isPublic && !tokens) {
    next("/login");
    return;
  }

  if (onlyLoggedOut && tokens) {
    next("/dashboard");
    return;
  }

  next();
});

// Start the route progress bar.
router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  store.state.technologies.searchTerm = "";
  store.state.team.searchTerm = "";
  store.state.interests.searchTerm = "";
  NProgress.start()
  next()
})

// Complete the animation of the route progress bar.
router.afterEach((to, from) => {
  NProgress.done()
})

/* NProgress.configure({
  showSpinner: true
}); */

export { router }

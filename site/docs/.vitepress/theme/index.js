import DefaultTheme from "vitepress/theme";
// import sunny from 'sunny-ui'
import sunny from 'custom-sunny-ui'
export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    console.log("app", app)
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    app.use(sunny);
  },
};
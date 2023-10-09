const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
        @import "bootstrap/dist/css/bootstrap.min.css";
        @import '@/styles/main.scss';`,
      },
    },
  },
});

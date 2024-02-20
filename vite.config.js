import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      three: "assets/js/three.module.js", // Three.js 모듈의 경로에 따라 실제 경로를 수정하세요.
    },
  },
});

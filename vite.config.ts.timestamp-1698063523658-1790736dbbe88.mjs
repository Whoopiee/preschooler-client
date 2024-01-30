// vite.config.ts
import { defineConfig } from "file:///C:/Projects/sadok-client-vite/node_modules/vite/dist/node/index.js";
import path from "path";
import react from "file:///C:/Projects/sadok-client-vite/node_modules/@vitejs/plugin-react/dist/index.mjs";
import checker from "file:///C:/Projects/sadok-client-vite/node_modules/vite-plugin-checker/dist/esm/main.js";
var __vite_injected_original_dirname = "C:\\Projects\\sadok-client-vite";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true
    })
  ],
  server: {
    port: 3001
  },
  resolve: {
    alias: {
      "@assets": path.resolve(__vite_injected_original_dirname, "src/assets"),
      "@client": path.resolve(__vite_injected_original_dirname, "src/client"),
      "@components": path.resolve(__vite_injected_original_dirname, "src/components"),
      "@games": path.resolve(__vite_injected_original_dirname, "src/games"),
      "@hooks": path.resolve(__vite_injected_original_dirname, "src/hooks"),
      "@layouts": path.resolve(__vite_injected_original_dirname, "src/layouts"),
      "@pages": path.resolve(__vite_injected_original_dirname, "src/pages"),
      "@services": path.resolve(__vite_injected_original_dirname, "src/services"),
      "@customTypes": path.resolve(__vite_injected_original_dirname, "src/types"),
      "@helpers": path.resolve(__vite_injected_original_dirname, "src/helpers"),
      "@templates": path.resolve(__vite_injected_original_dirname, "src/templates"),
      "@core": path.resolve(__vite_injected_original_dirname, "src/redux/features/core"),
      "@redux": path.resolve(__vite_injected_original_dirname, "src/redux")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxQcm9qZWN0c1xcXFxzYWRvay1jbGllbnQtdml0ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcUHJvamVjdHNcXFxcc2Fkb2stY2xpZW50LXZpdGVcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1Byb2plY3RzL3NhZG9rLWNsaWVudC12aXRlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgY2hlY2tlciBmcm9tICd2aXRlLXBsdWdpbi1jaGVja2VyJztcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIGNoZWNrZXIoe1xuICAgICAgdHlwZXNjcmlwdDogdHJ1ZSxcbiAgICB9KSxcbiAgXSxcbiAgc2VydmVyOiB7XG4gICAgcG9ydDogMzAwMSxcbiAgfSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQGFzc2V0cyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvYXNzZXRzJyksXG4gICAgICAnQGNsaWVudCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvY2xpZW50JyksXG4gICAgICAnQGNvbXBvbmVudHMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2NvbXBvbmVudHMnKSxcbiAgICAgICdAZ2FtZXMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2dhbWVzJyksXG4gICAgICAnQGhvb2tzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9ob29rcycpLFxuICAgICAgJ0BsYXlvdXRzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9sYXlvdXRzJyksXG4gICAgICAnQHBhZ2VzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9wYWdlcycpLFxuICAgICAgJ0BzZXJ2aWNlcyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvc2VydmljZXMnKSxcbiAgICAgICdAY3VzdG9tVHlwZXMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjL3R5cGVzJyksXG4gICAgICAnQGhlbHBlcnMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2hlbHBlcnMnKSxcbiAgICAgICdAdGVtcGxhdGVzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy90ZW1wbGF0ZXMnKSxcbiAgICAgICdAY29yZSc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvcmVkdXgvZmVhdHVyZXMvY29yZScpLFxuICAgICAgJ0ByZWR1eCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvcmVkdXgnKSxcbiAgICB9XG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQStRLFNBQVMsb0JBQW9CO0FBQzVTLE9BQU8sVUFBVTtBQUNqQixPQUFPLFdBQVc7QUFDbEIsT0FBTyxhQUFhO0FBSHBCLElBQU0sbUNBQW1DO0FBTXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxNQUNOLFlBQVk7QUFBQSxJQUNkLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsV0FBVyxLQUFLLFFBQVEsa0NBQVcsWUFBWTtBQUFBLE1BQy9DLFdBQVcsS0FBSyxRQUFRLGtDQUFXLFlBQVk7QUFBQSxNQUMvQyxlQUFlLEtBQUssUUFBUSxrQ0FBVyxnQkFBZ0I7QUFBQSxNQUN2RCxVQUFVLEtBQUssUUFBUSxrQ0FBVyxXQUFXO0FBQUEsTUFDN0MsVUFBVSxLQUFLLFFBQVEsa0NBQVcsV0FBVztBQUFBLE1BQzdDLFlBQVksS0FBSyxRQUFRLGtDQUFXLGFBQWE7QUFBQSxNQUNqRCxVQUFVLEtBQUssUUFBUSxrQ0FBVyxXQUFXO0FBQUEsTUFDN0MsYUFBYSxLQUFLLFFBQVEsa0NBQVcsY0FBYztBQUFBLE1BQ25ELGdCQUFnQixLQUFLLFFBQVEsa0NBQVcsV0FBVztBQUFBLE1BQ25ELFlBQVksS0FBSyxRQUFRLGtDQUFXLGFBQWE7QUFBQSxNQUNqRCxjQUFjLEtBQUssUUFBUSxrQ0FBVyxlQUFlO0FBQUEsTUFDckQsU0FBUyxLQUFLLFFBQVEsa0NBQVcseUJBQXlCO0FBQUEsTUFDMUQsVUFBVSxLQUFLLFFBQVEsa0NBQVcsV0FBVztBQUFBLElBQy9DO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==

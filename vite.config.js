import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
    plugins: [vue()],
    root: ".", // Rrënja e projektit është dosja kryesore
    build: {
        outDir: "dist",
        rollupOptions: {
            input: "index.html", // Përcakto skedarin hyrës
        },
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "resources/js"),
        },
    },
});

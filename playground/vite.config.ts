/// <reference types="vitest" />

import legacy from "@vitejs/plugin-legacy";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), legacy()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@ionic-form-tools/core": path.resolve(
				__dirname,
				"../packages/core/src/index.ts",
			),
		},
	},
	test: {
		globals: true,
		environment: "jsdom",
	},
});

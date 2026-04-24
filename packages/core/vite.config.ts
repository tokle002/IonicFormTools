import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
	build: {
		lib: {
			entry: resolve(
				fileURLToPath(new URL("./src", import.meta.url)),
				"index.ts",
			),
			name: "IonicFormToolsCore",
			fileName: (format) => `index.${format}.js`,
		},
		rollupOptions: {
			external: ["vue", "@vuelidate/core", "@vuelidate/validators"],
			output: {
				globals: { vue: "Vue" },
			},
		},
	},
});

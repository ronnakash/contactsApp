import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import replace from '@rollup/plugin-replace';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	rollupInputOptions: {
		plugins: [
		  replace({
			'process.env': JSON.stringify({
			  ENVIRONMENT: process.env.ENVIRONMENT,
			  BASE_URL: process.env.BASE_URL
			})
		  })
		]
	  },	
});

import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	reactStrictMode: false,
	outputFileTracingRoot: process.cwd(),
	// Force fresh builds and disable aggressive caching
	experimental: {
		staleTimes: {
			dynamic: 0,
			static: 0,
		},
	},
	// Ensure proper i18n routing
	trailingSlash: false,
	// Generate build ID based on git commit
	generateBuildId: async () => {
		// This ensures a new build ID for each deployment
		return `build-${Date.now()}`;
	},
};

export default withNextIntl(nextConfig);

import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	reactStrictMode: false,
	outputFileTracingRoot: process.cwd(),
};

export default withNextIntl(nextConfig);

module.exports = {
     reactStrictMode: true,
     serverRuntimeConfig: {
          GITHUB_ID: process.env.GITHUB_ID || 'e4b923f9b6edd1035c61',
          GITHUB_SECRET: process.env.GITHUB_SECRET || 'ccaaf34e724f5ba47f1620b85ea327790f1b6e70',
          DATABASE_URL: process.env.DATABASE_URL || 'mongodb + srv: //user_01:user_01@cluster0.4fc5x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
          SITE: process.env.SITE || 'http://localhost:3000',
          NEXTAUTH_URL: process.env.NEXTAUTH_URL || 'http://localhost:3000'

     },
     future: {
          removeDeprecatedGapUtilities: true,
          purgeLayersByDefault: true,

     },
     purge: ["./src/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
     theme: {
          extend: {
               colors: {},
          },
     },
     webpack: (config) => {
          // extend your webpack configuration here
          return config;
     },

     variants: {},
     plugins: [],
};

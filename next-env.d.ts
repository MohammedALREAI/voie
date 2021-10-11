/// <reference types="next" />
/// <reference types="next/types/global" />



declare namespace NodeJS {
     export interface ProcessEnv {
          GITHUB_ID: string,
          GITHUB_SECRET: string,
          DATABASE_URL: string,
          SITE: string,
          NEXTAUTH_URL: string
     }
}



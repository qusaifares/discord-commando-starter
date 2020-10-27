declare namespace NodeJS {
  export interface ProcessEnv {
    CLIENT_ID: string;
    TOKEN: string;
    OWNER_ID: string;
    PREFIX: string;
    DB_URL: string;
    DB_NAME: string;
  }
}
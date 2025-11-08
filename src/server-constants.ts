export const NOTION_API_SECRET = import.meta.env.NOTION_API_SECRET || process.env.NOTION_API_SECRET || '';
export const DATABASE_ID = import.meta.env.DATABASE_ID || process.env.DATABASE_ID || '';

export const CUSTOM_DOMAIN = import.meta.env.CUSTOM_DOMAIN || process.env.CUSTOM_DOMAIN || ''; // <- Set your costom domain if you have. e.g. alpacat.com
export const BASE_PATH = import.meta.env.BASE_PATH || process.env.BASE_PATH || ''; // <- Set sub directory path if you want. e.g. /docs/

// seconds
// default is 1 hour
export const ALL_POST_CACHE_TIME = import.meta.env.ALL_POST_CACHE_TIME
  || process.env.ALL_POST_CACHE_TIME
  || 60 * 60;

export const { PUBLIC_GA_TRACKING_ID } = import.meta.env;
export const NUMBER_OF_POSTS_PER_PAGE = 12;
export const NUMBER_OF_RELATED_POSTS_PER_PAGE = 6;
export const REQUEST_TIMEOUT_MS = parseInt(
  import.meta.env.REQUEST_TIMEOUT_MS || '10000',
  10,
);
export const { ENABLE_LIGHTBOX, ENABLE_PRELINE } = import.meta.env;

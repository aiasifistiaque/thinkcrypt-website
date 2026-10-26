// Attachments go through the site's own /api/contact, and a Vercel function takes about 4.5 MB at most —
// so up to MAX_FILES files, MAX_TOTAL_MB together. Shared by the form (browser) and the route (server).
export const MAX_FILES = 5;
export const MAX_TOTAL_MB = 4;

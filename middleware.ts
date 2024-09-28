import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

// List of supported locales
const supportedLocales = ['en', 'sv'];

// Function to detect the user's language based on the 'accept-language' header
function getPreferredLocale(req: NextRequest) {
    // Get the 'accept-language' header from the request
    const acceptLanguage = req.headers.get('accept-language') || '';

    // Split the languages, fallback to 'en' if none is found
    const languages = acceptLanguage.split(',');

    // Loop through the accepted languages
    for (const language of languages) {
        const locale = language.split('-')[0].toLowerCase(); // Extract the main language code
        if (supportedLocales.includes(locale)) {
            return locale;
        }
    }

    // Default to English if no match
    return 'en';
}

export function middleware(req: NextRequest) {
    const pathname = req.nextUrl.pathname;

    // If the user is accessing the base domain (no locale in URL)
    if (pathname === '/') {
        // Get the user's preferred locale
        const locale = getPreferredLocale(req);

        // Redirect to the preferred locale
        return NextResponse.redirect(new URL(`/${locale}`, req.url));
    }

    // Allow other paths through
    return NextResponse.next();
}

export const config = {
    matcher: '/', // Apply the middleware only to the base path
};

import type { Metadata } from "next";
import { absoluteUrl } from '@/lib/utils'
// import { inter, josefin_slab } from "./fonts";
import "../styles/globals.css";


export const metadata: Metadata = {
  metadataBase: new URL('https://outstaticdemo.netlify.app'),
  title: {
    default: 'Viva Tremblant',
    template: ' %s | VT'
  },
  description: "Test de Viva Tremblant",
  openGraph: {
    title: 'Outstatic - A Static Site CMS for Next.js',
    description: 'A blog starter built with Outstatic.',
    url: absoluteUrl('/'),
    siteName: 'Viva Tremblant',
    images: [
      {
        url: absoluteUrl('/images/og-image.png'),
        width: 1800,
        height: 1600
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  icons: {
    icon: [
      {
        url: '/favicon-couleur.ico',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon.ico',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      {/* <body className={josefin_slab.className + " flex flex-col min-h-screen"}> */}
        {children}
      {/* </body> */}
    </html>
  );
}

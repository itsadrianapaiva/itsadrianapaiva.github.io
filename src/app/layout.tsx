import type { Metadata } from 'next';
import { Inter, Calistoga } from 'next/font/google';
import './globals.css';
import { twMerge } from 'tailwind-merge';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const calistoga = Calistoga({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Adriana Paiva Portfolio',
  description: 'Software developer with a marketer heart',
  icons: {
    icon: [
      {
        url: '/favicon.png',
        type: 'image/png+xml',
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
    <html
      lang='en'
      className='scrollbar-thumb-medium-brown scrollbar-track-dark-brown overflow-x-clip scroll-smooth'
    >
      <Head>
        <link
          rel='icon'
          type='image/png+xml'
          href='/favicon.png'
        />

        <meta
          property='og:Adriana Paiva'
          content='Adriana Paiva Portfolio'
        />
        <meta
          property='og:description'
          content='Software developer with a marketer heart'
        />
        <meta
          property='og:image'
          content='https://itsadrianapaiva.com/og-image.png'
        />
        <meta
          property='og:image:alt'
          content="Screenshot of Adriana Paiva's portfolio website showcasing web development projects"
        />
        <meta
          property='og:image:type'
          content='image/png'
        />
        <meta
          property='og:image:width'
          content='1200'
        />
        <meta
          property='og:image:height'
          content='630'
        />
        <meta
          property='og:type'
          content='website'
        />
        <meta
          property='og:url'
          content='https://itsadrianapaiva.com'
        />
      </Head>
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          'overflow-x-clip bg-dark-brown font-sans text-white antialiased'
        )}
      >
        {children}
      </body>
    </html>
  );
}

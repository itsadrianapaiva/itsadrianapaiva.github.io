import type { Metadata } from 'next';
import { Inter, Calistoga } from 'next/font/google';
import './globals.css';
import { twMerge } from 'tailwind-merge';

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
    icon: 'favicon.svg',
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
      className='scroll-smooth scrollbar-thumb-medium-brown scrollbar-track-dark-brown overflow-x-clip'
    >
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

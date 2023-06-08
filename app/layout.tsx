import { PropsWithChildren } from 'react';
import { Commissioner, Alexandria } from 'next/font/google';
import './globals.css';

const alexandria = Alexandria({
  subsets: ['latin'],
  variable: '--font-alexandria',
});
const commissioner = Commissioner({
  subsets: ['latin'],
  variable: '--font-commissioner',
});

export const metadata = {
  title: 'Discord Clone',
  description: 'Discord Clone built with Next.js and Tailwind CSS',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${alexandria.variable} ${commissioner.variable}`}>
        {children}
      </body>
    </html>
  );
}

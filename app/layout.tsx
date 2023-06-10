import { PropsWithChildren } from 'react';
import { Commissioner, Alexandria } from 'next/font/google';
import ServerLink from '@/components/ServerLink';
import DiscordIcon from '@/components/DiscordIcon';

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
        <main>
          <div className="flex h-screen text-gray-100">
            <div className="space-y-2 overflow-y-scroll bg-gray-900 p-3">
              <ServerLink href="/" discord>
                <DiscordIcon className="h-5 w-7" />
              </ServerLink>
              <ServerLink href="/servers/1">S1</ServerLink>
            </div>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}

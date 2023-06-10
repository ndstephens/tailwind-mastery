import { PropsWithChildren } from 'react';
import { Commissioner, Alexandria } from 'next/font/google';
import Image from 'next/image';
import ServerLink from '@/components/ServerLink';
import { DiscordIcon } from '@/components/icons';

import { servers } from '@/lib/config/servers';
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
              <ServerLink href="/" dashboard>
                <DiscordIcon className="h-5 w-7" />
              </ServerLink>
              <hr className="mx-2 rounded border-t-2 border-t-white/[.06]" />
              {servers.map((server) => (
                <ServerLink key={server.id} href={`/servers/${server.id}`}>
                  <Image
                    fill
                    className="object-cover"
                    src={`/servers/${server.img}`}
                    alt="icon of server"
                  />
                </ServerLink>
              ))}
            </div>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}

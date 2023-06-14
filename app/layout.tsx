import ServerLink from '@/components/ServerLink';
import { Discord } from '@/components/icons';
import { Data } from '@/types/data';
import { Alexandria, Schibsted_Grotesk } from 'next/font/google';
import Image from 'next/image';
import { PropsWithChildren } from 'react';

import { data } from 'data';
import './globals.css';

// Title font
const title = Alexandria({
  subsets: ['latin'],
  variable: '--font-title',
});
// Sans font
const sans = Schibsted_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
});

// Meta tags
export const metadata = {
  title: 'Discord Clone',
  description: 'Discord Clone built with Next.js and Tailwind CSS',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${title.variable} ${sans.variable}`}>
        <main>
          <div className="flex h-screen text-gray-100">
            {/* SERVER NAV */}
            <nav className="hidden space-y-2 overflow-y-scroll bg-gray-900 p-3 md:block">
              <ServerLink href="/">
                <Discord className="h-5 w-7" />
              </ServerLink>

              <hr className="mx-2 rounded border-t-2 border-t-white/[.06]" />

              {(data as Data).map((server) => (
                <ServerLink
                  key={server.id}
                  href={`/servers/${server?.id}/channels/${server?.categories[0].channels[0].id}`}
                  serverId={server.id}
                >
                  <Image
                    fill
                    sizes="48px"
                    className="object-cover"
                    src={`/servers/${server.img}`}
                    alt="icon of server"
                  />
                </ServerLink>
              ))}
            </nav>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}

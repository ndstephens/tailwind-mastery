'use client';

import { usePathname } from 'next/navigation';
import Link, { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';
import { cva } from 'class-variance-authority';

const linkStyles = cva(
  'flex aspect-square w-12 items-center justify-center transition-all duration-200',
  {
    variants: {
      active: {
        true: 'rounded-2xl',
        false: 'rounded-[24px] hover:rounded-2xl',
      },
      server: {
        discord: '',
        other: '',
      },
    },
    compoundVariants: [
      {
        server: 'discord',
        active: true,
        className: 'bg-brand text-white',
      },
      {
        server: 'discord',
        active: false,
        className: 'bg-gray-700 text-gray-100 hover:bg-brand hover:text-white',
      },
      {
        server: 'other',
        active: [true, false],
        className: 'bg-white text-gray-800',
      },
    ],
  }
);

type ServerLinkProps = {
  discord?: boolean;
} & LinkProps &
  PropsWithChildren;

export default function ServerLink({
  discord = false,
  href,
  children,
}: ServerLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const server = discord ? 'discord' : 'other';

  return (
    <Link href={href} className={linkStyles({ active: isActive, server })}>
      {children}
    </Link>
  );
}

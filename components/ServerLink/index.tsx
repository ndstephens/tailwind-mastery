'use client';

import { usePathname } from 'next/navigation';
import Link, { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';
import { cva } from 'class-variance-authority';

const indicatorStyles = cva('rounded-e bg-white transition-all duration-200', {
  variants: {
    active: {
      true: 'h-10 w-1',
      false:
        'h-5 w-1 opacity-0 scale-0 origin-left group-hover:opacity-100 group-hover:scale-100',
    },
  },
});

const iconStyles = cva(
  'flex aspect-square w-12 items-center justify-center transition-all duration-200',
  {
    variants: {
      active: {
        true: 'rounded-2xl',
        false: 'rounded-[24px] group-hover:rounded-2xl',
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
        className:
          'bg-gray-700 text-gray-100 group-hover:bg-brand group-hover:text-white',
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
    <Link href={href} className="group relative block">
      <div className="absolute -left-3 flex h-full items-center">
        <div className={indicatorStyles({ active: isActive })} />
      </div>
      <div className="group-active:translate-y-px">
        <div className={iconStyles({ active: isActive, server })}>
          {children}
        </div>
      </div>
    </Link>
  );
}

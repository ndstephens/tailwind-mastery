'use client';

import { cva } from 'class-variance-authority';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { PropsWithChildren } from 'react';

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
  'flex aspect-square w-12 items-center justify-center transition-all duration-200 overflow-hidden relative',
  {
    variants: {
      active: {
        true: 'rounded-2xl',
        false: 'rounded-[24px] group-hover:rounded-2xl',
      },
      dashboard: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      {
        dashboard: true,
        active: true,
        className: 'bg-brand text-white',
      },
      {
        dashboard: true,
        active: false,
        className:
          'bg-gray-700 text-gray-100 group-hover:bg-brand group-hover:text-white',
      },
    ],
  }
);

type ServerLinkProps = {
  serverId?: number;
  href: string;
} & PropsWithChildren;

export default function ServerLink({
  serverId,
  href,
  children,
}: ServerLinkProps) {
  const params = useParams();

  const isActive = params.sid === serverId?.toString();

  return (
    <Link href={href} className="group relative block">
      <div className="absolute -left-3 flex h-full items-center">
        <div className={indicatorStyles({ active: isActive })} />
      </div>
      <div className="group-active:translate-y-px">
        <div className={iconStyles({ active: isActive, dashboard: !serverId })}>
          {children}
        </div>
      </div>
    </Link>
  );
}

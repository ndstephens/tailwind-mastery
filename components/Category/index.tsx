'use client';

import * as Icons from '@/components/icons';
import { Category, Channel } from '@/types/data';
import { cva } from 'class-variance-authority';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// Trying this hook, but doesn't register what's in local-storage on page refresh.
import { useLocalStorage } from 'usehooks-ts';
// import useLocalStorage from '@/lib/hooks/useLocalStorage';

type CategoryProps = {
  category: Category;
};

export default function Category({ category }: CategoryProps) {
  const params = useParams();

  // When closing a category we only want to show unread (and active) channels.
  // Save the list of closed categories in local-storage so it persists when refreshing the page, navigating away, changing servers, or changing channels.
  const [closedCategoryIds, setClosedCategoryIds] = useLocalStorage<number[]>(
    `server-${params.sid}-closed-categories`,
    []
  );
  function toggleCategoryId(categoryId: number) {
    setClosedCategoryIds((ps) =>
      ps.includes(categoryId)
        ? ps.filter((id) => id !== categoryId)
        : [...ps, categoryId]
    );
  }

  return (
    <div>
      {/* Category */}
      {!!category.label && (
        <button
          onClick={() => toggleCategoryId(category.id)}
          className="flex w-full items-center px-0.5 font-title text-xs uppercase tracking-wide hover:text-gray-100"
        >
          <Icons.Arrow
            className={`mr-0.5 aspect-square w-3 transition duration-200 ${
              closedCategoryIds.includes(category.id) && '-rotate-90'
            }`}
          />
          {category.label}
        </button>
      )}
      {/* Channels */}
      <div className="mt-[5px] space-y-0.5">
        {category.channels.map((channel) => (
          <ChannelLink
            key={channel.id}
            isCategoryClosed={closedCategoryIds.includes(category.id)}
            channel={channel}
          />
        ))}
      </div>
    </div>
  );
}

// CHANNEL LINK
const linkStyles = cva(
  'relative group mx-2 flex items-center rounded px-2 py-1',
  {
    variants: {
      state: {
        active: 'bg-gray-550/[0.32] text-white',
        inactiveRead:
          'text-gray-300 hover:bg-gray-550/[0.16] hover:text-gray-100 active:bg-gray-550/[0.24]',
        inactiveUnread:
          'text-white hover:bg-gray-550/[0.16] active:bg-gray-550/[0.24]',
      },
      isCategoryClosed: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      {
        state: 'inactiveRead',
        isCategoryClosed: true,
        className: 'hidden',
      },
    ],
  }
);
type ChannelLinkProps = {
  isCategoryClosed: boolean;
  channel: Channel;
};
export function ChannelLink({ isCategoryClosed, channel }: ChannelLinkProps) {
  const params = useParams();

  const Icon =
    (channel.icon && Icons[channel.icon as keyof typeof Icons]) ||
    Icons.Hashtag;

  const state =
    params.cid === channel.id.toString()
      ? 'active'
      : channel.unread
      ? 'inactiveUnread'
      : 'inactiveRead';

  return (
    <Link
      href={`/servers/${params.sid}/channels/${channel.id}`}
      className={linkStyles({ state, isCategoryClosed })}
    >
      {state === 'inactiveUnread' && (
        <div className="absolute -left-2 h-2 w-1 rounded-e-full bg-white" />
      )}
      <Icon className="mr-1.5 aspect-square w-5 text-gray-400" />
      {channel.label}
      <Icons.AddPerson className="ml-auto aspect-square w-4 text-gray-200 opacity-0 hover:text-gray-100 group-hover:opacity-100" />
    </Link>
  );
}

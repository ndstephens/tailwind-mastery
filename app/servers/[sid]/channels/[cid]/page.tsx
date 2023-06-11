import Link from 'next/link';
import * as Icons from '@/components/icons';

import { Channel } from '@/types/data';
import data from 'data.json';

type PageProps = {
  params: {
    sid: string;
    cid: string;
  };
};

export default function ChannelPage({ params }: PageProps) {
  const server = data.find((server) => server.id.toString() === params.sid);

  if (!server) {
    return <div>Server not found</div>;
  }

  return (
    <>
      {/* CHANNELS SECTION */}
      <div className="isolate flex w-60 flex-col bg-gray-800">
        {/* Header */}
        <button className="z-10 flex h-12 items-center px-4 font-title text-[15px] font-semibold text-white shadow-sm transition hover:bg-gray-550/[0.16]">
          <div className="relative mr-1 aspect-square w-4">
            <Icons.Verified className="absolute h-full w-full text-gray-550" />
            <Icons.Check className="absolute h-full w-full" />
          </div>
          {server.label}
          <Icons.Chevron className="ml-auto aspect-square w-[18px] opacity-80" />
        </button>
        {/* Channels */}
        <div className="flex-1 space-y-[21px] overflow-y-scroll py-3 font-medium text-gray-300">
          {server.categories.map((category) => (
            <div key={category.id}>
              {!!category.label && (
                <button className="flex items-center px-0.5 font-title text-xs uppercase tracking-wide">
                  <Icons.Arrow className="mr-0.5 aspect-square w-3" />
                  {category.label}
                </button>
              )}
              <div className="mt-[5px] space-y-0.5">
                {category.channels.map((channel) => (
                  <ChannelLink key={channel.id} channel={channel} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MESSAGES SECTION */}
      <div className="flex flex-1 flex-col bg-gray-700">
        {/* Header */}
        <div className="flex h-12 items-center px-3 shadow-sm">general</div>
        {/* Messages */}
        <div className="flex-1 space-y-4 overflow-y-scroll p-3">
          {[...Array(40)].map((_, i) => (
            <p key={i}>
              Message {i}. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Asperiores, quam quod! Dicta voluptas omnis vel debitis
              libero obcaecati ex earum harum laborum in nostrum odit, quos
              aliquid esse deleniti officia.
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

// CHANNEL LINK
type ChannelLinkProps = {
  channel: Channel;
};
export function ChannelLink({ channel }: ChannelLinkProps) {
  const Icon =
    (channel.icon && Icons[channel.icon as keyof typeof Icons]) ||
    Icons.Hashtag;
  return (
    <Link
      href="#"
      className="group mx-2 flex items-center rounded px-2 py-1 text-gray-300 hover:bg-gray-550/[0.16] hover:text-gray-100"
    >
      <Icon className="mr-1.5 aspect-square w-5 text-gray-400" />
      {channel.label}
      <Icons.AddPerson className="ml-auto aspect-square w-4 text-gray-200 opacity-0 hover:text-gray-100 group-hover:opacity-100" />
    </Link>
  );
}
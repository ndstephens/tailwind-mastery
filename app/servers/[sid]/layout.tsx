import Category from '@/components/Category';
import * as Icons from '@/components/icons';
import { Data } from '@/types/data';
import { data } from 'data';
import { PropsWithChildren } from 'react';

type LayoutProps = {
  params: {
    sid: string;
  };
} & PropsWithChildren;

export default function ServerLayout({ params, children }: LayoutProps) {
  const server = (data as Data).find(
    (server) => server.id.toString() === params.sid
  );

  if (!server) {
    return <div>Server not found</div>;
  }

  return (
    <>
      {/* CHANNELS SECTION */}
      <div className="isolate hidden w-60 flex-col bg-gray-800 md:flex">
        {/* Header */}
        <button className="z-10 flex h-12 items-center px-4 font-title text-[15px] font-semibold text-white shadow-sm transition hover:bg-gray-550/[0.16]">
          <div className="relative mr-1 aspect-square w-4">
            <Icons.Verified className="absolute h-full w-full text-gray-550" />
            <Icons.Check className="absolute h-full w-full" />
          </div>
          {server.label}
          <Icons.Chevron className="ml-auto aspect-square w-[18px] opacity-80" />
        </button>
        {/* Categories w/ Channels */}
        <div className="flex-1 space-y-[21px] overflow-y-scroll py-3 font-medium text-gray-300">
          {server.categories.map((category) => (
            <Category key={category.id} category={category} />
          ))}
        </div>
      </div>

      {/* MESSAGES SECTION */}
      {children}
    </>
  );
}

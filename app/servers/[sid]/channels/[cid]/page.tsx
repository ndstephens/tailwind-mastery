import * as Icons from '@/components/icons';
import { Data, Message } from '@/types/data';
import { data } from 'data';
import { Metadata } from 'next';
import Image from 'next/image';

type PageProps = {
  params: {
    sid: string;
    cid: string;
  };
};

// Meta tags
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const server = (data as Data).find(
    (server) => server.id.toString() === params.sid
  );
  const channel = server?.categories
    .map((c) => c.channels)
    .flat()
    .find((channel) => channel.id.toString() === params.cid);

  return {
    title: `${server?.label} - ${channel?.label}`,
    description: channel?.description,
  };
}

export default function ChannelPage({ params }: PageProps) {
  const server = (data as Data).find(
    (server) => server.id.toString() === params.sid
  );

  if (!server) {
    return <div>Server not found</div>;
  }

  const channel = server.categories
    .map((c) => c.channels)
    .flat()
    .find((channel) => channel.id.toString() === params.cid);

  if (!channel) {
    return <div>Channel not found</div>;
  }

  const Icon =
    (channel?.icon && Icons[channel?.icon as keyof typeof Icons]) ||
    Icons.Hashtag;

  return (
    <div className="flex min-w-0 flex-1 flex-col bg-gray-700">
      {/* Header */}
      <div className="flex h-12 items-center px-2 shadow-sm">
        <div className="flex items-center">
          <Icon className="mx-2 h-6 w-6 font-semibold text-gray-400" />
          <span className="mr-2 whitespace-nowrap font-title text-white">
            {channel?.label}
          </span>
        </div>
        {channel?.description && (
          <>
            <div className="mx-2 hidden h-6 w-px bg-white/[.06] md:block" />
            <div className="mx-2 hidden truncate text-sm font-medium text-gray-200 md:block">
              {channel.description}
            </div>
          </>
        )}
        {/* Mobile Buttons */}
        <div className="ml-auto flex items-center md:hidden">
          <button className="text-gray-200 hover:text-gray-100">
            <Icons.HashtagWithSpeechBubble className="mx-2 h-6 w-6" />
          </button>
          <button className="text-gray-200 hover:text-gray-100">
            <Icons.People className="mx-2 h-6 w-6" />
          </button>
        </div>
        {/* Desktop Buttons */}
        <div className="ml-auto hidden items-center md:flex">
          <button className="text-gray-200 hover:text-gray-100">
            <Icons.HashtagWithSpeechBubble className="mx-2 h-6 w-6" />
          </button>
          <button className="text-gray-200 hover:text-gray-100">
            <Icons.Bell className="mx-2 h-6 w-6" />
          </button>
          <button className="text-gray-200 hover:text-gray-100">
            <Icons.Pin className="mx-2 h-6 w-6" />
          </button>
          <button className="text-gray-200 hover:text-gray-100">
            <Icons.People className="mx-2 h-6 w-6" />
          </button>
          <div className="relative mx-2">
            <input
              type="text"
              placeholder="Search"
              className="h-6 w-36 rounded border-none bg-gray-900 px-1.5 text-sm font-medium placeholder-gray-400"
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <Icons.Spyglass className="mr-1.5 aspect-square w-4 text-gray-400" />
            </div>
          </div>
          <button className="text-gray-200 hover:text-gray-100">
            <Icons.Inbox className="mx-2 h-6 w-6" />
          </button>
          <button className="text-gray-200 hover:text-gray-100">
            <Icons.QuestionCircle className="mx-2 h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-scroll">
        {channel?.messages.map((message, i) => (
          <div key={message.id}>
            {i === 0 || message.user !== channel.messages[i - 1].user ? (
              <MessageWithUser message={message} />
            ) : (
              <Message message={message} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// MESSAGE WITH USER
function MessageWithUser({ message }: { message: Message }) {
  return (
    <div className="mt-[17px] flex py-0.5 pl-4 pr-16 leading-[22px] hover:bg-gray-950/[.07]">
      <div className="relative mr-4 h-10 min-w-[40px] overflow-hidden rounded-full">
        <Image
          fill
          sizes="40px"
          className="object-cover"
          src={message.avatarUrl}
          alt={`avatar for ${message.user}`}
        />
      </div>
      <div>
        <p className="flex items-baseline gap-2 font-medium">
          <span className="text-green-400">{message.user}</span>
          <span className="text-xs text-gray-400">{message.date}</span>
        </p>
        <p className="text-gray-100">{message.text}</p>
      </div>
    </div>
  );
}

// MESSAGE
function Message({ message }: { message: Message }) {
  return (
    <div className="py-0.5 pl-4 pr-16 leading-[22px] hover:bg-gray-950/[.07]">
      <p className="pl-14 text-gray-100">{message.text}</p>
    </div>
  );
}

import {
  AddPersonIcon,
  ArrowIcon,
  BookIcon,
  CheckIcon,
  ChevronIcon,
  HashtagIcon,
  SpeakerphoneIcon,
  VerifiedIcon,
} from '@/components/icons';
import { servers } from '@/lib/config/servers';
import Link from 'next/link';

export default function Server({ params }: { params: { sid: string } }) {
  const server = servers.find((server) => server.id.toString() === params.sid);

  if (!server) {
    return <div>Server not found</div>;
  }

  return (
    <>
      {/* CHANNELS SECTION */}
      <div className="flex w-60 flex-col bg-gray-800">
        {/* Header */}
        <button className="flex h-12 items-center px-4 font-title text-[15px] font-semibold text-white shadow-sm transition hover:bg-gray-550/[0.16]">
          <div className="relative mr-1 aspect-square w-4">
            <VerifiedIcon className="absolute h-full w-full text-gray-550" />
            <CheckIcon className="absolute h-full w-full" />
          </div>
          {server.title}
          <ChevronIcon className="ml-auto aspect-square w-[18px] opacity-80" />
        </button>

        {/* Channels List */}
        <div className="mt-[17px] flex-1 overflow-y-scroll font-medium text-gray-300">
          {/* welcome / announcements */}
          <div className="space-y-0.5">
            <Link
              href="#"
              className="group mx-2 flex items-center rounded px-2 py-1 text-gray-300 hover:bg-gray-550/[0.16] hover:text-gray-100"
            >
              <BookIcon className="mr-1.5 aspect-square w-5 text-gray-400" />
              welcome
              <AddPersonIcon className="ml-auto aspect-square w-4 text-gray-200 opacity-0 hover:text-gray-100 group-hover:opacity-100" />
            </Link>
            <Link
              href="#"
              className="group mx-2 flex items-center rounded px-2 py-1 text-gray-300 hover:bg-gray-550/[0.16] hover:text-gray-100"
            >
              <SpeakerphoneIcon className="mr-1.5 aspect-square w-5 text-gray-400" />
              announcements
              <AddPersonIcon className="ml-auto aspect-square w-4 text-gray-200 opacity-0 hover:text-gray-100 group-hover:opacity-100" />
            </Link>
          </div>
          {/* Category */}
          <div className="mt-[21px]">
            <button className="flex items-center px-0.5 font-title text-xs uppercase tracking-wide">
              <ArrowIcon className="mr-0.5 aspect-square w-3" />
              Tailwind CSS
            </button>

            <div className="mt-[5px] space-y-0.5">
              <Link
                href="#"
                className="group mx-2 flex items-center rounded px-2 py-1 text-gray-300 hover:bg-gray-550/[0.16] hover:text-gray-100"
              >
                <HashtagIcon className="mr-1.5 aspect-square w-5 text-gray-400" />
                general
                <AddPersonIcon className="ml-auto aspect-square w-4 text-gray-200 opacity-0 hover:text-gray-100 group-hover:opacity-100" />
              </Link>
              <Link
                href="#"
                className="group mx-2 flex items-center rounded px-2 py-1 text-gray-300 hover:bg-gray-550/[0.16] hover:text-gray-100"
              >
                <HashtagIcon className="mr-1.5 aspect-square w-5 text-gray-400" />
                plugins
                <AddPersonIcon className="ml-auto aspect-square w-4 text-gray-200 opacity-0 hover:text-gray-100 group-hover:opacity-100" />
              </Link>
              <Link
                href="#"
                className="group mx-2 flex items-center rounded px-2 py-1 text-gray-300 hover:bg-gray-550/[0.16] hover:text-gray-100"
              >
                <HashtagIcon className="mr-1.5 aspect-square w-5 text-gray-400" />
                help
                <AddPersonIcon className="ml-auto aspect-square w-4 text-gray-200 opacity-0 hover:text-gray-100 group-hover:opacity-100" />
              </Link>
              <Link
                href="#"
                className="group mx-2 flex items-center rounded px-2 py-1 text-gray-300 hover:bg-gray-550/[0.16] hover:text-gray-100"
              >
                <HashtagIcon className="mr-1.5 aspect-square w-5 text-gray-400" />
                internals
                <AddPersonIcon className="ml-auto aspect-square w-4 text-gray-200 opacity-0 hover:text-gray-100 group-hover:opacity-100" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* MESSAGES SECTION */}
      <div className="flex flex-1 flex-col bg-gray-700">
        {/* Header */}
        <div className="flex h-12 items-center px-3 shadow-sm">general</div>
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

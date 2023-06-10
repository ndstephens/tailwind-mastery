import { CheckIcon, ChevronIcon, VerifiedIcon } from '@/components/icons';
import { servers } from '@/lib/config/servers';

export default function Server({ params }: { params: { sid: string } }) {
  const server = servers.find((server) => server.id.toString() === params.sid);

  if (!server) {
    return <div>Server not found</div>;
  }

  return (
    <>
      <div className="flex w-60 flex-col bg-gray-800">
        <button className="flex h-12 items-center px-4 font-title text-[15px] font-semibold text-white shadow-sm transition hover:bg-gray-550/[0.16]">
          <div className="relative mr-1 aspect-square w-4">
            <VerifiedIcon className="absolute h-full w-full text-gray-550" />
            <CheckIcon className="absolute h-full w-full" />
          </div>
          {server.title}
          <ChevronIcon className="ml-auto aspect-square w-[18px] opacity-80" />
        </button>
        <div className="flex-1 space-y-2 overflow-y-scroll p-3 font-medium text-gray-300">
          <p className="text-white">general</p>
          {[...Array(40)].map((_, i) => (
            <p key={i}>channel {i}</p>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col bg-gray-700">
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

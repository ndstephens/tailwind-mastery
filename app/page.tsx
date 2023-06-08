import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-700 text-white">
      <div className="flex flex-col gap-y-2">
        <Link href="/discord-messages">Discord Messages</Link>
        <Link href="/multipanel">Multipanel Layout</Link>
      </div>
    </div>
  );
}

import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-700 text-white">
      <Link href="/discord-messages">Discord Messages</Link>
    </div>
  );
}

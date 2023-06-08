import Image from 'next/image';

export default function DiscordMessages() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-700 text-white">
      <div className="max-w-lg">
        <div className="flex gap-4 px-4 py-1 hover:bg-gray-800/30">
          <div className="relative h-10 min-w-[40px] overflow-hidden rounded-full">
            <Image
              fill
              className="object-cover"
              src="/nate.jpeg"
              alt="headshot of user"
            />
          </div>
          <div>
            <p className="flex items-baseline gap-2">
              <span className="text-sm font-medium text-green-500">
                natestephens
              </span>
              <span className="text-xs text-gray-500">06/07/2023</span>
            </p>
            <p className="text-gray-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusamus rem maiores et voluptate minima, ducimus ullam officia
              possimus ipsam dicta facere autem laudantium harum reprehenderit
              animi. Fugit dolorum unde accusamus.
            </p>
          </div>
        </div>
        <div className="mt-1 px-4 py-1 hover:bg-gray-800/30">
          <p className="pl-14 text-gray-300">
            Dolor sit amet consectetur adipisicing elit. Aperiam amet itaque
            fugiat eos, natus eligendi laboriosam architecto corrupti omnis
            adipisci recusandae blanditiis similique debitis labore maxime
            quisquam praesentium vel consequuntur.
          </p>
        </div>
        <div className="mt-1 px-4 py-1 hover:bg-gray-800/30">
          <p className="pl-14 text-gray-300">
            Natus eligendi laboriosam architecto corrupti omnis adipisci
            recusandae blanditiis similique debitis labore maxime quisquam
            praesentium vel consequuntur.
          </p>
        </div>
      </div>
    </div>
  );
}

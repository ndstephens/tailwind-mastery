export default function Home() {
  return (
    <main>
      <div className="flex h-screen text-white">
        <div className="bg-gray-800 p-4">
          <div className="flex aspect-square w-12 items-center justify-center rounded-full bg-white text-gray-800">
            TW
          </div>
        </div>
        <div className="flex w-60 flex-col bg-gray-700">
          <div className="p-4 shadow-md">Tailwind CSS</div>
          <div className="grow p-4">channels</div>
        </div>
        <div className="flex grow flex-col bg-gray-600">
          <div className="p-4 shadow-md">general</div>
          <div className="grow p-4">messages</div>
        </div>
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <main>
      <div className="flex h-screen text-gray-100">
        <div className="space-y-2 overflow-y-scroll bg-gray-900 p-3">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="flex aspect-square w-12 items-center justify-center rounded-full bg-white text-gray-800"
            >
              {i}
            </div>
          ))}
        </div>

        <div className="flex w-60 flex-col bg-gray-800">
          <div className="flex h-12 items-center px-3 font-title font-semibold text-white shadow-md">
            Tailwind CSS
          </div>
          <div className="flex-1 space-y-2 overflow-y-scroll p-3 font-medium text-gray-300">
            <p className="text-white">channel (unread)</p>
            <p className="text-white">channel (unread)</p>
            {[...Array(40)].map((_, i) => (
              <p key={i}>channel {i}</p>
            ))}
          </div>
        </div>

        <div className="flex flex-1 flex-col bg-gray-700">
          <div className="flex h-12 items-center px-3 shadow-md">general</div>
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
      </div>
    </main>
  );
}

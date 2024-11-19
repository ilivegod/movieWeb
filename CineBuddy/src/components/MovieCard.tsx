export default function MovieCard({
  title = "Inception",
  author = "Christopher Nolan",
  imageUrl = "https://v0.dev/public.blob.vercel-storage.com/inception-poster-2HKLE31pJhXlnpBOYlBfBqsJHkBGZZ.jpg",
  CardClick,
}: {
  title?: string;
  author?: string;
  imageUrl?: string;
  CardClick: () => void;
}) {
  return (
    <button
      onClick={CardClick}
      className="max-w-[300px]  rounded overflow-hidden shadow-md text-left hover:cursor-pointer bg-red-300"
    >
      <div className="h-60  relative">
        <img
          src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${imageUrl}`}
          alt={`${title} poster`}
          className="w-full h-full object-cover rounded-2xl border border-gray-500 transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="px-6 py-4">
        <div className="text-white font-bold text-xl mb-2">{title}</div>
      </div>
    </button>
  );
}

// https://media.themoviedb.org/t/p/w600_and_h900_bestv2/aosm8NMQ3UyoBVpSxyimorCQykC.jpg

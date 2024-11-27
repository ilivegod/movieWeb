import { useParams } from "react-router-dom";

// import { Star, Clock } from 'lucide-react'
// import { Badge } from '@/components/ui/badge'
// import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Clock, Star } from "lucide-react";
import CardCarousel from "@/components/CardCarousel";
import { Carousel } from "flowbite-react";
import { Button } from "flowbite-react";

export default function MovieDetailPage() {
  const params = useParams<{ movieId: string }>();
  // Placeholder data
  const movie = {
    title: "Inception",
    poster:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRyuWmayVBvqjd1MxTKpRgauq2cCtUzb7Q9QvaFTkAuxAU_EYMoCE3wBuJeftxIzf0grreIw",
    genres: ["Sci-Fi", "Action", "Thriller", "Adventure"],
    rating: 8.8,
    runtime: 148,
    rated: "R",
    synopsis:
      "A thief who enters the dreams of others to steal secrets from their subconscious is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious. A thief who enters the dreams of others to steal secrets from their subconscious is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
    cast: [
      {
        name: "Leonardo DiCaprio",
        character: "Cobb",
        image:
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRyuWmayVBvqjd1MxTKpRgauq2cCtUzb7Q9QvaFTkAuxAU_EYMoCE3wBuJeftxIzf0grreIw",
      },
      {
        name: "Joseph Gordon-Levitt",
        character: "Arthur",
        image:
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRyuWmayVBvqjd1MxTKpRgauq2cCtUzb7Q9QvaFTkAuxAU_EYMoCE3wBuJeftxIzf0grreIw",
      },
      {
        name: "Ellen Page",
        character: "Ariadne",
        image:
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRyuWmayVBvqjd1MxTKpRgauq2cCtUzb7Q9QvaFTkAuxAU_EYMoCE3wBuJeftxIzf0grreIw",
      },
      {
        name: "Tom Hardy",
        character: "Eames",
        image:
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRyuWmayVBvqjd1MxTKpRgauq2cCtUzb7Q9QvaFTkAuxAU_EYMoCE3wBuJeftxIzf0grreIw",
      },
      {
        name: "Tom Hardy",
        character: "Eames",
        image:
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRyuWmayVBvqjd1MxTKpRgauq2cCtUzb7Q9QvaFTkAuxAU_EYMoCE3wBuJeftxIzf0grreIw",
      },
      {
        name: "Tom Hardy",
        character: "Eames",
        image:
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRyuWmayVBvqjd1MxTKpRgauq2cCtUzb7Q9QvaFTkAuxAU_EYMoCE3wBuJeftxIzf0grreIw",
      },
      {
        name: "Tom Hardy",
        character: "Eames",
        image:
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRyuWmayVBvqjd1MxTKpRgauq2cCtUzb7Q9QvaFTkAuxAU_EYMoCE3wBuJeftxIzf0grreIw",
      },
      {
        name: "Tom Hardy",
        character: "Eames",
        image:
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRyuWmayVBvqjd1MxTKpRgauq2cCtUzb7Q9QvaFTkAuxAU_EYMoCE3wBuJeftxIzf0grreIw",
      },
    ],
    similarMovies: [
      {
        title: "The Matrix",
        poster:
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRyuWmayVBvqjd1MxTKpRgauq2cCtUzb7Q9QvaFTkAuxAU_EYMoCE3wBuJeftxIzf0grreIw",
      },
      {
        title: "Interstellar",
        poster:
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRyuWmayVBvqjd1MxTKpRgauq2cCtUzb7Q9QvaFTkAuxAU_EYMoCE3wBuJeftxIzf0grreIw",
      },
      {
        title: "Shutter Island",
        poster:
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRyuWmayVBvqjd1MxTKpRgauq2cCtUzb7Q9QvaFTkAuxAU_EYMoCE3wBuJeftxIzf0grreIw",
      },
      {
        title: "The Prestige",
        poster: "/placeholder.svg?height=200&width=134",
      },
    ],
  };
  // <div>moviedetail{params.movieId}</div>

  return (
    <div className=" mx-auto md:px-24 py-8 bg-neutral-950">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3 border">
          <img
            src={movie.poster}
            alt={`${movie.title} Poster`}
            width={400}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-2/3">
          <h1 className="text-4xl text-gray-300 font-bold mb-4">
            {movie.title}
          </h1>

          <div className="w-full whitespace-nowrap rounded-md  mb-4">
            <div className="flex w-max space-x-4 p-4">
              {movie.genres.map((genre) => (
                // <Badge key={genre} variant="secondary" className="text-sm">
                //   {genre}
                // </Badge>
                <div className=" border-gray-600 rounded-2xl px-4 bg-gray-900">
                  <p className="text-gray-50">{genre}</p>
                </div>
              ))}
            </div>
            {/* <ScrollBar orientation="horizontal" /> */}
          </div>

          <div className="flex items-center space-x-4 mb-4">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 mr-1" />
              <span className="text-gray-300">{movie.rating}/10</span>
            </div>
            <div className="flex items-center">
              <Clock color="white" className="w-5 h-5 mr-1" />
              <span className="text-gray-300">{movie.runtime} min</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-300">{movie.rated}</span>
            </div>
          </div>

          <p className="text-gray-300 mb-8">{movie.synopsis}</p>

          <h2 className="text-2xl text-gray-300 font-semibold md:mt-20 mb-4">
            Cast
          </h2>
          <div className="w-full whitespace-nowrap rounded-md  mb-8">
            <div className="flex w-max space-x-4 p-4">
              {movie.cast.map((actor) => (
                <div key={actor.name} className="flex flex-col items-center">
                  <img
                    src={actor.image}
                    alt={actor.name}
                    width={100}
                    height={100}
                    className="rounded-full mb-2"
                  />
                  <span className=" text-gray-300 font-semibold">
                    {actor.name}
                  </span>
                  <span className="text-sm text-gray-400">
                    {actor.character}
                  </span>
                </div>
              ))}
            </div>
            {/* <ScrollBar orientation="horizontal" /> */}
          </div>

          <h2 className=" text-gray-300 text-2xl font-semibold mb-4">
            Similar Movies
          </h2>
          <div className="w-full whitespace-nowrap rounded-md ">
            <div className="flex w-max space-x-4 p-4 border border-red-400">
              <CardCarousel slides={movie.similarMovies} />

              {/* {movie.similarMovies.map((similarMovie) => (
                <div
                  key={similarMovie.title}
                  className="flex flex-col items-center"
                >
                  <img
                    src={similarMovie.poster}
                    alt={similarMovie.title}
                    width={134}
                    height={200}
                    className="rounded-lg mb-2"
                  />
                  <span className="font-semibold text-sm">
                    {similarMovie.title}
                  </span>
                </div>
              ))} */}
            </div>
            {/* <ScrollBar orientation="horizontal" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

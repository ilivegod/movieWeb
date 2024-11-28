import { useParams } from "react-router-dom";

// import { Star, Clock } from 'lucide-react'
// import { Badge } from '@/components/ui/badge'
// import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Calendar, Clock, Star } from "lucide-react";
import CardCarousel from "@/components/CardCarousel";
import { Carousel } from "flowbite-react";
import YtCarousel from "@/components/YtCarousel";
import CastCarousel from "@/components/CastCarousel";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function MovieDetailPage() {
  const params = useParams();
  const id = params.movieId;

  const fetchMovieDetails = async () => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTMxODQzOTgxMjkyMDg0NjQyMTQwNzg2MWVhNjI1MCIsIm5iZiI6MTczMTg3MTM2Ni40Mzg1NDAyLCJzdWIiOiI2NjJiZjY5NjEwNjVkMzAxMjliMzA0NGMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.drxxiFl7O1w2I3DRXlpWlaUZFxPTBJegtTeYabOyPvo",
      },
    };

    const res = await axios.request(options);

    return res.data;
  };

  const fetchSimilarMovies = async () => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTMxODQzOTgxMjkyMDg0NjQyMTQwNzg2MWVhNjI1MCIsIm5iZiI6MTczMTg3MTM2Ni40Mzg1NDAyLCJzdWIiOiI2NjJiZjY5NjEwNjVkMzAxMjliMzA0NGMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.drxxiFl7O1w2I3DRXlpWlaUZFxPTBJegtTeYabOyPvo",
      },
    };

    const res = await axios.request(options);

    return res.data;
  };

  const { data: MovieDetails, error: MovieDetailsError } = useQuery({
    queryKey: ["movieDetails"],
    queryFn: fetchMovieDetails,
  });

  const { data: SimilarMovies, error: SimilarMoviesError } = useQuery({
    queryKey: ["movieDetails"],
    queryFn: fetchSimilarMovies,
  });

  console.log("SimilarMovies:", SimilarMovies);
  console.log("paramsss:", id);

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
      <div className="block md:flex flex-col md:flex-row gap-8">
        <div className="md:w-[500px]  ">
          <img
            src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${MovieDetails?.poster_path}`}
            alt={`${MovieDetails?.title} Poster`}
            width={420}
            className="object-contain border border-gray-700 rounded-lg shadow-lg md:h-[630px]"
          />
        </div>
        <div className="md:w-2/3">
          <h1 className="text-4xl text-gray-300 font-bold mb-4">
            {MovieDetails?.title}
          </h1>

          <div>
            <div className="md:flex block  justify-center items-center md:gap-56">
              <div>
                <div className="w-full whitespace-nowrap rounded-md  mb-4">
                  <div className="flex w-max space-x-4 p-4">
                    {MovieDetails?.genres.map((genre: any) => (
                      // <Badge key={genre} variant="secondary" className="text-sm">
                      //   {genre}
                      // </Badge>
                      <div className="  rounded-2xl px-4 bg-gray-900">
                        <p className="text-gray-50">{genre?.name}</p>
                      </div>
                    ))}
                  </div>
                  {/* <ScrollBar orientation="horizontal" /> */}
                </div>

                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 mr-1" />
                    <span className="text-gray-300">
                      {MovieDetails?.popularity}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock color="white" className="w-5 h-5 mr-1" />
                    <span className="text-gray-300">
                      {MovieDetails?.runtime} min
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Calendar color="white" size={19} className="mr-1" />
                    <span className="text-gray-300">
                      {MovieDetails?.release_date}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 mb-8">{MovieDetails?.overview}</p>
              </div>

              <div className=" block  w-full gap-8">
                <div>
                  <h1 className="text-white">Director</h1>
                  {MovieDetails?.production_companies.map((company: any) => (
                    <p className="text-gray-600">{company?.name}</p>
                  ))}
                </div>
                <div>
                  <h1 className="text-white">Production Companies</h1>
                  <p className="text-gray-600">James Cameron</p>
                </div>
                <div>
                  <h1 className="text-white">Production Countries </h1>
                  <p className="text-gray-600">James Cameron</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl text-gray-300 font-semibold md:mt-20 mb-4">
            Cast
          </h2>
          <div className="w-full whitespace-nowrap rounded-md  mb-8 ">
            <CastCarousel slides={movie.cast} />

            {/* <ScrollBar orientation="horizontal" /> */}
          </div>

          <h2 className=" text-gray-300 text-2xl font-semibold mb-4">
            Similar Movies
          </h2>
          <div className="w-full whitespace-nowrap rounded-md ">
            <YtCarousel slides={movie.similarMovies} />
          </div>
        </div>
      </div>
    </div>
  );
}

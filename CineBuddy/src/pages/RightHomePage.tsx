import { useParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { useFetch } from "@/hooks/useFetch";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Search, CircleUserRound, Bell } from "lucide-react";
import CustomCarousel from "@/components/CustomCarousel";
import MovieCard from "@/components/MovieCard";
import { Key, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function RightHomePage() {
  interface Movie {
    id: number;
    original_title: string;
    date: number;
    poster_path: string;
  }

  const params = useParams();

  // {{{fetching movies data}}}
  const FetchNowPlayingMovies = async () => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTMxODQzOTgxMjkyMDg0NjQyMTQwNzg2MWVhNjI1MCIsIm5iZiI6MTczMTg3MTM2Ni40Mzg1NDAyLCJzdWIiOiI2NjJiZjY5NjEwNjVkMzAxMjliMzA0NGMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.drxxiFl7O1w2I3DRXlpWlaUZFxPTBJegtTeYabOyPvo",
      },
    };

    const res = await axios.request(options);

    return res.data.results;
  };

  const {
    isPending: NowPlayingMoviesIsPending,
    error: NowPlayingMoviesError,
    data: NowPlayingMoviesData,
  } = useQuery({
    queryKey: ["NowPlayingMovies"],
    queryFn: FetchNowPlayingMovies,
  });

  const FetchPopularMovies = async () => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTMxODQzOTgxMjkyMDg0NjQyMTQwNzg2MWVhNjI1MCIsIm5iZiI6MTczMTg3MTM2Ni40Mzg1NDAyLCJzdWIiOiI2NjJiZjY5NjEwNjVkMzAxMjliMzA0NGMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.drxxiFl7O1w2I3DRXlpWlaUZFxPTBJegtTeYabOyPvo",
      },
    };

    const res = await axios.request(options);

    return res.data.results;
  };

  const {
    isPending: PopularMoviesIsPending,
    error: PopularMoviesError,
    data: PopularMoviesData,
  } = useQuery({
    queryKey: ["PopularMovies"],
    queryFn: FetchPopularMovies,
  });

  const FetchTopRatedMovies = async () => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTMxODQzOTgxMjkyMDg0NjQyMTQwNzg2MWVhNjI1MCIsIm5iZiI6MTczMTg3MTM2Ni40Mzg1NDAyLCJzdWIiOiI2NjJiZjY5NjEwNjVkMzAxMjliMzA0NGMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.drxxiFl7O1w2I3DRXlpWlaUZFxPTBJegtTeYabOyPvo",
      },
    };

    const res = await axios.request(options);

    return res.data.results;
  };

  const {
    isPending: TopRatedMoviesIsPending,
    error: TopRatedMoviesError,
    data: TopRatedMoviesData,
  } = useQuery({
    queryKey: ["TopRatedMovies"],
    queryFn: FetchTopRatedMovies,
  });

  const FetchUpcomingMovies = async () => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTMxODQzOTgxMjkyMDg0NjQyMTQwNzg2MWVhNjI1MCIsIm5iZiI6MTczMTg3MTM2Ni40Mzg1NDAyLCJzdWIiOiI2NjJiZjY5NjEwNjVkMzAxMjliMzA0NGMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.drxxiFl7O1w2I3DRXlpWlaUZFxPTBJegtTeYabOyPvo",
      },
    };

    const res = await axios.request(options);

    return res.data.results;
  };

  const {
    isPending: UpcomingMoviesIsPending,
    error: UpcomingMoviesError,
    data: UpcomingMoviesData,
  } = useQuery({
    queryKey: ["UpcomingMovies"],
    queryFn: FetchUpcomingMovies,
  });

  return (
    <div className="flex-col flex h-full w-full ">
      <div className="flex w-full  p-6 justify-between">
        <div className="flex ">
          <Input placeholder="Search everything" />
        </div>
        <div className="flex gap-10">
          <div>
            <Bell color="gray" />
          </div>
          <div>
            <CircleUserRound color="gray" />
          </div>
        </div>
      </div>
      <div className="">
        <CustomCarousel />
      </div>
      {/* {Now Playing area} */}
      <div className="md:mt-[100px] mt-7 md:px-14 px-3">
        <h1 className="text-white font-bold text-xl sm:text-2xl  tracking-wider">
          Now Playing{params?.homeId}
        </h1>

        <div className="md:mt-8 w-full ">
          {NowPlayingMoviesData && NowPlayingMoviesData.length > 0 ? (
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full"
            >
              <CarouselContent>
                {NowPlayingMoviesData.map((movie: Movie) => (
                  <CarouselItem
                    key={movie.id}
                    className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                  >
                    <MovieCard
                      // title={movie?.original_title}
                      imageUrl={movie?.poster_path}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          ) : (
            <div className="text-white">No movies available</div>
          )}
        </div>
      </div>
      {/* {Popular area} */}

      <div className="md:mt-[100px] mt-7 md:px-14 px-3">
        <h1 className="text-white font-bold text-xl sm:text-2xl  tracking-wider">
          Popular Movies
        </h1>
        <div className="md:mt-8 w-full ">
          {PopularMoviesData && PopularMoviesData.length > 0 ? (
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full"
            >
              <CarouselContent>
                {PopularMoviesData.map((movie: Movie) => (
                  <CarouselItem
                    key={movie.id}
                    className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                  >
                    <MovieCard
                      // title={movie?.original_title}
                      imageUrl={movie?.poster_path}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          ) : (
            <div className="text-white">No movies available</div>
          )}
        </div>
      </div>
      {/* {Upcoming Movies area} */}

      <div className="md:mt-[100px] mt-7 md:px-14 px-3">
        <h1 className="text-white font-bold text-xl sm:text-2xl  tracking-wider">
          Upcoming Movies
        </h1>
        <div className="md:mt-8 w-full ">
          {UpcomingMoviesData && UpcomingMoviesData.length > 0 ? (
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full"
            >
              <CarouselContent>
                {UpcomingMoviesData.map((movie: Movie) => (
                  <CarouselItem
                    key={movie.id}
                    className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                  >
                    <MovieCard
                      // title={movie?.original_title}
                      imageUrl={movie?.poster_path}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          ) : (
            <div className="text-white">No movies available</div>
          )}
        </div>
      </div>
      {/* {Top Rated area} */}

      <div className="md:mt-[100px] mt-7 md:px-14 px-3">
        <h1 className="text-white font-bold text-xl sm:text-2xl  tracking-wider">
          Top Rated Movies
        </h1>
        <div className="md:mt-8 w-full ">
          {TopRatedMoviesData && TopRatedMoviesData.length > 0 ? (
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full"
            >
              <CarouselContent>
                {TopRatedMoviesData.map((movie: Movie) => (
                  <CarouselItem
                    key={movie.id}
                    className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                  >
                    <MovieCard
                      // title={movie?.original_title}
                      imageUrl={movie?.poster_path}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          ) : (
            <div className="text-white">No movies available</div>
          )}
        </div>
      </div>
    </div>
  );
}

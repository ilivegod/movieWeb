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

import { Search, CircleUserRound, Bell, ChevronRight } from "lucide-react";
import CustomCarousel from "@/components/CustomCarousel";
import MovieCard from "@/components/MovieCard";
import { Key, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import CardCarousel from "@/components/CardCarousel";
import { EmblaOptionsType } from "embla-carousel";

import React from "react";

export default function RightHomePage() {
  interface Movie {
    id?: number;
    original_title?: string;
    date?: number;
    poster_path?: string;
  }

  interface slideType {
    poster_path: string;
    original_title: string;
    id: string;
  }

  const params = useParams();

  const handleMovieCardClick = () => {
    console.log("Movie card clicked");
  };

  const OPTIONS: EmblaOptionsType = { dragFree: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

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
      url: "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTMxODQzOTgxMjkyMDg0NjQyMTQwNzg2MWVhNjI1MCIsIm5iZiI6MTczMTg3MTM2Ni40Mzg1NDAyLCJzdWIiOiI2NjJiZjY5NjEwNjVkMzAxMjliMzA0NGMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.drxxiFl7O1w2I3DRXlpWlaUZFxPTBJegtTeYabOyPvo",
      },
    };

    const res = await axios.request(options);

    return res.data.results;
  };

  const handleCardClick = (id: string) => {
    console.log(id);
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
        <div className="flex justify-between">
          <h1 className="text-white font-bold text-xl sm:text-2xl  tracking-wider">
            Now Playing
          </h1>
          <div className="flex items-center justify-center  ">
            <p className="text-white text-lg sm:text-sm tracking-wider">
              All Movies
            </p>
            <ChevronRight color="white" size={15} />
          </div>
        </div>

        <div className="md:mt-8 w-full mb-12">
          {NowPlayingMoviesData && NowPlayingMoviesData.length > 0 ? (
            <div>
              <CardCarousel slides={NowPlayingMoviesData} />
            </div>
          ) : (
            <div className="text-white">No movies available</div>
          )}
        </div>
      </div>
      {/* {Popular area} */}

      <div className="md:mt-[100px] mt-7 md:px-14 px-3">
        <div className="flex justify-between">
          <h1 className="text-white font-bold text-xl sm:text-2xl  tracking-wider">
            Popular Movies
          </h1>
          <div className="flex items-center justify-center  ">
            <p className="text-white text-lg sm:text-sm tracking-wider">
              All Movies
            </p>
            <ChevronRight color="white" size={15} />
          </div>
        </div>
        <div className="md:mt-8 w-full mb-12">
          {PopularMoviesData && PopularMoviesData.length > 0 ? (
            <div>
              <CardCarousel slides={PopularMoviesData} />
            </div>
          ) : (
            <div className="text-white">No movies available</div>
          )}
        </div>
      </div>
      {/* {Upcoming Movies area} */}

      <div className="md:mt-[100px] mt-7 md:px-14 px-3">
        <div className="flex justify-between">
          <h1 className="text-white font-bold text-xl sm:text-2xl  tracking-wider">
            Upcoming Movies
          </h1>
          <div className="flex items-center justify-center  ">
            <p className="text-white text-lg sm:text-sm tracking-wider">
              All Movies
            </p>
            <ChevronRight color="white" size={15} />
          </div>
        </div>
        <div className="md:mt-8 w-full mb-12">
          {UpcomingMoviesData && UpcomingMoviesData.length > 0 ? (
            <div>
              <CardCarousel slides={UpcomingMoviesData} />
            </div>
          ) : (
            <div className="text-white">No movies available</div>
          )}
        </div>
      </div>
      {/* {Top Rated area} */}

      <div className="md:mt-[100px] mt-7 md:px-14 px-3">
        <div className="flex justify-between">
          <h1 className="text-white font-bold text-xl sm:text-2xl  tracking-wider">
            Top Rated Movies
          </h1>
          <div className="flex items-center justify-center  ">
            <p className="text-white text-lg sm:text-sm tracking-wider">
              All Movies
            </p>
            <ChevronRight color="white" size={15} />
          </div>
        </div>
        <div className="md:mt-8 w-full mb-12">
          {TopRatedMoviesData && TopRatedMoviesData.length > 0 ? (
            <div>
              <CardCarousel slides={TopRatedMoviesData} />
            </div>
          ) : (
            <div className="text-white">No movies available</div>
          )}
        </div>
      </div>
    </div>
  );
}

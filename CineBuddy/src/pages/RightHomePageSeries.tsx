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
import CardCarousel from "@/components/CardCarousel";
import { EmblaOptionsType } from "embla-carousel";

import React from "react";

export default function RightHomePageSeries() {
  interface Movie {
    id: number;
    original_title: string;
    date: number;
    poster_path: string;
  }

  interface slideType {
    poster_path: string;
    original_title: string;
    id: string;
  }

  // const params = useParams();

  const handleMovieCardClick = () => {
    console.log("Movie card clicked");
  };

  const OPTIONS: EmblaOptionsType = { dragFree: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  // {{{fetching movies data}}}
  const FetchAiringTodaySeries = async () => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
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
    isPending: AiringTodaySeriesIsPending,
    error: AiringTodaySeriesError,
    data: AiringTodaySeriesData,
  } = useQuery({
    queryKey: ["NowPlayingMovies"],
    queryFn: FetchAiringTodaySeries,
  });

  const FetchOnTheAirSeries = async () => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1",
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
    isPending: OnTheAirSeriesIsPending,
    error: OnTheAirSeriesError,
    data: OnTheAirSeriesData,
  } = useQuery({
    queryKey: ["PopularMovies"],
    queryFn: FetchOnTheAirSeries,
  });

  const FetchPopularSeries = async () => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
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
    isPending: PopularSeriesIsPending,
    error: PopularSeriesError,
    data: PopularSeriesData,
  } = useQuery({
    queryKey: ["TopRatedMovies"],
    queryFn: FetchPopularSeries,
  });

  const TopRatedSeries = async () => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
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
    isPending: TopRatedSeriesIsPending,
    error: TopRatedSeriesError,
    data: TopRatedSeriesData,
  } = useQuery({
    queryKey: ["UpcomingMovies"],
    queryFn: TopRatedSeries,
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
      {/* { Airing today area} */}
      <div className="md:mt-[100px] mt-7 md:px-14 px-3">
        <h1 className="text-white font-bold text-xl sm:text-2xl  tracking-wider">
          Airing Today
        </h1>

        <div className="md:mt-8 w-full mb-12">
          {AiringTodaySeriesData && AiringTodaySeriesData.length > 0 ? (
            <div>
              <CardCarousel slides={AiringTodaySeriesData} />
            </div>
          ) : (
            <div className="text-white">No movies available</div>
          )}
        </div>
      </div>
      {/* {On the air area} */}

      <div className="md:mt-[100px] mt-7 md:px-14 px-3">
        <h1 className="text-white font-bold text-xl sm:text-2xl  tracking-wider">
          On-the-Air
        </h1>
        <div className="md:mt-8 w-full mb-12">
          {OnTheAirSeriesData && OnTheAirSeriesData.length > 0 ? (
            <div>
              <CardCarousel slides={OnTheAirSeriesData} />
            </div>
          ) : (
            <div className="text-white">No movies available</div>
          )}
        </div>
      </div>
      {/* {Popular Tv Shows  area} */}

      <div className="md:mt-[100px] mt-7 md:px-14 px-3">
        <h1 className="text-white font-bold text-xl sm:text-2xl  tracking-wider">
          Popular Tv Shows
        </h1>
        <div className="md:mt-8 w-full mb-12">
          {PopularSeriesData && PopularSeriesData.length > 0 ? (
            <div>
              <CardCarousel slides={PopularSeriesData} />
            </div>
          ) : (
            <div className="text-white">No movies available</div>
          )}
        </div>
      </div>
      {/* {Top Rated area} */}

      <div className="md:mt-[100px] mt-7 md:px-14 px-3">
        <h1 className="text-white font-bold text-xl sm:text-2xl  tracking-wider">
          Top Rated Tv
        </h1>
        <div className="md:mt-8 w-full mb-12">
          {TopRatedSeriesData && TopRatedSeriesData.length > 0 ? (
            <div>
              <CardCarousel slides={TopRatedSeriesData} />
            </div>
          ) : (
            <div className="text-white">No movies available</div>
          )}
        </div>
      </div>
    </div>
  );
}

import { NavLink, Outlet } from "react-router-dom";
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
// import {
//     Breadcrumb,
//     BreadcrumbItem,
//     BreadcrumbLink,
//     BreadcrumbList,
//     BreadcrumbPage,
//     BreadcrumbSeparator,
//   } from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator";

import { AppSidebar } from "@/components/app-sidebar";
import { Heart, Clapperboard, Tv, Play } from "lucide-react";

export default function HomePage() {
  const movies = [
    {
      title: "Movies",
      url: "#",
      icon: Clapperboard,
    },
    {
      title: "Series",
      url: "#",
      icon: Tv,
    },
    {
      title: "Watchlist",
      url: "#",
      icon: Heart,
    },
    {
      title: "Playlist",
      url: "#",
      icon: Play,
    },
  ];

  return (
    <div className="flex bg-stone-950">
      <div className="flex flex-col">
        <SidebarProvider>
          <AppSidebar movies={movies} tryr="try" />
        </SidebarProvider>
        {/* {movies.map((movie) => (
          <NavLink
            // className={(isActive) => {
            //   return isActive ? "text-red-500" : "";
            // }}
            key={movie}
            to={`/home/${movie}`}
          >
            Movie {movie}
          </NavLink>
        ))} */}
      </div>

      <Outlet />
    </div>
  );
}

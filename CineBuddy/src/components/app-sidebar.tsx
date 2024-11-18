import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";

import { Heart, Clapperboard, Tv, Play } from "lucide-react";
import { Link } from "react-router-dom";

// Menu items.

interface movieProps {
  title: string;
  url: string;
  icon: string;
}

const items = [
  {
    title: "Movies",
    url: "/home/movies",
    icon: Clapperboard,
    id: 1,
  },
  {
    title: "Series",
    url: "/home/series",
    icon: Tv,
    id: 2,
  },
  {
    title: "Watchlist",
    url: "#",
    icon: Heart,
    id: 3,
  },
  {
    title: "Playlist",
    url: "#",
    icon: Play,
    id: 4,
  },
];

export function AppSidebar({ movies, tryr }: any) {
  console.log("movies and tryr:", movies, tryr);
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xl font-bold md:mb-5 hover:cursor-pointer">
            Cine<span className="text-red-600">Buddy</span>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((movie: any) => (
                <SidebarMenuItem key={movie.title}>
                  <SidebarMenuButton className="md:mt-2" asChild>
                    <Link className="hover:text-red-600 gap-3" to={movie.url}>
                      <movie.icon />
                      <span>{movie.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

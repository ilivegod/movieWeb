import { useParams } from "react-router-dom";
import { Input } from "@/components/ui/input";

import { Search, CircleUserRound, Bell } from "lucide-react";
import Carousel from "@/components/Carousel";

export default function RightHomePage() {
  const params = useParams();

  console.log(params);
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
        <Carousel />
      </div>
    </div>
  );
}

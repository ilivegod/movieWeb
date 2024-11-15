import * as React from "react";

import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex items-center gap-3 h-10 w-64 rounded-full border border-gray-800  bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
      >
        <Search size={20} color="gray" />
        <input className="bg-transparent" type={type} ref={ref} {...props} />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };

// border-input

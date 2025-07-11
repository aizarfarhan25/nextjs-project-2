import StarIcon from "@/assets/icons/star.svg";
import { twMerge } from "tailwind-merge";
import { ReactNode } from "react";

export const CardHeader = ({
  title,
  description,
  className,
}: {
  title: ReactNode;
  description: string;
  className?: string;
}) => {
  return (
    <div className={twMerge("flex flex-col p-6 md:py-8 md:px-10", className)}>
      <div className="inline-flex items-center gap-2">
        <StarIcon className="size-9 text-amber-300" />
        <h3 className="font-beni font-bold text-2xl">{title}</h3>
      </div>
      <p className="text-sm lg:text-base max-w-sm text-white/60 mt-2">{description}</p>
    </div>
  );
};

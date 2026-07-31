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
        <h3 className="font-sans text-2xl font-bold">{title}</h3>
      </div>
      <p className="mt-2 max-w-prose text-sm text-white/60 lg:text-base">{description}</p>
    </div>
  );
};

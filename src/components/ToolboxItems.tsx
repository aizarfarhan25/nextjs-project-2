"use client";

import { twMerge } from "tailwind-merge";
import { TechIcon } from "./TechIcon";
import { Fragment } from "react";
import { motion } from "framer-motion";

export const ToolboxItems = ({
  items,
  className,
  itemsWrapperClassName,
}: {
  items: {
    title: string;
    iconType: React.ElementType;
  }[];
  className?: string;
  itemsWrapperClassName?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={twMerge(
          "flex flex-none py-0.5 gap-6 pr-6",
          itemsWrapperClassName
        )}
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <Fragment key={index}>
            {items.map((item, itemIndex) => (
              <motion.div
                key={`${item.title}-${index}`}
                className="inline-flex items-center gap-4 py-3 px-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-white/5 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/5 group cursor-pointer"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(31, 41, 55, 0.8)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: itemIndex * 0.05 + index * 0.1 }
                }}
              >
                <div className="relative overflow-hidden rounded-lg p-1 group-hover:scale-110 transition-transform duration-300">
                  <TechIcon component={item.iconType} />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100"
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 3, ease: "linear", repeat: Infinity }}
                  />
                </div>
                <span className="font-semibold text-gray-200 group-hover:text-white transition-colors duration-300">{item.title}</span>
              </motion.div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

import memojiImage from "@/assets/images/me.jpg";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";

export const HeroSection = () => {
  return (
    <div className="py-32">
      <div className="container">
        <div className="flex flex-col items-center gap-1">
          <Image
            src={memojiImage}
            className="size-24 rounded-full"
            alt="Picture of me"
          />
          <div className="bg-gray-900 border border-violet-400 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-medium">Available for new projects</div>
          </div>
        </div>
        <h1 className="font-satoshi">Front-end Developer and Quality Assurance</h1>
        <p>Final Year Studend at Binus University // QA Intern</p>
        <div>
          <button>
            <span>Explore My Work</span>
            <ArrowDown />
          </button>
          <button>
            <span>👋🏽</span>
            <span>Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};

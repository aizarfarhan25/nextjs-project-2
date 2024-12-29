import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <div id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-yellow-300 to-amber-400 text-gray-950 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-beni font-bold text-2xl md:text-3xl">
                Let&#39;s Create Something Great Together!
              </h2>
              <p className="text-sm md:text-base mt-2">
                I&#39;m always excited to connect and discuss about exciting
                project or just want to say hi, feel free to reach out!
              </p>
            </div>
            <div>
              <a
                href="mailto:andiaizarfarhan@gmail.com"
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-950 hover:cursor-pointer"
              >
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

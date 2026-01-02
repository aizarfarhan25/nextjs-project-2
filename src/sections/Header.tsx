import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconCode, IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export const Header = () => {
  return (
    // <div className="flex justify-center items-center fixed top-3 w-full z-10">
    //   <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
    //     <a href="" className="nav-item">Home</a>
    //     <a href="" className="nav-item">Project</a>
    //     <a href="" className="nav-item">About</a>
    //     <a href="" className="nav-item bg-amber-400 text-gray-900 hover:bg-amber-600 hover:text-gray-900">Contact</a>
    //   </nav>
    // </div>

    <div>
      <FloatingNav
      navItems={[
        {
          name: "Home",
          link: "#home",
          icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white block" />,
        },
        {
          name: "Project",
          link: "#project",
          icon: <IconCode className="h-4 w-4 text-neutral-500 dark:text-white block" />,
        },
        {
          name: "Experience",
          link: "#experience",
          icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white block" />,
        },
        {
          name: "About",
          link: "#about",
          icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white block" />,
        },
        {
          name: "Contact",
          link: "#contact",
          icon: (
            <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white block" />
          ),
        },
      ]}
      />
    </div>
    
  );
};

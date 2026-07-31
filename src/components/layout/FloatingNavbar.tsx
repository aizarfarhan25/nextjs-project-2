"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  IconBriefcase,
  IconCode,
  IconHome,
  IconMessage,
  IconUser,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { navItems } from "@/data/site";
import { useModal } from "@/providers/ModalProvider";

const navIcons: Record<string, React.ReactNode> = {
  Home: <IconHome className="h-4 w-4" />,
  Projects: <IconCode className="h-4 w-4" />,
  Experiences: <IconBriefcase className="h-4 w-4" />,
  "About Me": <IconUser className="h-4 w-4" />,
  Contacts: <IconMessage className="h-4 w-4" />,
};

const sectionIds = ["home", "project", "experience", "about", "contact"];

export function FloatingNavbar() {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastScrollY = useRef(0);
  const { isOpen: isModalOpen } = useModal();

  const showNavbar = () => {
    setVisible(true);
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    hideTimeoutRef.current = setTimeout(() => setVisible(false), 2500);
  };

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (isModalOpen) {
        lastScrollY.current = y;
        return;
      }
      if (y < 80) {
        setVisible(false);
        if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
      } else {
        showNavbar();
      }
      lastScrollY.current = y;
    };

    const onActivity = () => {
      if (!isModalOpen && window.scrollY >= 80) showNavbar();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("wheel", onActivity, { passive: true });
    window.addEventListener("touchmove", onActivity, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", onActivity);
      window.removeEventListener("touchmove", onActivity);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, [isModalOpen]);

  useEffect(() => {
    if (isModalOpen) {
      setVisible(false);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    }
  }, [isModalOpen]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <AnimatePresence>
      {visible && !isModalOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.25 }}
          className="glass-nav fixed top-6 inset-x-0 z-[5000] mx-auto flex w-fit max-w-[92vw] items-center justify-center gap-1 overflow-x-auto scrollbar-hide px-4 py-2 md:gap-2 md:px-6"
          aria-label="Main navigation"
        >
          {navItems.map((item) => {
            const sectionId = item.link.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <Link
                key={item.link}
                href={item.link}
                className={cn(
                  "flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors duration-200",
                  isActive
                    ? "text-accent bg-accent-muted"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                )}
              >
                <span>{navIcons[item.name]}</span>
                <span className="hidden md:inline">{item.name}</span>
              </Link>
            );
          })}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

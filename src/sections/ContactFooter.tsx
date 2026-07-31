"use client";

import { motion } from "framer-motion";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { siteConfig, socialLinks } from "@/data/site";

const socialIcons = {
  LinkedIn: IconBrandLinkedin,
  GitHub: IconBrandGithub,
  Instagram: IconBrandInstagram,
  Email: IconMail,
} as const;

export function ContactFooter() {
  const endYear = new Date().getFullYear();

  return (
    <footer id="contact" className="section-pad pb-12">
      <div className="container max-w-6xl">
        <div className="glass-surface flex flex-col gap-8 p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <div className="max-w-md">
            <h2 className="font-sans text-2xl font-bold text-white md:text-3xl">
              Let&apos;s Create Something Great Together!
            </h2>
            <p className="pro-body mt-3 text-sm md:text-base">
              I&apos;m always excited to connect and discuss exciting projects
              or just want to say hi — feel free to reach out!
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-6 inline-flex h-12 items-center gap-2 rounded-3xl bg-white px-6 font-semibold text-gray-950 transition-transform hover:scale-105"
            >
              Contact Me
              <ArrowUpRightIcon className="size-4" />
            </a>
          </div>

          <nav
            className="grid grid-cols-4 items-center justify-items-center gap-4 sm:gap-6 md:justify-items-end md:gap-8"
            aria-label="Social links"
          >
            {socialLinks.map((link, index) => {
              const Icon =
                socialIcons[link.title as keyof typeof socialIcons] ?? IconMail;
              return (
                <motion.a
                  key={link.title}
                  href={link.href}
                  target={link.target}
                  rel={link.rel}
                  aria-label={link.title}
                  className="group flex flex-col items-center gap-2 text-white/70 transition-colors hover:text-accent-hover"
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.4,
                    ease: "easeInOut",
                  }}
                  whileHover={{ scale: 1.08 }}
                >
                  <span className="flex size-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] shadow-[0_0_20px_rgba(0,0,0,0.2)] transition-all group-hover:border-accent/40 group-hover:bg-accent-muted group-hover:shadow-[0_0_20px_rgba(201,168,76,0.2)]">
                    <Icon className="size-5" stroke={1.5} />
                  </span>
                  <span className="text-xs font-medium">{link.title}</span>
                </motion.a>
              );
            })}
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-secondary md:flex-row">
          <p>
            &copy; {siteConfig.copyrightStartYear}&ndash;{endYear}. All rights
            reserved.
          </p>
          <p className="text-tertiary">{siteConfig.name}</p>
        </div>
      </div>
    </footer>
  );
}

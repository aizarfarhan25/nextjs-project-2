"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import type { Project, WorkExperience } from "@/data/types";

type ModalType = "project" | "experience" | null;

interface ModalContextValue {
  type: ModalType;
  project: Project | null;
  experience: WorkExperience | null;
  isOpen: boolean;
  openProject: (project: Project) => void;
  openExperience: (experience: WorkExperience) => void;
  close: () => void;
}

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [type, setType] = useState<ModalType>(null);
  const [project, setProject] = useState<Project | null>(null);
  const [experience, setExperience] = useState<WorkExperience | null>(null);

  const openProject = useCallback((p: Project) => {
    setProject(p);
    setExperience(null);
    setType("project");
  }, []);

  const openExperience = useCallback((e: WorkExperience) => {
    setExperience(e);
    setProject(null);
    setType("experience");
  }, []);

  const close = useCallback(() => {
    setType(null);
    setProject(null);
    setExperience(null);
  }, []);

  const value = useMemo(
    () => ({
      type,
      project,
      experience,
      isOpen: type !== null,
      openProject,
      openExperience,
      close,
    }),
    [type, project, experience, openProject, openExperience, close]
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) {
    throw new Error("useModal must be used within ModalProvider");
  }
  return ctx;
}

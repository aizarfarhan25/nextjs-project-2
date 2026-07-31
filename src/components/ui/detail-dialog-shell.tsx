"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { IconX } from "@tabler/icons-react";
import type { ReactNode } from "react";
import {
  Dialog,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@/components/ui/dialog";
import { GlassModalShell } from "@/components/ui/GlassModal";

interface DetailDialogShellProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  meta?: ReactNode;
  tabs: ReactNode;
  children: ReactNode;
}

/** Shared header/tab-bar/scroll-area chrome for the project and experience detail dialogs. */
export function DetailDialogShell({
  open,
  onOpenChange,
  title,
  meta,
  tabs,
  children,
}: DetailDialogShellProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay />
        <DialogPrimitive.Content asChild>
          <GlassModalShell>
            <div className="sticky top-0 z-10 flex flex-col border-b border-glass-border bg-space-elevated/80 backdrop-blur-xl">
              <div className="flex items-start justify-between gap-4 p-6 pb-4">
                <div className="flex flex-col gap-2">
                  <DialogTitle className="bg-gradient-to-r from-accent to-accent-hover bg-clip-text font-sans text-2xl font-bold text-transparent drop-shadow-sm md:text-3xl">
                    {title}
                  </DialogTitle>
                  <DialogDescription className="sr-only">
                    Detailed information about {title}
                  </DialogDescription>
                  {meta}
                </div>
                <DialogPrimitive.Close className="rounded-full border border-transparent bg-white/5 p-2 text-secondary transition-all duration-200 hover:border-glass-border hover:bg-white/10 hover:text-white">
                  <IconX size={20} />
                  <span className="sr-only">Close</span>
                </DialogPrimitive.Close>
              </div>
              <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide px-6 pb-0">
                {tabs}
              </div>
              <div className="h-px w-full bg-glass-border" />
            </div>

            <div className="relative flex-1 overflow-y-auto bg-gradient-to-b from-space-elevated to-space p-6 md:p-8">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
              <div className="relative z-10 min-h-[300px]">{children}</div>
            </div>
          </GlassModalShell>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
}

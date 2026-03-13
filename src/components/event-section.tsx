'use client'

import * as Dialog from "@radix-ui/react-dialog";
import { IconArrowRight, IconX } from "@tabler/icons-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { GlowingEffect } from "./ui/glowing-effect";

export type EventItem = {
  title: string;
  role: string;
  summary: string;
  responsibilities: string[];
  impact: string[];
  links: { label: string; href: string }[];
  thumb?: string;
  images?: string[];
};

export function EventsSection({ events }: { events: EventItem[] }) {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const activeImageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!selectedEvent) {
      setActiveImage(null);
      return;
    }

    setActiveImage(selectedEvent.thumb || selectedEvent.images?.[0] || null);
  }, [selectedEvent]);

  useEffect(() => {
    if (!activeImage) {
      return;
    }

    activeImageRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [activeImage]);

  return (
    <>
      <div className="grid gap-6 lg:grid-cols-2">
        {events.map((event) => (
          <div
            key={event.title}
            onClick={() => setSelectedEvent(event)}
            className="group relative cursor-pointer rounded-3xl border border-main/10 bg-background/80 p-6 shadow-lg shadow-black/5 transition hover:-translate-y-1 hover:border-main/30 dark:bg-neutral-900/60"
          >
            <GlowingEffect
              blur={0}
              borderWidth={5}
              spread={120}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className="flex h-full flex-col gap-4">
              <div className="relative">
                <Image src={event.thumb || ''} alt={event.title || 'thumbnail'} width={1000} height={1000} className="size-full aspect-video object-cover rounded-2xl" />
              </div>
              <div className="space-y-2">
                <p className="text-xs uppercase text-main/60 dark:text-sub/70">{event.role}</p>
                <h2 className="text-lg font-semibold text-main dark:text-sub md:text-xl">
                  {event.title}
                </h2>
                <p className="text-sm  dark:text-sub/80">{event.summary}</p>
              </div>

            </div>
          </div>
        ))}
      </div>

      <Dialog.Root open={Boolean(selectedEvent)} onOpenChange={(open) => !open && setSelectedEvent(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-main/15 backdrop-blur-sm" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[94vw] h-[95vh] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl border border-main/15 bg-background/95 p-6 shadow-2xl outline-none md:p-8">
            <Dialog.Close className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-main/10 bg-background/70 text-main transition hover:border-main/40 hover:bg-main/10 dark:text-sub">
              <IconX className="h-5 w-5" />
              <span className="sr-only">Đóng</span>
            </Dialog.Close>

            {selectedEvent && (
              <div className="grid gap-6 lg:grid-cols-[minmax(0,calc(100%-520px))_minmax(0,520px)]">
                <div className="flex flex-col gap-4">
                  <div ref={activeImageRef} className="group relative w-full overflow-hidden rounded-2xl border border-main/10 bg-main/5">
                    {activeImage ? (
                      <Image
                        src={activeImage}
                        alt={selectedEvent.title}
                        width={1400}
                        height={900}
                        className="h-full max-h-[calc(100vh-7rem)] w-full object-contain transition-transform duration-300 group-hover:scale-101"
                      />
                    ) : (
                      <div className="flex h-[320px] w-full items-center justify-center text-xs text-main/60 dark:text-sub/70">
                        Chưa có hình ảnh
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-6 pr-2 overflow-y-scroll max-h-[calc(100vh-7rem)]">
                  <div className="space-y-2">
                    <p className="text-xs uppercase w-fit px-2 py-1 rounded-full border border-main/10 bg-main/5 text-main/60 dark:text-sub/70">
                      {selectedEvent.role}
                    </p>
                    <Dialog.Title className="text-2xl font-semibold text-main dark:text-sub md:text-3xl">
                      {selectedEvent.title}
                    </Dialog.Title>
                    <p className="text-sm text-main/70 dark:text-sub/80">{selectedEvent.summary}</p>
                  </div>

                  <div className="rounded-2xl border border-main/10 bg-main/5 p-4">
                    <p className="text-xs uppercase text-main/60 dark:text-sub/70">Tôi đã làm gì?</p>
                    <ul className="mt-3 space-y-2 text-sm text-main/80 dark:text-sub/85">
                      {selectedEvent.responsibilities.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 size-1.5 rounded-full bg-main" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2 rounded-2xl border border-main/10 bg-main/5 p-4">
                    <p className="text-xs uppercase text-main/60 dark:text-sub/70">Impact</p>
                    <ul className="space-y-2 text-sm text-main/80 dark:text-sub/85">
                      {selectedEvent.impact.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 size-1.5 rounded-full bg-main" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {selectedEvent.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-main/15 bg-background px-4 py-2 text-xs font-semibold uppercase text-main transition hover:border-main/40 hover:bg-main/5 dark:text-sub"
                      >
                        {link.label}
                        <IconArrowRight className="size-4" />
                      </a>
                    ))}
                  </div>
                  {selectedEvent.images?.length ? (
                    <div className="grid grid-cols-2 gap-2">
                      {[selectedEvent.thumb, ...selectedEvent.images].filter((image): image is string => Boolean(image)).map((image) => (
                        <button
                          key={image}
                          type="button"
                          onClick={() => setActiveImage(image)}
                          className={`relative overflow-hidden rounded-xl border bg-main/5 transition ${activeImage === image
                            ? "border-main shadow-[0_0_0_2px_rgba(31,41,55,0.15)]"
                            : "border-main/10 hover:border-main/40"
                            }`}
                        >
                          <Image
                            src={image}
                            alt={`${selectedEvent.title} thumbnail`}
                            width={240}
                            height={240}
                            className="h-auto w-full object-contain hover:scale-105 transition-transform duration-300"
                          />
                        </button>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}
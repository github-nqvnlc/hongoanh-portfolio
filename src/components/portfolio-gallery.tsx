'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { IconArrowRight, IconX } from '@tabler/icons-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { GlowingEffect } from './ui/glowing-effect'

export type PortfolioItem = {
  src?: string
  title?: string
  tag: string
  link?: string
  column?: number
  row?: number
  videoUrl?: string
  content?: string
  aspect?: string
}

const TAB_LOADING_DELAY_MS = 1000
const VIDEO_TAG = 'Video'

function getVideoEmbedUrl(videoUrl?: string) {
  if (!videoUrl) {
    return null
  }

  try {
    const url = new URL(videoUrl)
    const hostname = url.hostname.replace('www.', '')

    if (hostname === 'youtu.be') {
      const videoId = url.pathname.split('/').filter(Boolean)[0]
      return videoId ? `https://www.youtube.com/embed/${videoId}` : null
    }

    if (hostname.includes('youtube.com')) {
      if (url.pathname.startsWith('/embed/')) {
        return videoUrl
      }

      if (url.pathname.startsWith('/shorts/')) {
        const videoId = url.pathname.split('/').filter(Boolean)[1]
        return videoId ? `https://www.youtube.com/embed/${videoId}` : null
      }

      const videoId = url.searchParams.get('v')
      return videoId ? `https://www.youtube.com/embed/${videoId}` : null
    }

    if (hostname.includes('vimeo.com')) {
      const videoId = url.pathname.split('/').filter(Boolean).find((segment) => /^\d+$/.test(segment))
      return videoId ? `https://player.vimeo.com/video/${videoId}` : null
    }
  } catch {
    return null
  }

  return null
}

function getItemTitle(item: PortfolioItem) {
  return item.title || (item.videoUrl ? 'Video portfolio' : 'Chi tiết dự án')
}

function getItemDescription(item: PortfolioItem) {
  if (item.content) {
    return item.content
  }

  if (item.videoUrl) {
    return 'Video được nhúng trực tiếp để bạn xem chi tiết hơn trong popup này. Bạn có thể mở nguồn gốc từ YouTube hoặc Vimeo qua nút bên dưới.'
  }

  return 'Đây là hạng mục trong portfolio của tôi. Popup này giúp xem hình ảnh ở kích thước lớn hơn và đọc nhanh thông tin chính của dự án.'
}

export function PortfolioGallery({ portfolioItems }: { portfolioItems: PortfolioItem[] }) {
  const portfolioTags = Array.from(new Set([...portfolioItems.map((item) => item.tag), VIDEO_TAG]))
  const [activeTag, setActiveTag] = useState(() => portfolioTags[0] ?? '')
  const [visibleTag, setVisibleTag] = useState(() => portfolioTags[0] ?? '')
  const [isLoading, setIsLoading] = useState(false)
  const [isContentVisible, setIsContentVisible] = useState(true)
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)

  useEffect(() => {
    if (!portfolioTags.length) {
      setActiveTag('')
      setVisibleTag('')
      setIsLoading(false)
      setIsContentVisible(true)
      setSelectedItem(null)
      return
    }

    if (!portfolioTags.includes(activeTag)) {
      const nextTag = portfolioTags[0]
      setActiveTag(nextTag)
      setVisibleTag(nextTag)
      setIsLoading(false)
      setIsContentVisible(true)
      setSelectedItem(null)
    }
  }, [activeTag, portfolioTags])

  useEffect(() => {
    if (!activeTag || activeTag === visibleTag) {
      return
    }

    setSelectedItem(null)
    setIsLoading(true)
    setIsContentVisible(false)

    const timeoutId = window.setTimeout(() => {
      setVisibleTag(activeTag)
      setIsLoading(false)

      window.requestAnimationFrame(() => {
        setIsContentVisible(true)
      })
    }, TAB_LOADING_DELAY_MS)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [activeTag, visibleTag])

  const filteredItems = portfolioItems.filter((item) => item.tag === visibleTag)
  const upcomingItems = portfolioItems.filter((item) => item.tag === activeTag)
  const loadingPlaceholderCount = Math.min(Math.max(upcomingItems.length || 4, 4), 8)
  const selectedEmbedUrl = getVideoEmbedUrl(selectedItem?.videoUrl)
  const selectedTitle = selectedItem ? getItemTitle(selectedItem) : 'Chi tiết portfolio'

  return (
    <Dialog.Root
      open={Boolean(selectedItem)}
      onOpenChange={(open) => {
        if (!open) {
          setSelectedItem(null)
        }
      }}
    >
      <div className="w-full space-y-6">
        <div className="overflow-x-auto pb-2">
          <div className="flex min-w-max items-center justify-center gap-3">
            {portfolioTags.map((tag) => {
              const isActive = tag === activeTag

              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => {
                    if (tag === activeTag) {
                      return
                    }

                    setActiveTag(tag)
                  }}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${isActive
                    ? 'border-main bg-main text-background shadow-md shadow-main/20'
                    : 'border-main/15 bg-background/60 text-main/70 hover:border-main/40 hover:text-main'
                    }`}
                >
                  {tag}
                </button>
              )
            })}
          </div>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-2 lg:grid-cols-4">
            {Array.from({ length: loadingPlaceholderCount }).map((_, index) => (
              <div
                key={`loading-${index}`}
                className="overflow-hidden rounded-sm border border-main/10 bg-background/50 backdrop-blur-md animate-pulse"
              >
                <div className="aspect-[4/5] w-full bg-main/10 blur-sm" />
                <div className="space-y-3 p-3">
                  <div className="h-3 w-24 rounded-full bg-main/10 blur-[1px]" />
                  <div className="h-4 w-3/4 rounded-full bg-main/10 blur-[1px]" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            className={`grid grid-cols-1 gap-1 transition-all duration-700 ease-in-out md:grid-cols-3 md:gap-2 lg:grid-cols-4 ${isContentVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-md'
              }`}
          >
            {filteredItems.length === 0 ? (
              <div className="col-span-full rounded-2xl border border-main/15 bg-background/70 p-8 text-center backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.35em] text-main/60">{visibleTag}</p>
                <h3 className="mt-3 text-2xl font-semibold text-main dark:text-sub">Chưa có nội dung cho tab này</h3>
                <p className="mx-auto mt-3 max-w-2xl text-sm text-main/70 dark:text-sub/80">
                  {visibleTag === VIDEO_TAG
                    ? 'Các video đã sẵn sàng. Bạn chỉ cần thêm item có tag Video cùng videoUrl từ YouTube hoặc Vimeo vào dữ liệu portfolio.'
                    : 'Tôi chưa bổ sung nội dung cho tab này.'}
                </p>
              </div>
            ) : (
              filteredItems.map((item, index) => {
                const embedUrl = getVideoEmbedUrl(item.videoUrl)
                const isVideo = Boolean(embedUrl)

                return (
                  <div
                    key={`${item.title ?? item.src ?? item.videoUrl}-${index}`}
                    className={`${item.column ? `lg:col-span-${item.column}` : ''} ${item.row ? `row-span-${item.row}` : ''} relative w-full rounded-sm`}
                  >
                    <GlowingEffect
                      blur={0}
                      borderWidth={4}
                      spread={60}
                      glow={true}
                      disabled={false}
                      proximity={64}
                      inactiveZone={1}
                    />
                    <button
                      type="button"
                      onClick={() => setSelectedItem(item)}
                      className="relative block w-full text-left cursor-pointer"
                    >
                      <div className="relative group/item overflow-hidden rounded-sm border border-main/20 bg-background/70 backdrop-blur-sm transition-all duration-300 hover:shadow-xl">
                        <div className="relative w-full overflow-hidden ">
                          {isVideo ? (
                            item.src ? (
                              <Image
                                src={item.src}
                                alt={item.title || 'Video preview'}
                                width={1600}
                                height={2000}
                                className="size-full object-cover object-center transition-transform duration-300 group-hover/item:scale-105"
                              />
                            ) : (
                              <div className={`flex ${item.aspect ? `aspect-[${item.aspect}]` : ''} items-center justify-center px-6 text-center group-hover/item:bg-gradient-to-br group-hover/item:from-main/30 group-hover/item:via-background/70 group-hover/item:to-background`}>
                                <iframe
                                  src={embedUrl || ''}
                                  title={item.title || 'Video preview'}
                                  className="absolute inset-0 h-full w-full"
                                  loading="lazy"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                  referrerPolicy="strict-origin-when-cross-origin"
                                  allowFullScreen
                                />
                              </div>
                            )
                          ) : item.src ? (
                            <Image
                              src={item.src}
                              alt={item.title || ''}
                              width={2500}
                              height={2500}
                              className="size-full object-cover object-center transition-transform duration-300 group-hover/item:scale-105"
                            />
                          ) : (
                            <div className="flex aspect-[4/5] items-center justify-center px-6 text-center text-sm text-main/70 dark:text-sub/80">
                              Không có ảnh xem trước cho hạng mục này.
                            </div>
                          )}

                        </div>
                      </div>
                    </button>
                  </div>
                )
              })
            )}
          </div>
        )}
      </div>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 grid max-h-[90vh] w-[calc(100vw-1.5rem)] max-w-7xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl border border-main/15 bg-background/95 shadow-2xl outline-none lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)]">
          <Dialog.Close className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white transition-colors duration-300 hover:bg-black/70">
            <IconX className="h-5 w-5" />
            <span className="sr-only">Đóng</span>
          </Dialog.Close>

          <div className="relative min-h-[320px] bg-black/90 lg:min-h-[80vh]">
            {selectedItem ? (
              selectedEmbedUrl ? (
                <iframe
                  src={selectedEmbedUrl}
                  title={selectedTitle}
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : selectedItem.src ? (
                <Image
                  src={selectedItem.src}
                  alt={selectedTitle}
                  fill
                  sizes="(min-width: 1024px) 70vw, 100vw"
                  className="object-contain"
                />
              ) : (
                <div className="flex h-full min-h-[320px] items-center justify-center px-6 text-center text-sm text-white/75">
                  Không có media để hiển thị cho hạng mục này.
                </div>
              )
            ) : null}
          </div>

          <div className="flex max-h-[90vh] flex-col overflow-y-auto p-6 lg:p-8">
            <Dialog.Title className="text-2xl font-semibold text-main dark:text-sub lg:text-4xl">
              {selectedTitle}
            </Dialog.Title>
            <Dialog.Description className="sr-only">
              {selectedItem ? getItemDescription(selectedItem) : 'Chi tiết portfolio'}
            </Dialog.Description>

            {selectedItem && (
              <div className="mt-6 flex flex-1 flex-col">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-main/15 bg-main/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-main dark:text-sub">
                    {selectedItem.tag}
                  </span>
                  {selectedItem.videoUrl && (
                    <span className="rounded-full border border-main/15 bg-background px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-main/70 dark:text-sub/80">
                      Video embed
                    </span>
                  )}
                </div>

                <div className="mt-6 rounded-2xl border border-main/10 bg-main/5 p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-main/60 dark:text-sub/70">Nội dung</p>
                  <p className="mt-3 whitespace-pre-line text-sm leading-7 text-main/80 dark:text-sub/85 lg:text-base">
                    {getItemDescription(selectedItem)}
                  </p>
                </div>

                <div className="mt-6 space-y-3">
                  <p className="text-xs uppercase tracking-[0.25em] text-main/60 dark:text-sub/70">Liên kết</p>
                  <div className="flex flex-wrap gap-3">
                    {selectedItem.link && (
                      <a
                        href={selectedItem.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-main/15 bg-background px-4 py-2 text-sm font-medium text-main transition-colors duration-300 hover:border-main/35 hover:bg-main/5 dark:text-sub"
                      >
                        Xem nguồn
                        <IconArrowRight className="h-4 w-4" />
                      </a>
                    )}
                    {selectedItem.videoUrl && selectedItem.videoUrl !== selectedItem.link && (
                      <a
                        href={selectedItem.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-main/15 bg-background px-4 py-2 text-sm font-medium text-main transition-colors duration-300 hover:border-main/35 hover:bg-main/5 dark:text-sub"
                      >
                        Mở video gốc
                        <IconArrowRight className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

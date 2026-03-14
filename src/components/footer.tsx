'use client'

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-main/10 bg-background/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-lg font-semibold text-main dark:text-sub">Hồng Oanh</p>
          <p className="text-sm text-main/60 dark:text-sub/70">Marketing & Creative Strategy</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-main/70 dark:text-sub/80">
          <a href="#about" className="transition hover:text-main dark:hover:text-sub">About</a>
          <a href="#experience" className="transition hover:text-main dark:hover:text-sub">Experience</a>
          <a href="#events" className="transition hover:text-main dark:hover:text-sub">Events</a>
          <a href="#awards" className="transition hover:text-main dark:hover:text-sub">Awards</a>
          <a href="#contact" className="transition hover:text-main dark:hover:text-sub">Contact</a>
        </div>

        <div className="text-xs text-main/50 dark:text-sub/60">
          © {new Date().getFullYear()} Hồng Oanh. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

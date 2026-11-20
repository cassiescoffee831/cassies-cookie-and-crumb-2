import { Camera } from "lucide-react";

type VideoCardProps = { src: string; caption: string };

function VideoCard({ src, caption }: VideoCardProps) {
  return (
    <figure className="flex flex-col gap-2">
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="aspect-[9/16] w-full rounded-lg border border-line object-contain shadow-card"
      />
      <figcaption className="text-sm leading-relaxed text-cream/75 md:text-base">{caption}</figcaption>
    </figure>
  );
}

export function Gallery() {
  return (
    <section id="gallery" className="bg-nude">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="kicker inline-flex items-center gap-2">
              <Camera className="size-4 text-amber" aria-hidden />
              05 — Lookbook
            </span>
            <h2 className="mt-4 font-display text-5xl font-semibold leading-[0.95] md:text-7xl">
              The <em>Feed</em>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Pours, pulls and fresh bakes from the pop-up.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <VideoCard src="/videos/IMG_9266.mp4" caption="Pulling the espresso shot" />
          <VideoCard src="/videos/IMG_9267.mp4" caption="Steaming the milk" />
          <VideoCard src="/videos/IMG_9269.mp4" caption="Pouring the latte" />
          <VideoCard src="/videos/IMG_9270.mp4" caption="Drizzling the sweetener" />
          <VideoCard src="/videos/IMG_9271.mp4" caption="Shaking the espresso over ice" />
          <VideoCard src="/videos/IMG_9272.mp4" caption="Foaming the milk" />
          <VideoCard src="/videos/IMG_9273.mp4" caption="Building the drink" />
          <VideoCard src="/videos/IMG_9277.mp4" caption="Finishing with the foam swirl" />
        </div>
      </div>
    </section>
  );
}

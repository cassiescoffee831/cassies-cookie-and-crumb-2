import { Play } from "lucide-react";
import { useRef, useState } from "react";

type VideoCardProps = { src: string; poster: string; caption: string };

function VideoCard({ src, poster, caption }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const startPlaying = () => {
    const video = videoRef.current;
    if (!video) return;
    video.controls = true;
    video.play().catch(() => {});
    setIsPlaying(true);
  };

  // One at a time: when this video starts playing, pause every other gallery video.
  const handlePlay = () => {
    const others = document.querySelectorAll<HTMLVideoElement>("section#gallery video");
    others.forEach((v) => {
      if (v !== videoRef.current) v.pause();
    });
  };

  return (
    <figure className="relative flex flex-col gap-2">
      <div className="relative">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          preload="none"
          style={{ transform: "translateZ(0)" }}
          onPlay={handlePlay}
          onPause={() => setIsPlaying(false)}
          aria-label={caption}
          className="aspect-[9/16] w-full rounded-lg border border-line object-contain shadow-card"
        />
        {!isPlaying && (
          <button
            type="button"
            onClick={startPlaying}
            className="absolute inset-0 flex items-center justify-center"
            aria-label={`Play ${caption}`}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-amber bg-nude/90">
              <Play className="size-5 text-espresso" aria-hidden />
            </span>
          </button>
        )}
      </div>
      <figcaption className="text-sm leading-relaxed text-espresso md:text-base">{caption}</figcaption>
    </figure>
  );
}

export function Gallery() {
  const videos = [
    { src: "/videos/IMG_9266.mp4", poster: "/videos/poster-9266.jpg", caption: "Pulling the espresso shot" },
    { src: "/videos/IMG_9267.mp4", poster: "/videos/poster-9267.jpg", caption: "Pouring the shot" },
    { src: "/videos/IMG_9269.mp4", poster: "/videos/poster-9269.jpg", caption: "Pouring the latte" },
    { src: "/videos/IMG_9270.mp4", poster: "/videos/poster-9270.jpg", caption: "Drizzling the caramel" },
    { src: "/videos/IMG_9271.mp4", poster: "/videos/poster-9271.jpg", caption: "Shaking the espresso over ice" },
    { src: "/videos/IMG_9272.mp4", poster: "/videos/poster-9272.jpg", caption: "Foaming the milk" },
    { src: "/videos/IMG_9273.mp4", poster: "/videos/poster-9273.jpg", caption: "Building the drink" },
    { src: "/videos/IMG_9277.mp4", poster: "/videos/poster-9277.jpg", caption: "Finishing with the foam swirl" },
  ];

  return (
    <section id="gallery" className="bg-nude">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="mt-4 font-display text-5xl font-semibold leading-[0.95] md:text-7xl">
              The <em>Feed</em>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Pours, pulls and fresh bakes from the pop-up.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {videos.map((v) => (
            <VideoCard key={v.src} src={v.src} poster={v.poster} caption={v.caption} />
          ))}
        </div>
      </div>
    </section>
  );
}

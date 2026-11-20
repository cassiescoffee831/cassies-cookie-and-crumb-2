import { createFileRoute } from "@tanstack/react-router";

import { Bakery } from "@/components/site/Bakery";
import { CafeMusicPlayer } from "@/components/site/CafeMusicPlayer";
import { Contact } from "@/components/site/Contact";
import { Flavors } from "@/components/site/Flavors";
import { Gallery } from "@/components/site/Gallery";
import { Hero } from "@/components/site/Hero";
import { MenuBoard } from "@/components/site/MenuBoard";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Upgrades } from "@/components/site/Upgrades";

const title = "Cup & Crumb by Cassie — Specialty Coffee & Cookies, Watsonville";
const description =
  "Small-batch specialty espresso, house flavor lattes and homemade cookies & pastries by Cassie. Pop-ups and pre-orders in Watsonville, CA.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CafeMusicPlayer />
      <SiteHeader />
      <main>
        <Hero />
        <MenuBoard />
        <Upgrades />
        <Flavors />
        <Bakery />
        <Gallery />
        <Contact />

        {/* Cheetah trim + ticker */}
        <div className="cheetah-trim" aria-hidden />
        <div className="overflow-hidden bg-espresso py-3 text-nude">
          <div className="marquee flex w-max gap-10 whitespace-nowrap font-display text-lg font-semibold">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-10" aria-hidden={i === 1}>
                <span>Specialty espresso</span><span className="text-amber">✦</span>
                <span>Brown butter cookies</span><span className="text-amber">✦</span>
                <span>Cold foam</span><span className="text-amber">✦</span>
                <span>Oat milk welcome</span><span className="text-amber">✦</span>
                <span>Small batch</span><span className="text-amber">✦</span>
                <span>Watsonville, CA</span><span className="text-amber">✦</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

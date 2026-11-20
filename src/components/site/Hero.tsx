import { ArrowDown, ArrowUpRight, Coffee } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-14 pt-10 md:grid-cols-12 md:gap-8 md:px-10 md:pb-20 md:pt-16">
        {/* Copy column */}
        <div className="flex flex-col justify-between md:col-span-7">
          <div className="flex items-center gap-3">
            <span className="pill-cheetah">
              <span>Watsonville, CA</span>
            </span>
          </div>

          <h1 className="mt-8 font-display text-[3.4rem] font-semibold leading-[0.92] tracking-[-0.02em] sm:text-7xl lg:text-[5.75rem]">
            Cassie's
            <br />
            <em>Coffee</em>
          </h1>

          <div className="mt-8 grid gap-8 border-t border-line pt-6 sm:grid-cols-[1fr_auto] sm:items-end">
            <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              Small-batch specialty espresso, pulled to order, with homemade cookies and pastries baked by
              Cassie — right here in Watsonville.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#flavors" className="btn-gloss">
              View Our Flavors
              <ArrowDown className="size-4" aria-hidden />
            </a>
            <a href="#menu" className="group inline-flex items-center gap-1.5 text-sm font-medium underline decoration-amber decoration-2 underline-offset-[6px] transition-colors hover:text-gold-deep">
              See Menu &amp; Prices
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
            </a>
          </div>
        </div>

        {/* Magazine cover column */}
        <div className="md:col-span-5">
          <div className="lift relative cheetah-frame rounded-lg overflow-hidden">
            <img
              src="/img/hero.jpg"
              alt="Cup & Crumb — specialty coffee & cookies, Watsonville"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

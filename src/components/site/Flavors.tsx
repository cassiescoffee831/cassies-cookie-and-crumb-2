type FlavorProps = { name: string; note: string };

function Flavor({ name, note }: FlavorProps) {
  return (
    <article className="card-mocha lift group flex min-h-[15rem] flex-col justify-between p-6 md:min-h-[18rem] md:p-8">
      <div className="flex items-center justify-between" />
      <div>
        <h3 className="font-display text-3xl font-semibold transition-colors group-hover:text-amber leading-[1.02] md:text-4xl">{name}</h3>
        <p className="mt-3 max-w-[22rem] text-sm leading-relaxed text-cream/75 md:text-base">{note}</p>
      </div>
    </article>
  );
}

export function Flavors() {
  return (
    <section id="flavors" className="bg-nude">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <h2 className="mt-4 font-display text-5xl font-semibold leading-[0.95] md:text-7xl">
              The house <em>flavors</em>
            </h2>
          </div>
        </div>

        <div className="mt-12">
          <div className="grid gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
            <Flavor name="Hazelnut" note="Rich, toasted roasted-nut sweetness." />
            <Flavor name="Mocha" note="Velvety, indulgent dark chocolate." />
            <Flavor name="Caramel" note="Smooth, buttery golden caramel." />
            <Flavor
              name="Biscoff Cookie Butter"
              note="Spiced caramelized cookie spread blended into a cozy syrup."
            />
            <Flavor
              name="Banana Bread"
              note="Warm, sweet baked banana with hints of vanilla and spice."
            />
            <Flavor
              name="Cinnamon Toast Crunch"
              note="Nostalgic sweet cinnamon-sugar cereal milk vibe."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

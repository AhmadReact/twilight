import { features } from "@/lib/data";
import { FeatureIcon } from "./icons";

export function FeaturesBar() {
  return (
    <section className="bg-navy py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {features.map((feature) => (
          <div key={feature.title} className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
              <FeatureIcon type={feature.icon} />
            </div>
            <div>
              <h3 className="font-semibold text-white">{feature.title}</h3>
              <p className="mt-1 text-sm text-slate-300">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

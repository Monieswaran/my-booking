import { featuredRoutes } from "@/data/booking";

export default function FeaturedRoutes() {
  return (
    <div className="border-t border-border">
      {featuredRoutes.map((route) => (
        <article
          className="grid gap-3 border-b border-border py-5 transition hover:bg-surface/60 sm:grid-cols-[1.4fr_1fr_0.8fr_0.9fr] sm:items-center sm:gap-6"
          key={`${route.train}-${route.route}`}
        >
          <div>
            <p className="text-xs text-muted">{route.train}</p>
            <h3 className="mt-0.5 font-medium text-text">{route.route}</h3>
          </div>

          <div className="font-mono text-sm text-text">
            {route.time}
            <span className="ml-2 text-muted">{route.duration}</span>
          </div>

          <p className="text-sm text-muted">{route.seats}</p>

          <p className="font-mono text-sm font-semibold text-primary sm:text-right">
            {route.price}
          </p>
        </article>
      ))}
    </div>
  );
}

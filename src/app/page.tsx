import BookingSearch from "@/components/booking/BookingSearch";
import BookingSteps from "@/components/booking/BookingSteps";
import FeaturedRoutes from "@/components/booking/FeaturedRoutes";
import ServiceHighlights from "@/components/booking/ServiceHighlights";

export default function HomePage() {
  return (
    <div>
      <section className="bg-primary px-4 py-14 text-primary-text md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
              Book rail journeys with a cleaner flow and fewer dead ends.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-primary-text/70">
              Search, compare, add passengers, and review every choice in a
              simple guided path - an IRCTC-inspired flow, redesigned from
              first principles for real travelers.
            </p>
          </div>

          <ServiceHighlights />
        </div>
      </section>

      <section className="px-4">
        <div className="mx-auto max-w-7xl">
          <BookingSearch />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-14">
        <h2 className="text-2xl font-semibold text-text">
          Learn the journey as you book
        </h2>
        <BookingSteps />
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-16">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-2xl font-semibold text-text">
            Start with high-confidence options
          </h2>
          <button
            className="w-fit rounded-sm border border-border px-4 py-2 text-sm font-medium text-text transition hover:border-text"
            type="button"
          >
            View all routes
          </button>
        </div>
        <FeaturedRoutes />
      </section>
    </div>
  );
}

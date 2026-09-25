import { bookingModes } from "@/config/navigation";

const stations = ["New Delhi", "Mumbai Central", "Chennai Central", "Bengaluru"];

export default function BookingSearch() {
  return (
    <section className="border-y border-border bg-card px-5 py-6 md:px-6">
      <div className="mb-6 flex gap-6 border-b border-border text-sm text-muted">
        {bookingModes.map((mode, index) => (
          <button
            className={`-mb-px border-b-2 pb-3 font-medium transition ${
              index === 0
                ? "border-primary text-text"
                : "border-transparent hover:text-text"
            }`}
            key={mode}
            type="button"
          >
            {mode}
          </button>
        ))}
      </div>

      <form className="grid gap-6 lg:grid-cols-[1fr_1fr_140px_150px_auto] lg:items-end">
        <label className="grid gap-1.5 text-sm font-medium text-text">
          From
          <select className="h-10 border-b border-border bg-transparent font-normal text-text outline-none focus:border-primary">
            {stations.map((station) => (
              <option key={station}>{station}</option>
            ))}
          </select>
        </label>

        <label className="grid gap-1.5 text-sm font-medium text-text">
          To
          <select className="h-10 border-b border-border bg-transparent font-normal text-text outline-none focus:border-primary">
            {stations
              .slice()
              .reverse()
              .map((station) => (
                <option key={station}>{station}</option>
              ))}
          </select>
        </label>

        <label className="grid gap-1.5 text-sm font-medium text-text">
          Date
          <input
            className="h-10 border-b border-border bg-transparent font-mono text-sm text-text outline-none focus:border-primary"
            type="date"
          />
        </label>

        <label className="grid gap-1.5 text-sm font-medium text-text">
          Class
          <select className="h-10 border-b border-border bg-transparent font-normal text-text outline-none focus:border-primary">
            <option>All classes</option>
            <option>AC Chair Car</option>
            <option>Third AC</option>
            <option>Sleeper</option>
          </select>
        </label>

        <button
          className="h-10 rounded-sm bg-accent px-6 text-sm font-medium text-accent-text transition hover:bg-accent-strong"
          type="button"
        >
          Search
        </button>
      </form>
    </section>
  );
}

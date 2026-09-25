import { bookingSteps } from "@/data/booking";

export default function BookingSteps() {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {bookingSteps.map((step, index) => (
        <li className="border-t border-border pt-4" key={step.title}>
          <span className="font-mono text-sm text-muted">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-2 text-base font-semibold text-text">
            {step.title}
          </h3>
          <p className="mt-1 text-sm leading-6 text-muted">{step.detail}</p>
        </li>
      ))}
    </ol>
  );
}

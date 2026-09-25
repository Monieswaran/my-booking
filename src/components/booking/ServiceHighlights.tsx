import { serviceHighlights } from "@/data/booking";

export default function ServiceHighlights() {
  return (
    <ul className="grid gap-4 border-t border-white/20 pt-6 sm:grid-cols-2">
      {serviceHighlights.map((item) => (
        <li key={item.title}>
          <p className="font-medium text-primary-text">{item.title}</p>
          <p className="mt-1 text-sm leading-6 text-primary-text/70">
            {item.detail}
          </p>
        </li>
      ))}
    </ul>
  );
}

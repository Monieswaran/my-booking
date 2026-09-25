import Image from "next/image";
import logo from "@/assets/brand/my-booking-logo.svg";
import { primaryNavigation } from "@/config/navigation";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-card px-4 py-4 text-text">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        <a className="flex items-center gap-2.5" href="#">
          <Image alt="My Booking" height={28} priority src={logo} width={28} />
          <span className="text-base font-semibold">My Booking</span>
        </a>

        <ul className="hidden items-center gap-7 text-sm text-muted md:flex">
          {primaryNavigation.map((item) => (
            <li key={item.label}>
              <a
                className="border-b border-transparent pb-0.5 transition hover:border-text hover:text-text"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            className="hidden text-sm text-text sm:inline-flex"
            type="button"
          >
            Log in
          </button>
          <button
            className="rounded-sm bg-primary px-4 py-2 text-sm font-medium text-primary-text transition hover:bg-primary/90"
            type="button"
          >
            Book
          </button>
        </div>
      </nav>
    </header>
  );
}
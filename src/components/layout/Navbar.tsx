export default function Navbar() {
  return (
    <header className="bg-primary text-primary-text px-6 py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="font-bold text-lg">My Booking</h1>
        <ul className="flex gap-4">
          <li>Home</li>
          <li>Bookings</li>
          <li>About</li>
        </ul>
      </nav>
    </header>
  );
}

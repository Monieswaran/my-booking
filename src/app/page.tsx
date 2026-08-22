import Image from "next/image";
import logo from "../public/logo.svg";

export default function HomePage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Welcome to My Booking</h2>
      <Image src={logo} alt="My Booking Logo" width={120} height={120} />
      <p>Start by searching for your next journey!</p>
    </div>
  );
}

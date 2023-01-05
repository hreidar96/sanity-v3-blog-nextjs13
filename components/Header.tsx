import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="https://links.papareact.com/1m8"
            width={50}
            height={50}
            className="rounded-full scale-100"
            alt="logo"
            priority
          />
        </Link>
        <h1>Hreiðar's Blog</h1>
      </div>
      <div>
        <Link
          href="/"
          className="text-xs md:text-base bg-gray-900 text-[#F7AB0A] flex items-center text-center px-6 py-2.5 font-medium leading-tight uppercase rounded-full shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Fá fréttir í tölvupóst!
        </Link>
      </div>
    </header>
  );
}

export default Header;

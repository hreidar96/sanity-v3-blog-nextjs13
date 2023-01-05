import Link from "next/link";

function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <Link href="/">
          <h1 className="text-7xl">Tæknifréttir</h1>
          <h2 className="mt-5 md:mt-0">
            Velkomin á{" "}
            <span className="underline decoration-3 decoration-[#F7AB0A]">
              bloggið
            </span>{" "}
            mitt!
          </h2>
        </Link>
      </div>

      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        Það ferskasta í tækni | Nýjustu verkefnin mín | Nýjasta tæknin í
        vefþróun
      </p>
    </div>
  );
}

export default Banner;

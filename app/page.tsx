import Link from "next/link";

// Home page
export default function Home() {
  return (
    <div className="h-full flex flex-col items-center justify-center p-8 overflow-y-auto">
      <h1 className="text-4xl font-bold mt-8">
        Welcome to the random color palette generator
      </h1>
      <p className="text-lg mt-4">
        This is a tool that generates random color palettes.
      </p>
      <Link href="/generate" className="mt-4">
        <button className="bg-blue-500 text-white p-2 rounded-md">
          Generate Palette
        </button>
      </Link>
    </div>
  );
}

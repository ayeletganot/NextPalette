import Link from "next/link";

const Header = () => {
  return (
    <nav className="h-[10vh] flex justify-between items-center p-4 bg-gray-100">
      <ul className="flex gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/generate">Generate</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

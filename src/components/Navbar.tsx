// components/Navbar.tsx
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-999">
      <ul className="flex justify-center space-x-4">
        <li>
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="/projects" className="hover:text-gray-300">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/experience" className="hover:text-gray-300">
            Experience
          </Link>
        </li>
        <li>
          <Link href="/resume" className="hover:text-gray-300">
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import Link from "next/link";
import { Card } from "@/components/ui/card";

const Header = () => {
  return (
    <Card className="bg-white shadow-md p-4">
      <nav>
        <ul className="flex items-center space-x-6 w-full max-w-4xl mx-auto px-4 ">
          <li>
            <Link
              href="/"
              className="text-gray-800 text-2xl font-semibold hover:text-gray-600"
            >
              tejaia.com
            </Link>
          </li>

          {/* Uncomment below for additional links */}
          {/* <li>
            <Link href="/about">
              <a className="text-gray-800 text-lg font-semibold hover:text-gray-600">About</a>
            </Link>
          </li> */}
        </ul>
      </nav>
    </Card>
  );
};

export default Header;

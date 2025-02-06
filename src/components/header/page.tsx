import Link from "next/link";
import { Card } from "@/components/ui/card";
import ThemeSwtich from "../theme/themeSwitch";

const Header = () => {
  return (
    <Card className=" shadow-md p-4">
      <nav>
        <ul className="flex items-center w-full max-w-3xl mx-auto justify-between">
          <li>
            <Link href="/">
              <h1 className=" font-nanum-bold text-2xl font-semibold ">
                tejaia.com
              </h1>
            </Link>
          </li>
          <ThemeSwtich />
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

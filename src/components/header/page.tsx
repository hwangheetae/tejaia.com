import Link from "next/link";
import { Card } from "@/components/ui/card";
import ThemeSwitch from "../theme/themeSwitch";

const Header = () => {
  return (
    <Card className="sticky top-0  z-50  p-4 ">
      <nav>
        <ul className="flex items-center w-full max-w-3xl mx-auto justify-between">
          <li className="flex items-center gap-20">
            <Link href="/">
              <h1 className="font-nanum-bold md:text-2xl text-lg ">
                tejaia.com
              </h1>
            </Link>
            <Link href="/about">
              <h2 className="font-nanum-bold ">About</h2>
            </Link>
          </li>
          <li>
            <ThemeSwitch />
          </li>
        </ul>
      </nav>
    </Card>
  );
};

export default Header;

import Link from "next/link";
import { Card } from "@/components/ui/card";
import ThemeSwitch from "../theme/themeSwitch";

const Header = () => {
  return (
    <Card className="shadow-md p-4">
      <nav>
        <ul className="flex items-center w-full max-w-3xl mx-auto justify-between">
          {/* Home과 About을 하나의 그룹으로 묶음 */}
          <li className="flex items-center gap-20">
            <Link href="/">
              <h1 className="font-nanum-bold text-2xl font-semibold">
                tejaia.com
              </h1>
            </Link>
            <Link href="/about">
              <h2 className="font-nanum-bold font-semibold">About</h2>
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

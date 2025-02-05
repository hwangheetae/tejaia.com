import Link from "next/link";

import IconGithub from "../icon/Github";
// import IconLinkedin from "@/components/icon/LinkedIn";

const Footer = () => {
  return (
    <footer className="mb-16 mt-20 flex flex-col items-center justify-center gap-4 text-center print:hidden">
      <div className="flex justify-center gap-4">
        <Link href="https://github.com/hwangheetae" target="_blank">
          <IconGithub
            className="fill-foreground transition hover:fill-pink-600"
            height={30}
            width={30}
          />
        </Link>
        {/* <Link href="" target="_blank">
          <IconLinkedin
            className="fill-foreground transition hover:fill-pink-600"
            height={30}
            width={30}
          />
        </Link> */}
      </div>
      <div>
        © 2025. <span className="font-semibold">Heetae Hwang</span> all rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;

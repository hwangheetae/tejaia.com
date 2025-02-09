import IconGithub from "../icon/Github";
import IconBlog from "../icon/Blog";
import FooterToolTipButton from "./footer-tooltip-button/FooterToolTip";

const Footer = () => {
  return (
    <footer className="mb-16 mt-20 flex flex-col items-center justify-center gap-4 text-center print:hidden">
      <div className="flex justify-center gap-4">
        <FooterToolTipButton
          link={"https://github.com/hwangheetae"}
          content={"깃허브로 이동"}
        >
          <IconGithub
            className="fill-foreground transition hover:fill-pink-600"
            height={30}
            width={30}
          />
        </FooterToolTipButton>
        <FooterToolTipButton
          link={"https://velog.io/@tejaia/posts"}
          content={"이전 블로그로 이동"}
        >
          <IconBlog
            className=" fill-current text-foreground transition hover:text-pink-600"
            height={30}
            width={30}
          />
        </FooterToolTipButton>
      </div>
      <div>
        © 2025. <span className="font-semibold">Heetae Hwang</span> all rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;

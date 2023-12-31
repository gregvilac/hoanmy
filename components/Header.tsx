"use client";
import { usePathname, useRouter } from "next/navigation";
import { Locale } from "@/i18n-config";
import { useState } from "react";
import "@/styles/globals/Header.scss";
import Link from "next/link";
import Image from "next/image";
import LocaleSwitcher from "./locale-switcher";

interface Props {
  lang: Locale;
  dictionary: any;
}

const Header: React.FC<Props> = ({ dictionary, lang }) => {
  const path = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header
      className={
        path === "/en" || path === "/vn" ? "header header--home" : "header"
      }
    >
      {/* ---------MOBILE NAV MENU--------- */}
      <div className="header__mobile">
        <Link
          href={`/${lang}`}
          className={
            path === "/en" || path === "/vn"
              ? " header__logo--home"
              : "header__logo"
          }
        >
          <Image src={"/hoanmy-logo2.png"} width={75} height={75} alt="logo" />
        </Link>
        <div className="header__hamburger">
          <Image
            onClick={() => setDropdownOpen(true)}
            height={40}
            width={40}
            alt="menu"
            src={"/ham-menu.svg"}
          />
        </div>
      </div>
      {/* ---------DROPDOWN NAV MENU------------- */}
      <div className={dropdownOpen ? "dropdown" : "dropdown dropdown--hidden"}>
        <div onClick={() => setDropdownOpen(false)} className="dropdown__close">
          <Image width={25} height={25} alt="close menu" src={"/close.svg"} />
          <p className="dropdown__close-text">Close</p>
        </div>
        <div className="dropdown__nav">
          <div className="dropdown__langs">
            <LocaleSwitcher />
          </div>

          <nav>
            <ul className="dropdown__ul">
              <li>
                <Link className="dropdown__link" href={`/${lang}/company`}>
                  {dictionary.nav1}
                </Link>
              </li>
              <li>
                <Link className="dropdown__link" href={`/${lang}/projects`}>
                  {dictionary.nav2}
                </Link>
              </li>
              <li>
                <Link className="dropdown__link" href={`/${lang}/team`}>
                  {dictionary.nav3}
                </Link>
              </li>
              <li>
                <Link className="dropdown__link" href={`/${lang}/news`}>
                  {dictionary.nav4}
                </Link>
              </li>
              <li>
                <a
                  target="_blank"
                  className="dropdown__link"
                  href="https://drive.google.com/drive/folders/161j6dcrHBGhm31zk4xT8vQkda3iyUbB1?usp=sharing"
                >
                  {dictionary.nav5}
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="dropdown__socials">
          <a target="_blank" href="https://www.facebook.com/hoanmyco.vn">
            <Image
              alt="facebook"
              height={40}
              width={40}
              src={"/facebook.svg"}
            />
          </a>
          <a target="_blank" href="https://www.tiktok.com/@hoanmyco.vn">
            <Image alt="tiktok" height={40} width={40} src={"/tiktok.svg"} />
          </a>
          <a target="_blank" href="https://instagram.com/hoanmyco.vn">
            <Image
              alt="instagram"
              height={40}
              width={40}
              src={"/instagram.svg"}
            />
          </a>
        </div>
      </div>
      {/* ----------DESKTOP NAV MENU------- */}
      <div className="header__desktop">
        <Link
          href={`/${lang}`}
          className={
            path === "/en" || path === "/vn"
              ? " header__logo--home"
              : "header__logo"
          }
        >
          <Image
            src={"/hoanmy-logo2.png"}
            width={100}
            height={100}
            alt="logo"
            layout="responsive"
          />
        </Link>
        <nav className="header__nav">
          <ul className="header__nav-ul">
            <li className="header__nav-li">
              <Link
                className={
                  path.includes("/company")
                    ? "header__nav-link header__nav-link--focus"
                    : "header__nav-link"
                }
                href={`/${lang}/company`}
              >
                {dictionary.nav1}
              </Link>
            </li>
            <li className="header__nav-li">
              <Link
                className={
                  path.includes("/projects")
                    ? "header__nav-link header__nav-link--focus"
                    : "header__nav-link"
                }
                href={`/${lang}/projects`}
              >
                {dictionary.nav2}
              </Link>
            </li>
            <li className="header__nav-li">
              <Link
                className={
                  path.includes("/team")
                    ? "header__nav-link header__nav-link--focus"
                    : "header__nav-link"
                }
                href={`/${lang}/team`}
              >
                {dictionary.nav3}
              </Link>
            </li>
            <li className="header__nav-li">
              <Link
                className={
                  path.includes("/news")
                    ? "header__nav-link header__nav-link--focus"
                    : "header__nav-link"
                }
                href={`/${lang}/news`}
              >
                {dictionary.nav4}
              </Link>
            </li>
            <li className="header__nav-li">
              <a
                target="_blank"
                className="header__nav-link"
                href="https://drive.google.com/drive/folders/161j6dcrHBGhm31zk4xT8vQkda3iyUbB1?usp=sharing"
              >
                {dictionary.nav5}
              </a>
            </li>
          </ul>
        </nav>
        <div className="header__lang-switcher">
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;

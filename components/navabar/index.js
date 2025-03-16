"use client";
import styles from "./navbar.module.css";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { GrHomeRounded } from "react-icons/gr";
import { LuAtSign, LuHeart, LuMoon, LuSun } from "react-icons/lu";

const Navbar = () => {
  const router = useRouter();
  const path = usePathname();

  const [theme, setTheme] = useState(
    // window.matchMedia(`(prefers-color-scheme:dark)`).matches ? "dark" : "light"
    "light"
  );

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme"));
    }
  }, []);

  return (
    <div
      className={`flex items-center justify-between whitespace-nowrap border-b border-solid ${
        theme === "light" ? "bg-[#fffff0]" : "bg-[#231a10]"
      } ${
        theme === "light" ? "border-b-[#9c7349]" : "border-b-[#d39558]"
      } px-5 py-2`}>
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2 text-[#cb7000]">
          <div className="size-4">
            <svg
              className={styles.logo}
              viewBox="0 0 48 48"
              width="20px"
              height="20px"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
                fill="currentColor"></path>
            </svg>
          </div>
          <h2 className="text-[#cb7000] text-3xl font-bold leading-tight tracking-[-0.015em]">
            Recipe Finder
          </h2>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        {/* {theme === "dark" ? (
          <LuSun
            className={styles.themeIcon}
            fontSize={25}
            onClick={() => {
              setTheme("light");
              localStorage.setItem("theme", "light");
            }}
          />
        ) : (
          <LuMoon
            className={styles.themeIcon}
            fontSize={25}
            onClick={() => {
              setTheme("dark");
              localStorage.setItem("theme", "dark");
            }}
          />
        )} */}

        <button
          onClick={() => router.push("/")}
          className={`${
            path === "/" ? styles.active : styles.iconBox
          } flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#f4ede7] text-[#1c140d] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-3`}>
          <div
            data-icon="MagnifyingGlass"
            data-size="20px"
            data-weight="regular">
            <GrHomeRounded className={styles.icon} fontSize={20} />
          </div>
        </button>
        <button
          onClick={() => router.push("/favorites")}
          className={`${
            path === "/favorites" ? styles.active : styles.iconBox
          } flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#f4ede7] text-[#1c140d] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-3`}>
          <div data-icon="Bookmarks" data-size="20px" data-weight="regular">
            <LuHeart className={styles.icon} fontSize={22} />
          </div>
        </button>
        <button
          onClick={() => router.push("/aboutUs")}
          className={`${
            path === "/aboutUs" ? styles.active : styles.iconBox
          } flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#f4ede7] text-[#1c140d] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-3`}>
          <div data-icon="Home" data-size="20px" data-weight="regular">
            <LuAtSign className={styles.icon} fontSize={22} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;

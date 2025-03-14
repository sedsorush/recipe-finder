"use client"
import { useState } from "react";
import styles from "./searchRecipes.module.css";
import { useRouter } from "next/navigation";

const SearchRecipes = () => {
  const [values, setValues] = useState("");
  const router = useRouter()
  return (
    <form
      className="flex z-10 flex-col min-w-40 h-14 w-full max-w-[750px] @[480px]:h-16"
      onSubmit={(event) => {
        event.preventDefault();
        console.log(values);
        router.push(values)
      }}>
      <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
        <div
          className="text-[#9c7349] flex border border-[#e8dbce] bg-[#f4ede7] items-center justify-center pl-[15px] rounded-l-xl border-r-0"
          data-icon="MagnifyingGlass"
          data-size="20px"
          data-weight="regular"></div>
        <input
          placeholder="Search for recipes by name or ingredients..."
          className={`form-input flex w-500 flex-1 resize-none overflow-hidden rounded-xl text-[#1c140d] focus:outline-0 focus:ring-0 border border-[#e8dbce] bg-[#f4ede7] focus:border-[#e8dbce] h-full placeholder:text-[#9c7349] px-[15px] rounded-r-none border-r-0 pr-2 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal`}
          defaultValue=""
          onChange={(event) => setValues(event.target.value)}
        />
        <div className="flex items-center justify-center rounded-r-xl border-l-0 border border-[#e8dbce] bg-[#f4ede7] pr-[7px]">
          <button
            className={`${styles.searchButton} flex min-w-[50px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#ff9a42] text-[#1c140d] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25px"
              height="25px"
              fill="currentColor"
              viewBox="0 0 256 256">
              <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchRecipes;

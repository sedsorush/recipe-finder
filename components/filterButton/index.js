"use client";
import styles from "./filterButton.module.css";
import { useRouter } from "next/navigation";

const FilterButton = ({ title, readonly, currParam, fullParam }) => {
  const router = useRouter();
  console.log(currParam, "curr", fullParam, "fullpar");

  return (
    <div
      className={
        readonly
          ? `${
              fullParam[fullParam?.length - 1] === title.replace(" ", "%20")
                ? styles.active
                : null
            }flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#ffe8d4] pl-4 pr-4`
          : `${
              fullParam[fullParam?.length - 1] === title.replace(" ", "%20")
                ? styles.active
                : styles.filterButton
            } flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#ffe8d4] pl-4 pr-4`
      }
      onClick={() => {
        readonly ? null : router.push(`/${currParam}/${title}`);
      }}>
      <p className="text-[#221001] text-sm font-medium leading-normal">
        {title}
      </p>
    </div>
  );
};

export default FilterButton;

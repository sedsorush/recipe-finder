"use client";
import { useRouter } from "next/navigation";
import styles from "./loadMore.module.css";

const LoadMoreButton = ({onClick}) => {
  const router = useRouter();
  return (
    <button
      className={`${styles.loadButton} flex justify-center items-center h-[50px] w-[150px] border-2 border-[#9c7349] rounded-2xl bg-[#fffff0]`}
      onClick={() =>onClick()}>
      LOAD MORE...
    </button>
  );
};

export default LoadMoreButton;

import Image from "next/image";
import styles from "./home.module.css";
import SearchRecipes from "@/components/searchRecipes";

export default function Home() {
  return (
    <div className="relative flex size-full min-h-[673.1999px] flex-col bg-[#f5f5dc] group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="@[900px]:px-40 px-5 flex flex-1 justify-center py-8 ">
          <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
            <div className="@container">
              <div className="p-4">
                <div className="flex  relative min-h-[550px] flex-col overflow-hidden gap-8 rounded-xl items-center justify-center p-4">
                  <Image
                    className={`${styles.backGround} z-0 object-cover opacity-90`}
                    src={"/GettyImages-1407832840.webp"}
                    fill
                    priority
                    alt="bg-img"
                  />
                  <h1
                    className={`${styles.homeBanner} text-[#fffff0] z-10 text-7xl font-black leading-tight tracking-[-0.033em] @[480px]:text-7xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] text-center`}>
                    Find Recipes You'll Love
                  </h1>
                  <div className={styles.searchBar}>
                    <SearchRecipes />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

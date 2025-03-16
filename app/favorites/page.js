import FavoritesList from "@/components/favoritesList";
import styles from "./favorites.module.css"

const Favorites = () => {
  return (
    <div className="relative flex size-full min-h-[92.26vh] flex-col bg-[#f5f5dc] group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="@[900px]:px-40 px-5 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#181411] tracking-light text-[32px] font-bold leading-tight">
                  Your favorites
                </p>
                <p className="text-[#897361] text-sm font-normal leading-normal">
                  Save your favorite recipes to view later
                </p>
              </div>
            </div>
            <div className="flex flex-col rounded-[8px] bg-[#fffff0] px-4 py-6">
              <FavoritesList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;

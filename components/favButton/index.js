"use client";
import { useEffect, useState } from "react";
import styles from "./favButton.module.css";
import { IoHeartOutline } from "react-icons/io5";

const FavoriteButton = ({ recipe }) => {
  const getFavoritesList = () => {
    if (typeof window !== "undefined") {
      const storage = localStorage.getItem("favorites");
      if (storage) {
        const favs = JSON.parse(storage);
        return favs
      }
    }
  };
  const [favorites, setFavorites] = useState(getFavoritesList());
  const [isFavorited, setIsFavorited] = useState();

  useEffect(() => {
    const alreadyFavorited = favorites?.some((item) => item.id === recipe.id);
    setIsFavorited(alreadyFavorited);
  }, [favorites]);
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div>
      {isFavorited !== true ? (
        <button
          onClick={() => {
            setFavorites([...favorites, recipe]);
            setIsFavorited(true);
          }}
          className={`${styles.favoriteButton} flex mt-2 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-5 bg-[#fffff0] text-[#1c140d] text-sm font-bold leading-normal tracking-[0.015em]`}>
          <span className="truncate flex items-center gap-2">
            Add to Favorites
            <IoHeartOutline />
          </span>
        </button>
      ) : (
        <button
          className={`${styles.favorited} flex items-center justify-center overflow-hidden rounded-full w-10 h-10 bg-[#1c140d] text-[#fffff0] text-sm font-bold leading-normal tracking-[0.015em]`}>
          <span className="truncate flex items-center gap-2">
            <IoHeartOutline fontSize={20} />
          </span>
        </button>
      )}
    </div>
  );
};

export default FavoriteButton;

"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CiCircleMinus, CiLocationArrow1 } from "react-icons/ci";
import styles from "./favoritesList.module.css";
import { useRouter } from "next/navigation";

const FavoritesList = () => {
  const router = useRouter();
  const getFavoritesList = () => {
    if (typeof window !== "undefined") {
      const storage = localStorage.getItem("favorites"||null);

      if (storage!=="undefined") {
        const favs = JSON.parse(storage);
        return favs;
      }
      
    } else return [];
  };
  const [favorites, setFavorites] = useState(getFavoritesList()||[]);
  
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div className="flex w-full flex-col items-center gap-6">
      {favorites?.length !== 0 ? (
        <div className="grid w-full grid-rows-[repeat(auto-fit,minmax(75px))] gap-3 p-4">
          {favorites?.map((fav, index) => {
            return (
              <div
                key={`${fav.id}${index}`}
                className={`${styles.favorite} flex w-full h-[75px] justify-between items-center gap-3 pb-3 border-2 bg-[#f5f5dc] border-[#9c7349] rounded-[8px] p-2`}>
                <Image
                  src={fav.image}
                  height={50}
                  width={50}
                  alt={`${fav.id}-image`}
                />
                <p className="text-[#9c7349] text-base font-medium leading-normal">
                  <strong>{fav.title}</strong>
                </p>
                <div className="flex">
                  <CiCircleMinus
                    className={styles.removeIcon}
                    fontSize={35}
                    onClick={() => {
                      setFavorites(
                        favorites.filter((favs) => favs.id !== fav.id)
                      );
                    }}
                  />
                  <CiLocationArrow1
                    className={styles.navIcon}
                    fontSize={35}
                    onClick={() => router.push(`/details/${fav.id}`)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex max-w-[480px] flex-col items-center gap-2">
          <p className="text-[#181411] text-lg font-bold leading-tight tracking-[-0.015em] max-w-[480px] text-center">
            No favorite recipes yet
          </p>
          <p className="text-[#181411] text-sm font-normal leading-normal max-w-[480px] text-center">
            You haven&apos;t favorited any recipes just yet. Once you find a
            recipe you love, favorite it to add it to this list.
          </p>
        </div>
      )}
    </div>
  );
};

export default FavoritesList;

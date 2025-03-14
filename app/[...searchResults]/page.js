"use client";
import RecipeCard from "@/components/recipeCard";
import FilterButton from "@/components/filterButton";
import { diet } from "@/constants/filterCats";
import LoadMoreButton from "@/components/loadMore";
import styles from "./results.module.css";
import { useEffect, useState } from "react";
import { getRecipes } from "@/api/getRecipes";

const SearchResults = ({ params }) => {
  const [recipes, setRecipes] = useState();
  const [offsetValue, setOffsetValue] = useState(0);
  // const ings = "&includeIngredients=tomato";
  const paramArr = params.searchResults;
  const query = paramArr[0];

  const getSearchParam = () => {
    if (paramArr.length > 1) {
      const filterPar = `&diet=${paramArr[paramArr.length - 1]}`;

      return `${query}${filterPar}`;
    }
    return paramArr[0];
  };

  const finalQuery = getSearchParam();

  // console.log("Q", finalQuery, "parArr", paramArr, "Off", offsetValue);

  let listUnavailable = `an error occurred and the data for your search is not
                    available at the moment...note that this might be due
                    to an invalid search.`;

  const recipesGetter = async () => {
    const result = await getRecipes(finalQuery, offsetValue, listUnavailable);

    if (offsetValue === 0) {
      setRecipes(result);
    } else {
      setRecipes((prev) => [...prev, ...result]);
    }
  };

  useEffect(() => {
    recipesGetter();
  }, [offsetValue]);

  // console.log(recipes);

  return (
    <div className="relative flex size-full min-h-[673.1999px] flex-col bg-[#f5f5dc] group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full justify-center grow flex-col">
        <div className="@[900px]:px-40 px-5 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
            {Array.isArray(recipes) ? (
              <div className="flex gap-3 p-3 flex-wrap">
                {diet.map((item) => {
                  return (
                    <FilterButton
                      title={item}
                      key={item}
                      currParam={query}
                      fullParam={paramArr}
                    />
                  );
                })}
              </div>
            ) : null}
            <div
              className={
                Array.isArray(recipes)
                  ? "grid grid-cols-[repeat(auto-fit,minmax(175px,200px))] justify-center gap-3 p-4 mb-[75px]"
                  : "flex h-full items-center justify-center"
              }>
              {Array.isArray(recipes) ? (
                recipes?.map((recipe) => {
                  return (
                    <RecipeCard
                      key={recipe.id}
                      id={recipe.id}
                      image={recipe.image}
                      title={recipe.title}
                    />
                  );
                })
              ) : (
                <h1
                  className={`${styles.errorText} text-5xl w-[50%] text-[#9c7349]`}>
                  {recipes ===
                  "API key's maximum amount of requests has been reached. No more requests can be send using this key."
                    ? recipes
                    : listUnavailable}
                </h1>
              )}
            </div>
            {Array.isArray(recipes) ? (
              <div className={styles.loadMoreButton}>
                <LoadMoreButton
                  onClick={() => {
                    setOffsetValue(offsetValue + 20);
                    console.log(offsetValue);
                  }}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;

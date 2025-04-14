"use client";
import RecipeCard from "@/components/recipeCard";
import FilterButton from "@/components/filterButton";
import { cuisine, diet, type } from "@/constants/filterCats";
import LoadMoreButton from "@/components/loadMore";
import styles from "./results.module.css";
import { useEffect, useState } from "react";
import { getRecipes } from "@/api/getRecipes";

const SearchResults = ({ params }) => {
  const [recipes, setRecipes] = useState([]);
  const [offsetValue, setOffsetValue] = useState(0);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [loading, setLoad] = useState(true);
  // const ings = "&includeIngredients=tomato";
  const paramArr = params.searchResults;
  const query = paramArr[0];

  const getSearchParam = () => {
    if (paramArr.length > 1) {
      let filterPar = "";
      if (type.includes(paramArr[paramArr.length - 1])) {
        filterPar = `&type=${paramArr[paramArr.length - 1]}`;
      }
      if (diet.includes(paramArr[paramArr.length - 1])) {
        filterPar = `&diet=${paramArr[paramArr.length - 1]}`;
      }

      return `${query}${filterPar}`;
    }
    return paramArr[0];
  };

  const finalQuery = getSearchParam();

  console.log("Q", finalQuery, "parArr", paramArr, "Off", offsetValue);

  let listUnavailable = `an error occurred and the data for your search is not
                    available at the moment...note that this might be due
                    to an invalid search.`;

  const recipesGetter = async () => {
    try {
      const result = await getRecipes(finalQuery, offsetValue, listUnavailable);

      if (offsetValue === 0) {
        setRecipes(result);
      } else {
        setRecipes((prev) => [...prev, ...result]);
      }

      if (result.length < 20) {
        setHasMoreData(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    recipesGetter();
  }, [offsetValue]);

  // console.log(recipes);

  return (
    <div
      className={
        loading === true
          ? "relative flex justify-center items-center size-full min-h-[92.26vh] flex-col bg-[#f5f5dc] group/design-root overflow-x-hidden"
          : "relative flex size-full min-h-[92.26vh] flex-col bg-[#f5f5dc] group/design-root overflow-x-hidden"
      }>
      {loading === true ? (
        <div className={`${styles.loaderContainer} text-[#cb7000]`}>
          <svg
            className={styles.loader}
            viewBox="0 0 48 48"
            width="45px"
            height="45px"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
              fill="currentColor"></path>
          </svg>
        </div>
      ) : (
        <div className="layout-container flex h-full justify-center grow flex-col">
          <div className="@[900px]:px-40 px-5 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
              {Array.isArray(recipes) && recipes?.length !== 0 ? (
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
                  {type.map((item) => {
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
                  Array.isArray(recipes) && recipes?.length !== 0
                    ? `${styles.resultsGrid} grid grid-cols-[repeat(auto-fit,minmax(175px,200px))] justify-center gap-3 p-4 mb-[75px]`
                    : "flex h-full items-center justify-center"
                }>
                {Array.isArray(recipes) && recipes?.length !== 0 ? (
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
              {Array.isArray(recipes) && hasMoreData === true ? (
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
      )}
    </div>
  );
};

export default SearchResults;

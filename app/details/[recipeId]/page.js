import styles from "./recipeDetail.module.css";
import FilterButton from "@/components/filterButton";
import FavoriteButton from "@/components/favButton";
import { API_KEY } from "@/api/apiKey";

const RecipeDetail = async ({ params }) => {
  const param = await params;
  const id = param.recipeId;

  let listUnavailable = "Couldn't load the recipe!"
  let recipeDetails = {};
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?&apiKey=${API_KEY}`
    );
    if (!response.ok) {
      if (response.status === 402) {
        listUnavailable="API key's maximum amount of requests has been reached. No more requests can be send using this key."
      }
    }
    const data = await response.json();
    recipeDetails = await data;
  } catch (error) {
    console.log(error);
    recipeDetails = {};
  }

  console.log(recipeDetails);
  const filters = {
    vegetarian: true,
    vegan: true,
    glutenFree: true,
    dairyFree: true,
    veryHealthy: false,
    cheap: false,
    veryPopular: false,
    sustainable: false,
  };
  return (
    <div className={`relative flex size-full flex-col bg-[#f5f5dc] group/design-root overflow-x-hidden`}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="@[930px]:px-40 px-10 flex flex-1 justify-center py-5">
          {recipeDetails?.title ? (
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <div className="@container">
                <div className="px-4 py-3">
                  <div
                    className={`${styles.imageBox} w-full bg-center relative bg-no-repeat bg-cover flex flex-col justify-end items-start overflow-hidden bg-[#f5f5dc] rounded-xl min-h-80`}
                    style={{
                      backgroundImage: `url(${recipeDetails.image})`,
                    }}>
                    <FavoriteButton recipe={recipeDetails} />
                  </div>
                </div>
              </div>
              <h1 className={`${styles.timeAndServs} text-[#1c140d] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-3 pt-5`}>
                {recipeDetails.title}
              </h1>
              <div className={`${styles.timeAndServs} flex`}>
                <p className="text-[#9c7349] text-sm font-normal leading-normal pb-3 pt-1 px-4">
                  {recipeDetails.readyInMinutes} min
                </p>
                <p className="text-[#9c7349] text-sm font-normal leading-normal pb-3 pt-1 px-4">
                  {recipeDetails.servings} servings
                </p>
              </div>
              <div className={`${styles.cats} flex gap-3 p-3 flex-wrap pr-4`}>
                {recipeDetails?.diets?.map((diet, index) => {
                  return (
                    <FilterButton
                      key={`${diet} ${index}`}
                      readonly
                      title={diet}
                      fullParam={param.recipeId}
                    />
                  );
                })}
                {recipeDetails?.cuisines?.map((cuisine, index) => {
                  return (
                    <FilterButton
                      key={`${cuisine} ${index}`}
                      readonly
                      title={cuisine}
                      fullParam={param.recipeId}
                    />
                  );
                })}
                {recipeDetails?.dishTypes?.map((dishType, index) => {
                  return (
                    <FilterButton
                      key={`${dishType} ${index}`}
                      readonly
                      title={dishType}
                      fullParam={param.recipeId}
                    />
                  );
                })}
              </div>
              <h3 className={`${styles.ings} text-[#1c140d] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4`}>
                Ingredients
              </h3>
              <div
                className={
                  `${styles.ings} grid grid-cols-[repeat(auto-fit,minmax(420px,430px))] gap-3 p-4 bg-[#fffff0] rounded-2xl`
                }>
                {recipeDetails?.extendedIngredients?.map((ingredient,index) => {
                  return (
                    <div
                      key={ingredient.id+index}
                      className="flex flex-col gap-3 pb-3 p-2">
                      <p className="text-[#51381f] text-base font-normal leading-normal">
                        {ingredient.original}
                      </p>
                    </div>
                  );
                })}
              </div>
              <h3 className={`${styles.instcs} text-[#1c140d] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4`}>
                Instructions
              </h3>

              {recipeDetails?.analyzedInstructions[0]?.steps?.map(
                (instruction) => {
                  return (
                    <div
                      key={instruction.number}
                      className={`${styles.instcs} flex items-center gap-4 bg-[#fffff0] px-4 min-h-[72px] py-2`}>
                      <div className="text-[#1c140d] flex items-center justify-center rounded-lg bg-[#f4ede7] shrink-0 size-12">
                        <h1 className="text-4xl">{instruction.number}</h1>
                      </div>
                      <div className="flex flex-col justify-center">
                        <p className="text-[#1c140d] text-base font-medium leading-normal line-clamp-1">
                          Step {instruction.number}
                        </p>
                        <p className="text-[#9c7349] text-sm font-normal leading-normal line-clamp-2">
                          {instruction.step}
                        </p>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          ) : (
            <div className="flex items-center justify-center ">
              <h1 className={`${styles.errorText} text-[#1c140d] text-5xl font-bold leading-11.5 tracking-[-0.015em] w-[50%] text-left `}>
              {listUnavailable}
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;

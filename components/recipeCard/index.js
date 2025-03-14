import Link from "next/link";
import styles from "./recipeCard.module.css";

const RecipeCard = ({ image, title, id }) => {
  // let recipeDetails = {};
  // try {
  //   const response = await fetch(
  //     `https://api.spoonacular.com/recipes/${id}/information?&apiKey=82b1fda39b684533939af15dd7ead9c7`
  //   );
  //   if (!response.ok) {
  //   }
  //   const data = await response.json();
  //   recipeDetails = await data;
    
  // } catch (error) {
  //   console.log(error);
  //   recipeDetails = {};
  // }

  const shorten = (string) => {
    if (string.length>100){
      return string.slice(0,50) + "..."
    }
    return string
  }
  
  return (
    <Link href={`/details/${id}`}>
      <div
        className={`${styles.container} flex flex-col gap-3 h-full pb-3 border-2 bg-[#fffff0] border-[#9c7349] rounded-[8px] p-2`}>
        <div
          className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
          style={{
            backgroundImage: `url(${image})`,
          }}></div>
        <div>
          <p className="text-[#9c7349] text-base font-medium leading-normal">
            <strong>{title}</strong>
          </p>

          {/* <p className="text-[#9c7349] text-sm font-normal leading-normal">
            {shorten(recipeDetails.summary)}
          </p> */}
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;

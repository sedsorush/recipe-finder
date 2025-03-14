import { API_KEY } from "./apiKey";

export const getRecipes = async ( query, OFFSET,listUnavailable ) => {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=20&offset=${OFFSET}&apiKey=${API_KEY}`
    );
    const data = await response.json();

    if (!response.ok) {
      console.log("not ok");
      if (response.status === 402) {
        listUnavailable =
          "API key's maximum amount of requests has been reached. No more requests can be send using this key.";
        console.log(listUnavailable);
        return listUnavailable;
      }
    } else {
      const result = await data.results;
      console.log("ok");
      console.log(result);
      return result;
    }
  } catch (error) {
    console.log(error);
    console.log("definitely not ok");
  }
};

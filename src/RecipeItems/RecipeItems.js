import "./RecipeItems.css";
import { v4 as uuidv4 } from "uuid";

export default function RecipeItems({ recipe }) {
  return (
    recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
      <div
        className="RecipeItems"
        onClick={() => window.open(recipe["recipe"]["url"])}
      >
        <img className="RecipeItems__img" src={recipe["recipe"]["image"]} alt="img" />
        <p className="RecipeItems__name" key={uuidv4()}>
          {recipe["recipe"]["label"]}
        </p>
      </div>
    )
  );
}
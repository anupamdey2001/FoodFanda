import Axios from "axios";
import { useState } from "react";
import "./App.css";
import RecipeItems from "./RecipeItems/RecipeItems";
import SearchIcon from '@material-ui/icons/Search';

const App = () => {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthLable, setHealthLable] = useState("vegan");
  const [dietLabels, setDietLabels] = useState("High-Fiber");

  const YOUR_APP_ID = 'e7fa7934';
  const YOUR_APP_KEY = "02b4160254438cdbe959666e36e4358c";

  const url = `https://api.edamam.com/search?
  q=${query}&app_id=${YOUR_APP_ID}&
  app_key=${YOUR_APP_KEY}`;

  const getRecipeInfo = async () => {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    getRecipeInfo();
  };

  return (
    <div className="App">
      <h1>Food Funda 🍔</h1>
      <p className="lead">Search the Recipe that you what</p>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          className="app__input"
          type="text"
          placeholder="Enter Ingridient"
          autoComplete="Off"
          value={query}
          onChange={(event) => setquery(event.target.value)}
        />
        <select className="app_dietLabels">
          <option onClick={() => setDietLabels("High-Fiber")} >{dietLabels}</option>
          <option onClick={() => setDietLabels("Low-Fat")} >Low-Fat</option>
          <option onClick={() => setDietLabels("Low-Sodium")} >Low-Sodium</option>
        </select>
        <select className="app_healthLables">
          <option onClick={() => setHealthLable("vegan")} >{healthLable}</option>
          <option onClick={() => setHealthLable("Vegetarian")} >Vegetarian</option>
          <option onClick={() => setHealthLable("Pescatarian")} >Pescatarian</option>
          <option onClick={() => setHealthLable("Paleo")} >Paleo</option>
          <option onClick={() => setHealthLable("Mediterranean")} >Mediterranean</option>
          <option onClick={() => setHealthLable("DASH")} >DASH</option>
          <option onClick={() => setHealthLable("Dairy-Free")} >Dairy-Free</option>
          <option onClick={() => setHealthLable("Gluten-Free")} >Gluten-Free</option>
          <option onClick={() => setHealthLable("Wheat-Free")} >Wheat-Free</option>
          <option onClick={() => setHealthLable("Egg-Free")} >Egg-Free</option>
          <option onClick={() => setHealthLable("Peanut-Free")} >Peanut-Free</option>
          <option onClick={() => setHealthLable("Tree-Nut-Free")} >Tree-Nut-Free</option>
          <option onClick={() => setHealthLable("Soy-Free")} >Soy-Free</option>
          <option onClick={() => setHealthLable("Fish-Free")} >Fish-Free</option>
          <option onClick={() => setHealthLable("Shellfish-Free")} >Shellfish-Free</option>
          <option onClick={() => setHealthLable("Pork-Free")} >Pork-Free</option>
          <option onClick={() => setHealthLable("Red-Meat-Free")} >Red-Meat-Free</option>
          <option onClick={() => setHealthLable("Crustacean-Free")} >Crustacean-Free</option>
          <option onClick={() => setHealthLable("Celery-Free")} >Celery-Free</option>
          <option onClick={() => setHealthLable("Mustard-Free")} >Mustard-Free</option>
          <option onClick={() => setHealthLable("Sesame-Free")} >Sesame-Free</option>
          <option onClick={() => setHealthLable("Lupine-Free")} >Lupine-Free</option>
          <option onClick={() => setHealthLable("Mollusk-Free")} >Mollusk-Free</option>
          <option onClick={() => setHealthLable("Alcohol-Free")} >Alcohol-Free</option>
          <option onClick={() => setHealthLable("No oil added")} >No oil added</option>
          <option onClick={() => setHealthLable("Sulfite-Free")} >Sulfite-Free</option>
          <option onClick={() => setHealthLable("Kosher")} >Kosher</option>
          <option onClick={() => setHealthLable("Immuno-Supportive")} >Immuno-Supportive</option>
        </select>
        <button className="app__submit" type="submit" ><SearchIcon /></button>
      </form>

      <div className="app__recipes">
        {recipes !== [] &&
          recipes.map((recipe) => {
            return <RecipeItems recipe={recipe} key={Math.random()} />;
          })}
      </div>
    </div>
  );
}

export default App;

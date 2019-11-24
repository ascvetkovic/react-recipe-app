import React from "react";
import style from "./recipe.module.css";

// Recipe Component
const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1 className={style.title}>{title}</h1>
      <ul className={style["list-color"]}>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <p className={style.calories}>Calories: {calories}</p>
      <img className={style.image} src={image} alt="" />
    </div>
  );
};

export default Recipe;

"use client";
import React, { Fragment, useEffect } from "react";
import MealsListCard from "../components/UI/Card/MealsListCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchHealthyMeals } from "../redux/reducers/mealSlice";
const HealthyMealsList = () => {
  // const pathname = usePathname();
  const dispatch = useDispatch();
  const mealsList = useSelector((state) => state.meals.healthyMeals);

  useEffect(() => {
    dispatch(fetchHealthyMeals());
  }, []);

  if (!mealsList || mealsList.length < 1) {
    return (
      <div className="bg-white w-full h-screen mt-10 flex items-center justify-center">
        <img className="w-40" src="/cooking_spinner.gif" alt="loading" />
      </div>
    );
  }

  return (
    <div className="flex justify-center flex-wrap ">
      {mealsList.map((item, index) => (
        <Fragment key={index}>
          <MealsListCard key={item.id} mealsList={item} />
        </Fragment>
      ))}
    </div>
  );
};

export default HealthyMealsList;

import Link from "next/link";
import styles from "./Card.module.css";
import Flag from "react-world-flags";
import { GiTimeBomb, GiPowerLightning } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
const MealsListCard = ({ mealsList, key }) => {
  const ingArr = mealsList.ingredients.slice(0, 3);
  return (
    <>
      <div key={key} className="hidden group gap-1 lg:flex w-[50%] my-4">
        <Link
          href={`/showRecipe/${mealsList.id}`}
          // style={{ textDecoration: "none", color: "#4cc9f0" }}
          className="no-underline text-accent w-full flex m-1 mx-2 hover:border hover:border-double hover:border-primary hover:border-b-4 border border-double border-accent border-b-4 shadow-lg rounded-lg "
        >
          <div className="flex w-[30%] max-h-40 h-36">
            <img
              className="group-hover:opacity-80 transition-opacity duration-200  flex w-full  rounded-l-md max-h-52 h-full "
              src={mealsList.imageUrl}
              alt={mealsList.title}
            />
          </div>
          <div className="flex w-[70%] flex-col justify-between items-center px-2">
            <div className="flex justify-center">
              <h3 className="text-center hover:underline text-primary text-base">
                {mealsList.title}
              </h3>
            </div>
            <div className="flex justify-center text-center">
              <p className={styles.ingredients}>{ingArr}</p>
            </div>
            <div className="flex w-full items-center justify-center pb-2">
              <div className="flex hover:scale-110 w-full justify-center">
                <Flag
                  code={mealsList.flag}
                  height="16"
                  fallback={<span>{}</span>}
                />
              </div>
              <div className="flex hover:scale-110 justify-center  w-full">
                <span className="pr-2 text-accent font-bold">
                  {mealsList.calories}
                </span>
                <GiPowerLightning color="red" />
              </div>
              <div className="flex hover:scale-110 justify-center  w-full">
                <span className="pr-2 text-accent font-bold">
                  {mealsList.servings}
                </span>
                <IoIosPeople color={"#3f37c9"} />
              </div>
              <div className="flex hover:scale-110 justify-center w-full">
                <span className="pr-2 text-accent font-bold">
                  {mealsList.duration}
                </span>
                <GiTimeBomb color={"#3f37c9"} />
              </div>
            </div>
          </div>
        </Link>
      </div>
      {/* mobile meals list */}

      <Link
        className="xl:hidden lg:hidden w-[80%] flex"
        href={`/showRecipe/${mealsList.id}`}
      >
        <div className="flex w-full h-full p-2 flex-col justify-center items-center ">
          <div className=" flex w-full">
            <img
              className=" w-full h-full flex"
              src={mealsList.imageUrl}
              alt={mealsList.title}
            />
          </div>
          <div className="flex justify-center items-center">
            <span className="text-center text-sm">{mealsList.title}</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default MealsListCard;

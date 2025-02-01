import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu = () => {

    const { resId } = useParams()

    const resInfo = useRestaurantMenu(resId)

    const [showIndex, setShowIndex] = useState(null)

    // const { name, 
    //         costForTwoMessage,
    //         avgRating,
    //         cuisines,
    //         areaName          
    //     } = resInfo?.cards?.[2]?.card?.card?.info;

    if (resInfo === null) return <Shimmer/>

    const menuInfo = resInfo?.cards?.[2]?.card?.card?.info;
    const {
        name = "N/A",
        costForTwoMessage = "N/A",
        avgRating = "N/A",
        cuisines = [],
        areaName = "N/A",
        city = "N/A"
    } = menuInfo || {};

    const { itemCards } = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card;
    // console.log(itemCards)


    const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => {
            return c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        }
    )
    // console.log("categories", categories)

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <h3 className="font-bold text-lg">{cuisines.join(", ")}</h3>
            {/* categories accordian */}
            {categories.map((category, index) => (
                // constrolled component
                <RestaurantCategory 
                    key={category?.card?.card?.title} 
                    data={category?.card?.card}
                    showItems={index === showIndex? true : false}
                    setShowIndex={() => setShowIndex(index)}
                />
            ))}
        </div>
    );
}


export default RestaurantMenu;
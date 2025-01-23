import { useState ,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_URL } from "../utils/constants";


const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null)

    const { resId } = useParams()

    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        try {
            const data = await fetch(MENU_URL + resId);
            const json = await data.json();
            // console.log(json?.data);
            setResInfo(json?.data);
        } catch (error) {
            console.error("Error fetching menu:", error);
        }

    }

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


    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{avgRating}</h2>
            <h2>{costForTwoMessage}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h3> outlet- {areaName} {city}</h3>
            <ul>
                {itemCards.map((item) => (
                    <li key = {item.card.info.id}>
                        {item.card.info.name} - {"Rs."}
                        {item.card.info.price/100 || item.card.info.defaultPrice/100}
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default RestaurantMenu;
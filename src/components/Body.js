import RestaurantCard from "./RestaurantCard"
import restaurantList from "../utils/mockData"
import { useState } from "react"


const Body = () => {

    const [listOfRestaurants, setlistOfRestaurants] = useState(restaurantList);

    return (
        <div className="body">
            <div className="Search">search</div>
            <button className="filter-btn" onClick={ () => {
                const filteredList = listOfRestaurants.filter(
                    (res) => res.info.avgRating > 4.4
                );
                setlistOfRestaurants(filteredList)
            }}>
                Top Rated Restaurants
            </button>
            <div className="res-container">
                {/* <RestaurantCard resData={restaurantList[0]}/>
                <RestaurantCard resData={restaurantList[1]}/>
                <RestaurantCard resData={restaurantList[2]}/>
                <RestaurantCard resData={restaurantList[3]}/> 
                Instead of this we use js map to loop over resList array and write inside {} braces
                */}
                {
                  
                  listOfRestaurants.map((restaurant) => {
                    return <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                  })
                }
            </div>
        </div>    
    )
}

export default Body;
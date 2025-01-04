import RestaurantCard from "./RestaurantCard"
import restaurantList from "../utils/mockData"


const Body = () => {
    return (
        <div className="body">
            <div className="Search">search</div>
            <div className="res-container">
                {/* <RestaurantCard resData={restaurantList[0]}/>
                <RestaurantCard resData={restaurantList[1]}/>
                <RestaurantCard resData={restaurantList[2]}/>
                <RestaurantCard resData={restaurantList[3]}/> 
                Instead of this we use js map to loop over resList array and write inside {} braces
                */}
                {
                  
                  restaurantList.map((restaurant) => {
                    return <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                  })
                }
            </div>
        </div>    
    )
}

export default Body;
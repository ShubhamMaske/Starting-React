import RestaurantCard from './RestaurantCard'
import restaurantList from '../utils/mockData'
import { useState, useEffect } from 'react'
import Shimmer from './Shimmer'
import { SWIGGY_URL } from '../utils/constants'
import { Link } from "react-router";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([])

  const [searchText, setSearchText] = useState("")

  // it use after the component rendered
  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_URL);

    const json = await data.json();

    //optional chaining
    // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setlistOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }


  // conditional Rendering
//   if(listOfRestaurants.length === 0) {
//     return <Shimmer />
//   }

  return listOfRestaurants.length === 0? <Shimmer /> : (
    <div className='body'>
    <div className='filter'>
        <div className='search'>
            <input 
                type='text' 
                className='search-box'
                value = {searchText}
                onChange={(e) => {
                    setSearchText(e.target.value)
                }}></input>
            <button onClick={() => {
                console.log(searchText)
                const filterdRestraunt = listOfRestaurants.filter((res) => {
                    return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                })

                setFilteredRestaurants(filterdRestraunt)
            }}>Search</button>
        </div>
        <button
            className='filter-btn'
            onClick={() => {
            const filteredList = listOfRestaurants.filter(
                res => res.info.avgRating > 4.4
            )
            setFilteredRestaurants(filteredList)
            }}
        >
            Top Rated Restaurants
        </button>
      </div>
      <div className='res-container'>
        {/* <RestaurantCard resData={restaurantList[0]}/>
                <RestaurantCard resData={restaurantList[1]}/>
                <RestaurantCard resData={restaurantList[2]}/>
                <RestaurantCard resData={restaurantList[3]}/> 
                Instead of this we use js map to loop over resList array and write inside {} braces
                */}
        {filteredRestaurants.map(restaurant => {
          return (
            <Link key={restaurant.info.id} to= {"/restaurants/"+ restaurant.info.id}><RestaurantCard key={restaurant.info.id} resData={restaurant} /></Link>
          )
        })}
      </div>
    </div>
  )
}

export default Body

import RestaurantCard from './RestaurantCard'
import restaurantList from '../utils/mockData'
import { useState, useEffect } from 'react'
import Shimmer from './Shimmer'
import { SWIGGY_URL } from '../utils/constants'
import { Link } from "react-router";
import useOnlineStatus from '../utils/useOnlineStatus'

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

  let onlineStatus = useOnlineStatus();
  if(!onlineStatus) {
    return (
      <h1>Looks like you're offline! Please check you internet connection.</h1>
    )
  }

  return listOfRestaurants.length === 0? <Shimmer /> : (
    <div className='body '>
    <div className='flex items-center '>
        <div className='search m-3 p-3'>
            <input 
                type='text' 
                className='border border-b-black'
                value = {searchText}
                onChange={(e) => {
                    setSearchText(e.target.value)
                }}></input>
            <button className= "px-2 py-1 m-1 cursor-pointer bg-blue-300 rounded-lg" onClick={() => {
                console.log(searchText)
                const filterdRestraunt = listOfRestaurants.filter((res) => {
                    return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                })

                setFilteredRestaurants(filterdRestraunt)
            }}>Search</button>
        </div>
        <div m-3 p-3 >
        <button
            className='cursor-pointer bg-green-300 px-2 py-1 m-5 rounded-lg'
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
        
      </div>
      <div className='flex flex-wrap justify-center'>
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

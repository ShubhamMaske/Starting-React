import { useState, useEffect } from "react";
import { MENU_URL } from "./constants";


const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null)

    useEffect(() => {
        fetchData(resId)
    }, [])

    const fetchData = async(resId) => {
        try{
            const data = await fetch(MENU_URL + resId)
            const json = await data.json()
            setResInfo(json?.data)
        } catch (err) {
            console.log("useRestaurantMenu Error: "+err)
        }
    }

    return resInfo;
}

export default useRestaurantMenu;
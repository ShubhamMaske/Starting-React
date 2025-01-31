
import { CDN_URL } from "../utils/constants"

//Now we are using props
const RestaurantCard = (props) => {
    const { resData } = props
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla
    } = resData?.info

    return (
        <div className="m-4 p-4 w-[250px] min-h-[410px] flex flex-col justify-between rounded-lg" style={{backgroundColor: "#f0f0f0"}}>
            <img
                className="rounded-lg w-[250px] h-[180px]"
                alt="res-logo"
                src= { CDN_URL + cloudinaryImageId } 
            />
            <h3 className="font-bold py-2 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>⭐{avgRating}• <span className="font-bold">{costForTwo}</span></h4>
            <h4 className="font-semibold">{sla.deliveryTime} mins</h4>
        </div>
    )
}

export default RestaurantCard;
import { CDN_URL } from "../utils/constants"

const ItemList = ({items}) => {
    // console.log(items)
    return (
        <div>
            {items.map((item) => {
                return (
                    <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex">
                        <div className="w-9/12">
                            <div className="py-2">
                                <span className="font-bold">{item.card.info.name}</span>
                                <span>- ₹ {(item.card.info.price || item.card.info.defaultPrice) / 100}</span>
                            </div>
                            <p className="text-sm">
                                {item.card.info.description}
                            </p>
                        </div>
                        <div className="w-3/12 p-4 relative"> 
                            <div className="absolute">
                                <button className="p-1 mx-16 bg-black shadow-lg cursor-pointer text-white rounded-lg">Add +</button>
                            </div>
                            <img src= {CDN_URL + item.card.info.imageId } className="w-full"></img>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ItemList
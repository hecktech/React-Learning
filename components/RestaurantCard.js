import { CDN_URL } from "../utils/constans";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, areaName, avgRating } =
    resData?.info;
  return (
    <div className="max-w-60 border bg-orange-50 border-black m-2 p-2 *:text-lg min-h-[400px]">
      <img
        className="mb-4 min-h-[200px]"
        src={CDN_URL + cloudinaryImageId}
        alt="food image"
      ></img>

      <h3 className="font-bold">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4> {areaName} </h4>
      <h4 className="font-bold"> ⭐️ {avgRating} Stars</h4>
      <h4> {resData.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;

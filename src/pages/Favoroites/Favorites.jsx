import { useEffect, useState } from "react";
import FavoritesCard from "./FavoritesCard";

const Favorites = () => {

  const [favorites, setFavorites] = useState([]);
  const [noFound, setNofound] = useState(false);
  const [isShow,setIsShow] = useState(false)

  const [totalPrice,setTotalPrice] = useState(0)

  useEffect(() => {
    const favoriteItems = JSON.parse(localStorage.getItem("favorites"));

    if (favoriteItems) {
      setFavorites(favoriteItems);

      const total = favoriteItems.reduce((preValue,currentItem)=> preValue + currentItem.price,0)

      console.log(total);

      setTotalPrice(total)


    } else {
      setNofound("No Data Found");
    }
  }, []);

  console.log(favorites);

  const handleRemove = () => {
    localStorage.clear();
    setFavorites([]);
    setNofound("No Data Found");
  };


  console.log(isShow);

  return (
    <div className="px-5 sm:px-[10%] my-10">
      {noFound ? (
        <p className="flex justify-center items-center min-h-[60vh] text-2xl md:text-3xl lg:text-4xl font-bold">{noFound}</p>
      ) : (
        <div>
          {favorites.length > 0 && (
            <div>
                <button
              onClick={handleRemove}
              className="block bg-red-300 select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mx-auto"
              type="button"
            >
              Deleted All favorites
            </button>
            <h1 className="text-xl md:text-2xl lg:text-3xl underline text-center font-semibold my-5">Total price : ${totalPrice.toFixed(2)}</h1>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {
                isShow ? favorites.map((phone) => (
                    <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>
                  )) 
                  
                  : favorites.slice(0,2).map((phone) => (
                    <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>
                  ))
            }
          </div>

          {favorites.length > 2 && 
          <button 
            onClick={()=>setIsShow(!isShow)} 
            className="block bg-green-300 select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mx-auto my-5"
              type="button"
          >
            {isShow ? "See less" : "See more"}
          </button>
          }
        </div>
      )}
    </div>
  );
};

export default Favorites;

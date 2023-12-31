import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { FavContext } from '../context/FavoriteContext'

function MenuItems() {
  const [favs, setFavs] = useContext(FavContext);

  return (
    <>
     <li className="rounded-full ease-in-out bg-red-500 btn text-white w-28 h-8 flex text-sm justify-center items-center hover:bg-gray-200 hover:text-red-500 hover:transition-all hover:duration-500 hover:ease-in-out">
          <Link to={"/"}><i className='fas fa-home'></i> Anasayfa </Link>
        </li>
        <li className="rounded-full ease-in-out bg-red-500 btn text-white w-28 h-8 flex text-sm justify-center items-center hover:bg-gray-200 hover:text-red-500 hover:transition-all hover:duration-500 hover:ease-in-out">
            <Link to={"/events"}><i className='fas fa-ticket'></i> Etkinlikler </Link>
        </li>
        <li className="rounded-full transition-all ease-out bg-red-500 btn text-white w-28 h-8 flex text-sm justify-center items-center hover:bg-gray-200 hover:text-red-500 hover:transition-all hover:duration-500 hover:ease-in-out">
            <Link to={"/locations"}><i className='fas fa-location text-xs'></i> Lokasyonlar </Link>
        </li>
        <li className="rounded-full transition-all ease-out bg-red-500 btn text-white w-28 h-8 flex text-sm justify-center items-center hover:bg-gray-200 hover:text-red-500 hover:transition-all hover:duration-500 hover:ease-in-out">
            <Link to={"/favorites"}><i className='fas fa-heart text-xs'></i> Favorilerim ({favs.length})  </Link>
        </li>
        
    </>
  )
}

export default MenuItems
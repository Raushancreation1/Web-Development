import {BsCart} from "react-icons/bs"
import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <div  className="bg-gray-200 p-4 shadow-md">
      <div className="flex flex-row justify-between">

        <NavLink to="/">
          <div>

          <img src="../logo.png" className="h-14" />
          </div>
        </NavLink>


        <div>

          <NavLink to="/">
              <p>Home</p>
          </NavLink>
          
          <NavLink to="/cart">
              <div>
                <BsCart/>
              </div>
             
          </NavLink>

          
        </div>

      </div>
    </div>
  )
};

export default Navbar;

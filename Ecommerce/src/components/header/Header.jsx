import React from "react";
import { useAuth } from "../../context/auth/AuthContext";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
const Header = () => {
  const [auth] = useAuth();
  // console.log(auth);
  const handleLogout = () => {
    localStorage.removeItem("UserStatus");
    localStorage.removeItem("expiryTime");
    localStorage.removeItem("loginTime");
    toast.success("Logout SuccessFully");
  };
  return (
    <div className="navbar bg-base-100 shadow-2xl border border-amber-50/30 sticky top-0 z-[100]">
      <div className="flex-1">
        <a className="btn btn-ghost text-2xl">Ecommerce</a>
      </div>

      <div className="flex gap-5 items-center max-[450px]:hidden">
        {/* User Name */}
        <div>
          {!auth ? (
            <>
              <div className="flex">
                <li className="btn bg-sky-200 text-black mx-2 my-2 list-none ">
                  <NavLink to={"/signup"}>Register</NavLink>
                </li>
                <li className="btn bg-sky-200 text-black mx-2 my-2 list-none">
                  <NavLink to={"/login"}>Login</NavLink>
                </li>
              </div>
            </>
          ) : (
            // DROP DOWN
            <div className="dropdown dropdown-hover">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1 bg-sky-200 text-black"
              >
                {auth}
              </div>
              <ul
                tabIndex={0}
                className="bg-sky-200 dropdown-content menu rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li className="text-black hover:bg-sky-400 font-semibold">
                  <NavLink to={"/login"} onClick={handleLogout}>
                    Logout
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
        {/* Search */}
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        {/* CART */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />{" "}
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Header;

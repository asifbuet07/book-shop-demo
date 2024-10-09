import { useContext } from "react";
import logo from "../../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../utils/AuthProvider";
import userPic from "../../assets/icons/user.png";

export const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section>
      <div class="navbar bg-slate-400 mb-5">
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabindex="0"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <img className="w-12" alt="Book Heaven Logo" src={logo} />
          <Link to="/" class="btn btn-ghost text-blue-600 text-2xl">
            Book Heaven
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-black px-1">
            <li>
              <Link to="/" class="text-green-200 text-xl font-bold">Home</Link>
            </li>
            <li>
              <Link className="text-green-200 text-xl font-bold">About</Link>
            </li>
            <li>
              <Link to="/private-books" className="text-green-200 text-xl font-bold">Private Books</Link>
            </li>
            <li>
              <Link to="/faq" class="text-green-200 text-xl font-bold">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          {user ? (
            <div className="flex items-center">
              <span className="text-white mr-3">{user.displayName}</span>
              <img className="w-10 rounded-full" alt="User" src={userPic} />
            </div>
          ) : (
            <Link
              to="/register"
              className="btn bg-orange-600 hover:bg-orange-400 border-orange-600 text-black font-bold"
            >
              Register
            </Link>
          )}

          {user ? (
            <button
              onClick={handleSignOut}
              className="btn bg-cyan-500 hover:bg-cyan-400 border-cyan-500 text-black font-bold"
            >
              Log Out
            </button>
          ) : (
            <Link
              to="/login"
              className="btn bg-cyan-500 hover:bg-cyan-400 border-cyan-500 text-black font-bold"
            >
              Log In
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

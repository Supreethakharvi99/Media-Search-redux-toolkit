import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <div className=" flex justify-between items-center py-6 px-10 bg-cyan-950 ">
        <h2 className="font-semibold text-2xl">Media Search</h2>
        <div className=" flex gap-6 text-xl items-center">
          <Link
            className="text-base font-medium bg-cyan-800 rounded px-3 py-1 active:scale-95"
            to="/"
          >
            Search
          </Link>
          <Link
            className="text-base font-medium bg-cyan-800 rounded px-3 py-1 active:scale-95"
            to="/collection"
          >
            Collection
          </Link>
        </div>
    </div>
  );
};

export default Navbar;

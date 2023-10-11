import { GoSearch } from "react-icons/go";
import "animate.css";

export default function Main() {
  return (
    <form className="animate__animated animate__fadeIn mx-auto w-full max-w-5xl px-4">
      <div className="relative">
        <GoSearch className="absolute mt-5 ml-3 bg-gray-700 h-5 w-5 text-gray-500" />
        <input
          type="search"
          className="w-full block rounded-lg pl-10 border border-gray-600 bg-gray-700 py-4   text-gray-300 transition-all focus:border-blue-500 focus:outline-none focus:ring-blue-500 "
          placeholder="Search for a word..."
        />
        <button className="button">Search</button>
      </div>
    </form>
  );
}

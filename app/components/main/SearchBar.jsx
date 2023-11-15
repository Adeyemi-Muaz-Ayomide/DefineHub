// "use client";
// import { useState } from "react";

// export default function SearchBar({ onSearch , fetchDictionaryData, word, onSetWord }) {
//   const [query, setQuery] = useState("");

//   const handleSearch = (e) => {
//     e.preventDefault()
//     onSearch(query);
//   };
//   return (
//     <div className="mb-40 flex-grow">
//       <form className="animate__animated animate__fadeIn mx-auto w-full max-w-5xl px-4">
//         <div className="sr-only mb-2 text-sm font-medium text-gray-900">
//           Search
//         </div>
//         <div className="relative ">
//           <input
//             type="text"
//             className="block w-full rounded-lg border border-gray-600 bg-gray-700 py-3 pr-24 pl-10 text-gray-300 placeholder-gray-400 transition-all focus:border-blue-500 focus:outline-none focus:ring-blue-500"
//             placeholder="Search for a word..."
//             value={word}
//             onChange={(e) => onSetWord(e.target.value)}
//           />
//           <button
//             className="absolute right-2.5 bottom-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-800"
//             onClick={handleSearch}
//           >
//             Search
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

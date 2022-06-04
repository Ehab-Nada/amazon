import logo from "../../assets/logo2.png";
import { GrLocation } from "react-icons/gr";
const SearchBar = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  const changeHandler = (e) => {
    props.searchHandler(e.target.value);
  };
  return (
    <div className="bg-slate-900 text-sm text-white flex justify-center items-center p-2 flex-wrap md:flex-row">
      <div className="p-2 md:min-w-max border w-28 border-slate-900 hover:border-gray-300 flex items-center order-1 flex-1 md:flex-none ">
        <img className="w-36" src={logo} alt="logo" />
        <span className="">.eg</span>
      </div>
      <div className="p-2 ml-2 flex items-end border border-slate-900 hover:border-gray-300 order-2 flex-1 md:flex-none">
        <div>
          <GrLocation />
        </div>
        <div className="leading-5 h-15">
          <p>Deliver to</p>
          <p className="md:text-xl text-sm font-semibold">Egypt</p>
        </div>
      </div>
      <div className="grow p-2 md:order-3 order-5 min-w-full md:min-w-fit">
        <form onSubmit={submitHandler}>
          <div className="flex">
            <div className="relative w-full">
              <input
                onChange={changeHandler}
                type="search"
                id="search-dropdown"
                className="block p-2.5 w-full z-20 text-sm rounded-lg border border-yellow-600 focus:ring-yellow-600 focus:border-yellow-600 dark:bg-white dark:border-l-yellow-700  dark:border-yellow-700  dark:text-black dark:focus:border-yellow-700"
                required
              ></input>
              <button
                type="submit"
                className="absolute top-0 right-0 p-2.5 text-sm font-medium rounded-r-lg border  hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:focus:ring-yellow-500"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke=""
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="p-2 border border-slate-900 hover:border-gray-300 leading-5 order-4 flex-1 md:flex-none">
        <p> Hello, Sign in</p>
      </div>
    </div>
  );
};

export default SearchBar;

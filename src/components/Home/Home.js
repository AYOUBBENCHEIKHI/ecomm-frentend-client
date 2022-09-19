import CardProduct from "./CardProduct";
import { useEffect, useState } from "react";
import ProductService from "../service/ProductService";
const Home = () => {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    /*ProductService.getAllProducts().then(
      (response) => {
        setProducts(response.data.data)
      },
      (error) => {
        console.log("error in get products", error.response)
      })*/
    ProductService.getProductsPage(page).then((response) => {
      setProducts(response.data);
    });
  }, [page]);
  const nextPage = () => setPage((prev) => prev + 1);

  const prevPage = () => setPage((prev) => prev - 1);
  return (
    <div className="dark:bg-gray-500">
      <div className="grid grid-cols-1 py-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  dark:bg-gray-500">
        {products
          ? products.map((product) => (
              <div className=" mr-4 ml-4 py-4" key={product.id}>
                <CardProduct product={product} />
              </div>
            ))
          : null}
      </div>
      <div className="flex flex-auto  p-5 justify-center">
        <div className="">
          <button
            onClick={prevPage}
            disabled={page === 1}
            type="button"
            className="text-white flex flex-row disabled:bg-gradient-to-r  disabled:from-slate-400  bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            <svg
              class="w-4 h-4 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              ></path>
            </svg>
            Previous
          </button>
        </div>
        <div>
          <button
            onClick={nextPage}
            disabled={page === products.length}
            type="button"
            className="text-white  flex flex-row bg-gradient-to-r disabled:from-slate-400 from-cyan-400  via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Next
            <svg
              class="w-4 h-4 ml-3 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

import CardProduct from './CardProduct'
import { useEffect, useState } from 'react'
import ProductService from '../service/ProductService'
const Home = () => {
  const [products,setProducts] = useState([])
  useEffect(()=>{
    ProductService.getAllProducts().then(
      (response) => {
        setProducts(response.data.data)
      },
      (error) => {
        console.log("error in get products", error.response)
      })
  },[])
  return (
    <div  className='dark:bg-gray-500'>
    <div className='grid grid-cols-1 py-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  dark:bg-gray-500'>
           
           {products.map((product)=>(
            <div className=' mr-4 ml-4 py-4' key={product.id} >
                 <CardProduct product={product}/>
            </div>
           ))}
  
    </div>
    <div className="flex flex-auto  p-5 justify-center">
        <button
          type="button"
          className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Previous
        </button>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Next
        </button>
      </div> 
    </div>
  )
}

export default Home

import axios from 'axios'
import authHeader from '../Auth-Header'

const API_URL = "http://localhost:8000/api"
//data = "{title,quantity,purchasePrice,sellingPrice,tax,category_id}"
const getAllProducts = async () =>{
    return axios.get(API_URL+"/products",
    {
        headers : authHeader()
    })
}
export const axiosOne = axios.create({
    baseURL: 'http://localhost:8000/api'
})
const getProductsPage = async (pageParam=1) =>{
    const response = await axiosOne.get(`/products?page=${pageParam}`)
    return response.data
}
const ProductService ={
    getAllProducts,
    getProductsPage
}

export default ProductService
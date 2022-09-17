
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

const ProductService ={
    getAllProducts,
}

export default ProductService
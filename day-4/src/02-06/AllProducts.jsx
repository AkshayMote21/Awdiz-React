import { useEffect, useState } from "react";
import axios from "axios";
function AllProducts(){

    const  [allProducts,setAllProducts] = useState([]);
    
    async function GetProducts(){

        try{
            const response = await axios.get("https://fakestoreapi.com/products");
            console.log(response.data);
            setAllProducts(response.data);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        GetProducts();
    },[])
    return(
        <div>
            <h1>All Products</h1>
            <div style={{ display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
                {allProducts.map((product)=>(
                    <div style={{width : "22%",height:"400px" , border:"2px solid ", marginBottom:"30px"}}>
                        <img style={{height:"65%",width:"70%",marginTop:"15px"}} src={product.image}/>
                        <p>Title : {product.title}</p>
                        <p>Price : ${product.price} /-</p>
                        {/* <p>Rating : {product.rating.rate}</p>    */}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllProducts;
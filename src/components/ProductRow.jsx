import ListOfProducts from "../data.json";
import { useState } from "react";


let ProductRow = (props) =>{
    let {list}=props
    return(
        list.map((product,index)=>{
            return(
                product.inStock?
                (<tr key={index}>
                        <td style={{textAlign:"left"}}>{product.name}</td>
                        <td style={{textAlign:"right"}}>{product.price}</td>
                </tr>)
                :
                (<tr key={index}>
                    <td style={{textAlign:"left", color: "red", textDecoration: "line-through"}}>{product.name}</td>
                    <td style={{textAlign:"right"}}>{product.price}</td>
                </tr>)
            )})      
    )
}

export default ProductRow
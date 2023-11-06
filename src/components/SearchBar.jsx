import ListOfProducts from "../data.json";
import { useState } from "react";

let SearchBar = (props) => {
    const {list, method} = props
    const [string,setString] = useState("")
    let newList =[...ListOfProducts]

    const handleChange = (event) => {
        const searchString = event.target.value;

        if(searchString.length===0){
            console.log("Zerooo: setting newList as", newList)
            method(newList)
            return
        }        

        setString(searchString);

        const filteredList = list.filter((product) => {
        return product.name.toLowerCase().includes(searchString.toLowerCase());
        });
        method(filteredList);
    }

    const filterStock = () =>{
        let box = document.getElementById("check-box-filter")
        
        if(box && box.checked){
        let inStock = list.filter((product)=>{
            return product.inStock === true
        })
        method(inStock)}
        
        if(box && !box.checked){method(newList)}

    }
    

    return(
        <div>
        <input onChange={handleChange}type="text" placeholder="Search product"></input>
        <input onChange={filterStock} type="checkbox" id="check-box-filter"/>
        </div>
    )
}

export default SearchBar
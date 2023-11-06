import ProductTable from "./ProductTable"

let ListOfProducts = (props) => {
    let {list} = props
    return(
        <ProductTable list={list}/>
    )
}

export default ListOfProducts
import ProductRow from "./ProductRow"

let ProductTable = (props) =>{
    let{list}=props
    return(
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            <ProductRow list={list} />
            </tbody>
        </table>
    )
}

export default ProductTable
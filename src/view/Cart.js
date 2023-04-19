import { useEffect, useState } from "react";

function Cart({ selectedProduct }) {

    let [cart, setCart] = useState([])

    console.log('----->', selectedProduct);

    useEffect(() => {
        if (selectedProduct) {
            setCart((preProducts) => [...preProducts, selectedProduct])
        }
    }, [selectedProduct])

    function removeProduct(event) {
        setCart(cart.filter((element, i) => {
            return i !== +event.target.value
        }))
    }

    return <>
        <h1>CART:</h1>
        <table className="table table-dark">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">No.Of</th>
                    <th scope="col">Rupess</th>
                    <th scope="col">Remove</th>
                </tr>
            </thead>
            <tbody>
                {cart && cart.map((element, i) => {
                    // console.log(element)
                    return <tr key={i}>
                        <th scope="row">{i + 1}</th>
                        <td>{element.name}</td>
                        <td>{element.count}</td>
                        <td>{element.prize * element.count}</td>
                        <td>
                            <button style={{ 'background': "Transparent", 'border': 'none', 'color': 'red', 'fontSize': 20 }} onClick={removeProduct} value={i}>X</button>
                        </td>
                    </tr>
                })}

                <tr style={{ 'color': 'red', fontSize: 20 }}>
                    <td></td>
                    <td></td>
                    <th scope="row" >Total:</th>
                    <th>{cart.reduce((pre, element) => {
                        return pre + element.prize * element.count;
                    }, 0)}</th>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </>
}
export default Cart;

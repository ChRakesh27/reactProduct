import React from "react";
import Cart from "./Cart";
import { useState } from "react";
import ProductList from "./ProductList";

const products = [
    {
        id: 1,
        name: "Milk",
        prize: 10,
        count: 1,
        isAvaliable: true
    }, {
        id: 2,
        name: "Bread",
        prize: 12,
        count: 1,
        isAvaliable: false
    }, {
        id: 3,
        name: "Biscuits",
        prize: 24,
        count: 1,
        isAvaliable: true
    }, {
        id: 4,
        name: "Mango",
        prize: 20,
        count: 1,
        isAvaliable: false
    }, {
        id: 5,
        name: "Tea",
        prize: 15,
        count: 1,
        isAvaliable: true
    }, {
        id: 6,
        name: "Coffee",
        prize: 16,
        count: 1,
        isAvaliable: false
    }, {
        id: 7,
        name: "Cotton",
        prize: 13,
        count: 1,
        isAvaliable: true
    }, {
        id: 8,
        name: "Rice",
        prize: 12,
        count: 1,
        isAvaliable: true
    }, {
        id: 9,
        name: "Onion",
        prize: 10,
        count: 1,
        isAvaliable: false
    }, {
        id: 10,
        name: "Leaf",
        prize: 18,
        count: 1,
        isAvaliable: true
    }
]

function Product(props) {

    let [selectedProduct, setSelectedProduct] = useState();

    return (
        <>
            <ProductList products={products} setSelectedProduct={setSelectedProduct} />
            <Cart selectedProduct={selectedProduct}></Cart>
        </>
    )

}

export default Product;
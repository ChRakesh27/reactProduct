import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import ModelBox from '../components/ModalBox'

export default function ProductList({ products, setSelectedProduct }) {
    const [modalShow, setModalShow] = useState(false);
    let [modelProduct, setModelProduct] = useState();

    const handleOnAddtoCart = (product) => {
        setModelProduct(product)
        setModalShow(true)
    }

    return (
        <table className="table table-dark">
            <thead>
                <tr>
                    <th>Products</th>
                    <th>Rupess</th>
                    <th>isAvaliable</th>
                    <th>ADD</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, i) => {
                    return <tr key={product.id}>
                        <td >{product.name}</td>
                        <td>{product.prize}</td>
                        <td hidden={!product.isAvaliable}>Avaliable</td>
                        <td hidden={product.isAvaliable}>NotAvaliable</td>
                        <td>
                            <Button
                                hidden={!product.isAvaliable}
                                variant="primary"
                                onClick={() => handleOnAddtoCart(product)}

                            >
                                ADD TO CART
                            </Button>
                            <Button
                                hidden={product.isAvaliable}
                                variant="danger"
                            // onClick={() => handleOnAddtoCart(product)}

                            >
                                ADD TO CART
                            </Button>

                        </td>
                    </tr>
                })}
                {modalShow && <ModelBox
                    show={modalShow}
                    product={modelProduct}
                    onHide={() => setModalShow(false)}
                    setSelectedProduct={setSelectedProduct}
                />}
            </tbody>
        </table>
    )
}

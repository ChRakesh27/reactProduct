import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';


function ModelBox({ product, show, onHide, setSelectedProduct }) {
    let [Quantity, setQuantity] = useState(1);
    function handleOnChange(event) {
        setQuantity(+event.target.value)
    }

    function handleOnclick() {
        product.count = Quantity;
        setSelectedProduct(product)
        onHide()
    }

    return (
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {'Product'}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>{product.name}</h4>
                <p>
                    {"Quantity"}
                </p>
                <p>
                    {product.prize} *
                    <input type="Number" value={Quantity} onChange={handleOnChange}></input>
                    =
                    {product.prize * Quantity} Rupees
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleOnclick} >Ok</Button>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal >
    );
}
export default ModelBox
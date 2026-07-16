import { useState } from 'react';
import CartInfo from './CartInfo';
import AddButton from './AddButton'

const ShoppingCart = () => {
    const [cart, setCart] = useState({
        "item1": 2,
        "item2": 1,
        "item3": 5,
    });
    const prices = {
        item1: 10,
        item2: 20,
        item3: 30,
    }

    const getTotal = () => {
        return Object.entries(cart).
            reduce((sum, [item, quantity]) => {
                return sum + prices[item] * quantity
            }, 0).toFixed(2)
    }
    console.log(getTotal());

    const addItem = (item) => {
        setCart((prevCart) => ({
            ...prevCart,
            [item]: (prevCart[item] || 0) + 1
        }))
    }

    return (
        <section>
            <h2>Shopping Cart</h2>
            <AddButton item={"item1"} prices={prices} color={"green"} addItem={addItem} />
            <AddButton item={"item2"} prices={prices} color={"blue"} addItem={addItem} />
            <AddButton item={"item3"} prices={prices} color={"pink"} addItem={addItem} />
            <CartInfo cart={cart} prices={prices} getTotal={getTotal} />
        </section>
    )
}

export default ShoppingCart;
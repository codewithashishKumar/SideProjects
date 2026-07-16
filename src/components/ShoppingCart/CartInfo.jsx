const CartInfo = ({ cart, prices, getTotal }) => {
    return (
        <section>
            {Object.entries(cart).length === 0 ? (
                <p>cart is empty</p>
            ) : (
                <div><h2>cart data</h2>
                    <ul>{Object.entries(cart).map(([item, quantity]) => (
                        <li key={item}>item name : {item}  quantity :{quantity} price :{prices[item]}</li>
                    ))}
                    </ul>
                    <h3> Yout Total is {getTotal()}</h3>
                </div>
            )}
        </section>
    )
}

export default CartInfo;
const AddButton = ({ item, prices, color, addItem }) => {
    return (
        <button style={{ background: color }} onClick={() => addItem(item)}>Add {item} ({prices[item]})</button>
    )
}

export default AddButton;
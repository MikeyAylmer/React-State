
const NumberItem = ({ number, remove }) => {
    console.log(props)
    const handleRemove = () => {
        remove(number)
    }
    return (
        <li>
            <button onClick={handleRemove}>{number}</button>
        </li>
    )
}

export default NumberItem;
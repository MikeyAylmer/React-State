import { useState } from 'react';
import NumberItem from './NumberItem';

const NumbersList = () => {
    const [numbers, setNumbers] = useState([2, 5, 7, 8, 12, 18])
    const remove = () => {
        setNumbers(numbers.filter(n => n !== nums))
        console.log("REMOVING:", num);
    }
    return (
        <ul>
            <li>
                {numbers.map(n => (
                    <NumberItem number={n} remove={remove} />
                ))}
            </li>
        </ul>
    )
}
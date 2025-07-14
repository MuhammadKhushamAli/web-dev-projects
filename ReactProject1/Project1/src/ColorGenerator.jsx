import { useState } from 'react'
import Navbar from './Navbar'

export default function ColorGenerator() {
    const [color, setColor] = useState('black');
    return (
        <div className="w-screen h-screen"
        style={{backgroundColor: color}}>
            <Navbar setColor={setColor} />
        </div>
    )
} 
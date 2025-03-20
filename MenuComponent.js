// MenuComponent.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MenuComponent = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/menu')
            .then(response => setMenu(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h2>Menu</h2>
            <ul>
                {menu.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price.toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MenuComponent;
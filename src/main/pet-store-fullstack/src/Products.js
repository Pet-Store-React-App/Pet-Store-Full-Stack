import './Products.css';

import Navbar from './Navbar';
import React from 'react';
import Search from './Search';

function Products() {
    return (
        <div className='Products'>
            <header className='Products-header'>
                <h2>Products</h2>
            </header>
            <Navbar />
            <Search />
        </div>
    );
}

export default Products;
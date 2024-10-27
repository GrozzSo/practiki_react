import { PoiskTovarov } from '../Poisk/Poisk';
import { Tovar } from '../tovar/tovar'
import s from './catalogtovarov.module.css'
import React, { useState } from 'react';

const products = [
    {
        id: 1,
        title: 'Чёрная вдова',
        price: 399,
        image: 'https://funkopoprussia.com/image/data/Movies/Black-Widow/funko-pop-russia-Marvel-Black-Widow-2020-Black-Widow-in-Grey-Suit-Walmart-FU46683.png',
        quantity: 0,
        category: 'Вумен'
    },

    {
        id: 2,
        title: 'Железный человек',
        price: 470,
        image: 'https://avatars.mds.yandex.net/i?id=6799b0ab09b059cafe2fab588fa091ca_l-12820356-images-thumbs&n=13',
        quantity: 14,
        category: 'Менс'
    },
    {
        id: 3,
        title: 'Капитан марвел',
        price: 200,
        image: 'https://static.insales-cdn.com/images/products/1/7278/595442798/335-SharonRogers_AsCaptainAmerica_1024x1024.webp',
        quantity: 2,
        category: 'Вумен'
    },
    {
        id: 4,
        title: 'Чувиха из стражи галактики',
        price: 340,
        image: 'https://avatars.mds.yandex.net/i?id=ec656bfc5d098b793e5242f902fe2b43_l-5239483-images-thumbs&n=13',
        quantity: 19,
        category: 'Вумен'
    },

    {
        id: 5,
        title: 'Супер челик паук',
        price: 500,
        image: 'https://cdn1.ozone.ru/s3/multimedia-2/6074381186.jpg',
        quantity: 0,
        category: 'Менс'
    },
    {
        id: 6,
        title: 'Черныш челик паук',
        price: 900,
        image: 'https://static.hitek.fr/img/up_o/53406282/advanced.png',
        quantity: 5,
        category: 'Челик-паук'
    }
    
];


export function Catalogtovarov() {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortCriteria, setSortCriteria] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(''); 

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const sortProducts = (products) => {
        if (sortCriteria === 'priceAsc') {
            return products.sort((a, b) => a.price - b.price);
        } else if (sortCriteria === 'priceDesc') {
            return products.sort((a, b) => b.price - a.price);
        } else if (sortCriteria === 'quantityAsc') {
            return products.sort((a, b) => a.quantity - b.quantity);
        } else if (sortCriteria === 'quantityDesc') {
            return products.sort((a, b) => b.quantity - a.quantity);
        }
        return products;
    };

    const filterProducts = (products) => {
        if (selectedCategory) {
            return products.filter(product => product.category === selectedCategory);
        }
        return products; 
    };

    const filteredProducts = filterProducts(products).filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedProducts = sortProducts(filteredProducts);

    return (
        <div className={s.catalogszag}>
        <h1 className={s.Zagolovktov}>Каталог товаров</h1>
        <div className={s.PoiskFiltr}>
            <input className={s.Pole}
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Поиск товаров..."
            />
            <select value={selectedCategory} onChange={handleCategoryChange}>
                <option value="">Все категории</option>
                <option value="Менс">Менс</option>
                <option value="Вумен">Вумен</option>
                <option value="Челик-паук">Челик-паук</option>
            </select>
            <select value={sortCriteria} onChange={(e) => setSortCriteria(e.target.value)}>
                <option value="">Без сортировки</option>
                <option value="priceAsc">Цена: по возрастанию</option>
                <option value="priceDesc">Цена: по убыванию</option>
                <option value="quantityAsc">Количество: по возрастанию</option>
                <option value="quantityDesc">Количество: по убыванию</option>
            </select>
        </div>
            <div className={s.catalogs}>
                <div className={s.catalog}>
                    {sortedProducts.map((product) => (
                        <Tovar 
                            key={product.id}
                            id={product.id}
                            title={product.title} 
                            price={product.price} 
                            image={product.image} 
                            quantity={product.quantity} 
                            category={product.category}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
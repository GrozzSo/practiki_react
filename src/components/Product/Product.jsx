import { useParams } from 'react-router-dom';
import s from './Product.module.css';
import { OrderFormModal } from '../Modal/Modal';
import React, { useState } from 'react';

const products = [
    {
        id: 1,
        title: 'Чёрная вдова',
        description: 'Чёрная Вдова — элитный агент с первоклассными навыками рукопашного боя и владения огнестрельным оружием. Она известна как самая опасная женщина Европы и сражается со злодеями бок о бок с другими Мстителями.',
        price: 399,
        image: 'https://funkopoprussia.com/image/data/Movies/Black-Widow/funko-pop-russia-Marvel-Black-Widow-2020-Black-Widow-in-Grey-Suit-Walmart-FU46683.png',
        quantity: 0
    },

    {
        id: 2,
        title: 'Железный человек',
        description: 'Железный Человек — символ отваги и технологий. Тони Старк, гениальный изобретатель и миллиардер, создаёт уникальный костюм, который даёт ему невероятную силу и защиту. Благодаря этому костюму Тони становится непобедимым борцом за справедливость и помогает своим друзьям из команды Мстителей противостоять злым силам.',
        price: 470,
        image: 'https://avatars.mds.yandex.net/i?id=6799b0ab09b059cafe2fab588fa091ca_l-12820356-images-thumbs&n=13',
        quantity: 14
    },
    {
        id: 3,
        title: 'Капитан марвел',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 200,
        image: 'https://static.insales-cdn.com/images/products/1/7278/595442798/335-SharonRogers_AsCaptainAmerica_1024x1024.webp',
        quantity: 2
    },
    {
        id: 4,
        title: 'Чувиха из стражи галактики ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 340,
        image: 'https://avatars.mds.yandex.net/i?id=ec656bfc5d098b793e5242f902fe2b43_l-5239483-images-thumbs&n=13',
        quantity: 19
    },

    {
        id: 5,
        title: 'Супер челик паук',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 500,
        image: 'https://cdn1.ozone.ru/s3/multimedia-2/6074381186.jpg',
        quantity: 0
    },
    {
        id: 6,
        title: 'Черныш челик паук',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 900,
        image: 'https://static.hitek.fr/img/up_o/53406282/advanced.png',
        quantity: 5
    }
    
];

export function ProductPage() {
    const { id } = useParams();
    const product = products.find((product) => product.id === Number(id));
    
    const [isModalOpen, setModalOpen] = useState(false);

    if (!product) {
        return <h2>Товар не найден</h2>;
    }

    const handleOrderClick = () => {
        setModalOpen(true);
    };

    return (
        <div className={s.Productda}>
            <img className={s.ProductImage} src={product.image} alt={product.title} />
            <div className={s.Producttext}>
                <h1 className={s.ProductTitle}>{product.title}</h1>
                <p className={s.ProductDesc}>{product.description}</p>
                <div className={s.btnopis}>
                    <h3 className={s.ProductTsena}>{product.price}₽</h3>
                    {product.quantity === 0 ? (
                        <button onClick={handleOrderClick} className={s.AddKorzin}>Заказать</button>
                    ) : (
                        <button className={s.AddKorzin}>Добавить в корзину</button>
                    )}
                </div>
            </div>
            <OrderFormModal   
                isOpen={isModalOpen} 
                onClose={() => setModalOpen(false)} 
                product={product} 
            />
        </div>
    );
}
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Menu.css';

const menuCategories = [
  {
    id: 'hot-coffee',
    name: 'Hot Coffee',
    items: [
      {
        id: 1,
        name: 'Espresso',
        description: 'Rich and bold espresso shot',
        price: '$3.50',
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=60'
      },
      {
        id: 2,
        name: 'Cappuccino',
        description: 'Espresso with steamed milk and foam',
        price: '$4.50',
        image: 'https://images.unsplash.com/photo-1534687941688-651ccf1e2c97?w=800&auto=format&fit=crop&q=60'
      },
      {
        id: 3,
        name: 'Latte',
        description: 'Espresso with steamed milk',
        price: '$4.00',
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&auto=format&fit=crop&q=60'
      },
      {
        id: 4,
        name: 'Mocha',
        description: 'Espresso with chocolate and steamed milk',
        price: '$4.75',
        image: 'https://images.unsplash.com/photo-1579888944880-d98341245702?w=800&auto=format&fit=crop&q=60'
      },
      {
        id: 5,
        name: 'Americano',
        description: 'Espresso with hot water',
        price: '$3.75',
        image: 'https://images.unsplash.com/photo-1551036663-4b3d6d2c3f1a?w=800&auto=format&fit=crop&q=60'
      }
    ]
  },
  {
    id: 'cold-coffee',
    name: 'Cold Coffee',
    items: [
      {
        id: 6,
        name: 'Iced Latte',
        description: 'Espresso with cold milk and ice',
        price: '$4.50',
        image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&auto=format&fit=crop&q=60'
      },
      {
        id: 7,
        name: 'Cold Brew',
        description: 'Slow-steeped coffee served cold',
        price: '$4.25',
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&auto=format&fit=crop&q=60'
      },
      {
        id: 8,
        name: 'Frappuccino',
        description: 'Blended coffee drink with whipped cream',
        price: '$5.50',
        image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&auto=format&fit=crop&q=60'
      }
    ]
  },
  {
    id: 'pastries',
    name: 'Pastries',
    items: [
      {
        id: 9,
        name: 'Croissant',
        description: 'Buttery, flaky pastry',
        price: '$3.25',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&auto=format&fit=crop&q=60'
      },
      {
        id: 10,
        name: 'Chocolate Muffin',
        description: 'Rich chocolate muffin with chocolate chips',
        price: '$3.50',
        image: 'https://images.unsplash.com/photo-1607958997920-b4f9a0f8a77e?w=800&auto=format&fit=crop&q=60'
      },
      {
        id: 11,
        name: 'Cinnamon Roll',
        description: 'Sweet roll with cinnamon and icing',
        price: '$4.00',
        image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&auto=format&fit=crop&q=60'
      }
    ]
  },
  {
    id: 'snacks',
    name: 'Snacks',
    items: [
      {
        id: 12,
        name: 'Avocado Toast',
        description: 'Toasted bread with avocado spread',
        price: '$6.50',
        image: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=800&auto=format&fit=crop&q=60'
      },
      {
        id: 13,
        name: 'Quiche',
        description: 'Savory egg and cheese pie',
        price: '$5.75',
        image: 'https://images.unsplash.com/photo-1585232004423-244e0e6904e3?w=800&auto=format&fit=crop&q=60'
      },
      {
        id: 14,
        name: 'Granola Bowl',
        description: 'Yogurt with granola and fresh fruits',
        price: '$7.00',
        image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=800&auto=format&fit=crop&q=60'
      }
    ]
  }
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('hot-coffee');

  return (
    <section id="menu" className="menu">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Our Menu
        </motion.h2>
        
        <motion.div 
          className="category-tabs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {menuCategories.map((category) => (
            <motion.button
              key={category.id}
              className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        <div className="menu-grid">
          {menuCategories
            .find(category => category.id === activeCategory)
            ?.items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="menu-item"
              >
                <div className="menu-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="menu-item-content">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <span className="price">{item.price}</span>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Menu; 
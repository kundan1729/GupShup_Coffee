import React from 'react';
import { MenuItem } from '../types/menu';

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  return (
    <div className="card group hover:scale-[1.01] transition-all">
      <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        {item.isSpecial && (
          <span className="absolute top-2 right-2 bg-accent-500 text-white px-2 py-1 text-xs rounded-full">
            Special
          </span>
        )}
      </div>
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-serif text-xl">{item.name}</h3>
        <span className="font-bold text-accent-600 dark:text-accent-400">₹{item.price}</span>
      </div>
      <p className="text-primary-600 dark:text-cream-200 text-sm mb-4">{item.description}</p>
      <button className="w-full py-2 text-center bg-primary-700 hover:bg-primary-800 text-white rounded transition-colors">
        Order Now
      </button>
    </div>
  );
};

export default MenuItemCard;
import React, { useState } from 'react';
import { getMenuByCategory } from '../data/menuData';
import MenuItemCard from '../components/MenuItemCard';
import Animation from '../components/Animation';
import { Coffee, TextQuote as TeaPot, UtensilsCrossed } from 'lucide-react';

type Category = 'tea' | 'coffee' | 'snack';

const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('tea');
  
  const categories = [
    { id: 'tea', name: 'Chai & Tea', icon: <TeaPot className="h-5 w-5" /> },
    { id: 'coffee', name: 'Coffee', icon: <Coffee className="h-5 w-5" /> },
    { id: 'snack', name: 'Snacks', icon: <UtensilsCrossed className="h-5 w-5" /> },
  ];

  const menuItems = getMenuByCategory(activeCategory);

  return (
    <>
      {/* Hero Banner */}
      <section className="pt-24 pb-12 bg-menu-pattern bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="container-custom relative z-10 text-center text-white">
          <Animation>
            <h1 className="font-serif mb-4">Our Menu</h1>
          </Animation>
          <Animation delay={200}>
            <p className="text-lg max-w-2xl mx-auto">
              Explore our selection of authentic Indian chai, artisanal coffee, and delicious snacks.
            </p>
          </Animation>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 bg-cream-100 dark:bg-primary-800 sticky top-16 z-30">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as Category)}
                className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary-700 text-white shadow-md'
                    : 'bg-white dark:bg-primary-700 text-primary-700 dark:text-white hover:bg-primary-100 dark:hover:bg-primary-600'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="section bg-cream-50 dark:bg-primary-900">
        <div className="container-custom">
          <Animation>
            <h2 className="font-serif mb-8 text-center">
              {activeCategory === 'tea' && 'Chai & Tea Selection'}
              {activeCategory === 'coffee' && 'Coffee Selection'}
              {activeCategory === 'snack' && 'Delicious Snacks'}
            </h2>
          </Animation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <Animation key={item.id} delay={index * 100}>
                <MenuItemCard item={item} />
              </Animation>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container-custom text-center">
          <Animation>
            <h2 className="font-serif mb-6">Special Offers</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="card bg-primary-600 p-8">
                <h3 className="font-serif text-2xl mb-3">Happy Hours</h3>
                <p className="mb-3">Monday to Friday, 3 PM - 6 PM</p>
                <p className="text-xl font-bold">Buy 1 Get 1 Free on all Chai!</p>
              </div>
              <div className="card bg-primary-600 p-8">
                <h3 className="font-serif text-2xl mb-3">Students Special</h3>
                <p className="mb-3">Valid with student ID</p>
                <p className="text-xl font-bold">20% off on all menu items</p>
              </div>
            </div>
          </Animation>
        </div>
      </section>
    </>
  );
};

export default MenuPage;
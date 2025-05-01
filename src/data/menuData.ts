import { MenuItem } from '../types/menu';

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Cutting Chai',
    description: 'Strong, aromatic tea served in a small glass',
    price: 40,
    category: 'tea',
    image: 'https://images.pexels.com/photos/5946975/pexels-photo-5946975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isSpecial: true
  },
  {
    id: 2,
    name: 'Masala Chai',
    description: 'Classic Indian tea with aromatic spices',
    price: 30,
    category: 'tea',
    image: 'https://images.pexels.com/photos/6087188/pexels-photo-6087188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    name: 'Tandoori Chai',
    description: 'Chai served in a clay cup for earthy flavor',
    price: 50,
    category: 'tea',
    image: 'https://images.pexels.com/photos/4021983/pexels-photo-4021983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    name: 'Filter Coffee',
    description: 'South Indian style coffee decoction with milk',
    price: 40,
    category: 'coffee',
    image: 'https://images.pexels.com/photos/4109743/pexels-photo-4109743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isSpecial: true
  },
  {
    id: 5,
    name: 'Chikmagalur Brew',
    description: 'Single origin coffee from the hills of Karnataka',
    price: 70,
    category: 'coffee',
    image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 6,
    name: 'Masala Bun',
    description: 'Sweet bun filled with spiced coconut mixture',
    price: 30,
    category: 'snack',
    image: ''
  },
  {
    id: 7,
    name: 'Samosa',
    description: 'Crispy pastry filled with spiced potatoes and peas',
    price: 25,
    category: 'snack',
    image: 'https://images.pexels.com/photos/8992923/pexels-photo-8992923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 8,
    name: 'Bun Maska',
    description: 'Soft bun with generous helping of butter',
    price: 35,
    category: 'snack',
    image: 'https://images.pexels.com/photos/5835353/pexels-photo-5835353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 9,
    name: 'Vada Pav',
    description: 'Spicy potato fritter in a bun with chutneys',
    price: 40,
    category: 'snack',
    image: 'https://images.pexels.com/photos/16145936/pexels-photo-16145936/free-photo-of-street-food.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 11,
    name: 'hello Pav',
    description: 'Spicy potato fritter in a bun with chutneys',
    price: 40,
    category: 'snack',
    image: 'https://images.pexels.com/photos/16145936/pexels-photo-16145936/free-photo-of-street-food.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

export const getSpecials = () => {
  return menuItems.filter(item => item.isSpecial);
};

export const getMenuByCategory = (category: 'tea' | 'coffee' | 'snack') => {
  return menuItems.filter(item => item.category === category);
};

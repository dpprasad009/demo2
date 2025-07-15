import { faker } from '@faker-js/faker';
import { Product, User, Order } from '../types';

// Curated, realistic product images
const gpsDeviceImages = [
  'https://images.unsplash.com/photo-1583220396869-459311a67322?w=400&h=300&fit=crop&q=80',
  'https://images.unsplash.com/photo-1562763563-443a84513745?w=400&h=300&fit=crop&q=80',
  'https://images.unsplash.com/photo-1610948237309-d93da449494a?w=400&h=300&fit=crop&q=80',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&q=80',
  'https://images.unsplash.com/photo-1604280390216-755259746355?w=400&h=300&fit=crop&q=80',
  'https://images.unsplash.com/photo-1519958362348-4a628b874254?w=400&h=300&fit=crop&q=80',
];

const gpsTrackerImages = [
  'https://images.unsplash.com/photo-1614317655131-01585455697c?w=400&h=300&fit=crop&q=80',
  'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop&q=80',
  'https://images.unsplash.com/photo-1551807516-b03a52e10f87?w=400&h=300&fit=crop&q=80',
  'https://images.unsplash.com/photo-1629907739924-2a917277f960?w=400&h=300&fit=crop&q=80',
  'https://images.unsplash.com/photo-1526657782461-9fe13505d3a7?w=400&h=300&fit=crop&q=80',
];

const homeAutomationImages = [
  'https://images.unsplash.com/photo-1603481588273-2f9ac1a20a9a?w=400&h=300&fit=crop&q=80',
  'https://images.unsplash.com/photo-1596720306336-237f59d5c4a8?w=400&h=300&fit=crop&q=80',
  'https://images.unsplash.com/photo-1617999192533-56a7c0b4f3a7?w=400&h=300&fit=crop&q=80',
  'https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=400&h=300&fit=crop&q=80',
  'https://images.unsplash.com/photo-1562763985-e355403072ff?w=400&h=300&fit=crop&q=80',
  'https://images.unsplash.com/photo-1615953367733-34819feb8656?w=400&h=300&fit=crop&q=80',
];

// Mock products data
export const generateMockProducts = (): Product[] => {
  const brands = ['TechPro', 'InnoTech', 'SmartHome', 'GPSMaster', 'AutoCore', 'HomeGenius'];
  
  const products: Product[] = [];
  
  // GPS Devices
  for (let i = 0; i < 15; i++) {
    const mainImage = faker.helpers.arrayElement(gpsDeviceImages);
    const galleryImages = faker.helpers.shuffle(gpsDeviceImages).slice(0, 3);
    products.push({
      id: faker.string.uuid(),
      name: `GPS Navigator Pro ${faker.commerce.productAdjective()}`,
      description: `Professional GPS navigation device with advanced mapping capabilities, real-time traffic updates, and weather information. Perfect for automotive, marine, and outdoor applications.`,
      price: parseFloat(faker.commerce.price({ min: 150, max: 800, dec: 2 })),
      originalPrice: parseFloat(faker.commerce.price({ min: 200, max: 900, dec: 2 })),
      category: 'gps-devices',
      image: mainImage,
      images: [mainImage, ...galleryImages.filter(img => img !== mainImage)].slice(0, 3),
      specifications: {
        'Screen Size': `${faker.number.int({ min: 5, max: 10 })}"`,
        'Battery Life': `${faker.number.int({ min: 8, max: 24 })} hours`,
        'Map Updates': 'Lifetime',
        'Voice Commands': 'Yes',
        'Bluetooth': 'Yes',
        'Memory': `${faker.number.int({ min: 16, max: 64 })}GB`,
      },
      inStock: faker.datatype.boolean(),
      rating: parseFloat(faker.number.float({ min: 3.5, max: 5.0, fractionDigits: 1 }).toFixed(1)),
      reviews: faker.number.int({ min: 10, max: 500 }),
      brand: faker.helpers.arrayElement(brands),
      tags: ['GPS', 'Navigation', 'Automotive', 'Travel'],
      featured: faker.datatype.boolean(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    });
  }
  
  // GPS Trackers
  for (let i = 0; i < 12; i++) {
    const mainImage = faker.helpers.arrayElement(gpsTrackerImages);
    const galleryImages = faker.helpers.shuffle(gpsTrackerImages).slice(0, 2);
    products.push({
      id: faker.string.uuid(),
      name: `Stealth GPS Tracker ${faker.commerce.productMaterial()}`,
      description: `Compact and reliable GPS tracking device with real-time location monitoring, geofencing alerts, and long battery life. Ideal for vehicles, pets, and personal belongings.`,
      price: parseFloat(faker.commerce.price({ min: 50, max: 300, dec: 2 })),
      originalPrice: parseFloat(faker.commerce.price({ min: 80, max: 350, dec: 2 })),
      category: 'gps-trackers',
      image: mainImage,
      images: [mainImage, ...galleryImages.filter(img => img !== mainImage)].slice(0, 2),
      specifications: {
        'Size': `${faker.number.int({ min: 2, max: 5 })} x ${faker.number.int({ min: 2, max: 5 })} inches`,
        'Battery Life': `${faker.number.int({ min: 7, max: 30 })} days`,
        'GPS Accuracy': '3-5 meters',
        'Connectivity': '4G LTE',
        'Waterproof': faker.datatype.boolean() ? 'Yes' : 'No',
        'Geofencing': 'Yes',
      },
      inStock: faker.datatype.boolean(),
      rating: parseFloat(faker.number.float({ min: 3.5, max: 5.0, fractionDigits: 1 }).toFixed(1)),
      reviews: faker.number.int({ min: 15, max: 300 }),
      brand: faker.helpers.arrayElement(brands),
      tags: ['GPS', 'Tracking', 'Security', 'Monitoring'],
      featured: faker.datatype.boolean(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    });
  }
  
  // Home Automation
  for (let i = 0; i < 18; i++) {
    const mainImage = faker.helpers.arrayElement(homeAutomationImages);
    const galleryImages = faker.helpers.shuffle(homeAutomationImages).slice(0, 3);
    products.push({
      id: faker.string.uuid(),
      name: `Smart Home Hub ${faker.commerce.product()}`,
      description: `Advanced home automation system with voice control, mobile app integration, and energy monitoring. Transform your home into a smart, efficient, and secure living space.`,
      price: parseFloat(faker.commerce.price({ min: 100, max: 600, dec: 2 })),
      originalPrice: parseFloat(faker.commerce.price({ min: 150, max: 700, dec: 2 })),
      category: 'home-automation',
      image: mainImage,
      images: [mainImage, ...galleryImages.filter(img => img !== mainImage)].slice(0, 3),
      specifications: {
        'Connectivity': 'WiFi, Bluetooth, Zigbee',
        'Voice Control': 'Alexa, Google Assistant',
        'Mobile App': 'iOS, Android',
        'Energy Monitoring': 'Yes',
        'Smart Scheduling': 'Yes',
        'Security Integration': 'Yes',
      },
      inStock: faker.datatype.boolean(),
      rating: parseFloat(faker.number.float({ min: 3.5, max: 5.0, fractionDigits: 1 }).toFixed(1)),
      reviews: faker.number.int({ min: 20, max: 400 }),
      brand: faker.helpers.arrayElement(brands),
      tags: ['Smart Home', 'Automation', 'IoT', 'Security'],
      featured: faker.datatype.boolean(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    });
  }

  return products;
};

// Mock admin user
export const mockAdmin: User = {
  id: '1',
  name: 'Admin User',
  email: 'admin@innomakers.com',
  role: 'admin',
  avatar: 'https://i.pravatar.cc/100?u=admin',
};

// Mock orders
export const generateMockOrders = (): Order[] => {
  const orders: Order[] = [];
  const statuses = ['pending', 'processing', 'shipped', 'delivered', 'cancelled'] as const;
  
  for (let i = 0; i < 20; i++) {
    orders.push({
      id: faker.string.uuid(),
      userId: faker.string.uuid(),
      items: [], // Will be populated with actual cart items
      total: parseFloat(faker.commerce.price({ min: 100, max: 2000, dec: 2 })),
      status: faker.helpers.arrayElement(statuses),
      createdAt: faker.date.recent(),
      shippingAddress: {
        street: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        country: faker.location.country(),
      },
    });
  }
  
  return orders;
};

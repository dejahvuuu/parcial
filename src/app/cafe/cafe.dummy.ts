import { Faker, es } from '@faker-js/faker';
import { Cafe } from './cafe'; 

const customFaker = new Faker({ locale: [es] });

export const cafes: Cafe[] = [
  {
    id: 1,
    nombre: 'Cafe Quindio',
    tipo: 'Genova',
    region: 'Quindio',
    sabor: 'Suave',
    altura: '1200',
    imagen: 'https://ibb.co/JnB7mVg',
  },
  {
    id: 2,
    nombre: 'Cafe Quindio',
    tipo: 'Oscuro',
    region: 'Quindio',
    sabor: 'Intenso',
    altura: '1200',
    imagen: 'https://ibb.co/JnB7mVg',
  },
  {
    id: 3,
    nombre: 'Cafe Quindio',
    tipo: 'Genova',
    region: 'Quindio',
    sabor: 'Caramelo',
    altura: '1200',
    imagen: 'https://ibb.co/JnB7mVg',
  },  
];
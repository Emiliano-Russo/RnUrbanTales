// Define tus categorías como un array de strings
export const categories: Category[] = [
  'Humor',
  'Sadness',
  'Terror',
  'Love',
  'Anger',
  'Surprise',
  'Nostalgia',
  'Euphoria',
  'Mystery',
  'Adventure',
  'Reflection',
];

// Asegúrate de que tu tipo Category esté sincronizado con este array
export type Category =
  | 'Humor'
  | 'Sadness'
  | 'Terror'
  | 'Love'
  | 'Anger'
  | 'Surprise'
  | 'Nostalgia'
  | 'Euphoria'
  | 'Mystery'
  | 'Adventure'
  | 'Reflection';
// Define tus categorías como un array de objetos con nombre, color de fondo y color de borde
export const categoryColors = [
  { name: 'Humor', bgColor: '#FDEBD0', borderColor: '#F5B041', textColor: '#784212' },
  { name: 'Sadness', bgColor: '#D6EAF8', borderColor: '#3498DB', textColor: '#1B4F72' },
  { name: 'Terror', bgColor: '#D5D8DC', borderColor: '#7F8C8D', textColor: '#34495E' },
  { name: 'Love', bgColor: '#FADBD8', borderColor: '#E74C3C', textColor: '#943126' },
  { name: 'Anger', bgColor: '#F5CBA7', borderColor: '#E67E22', textColor: '#935116' },
  { name: 'Surprise', bgColor: '#FEF9E7', borderColor: '#F7DC6F', textColor: '#9A7D0A' },
  { name: 'Nostalgia', bgColor: '#EBDEF0', borderColor: '#AF7AC5', textColor: '#6C3483' },
  { name: 'Euphoria', bgColor: '#D5F5E3', borderColor: '#2ECC71', textColor: '#1E8449' },
  { name: 'Mystery', bgColor: '#A9CCE3', borderColor: '#2980B9', textColor: '#1A5276' },
  { name: 'Adventure', bgColor: '#A3E4D7', borderColor: '#16A085', textColor: '#0E6655' },
  { name: 'Reflection', bgColor: '#F2D7D5', borderColor: '#D98880', textColor: '#78281F' },
];

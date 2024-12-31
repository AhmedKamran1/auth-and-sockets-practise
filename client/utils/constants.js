// Icons
import SummarizeIcon from '@mui/icons-material/Summarize';
import EditNoteIcon from '@mui/icons-material/EditNote';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ReviewsIcon from '@mui/icons-material/Reviews';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import ImageIcon from '@mui/icons-material/Image';

export const NAV_HEIGHT = 85;
export const DASHBOARD_DRAWER_FULLWIDTH = 350;
export const DASHBOARD_DRAWER_RESPONSIVEWIDTH = 70;

export const categoryTypes = [
  'Sandwiches',
  'American',
  'Pizza',
  'Fast Food',
  'Breakfast & Brunch',
  'American (New)',
  'Burgers',
  'American (Traditional)',
  'Mexican',
  'Italian',
  'Coffee & Tea',
  'Seafood',
  'Chinese',
  'Salad',
  'Chicken Wings',
  'Cafes',
  'Delis',
  'Bakeries',
  'Desserts',
  'Japanese',
  'Sushi Bars',
  'Barbeque',
  'Asian Fusion',
  'Steakhouses',
  'Diners',
  'Cocktail Bars',
  'Mediterranean',
  'Vegetarian',
  'Ice Cream & Frozen Yogurt',
  'Soup',
  'Tacos',
  'Juice Bars & Smoothies',
  'Southern',
  'Thai',
  'Cajun/Creole',
  'Tex-Mex',
  'Vegan',
  'Vietnamese',
  'Indian',
  'Latin American',
  'Chicken Shop',
  'Greek',
  'Hot Dogs',
  'Cheesesteaks',
  'Bagels',
  'Caribbean',
  'Middle Eastern',
  'Soul Food',
  'Ethnic Food',
  'French',
  'Korean',
  'Donuts',
  'Noodles',
  'Halal',
  'Wraps',
  'Spanish',
  'Cuban',
  'Bubble Tea',
  'Canadian (New)',
  'Pakistani',
  'Ramen',
  'Irish',
  'Fish & Chips',
  'Waffles',
  'Poke',
  'Hawaiian',
  'Acai Bowls',
  'Dim Sum',
  'Modern European',
  'German',
  'Fruits & Veggies',
  'African',
  'Szechuan',
  'New Mexican Cuisine',
  'Filipino',
  'Falafel',
  'Pretzels',
  'Puerto Rican',
  'Cupcakes',
  'Cantonese',
  'Gelato',
  'Kebab',
  'Turkish',
  'Lebanese',
  'Peruvian',
  'Taiwanese',
  'Brazilian',
  'Donairs',
  'Hot Pot',
  'British',
  'Kosher',
  'Pan Asian',
  'Colombian',
  'Ethiopian',
  'Salvadoran',
  'Patisserie/Cake Shop',
  'Empanadas',
  'Moroccan',
  'Venezuelan',
  'Laotian',
  'Afghan',
  'Dominican',
  'Polish',
  'Russian',
  'Persian/Iranian',
  'Basque',
  'Teppanyaki',
  'Mongolian',
  'Arabic',
  'Argentine',
  'Portuguese',
  'Malaysian',
  'Fondue',
  'Poutineries',
  'Honduran',
  'Belgian',
  'Indonesian',
  'Himalayan/Nepalese',
  'Haitian',
  'Burmese',
  'Macarons',
  'Ukrainian',
  'Cambodian',
  'Trinidadian',
  'Shanghainese',
  'Egyptian',
  'Armenian',
  'Pancakes',
  'Bangladeshi',
  'Australian',
  'Scandinavian',
  'Iberian',
  'Syrian',
  'Singaporean',
  'Uzbek',
  'Tuscan',
  'South African',
  'Czech',
  'Hungarian',
  'Senegalese',
  'Nicaraguan',
  'Austrian',
  'Scottish',
  'Sardinian',
  'Georgian',
  'Sri Lankan',
];

export const listingSteps = [
  'Restaurant Legalities',
  'Restaurant Location',
  'Restaurant Details',
];

export const fileSizeAllowed = 1024;

export const allowedImageTypes = ['image/png', 'image/jpeg', 'image/jpg'];

export const SortBy = {
  RECOMMENDED: {
    text: 'Recommended',
    sortType: 'recommended',
  },
  RATING: {
    text: 'Top Rated',
    sortType: 'rating',
  },
  COUNT: {
    text: 'Most Reviewed',
    sortType: 'count',
  },
};

export const UserStorage = {
  AVATAR: 'avatar',
  COVER: 'cover',
};

export const Status = {
  PENDING: 'pending',
  APPROVED: 'approved',
  REJECTED: 'rejected',
};

export const Periods = [
  { id: '30 Days', value: 1 },
  { id: '3 Months', value: 3 },
  { id: '6 Months', value: 6 },
  { id: '1 Year', value: 12 },
];

export const VoteTypes = {
  LIKE: 'like',
  DISLIKE: 'dislike',
  COOL: 'cool',
  FUNNY: 'funny',
  USEFUL: 'useful',
};

export const MapZoomLevels = {
  MAX_ZOOM_HEAT_MAP: 11,
  // MAP_MIN_ZOOM: 10,
  MAP_ZOOM: 13,
};

export const MapThemes = {
  light: 'mapbox://styles/mapbox/light-v11',
  dark: 'mapbox://styles/mapbox/dark-v11',
  streets: 'mapbox://styles/mapbox/streets-v12',
  satellite: 'mapbox://styles/mapbox/satellite-streets-v12',
  night: 'mapbox://styles/mapbox/navigation-night-v1',
};

export const MapProfiles = {
  DRIVING: 'driving',
  DRIVING_TRAFFIC: 'driving-traffic',
  WALKING: 'walking',
  CYCLING: 'cycling',
};

export const MenuCategory = {
  APPETIZER: {
    text: 'Appetizer',
    category: 'appetizer',
  },
  MAIN_COURSE: {
    text: 'Main Course',
    category: 'main_course',
  },
  DESSERT: {
    text: 'Dessert',
    category: 'dessert',
  },
};

export const dashboardLinks = [
  {
    id: 'overview',
    text: 'Overview',
    icon: <SummarizeIcon />,
  },
  {
    id: 'edit-details',
    text: 'Edit Details',
    icon: <EditNoteIcon />,
  },
  {
    id: 'feature-history',
    text: 'Feature History',
    hide: true,
    icon: <MonetizationOnIcon />,
  },
  {
    id: 'reviews',
    text: 'Reviews',
    hide: true,
    icon: <ReviewsIcon />,
  },
  {
    id: 'menu',
    text: 'Menu',
    hide: true,
    icon: <MenuBookIcon />,
  },
  {
    id: 'logs',
    text: 'Logs',
    icon: <WorkHistoryIcon />,
  },
  {
    id: 'restaurant-images',
    text: 'Images',
    hide: true,
    icon: <ImageIcon />,
  },
];

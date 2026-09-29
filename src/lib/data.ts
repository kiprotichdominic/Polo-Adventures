export type Tour = {
  id: string;
  slug: string;
  title: string;
  category: "bush" | "beach" | "climbing" | "group" | "budget" | "family";
  destination: string;
  duration: string;
  price: number;
  currency: string;
  image: string;
  highlights: string[];
  description: string;
  featured: boolean;
};

export type Destination = {
  id: string;
  slug: string;
  name: string;
  country: string;
  image: string;
  tourCount: number;
  tagline: string;
};

export type Testimonial = {
  id: string;
  name: string;
  country: string;
  text: string;
  tour: string;
  rating: number;
};

export const tours: Tour[] = [
  {
    id: "1",
    slug: "maasai-mara-classic",
    title: "Maasai Mara Classic Safari",
    category: "bush",
    destination: "Kenya",
    duration: "4 days / 3 nights",
    price: 1200,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    highlights: ["Big Five game drives", "Mara River crossing", "Luxury tented camp", "Expert Maasai guides"],
    description: "Experience the world's greatest wildlife spectacle in the iconic Maasai Mara. Witness the Great Migration and encounter the Big Five in their natural habitat.",
    featured: true,
  },
  {
    id: "2",
    slug: "amboseli-kilimanjaro-view",
    title: "Amboseli & Kilimanjaro Views",
    category: "bush",
    destination: "Kenya",
    duration: "3 days / 2 nights",
    price: 890,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
    highlights: ["Elephant herds", "Mt. Kilimanjaro backdrop", "Sunrise game drives", "Amboseli NP"],
    description: "Photograph massive elephant herds against Africa's highest peak. Amboseli delivers iconic, unforgettable landscapes at every turn.",
    featured: true,
  },
  {
    id: "3",
    slug: "zanzibar-beach-escape",
    title: "Zanzibar Beach Escape",
    category: "beach",
    destination: "Tanzania",
    duration: "5 days / 4 nights",
    price: 1450,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&q=80",
    highlights: ["Stone Town UNESCO tour", "Pristine white beaches", "Spice farm visit", "Dhow sunset cruise"],
    description: "Trade the savannah for paradise. Zanzibar's turquoise waters, spice markets and Swahili culture make the perfect post-safari escape.",
    featured: true,
  },
  {
    id: "4",
    slug: "mount-kenya-trek",
    title: "Mount Kenya Summit Trek",
    category: "climbing",
    destination: "Kenya",
    duration: "6 days / 5 nights",
    price: 1100,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=800&q=80",
    highlights: ["Point Lenana summit", "Afro-alpine flora", "Experienced mountain guides", "Porters included"],
    description: "Conquer Africa's second-highest peak. Trek through bamboo forests, moorlands and glaciers to reach the dramatic summit of Mount Kenya.",
    featured: false,
  },
  {
    id: "5",
    slug: "kenya-budget-safari",
    title: "Kenya Budget Safari",
    category: "budget",
    destination: "Kenya",
    duration: "5 days / 4 nights",
    price: 650,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&q=80",
    highlights: ["Nairobi NP", "Lake Nakuru flamingos", "Maasai Mara game drives", "Shared vehicles"],
    description: "The full Kenya safari experience at an accessible price. Perfect for backpackers and budget-conscious explorers who won't compromise on wildlife.",
    featured: false,
  },
  {
    id: "6",
    slug: "uganda-gorilla-trek",
    title: "Uganda Mountain Gorilla Trek",
    category: "bush",
    destination: "Uganda",
    duration: "4 days / 3 nights",
    price: 2400,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    highlights: ["Mountain gorilla tracking", "Bwindi Forest NP", "Local community visit", "One-hour gorilla encounter"],
    description: "A truly life-changing encounter with the mountain gorillas of Bwindi Impenetrable Forest. Less than 1,000 remain in the wild — meet them.",
    featured: false,
  },
];

export const destinations: Destination[] = [
  {
    id: "1",
    slug: "kenya",
    name: "Kenya",
    country: "Kenya",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    tourCount: 12,
    tagline: "The heart of East African wildlife",
  },
  {
    id: "2",
    slug: "tanzania",
    name: "Tanzania",
    country: "Tanzania",
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&q=80",
    tourCount: 6,
    tagline: "Serengeti plains & Kilimanjaro",
  },
  {
    id: "3",
    slug: "zanzibar",
    name: "Zanzibar",
    country: "Tanzania",
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&q=80",
    tourCount: 4,
    tagline: "Spice island paradise",
  },
  {
    id: "4",
    slug: "uganda",
    name: "Uganda",
    country: "Uganda",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    tourCount: 3,
    tagline: "Gorillas & pearl of Africa",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    country: "United Kingdom",
    text: "Polo Adventures curated the most incredible Mara experience for our family. Our guide Moses knew every animal by name — truly exceptional knowledge and passion for the bush.",
    tour: "Maasai Mara Classic Safari",
    rating: 5,
  },
  {
    id: "2",
    name: "Lukas Bauer",
    country: "Germany",
    text: "From booking to the final game drive, every detail was handled impeccably. The Amboseli sunrise with Kilimanjaro in the background is something I will carry with me forever.",
    tour: "Amboseli & Kilimanjaro Views",
    rating: 5,
  },
  {
    id: "3",
    name: "Amara Diallo",
    country: "France",
    text: "The Zanzibar extension after our safari was the perfect way to unwind. Polo Adventures made the whole 10-day trip seamless. Zero stress, pure magic.",
    tour: "Zanzibar Beach Escape",
    rating: 5,
  },
];

export const stats = [
  { label: "Safaris completed", value: "500+" },
  { label: "Destinations covered", value: "12" },
  { label: "Happy travellers", value: "2,000+" },
  { label: "Years of experience", value: "10+" },
];

export const categories = [
  { key: "bush", label: "Bush Safaris", icon: "🦁", count: 6 },
  { key: "beach", label: "Beach Holidays", icon: "🏖️", count: 4 },
  { key: "climbing", label: "Climbing", icon: "⛰️", count: 2 },
  { key: "group", label: "Group Safaris", icon: "👥", count: 3 },
  { key: "budget", label: "Budget Safaris", icon: "💚", count: 3 },
  { key: "family", label: "Family Safaris", icon: "👨‍👩‍👧", count: 2 },
];

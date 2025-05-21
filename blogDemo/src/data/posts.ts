import type { BlogPost } from "../types/BlogPost";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Art of Sourdough Baking",
    excerpt: "Master the basics of creating your own sourdough starter and baking delicious bread.",
    content: "Sourdough baking is both an art and a science. This post walks you through the process of creating a starter, fermenting, shaping, and baking your own loaf at home.",
    date: "May 10, 2025",
    author: "Olivia Baker",
    image: blog1,
  },
  {
    id: 2,
    title: "10 Tips for Perfect Cakes Every Time",
    excerpt: "Discover essential baking tips that guarantee moist, fluffy, and flavorful cakes.",
    content: "From choosing the right flour to temperature control, these 10 tips will help you bake the perfect cake every time you step into the kitchen.",
    date: "May 12, 2025",
    author: "Liam Dough",
    image: blog2,
  },
  {
    id: 3,
    title: "How to Decorate Cupcakes Like a Pro",
    excerpt: "Learn creative and simple techniques to decorate cupcakes that wow.",
    content: "Cupcake decoration doesn’t have to be complicated. This guide covers piping techniques, color combinations, and fun toppings to make your cupcakes stand out.",
    date: "May 15, 2025",
    author: "Sophia Crust",
    image: blog3,
  },
  {
    id: 4,
    title: "Gluten-Free Baking: Tips and Tricks",
    excerpt: "Make delicious gluten-free baked goods with these helpful tips.",
    content: "Baking gluten-free can be tricky, but with the right flours, binders, and techniques, you can create tasty treats everyone will love.",
    date: "May 18, 2025",
    author: "Ethan Whisk",
    image: blog4,
  },
];

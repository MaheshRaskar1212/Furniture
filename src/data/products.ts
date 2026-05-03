import productSofa from "@/assets/images/product-sofa.png";
import productDining from "@/assets/images/product-dining.png";
import productWardrobe from "@/assets/images/product-wardrobe.png";
import productChair from "@/assets/images/product-chair.png";
export type ProductCategory = "Furniture";

export type Product = {
  id: number;
  slug: string;
  name: string;
  collection: string;
  description: string;
  story: string;
  material: string;
  image: string;
  category: ProductCategory;
  details: { label: string; value: string }[];
};

export const products: Product[] = [
  {
    id: 1,
    slug: "aria-modular-sofa",
    name: "The Aria Modular Sofa",
    collection: "Living Collection",
    description:
      "A low-slung modular silhouette upholstered in performance bouclé. Configurable seats, hand-finished hardwood frame, soft feather-blend cushions.",
    story:
      "Aria is built around the way a living room actually works — it stretches, splits, and reconfigures as your home changes. Each module is hand-built on a kiln-dried hardwood frame and upholstered in a stain-resistant bouclé. The seat cushions are a feather-and-foam blend that holds its shape without the constant fluffing.",
    material: "Bouclé · Hardwood · Feather Blend",
    image: productSofa,
    category: "Furniture",
    details: [
      { label: "Frame", value: "Kiln-dried hardwood, mortise-and-tenon joinery" },
      { label: "Upholstery", value: "Performance bouclé in 12 colourways" },
      { label: "Cushion fill", value: "Feather-wrapped foam, removable covers" },
      { label: "Configurations", value: "2-seater, 3-seater, L-shape, U-shape" },
      { label: "Lead time", value: "5–6 weeks" },
    ],
  },
  {
    id: 2,
    slug: "solid-walnut-dining-table",
    name: "Solid Walnut Dining Table",
    collection: "Dining Collection",
    description:
      "Cut from a single slab of seasoned Indian walnut, finished by hand with a natural matte oil. Tapered legs, hidden joinery, built to outlive trends.",
    story:
      "We source seasoned Indian walnut and let the grain decide the table. Each piece is planed and sanded by hand, then sealed with a low-sheen natural oil that deepens with age. Tapered legs are joined to the apron with hidden mortises so the surface reads as one quiet plane.",
    material: "Solid Walnut · Natural Oil Finish",
    image: productDining,
    category: "Furniture",
    details: [
      { label: "Material", value: "Seasoned Indian walnut, single slab top" },
      { label: "Finish", value: "Hand-applied natural oil, low sheen" },
      { label: "Joinery", value: "Hidden mortise-and-tenon legs" },
      { label: "Sizes", value: "6, 8 and 10-seater dimensions" },
      { label: "Lead time", value: "4–5 weeks" },
    ],
  },
  {
    id: 3,
    slug: "atelier-wardrobe",
    name: "Atelier Wardrobe",
    collection: "Bedroom Collection",
    description:
      "A tall, architectural wardrobe in dark oak with brushed brass vertical handles and a soft-close interior fitted to your wardrobe inventory.",
    story:
      "Atelier is sized to your room and your wardrobe. We start with a measure-up at your home, then plan the interior around what you actually own — the number of suits, the length of dresses, the drawers you need for everyday pieces. The exterior keeps a single clean line, broken only by the brushed brass pull.",
    material: "Dark Oak · Brushed Brass",
    image: productWardrobe,
    category: "Furniture",
    details: [
      { label: "Carcass", value: "Engineered hardwood with dark oak veneer" },
      { label: "Hardware", value: "Brushed brass handles, soft-close hinges" },
      { label: "Interior", value: "Fully customised to your inventory" },
      { label: "Finish", value: "Matte lacquer, fingerprint-resistant" },
      { label: "Lead time", value: "6–8 weeks" },
    ],
  },
  {
    id: 4,
    slug: "reading-lounge-chair",
    name: "Reading Lounge Chair",
    collection: "Study Collection",
    description:
      "A solid teak frame with a hand-stitched leather sling. Engineered for the hour you actually spend with a book, not the hour you photograph it.",
    story:
      "The chair is built around a single comfortable position — back slightly reclined, arms resting low, feet flat. The teak frame is finished with a low-sheen oil and the leather sling is hand-stitched, so it softens with use rather than sagging.",
    material: "Solid Teak · Full-Grain Leather",
    image: productChair,
    category: "Furniture",
    details: [
      { label: "Frame", value: "Solid Burma teak, oiled finish" },
      { label: "Seat", value: "Full-grain leather, hand-stitched sling" },
      { label: "Colourways", value: "Cognac, Chocolate, Charcoal" },
      { label: "Dimensions", value: "76W × 86D × 84H cm" },
      { label: "Lead time", value: "4–5 weeks" },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

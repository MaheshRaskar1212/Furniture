import { useEffect } from "react";
import { useSEO } from "@/hooks/useSEO";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import blog1Img from "@/assets/images/blog-1.png";
import blog2Img from "@/assets/images/blog-2.png";
import blog3Img from "@/assets/images/blog-3.png";

export default function Blogs() {
  useSEO({
    title: "Stories & Insights | Tenon Furniture Blog — Wakad, Pune",
    description: "Furniture tips, material guides and design trends from Tenon — Pune's premium furniture manufacturer in Wakad, Pimpri-Chinchwad. Explore our latest articles.",
    canonical: "https://tenon.replit.app/blogs",
  });

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } }
  };

  const posts = [
    {
      id: 1,
      title: "How to Choose the Right Wood for Your Living Room",
      category: "Material Guide",
      excerpt: "Understanding grain, durability, and tone to select pieces that age gracefully with your home.",
      image: blog1Img
    },
    {
      id: 2,
      title: "The Art of Choosing Wood: Grain, Tone & Longevity",
      category: "Trends",
      excerpt: "From teak to walnut to sheesham — understanding which wood works best for each room and climate in Pune.",
      image: blog2Img
    },
    {
      id: 3,
      title: "The Tenon Process: From Workshop to Your Space",
      category: "Design Tips",
      excerpt: "A behind-the-scenes look at our meticulous approach to crafting bespoke furniture.",
      image: blog3Img
    }
  ];

  return (
    <Layout>
      <div className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container mx-auto px-6 md:px-12">
          
          <motion.div 
            initial="hidden" animate="visible" variants={fadeUp}
            className="mb-16 md:mb-24"
          >
            <h1 className="text-4xl md:text-6xl font-serif text-foreground tracking-wide">Stories & Insights.</h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {posts.map((post, i) => (
              <motion.article 
                key={post.id}
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-100px" }} 
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer flex flex-col"
              >
                <div className="relative aspect-[16/9] overflow-hidden mb-8 bg-secondary/20">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 border border-transparent group-hover:border-accent/50 transition-colors duration-500 z-10 pointer-events-none"></div>
                </div>
                
                <div className="flex flex-col flex-grow px-2">
                  <span className="text-accent text-xs font-semibold uppercase tracking-widest mb-4">
                    {post.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground font-light mb-8 flex-grow">
                    {post.excerpt}
                  </p>
                  <a 
                    href="#"
                    onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="inline-flex items-center text-sm font-medium tracking-widest uppercase text-foreground group-hover:text-accent transition-colors w-fit"
                  >
                    Read More 
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

        </div>
      </div>
    </Layout>
  );
}
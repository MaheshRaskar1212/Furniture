import { useEffect } from "react";
import { useSEO } from "@/hooks/useSEO";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { ClientLogosMarquee } from "@/components/client-logos-marquee";
import { Hammer, Crown, PenTool, Clock } from "lucide-react";
import aboutImg from "@/assets/images/about-interior.png";

export default function About() {
  useSEO({
    title: "About Tenon | Custom Furniture Manufacturer in Wakad, Pune",
    description: "Learn about Tenon — a premium furniture manufacturer based in Wakad, Pimpri-Chinchwad, Pune. 4.3★ Google rated, serving homes and offices across Pune with handcrafted furniture.",
    canonical: "https://tenon.replit.app/about",
  });

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } }
  };

  const values = [
    {
      icon: Hammer,
      title: "Master Craftsmanship",
      desc: "Built by artisans who understand the soul of the material."
    },
    {
      icon: Crown,
      title: "Premium Materials",
      desc: "Sourcing only the finest woods, fabrics, and finishes."
    },
    {
      icon: PenTool,
      title: "Personalized Design",
      desc: "Tailored to your space, your aesthetic, and your life."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      desc: "Respecting your schedule without compromising quality."
    }
  ];

  return (
    <Layout>
      <div className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-6 md:px-12">
          
          <motion.div 
            initial="hidden" animate="visible" variants={fadeUp}
            className="mb-16 md:mb-24"
          >
            <h1 className="text-4xl md:text-6xl font-serif text-foreground tracking-wide">About Tenon.</h1>
            <p className="text-lg md:text-xl font-semibold text-accent mt-4 italic">Since 2001, TENON has built a legacy of excellence in furniture design and manufacturing.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="prose prose-invert prose-lg text-muted-foreground font-light leading-relaxed"
            >
              <p>
                Tenon was born from a passion for craftsmanship and the belief that great furniture is more than function — it is an expression of the people who live with it.
              </p>
              <p>
                Based in Wakad, Pimpri-Chinchwad, we manufacture premium furniture, bringing refined interiors to homes and commercial spaces across Pune and beyond. We specialize in crafting high-quality, durable furniture for modern living spaces, combining functionality with aesthetic appeal to suit every home.
              </p>
              <p>
                We use premium materials to ensure long-lasting performance and comfort, focusing on detail, precision, and customer satisfaction. Our team offers customized furniture solutions based on client needs, blending traditional craftsmanship with modern technology to create pieces that enhance both comfort and usability.
              </p>
              <p>
                We pay close attention to finishing, texture, and durability, ensuring our furniture reflects elegance, strength, and timeless design. From concept to creation, we guarantee excellence at every step, delivering value through quality and design while continuously innovating to match the latest interior design trends.
              </p>
              <p>
                With a 4.3-star Google rating and a growing community of satisfied clients, Tenon stands for quality you can feel.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
              }}
              className="aspect-square relative overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mx-auto max-w-md"
            >
              <img 
                src={aboutImg} 
                alt="Tenon Interior Craftsmanship" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="mb-32"
          >
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-12">Why Tenon</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, i) => (
                <div key={i} className="p-8 border border-border/50 bg-background hover:bg-secondary/10 transition-colors duration-300">
                  <value.icon className="w-8 h-8 text-accent mb-6" strokeWidth={1.5} />
                  <h3 className="text-xl font-serif text-foreground mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground font-light">{value.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="border-t border-b border-border/50 py-8 flex flex-wrap justify-center gap-x-8 gap-y-4 text-center text-sm md:text-base tracking-widest uppercase font-medium text-muted-foreground"
          >
            <span>4.3★ Google Rating</span>
            <span className="hidden md:inline">·</span>
            <span>100+ Happy Clients</span>
            <span className="hidden md:inline">·</span>
            <span>Wakad, Pune</span>
            <span className="hidden md:inline">·</span>
            <span>Open Mon–Sat, 10 AM onwards</span>
          </motion.div>

          <ClientLogosMarquee />

        </div>
      </div>
    </Layout>
  );
}
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { useSEO } from "@/hooks/useSEO";
import heroImg from "@/assets/images/hero.png";
import furnitureImg from "@/assets/images/category-furniture.png";
import interiorsImg from "@/assets/images/category-interiors.png";

export default function Home() {
  useSEO({
    title: "Tenon | Premium Furniture Manufacturer in Wakad, Pune",
    description: "Tenon crafts premium custom furniture in Wakad, Pimpri-Chinchwad, Pune. Sofas, dining tables, wardrobes & more — made to order in our workshop. Visit us Mon–Sat, 10 AM onwards.",
    canonical: "https://tenon.replit.app/",
  });

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } }
  };

  const categories = [
    { id: "furniture", name: "Furniture", image: furnitureImg, link: "/products" },
    { id: "interiors", name: "Custom Interiors", image: interiorsImg, link: "/products" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Tenon Premium Interior" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background"></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
          <motion.h1 
            initial="hidden" animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-foreground mb-8 md:mb-10 lg:mb-12 max-w-4xl mx-auto leading-snug md:leading-tight lg:leading-tight tracking-tight"
          >
            {["Handcrafted", "in", "Our", "Workshop,"].map((word, i) => (
              <motion.span
                key={i}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }}
                className="inline-block mr-[0.3em]"
              >
                {word}
              </motion.span>
            ))}
            <br />
            {["Every", "Piece", "Tells", "a", "Story."].map((word, i) => (
              <motion.span
                key={i + 5}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }}
                className="inline-block mr-[0.3em]"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.p 
            initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }}
            className="text-sm md:text-base tracking-widest uppercase text-muted-foreground mb-12 max-w-2xl mx-auto font-medium"
          >
            Premium Furniture Manufacturer
          </motion.p>
          
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.4 }}>
            <Link href="/about">
              <a className="explore-work-btn inline-flex items-center justify-center px-10 py-4 bg-[rgb(255,204,0)] text-black text-sm tracking-widest uppercase font-bold shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 relative overflow-hidden group">
                <span className="relative z-10">Explore Our Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[rgba(255,204,0,0.3)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-3xl mx-auto">
            {categories.map((category, index) => (
              <motion.div 
                key={category.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Link href={category.link}>
                  <a className="block">
                    <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-secondary/20">
                      <img 
                        src={category.image} 
                        alt={category.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-background/10 group-hover:bg-transparent transition-colors duration-500"></div>
                    </div>
                    <div className="relative inline-block">
                      <h3 className="text-xl md:text-2xl font-serif text-foreground">{category.name}</h3>
                      <span className="absolute left-0 bottom-0 w-full h-[1px] bg-accent scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                    </div>
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Happy Clients */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <span className="text-accent text-xs font-semibold uppercase tracking-[0.4em] mb-5 block">
                Our Happy Clients
              </span>
              <h2 className="font-serif text-4xl md:text-5xl tracking-wide text-foreground max-w-xl leading-tight">
                Spaces we've shaped, <br />
                <em className="text-foreground/70">stories they share.</em>
              </h2>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <div className="text-center">
                <p className="font-serif text-4xl text-accent mb-1">4.3</p>
                <div className="flex items-center gap-0.5 justify-center mb-1">
                  {[1,2,3,4].map(i => (
                    <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-accent">
                      <path d="M7 1L8.545 5.07H13L9.545 7.55L10.909 12L7 9.34L3.091 12L4.455 7.55L1 5.07H5.455L7 1Z" fill="currentColor"/>
                    </svg>
                  ))}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-accent">
                    <path d="M7 1L8.545 5.07H13L9.545 7.55L10.909 12L7 9.34L3.091 12L4.455 7.55L1 5.07H5.455L7 1Z" fill="currentColor" fillOpacity="0.35"/>
                  </svg>
                </div>
                <p className="text-foreground/50 text-xs tracking-widest uppercase">Google Rating</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "Priya Mehta",
                role: "Homeowner, Wakad",
                quote: "Tenon transformed our living room completely. The sofa they crafted fits the space so perfectly it feels like it was always there. Exceptional quality and patient service throughout.",
                delay: 0,
              },
              {
                name: "Rahul Desai",
                role: "Interior Designer, Pune",
                quote: "I've worked with several furniture makers across Pune — Tenon is in a different league. The joinery is immaculate, the finishes are consistent, and they always deliver on time.",
                delay: 0.1,
              },
              {
                name: "Sneha Kulkarni",
                role: "Homeowner, Pimpri",
                quote: "We gave them a small brief and a mood board. What arrived was far better than we'd imagined. The walnut dining table has become the centrepiece of every family gathering.",
                delay: 0.2,
              },
            ].map((client) => (
              <motion.div
                key={client.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                transition={{ delay: client.delay }}
                className="group bg-secondary/20 border border-border hover:border-accent/30 transition-colors duration-500 p-8 md:p-10 flex flex-col gap-6"
              >
                <div className="flex items-center gap-0.5">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} width="12" height="12" viewBox="0 0 14 14" fill="none" className="text-accent">
                      <path d="M7 1L8.545 5.07H13L9.545 7.55L10.909 12L7 9.34L3.091 12L4.455 7.55L1 5.07H5.455L7 1Z" fill="currentColor"/>
                    </svg>
                  ))}
                </div>
                <p className="font-serif text-lg md:text-xl text-foreground/90 leading-relaxed italic flex-grow">
                  "{client.quote}"
                </p>
                <div className="pt-6 border-t border-border">
                  <p className="text-foreground text-sm font-medium tracking-wide">{client.name}</p>
                  <p className="text-foreground/50 text-xs tracking-widest uppercase mt-1">{client.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Strip */}
      <section className="py-32 bg-secondary/10 border-t border-border/30">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-serif italic text-foreground/90 font-light leading-relaxed">
              "Every joint. Every grain. Every detail — made to last."
            </h2>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/layout";
import { useSEO } from "@/hooks/useSEO";
import { products, type Product } from "@/data/products";
import productsHero from "@/assets/images/products-hero.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Products() {
  useSEO({
    title: "Furniture Collection | Tenon — Handcrafted in Wakad, Pune",
    description: "Browse Tenon's handcrafted furniture collection — sofas, dining tables, wardrobes, lounge chairs and more. Made to order in our Wakad, Pune workshop. Custom sizing available.",
    canonical: "https://tenon.replit.app/products",
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={productsHero}
            alt="Tenon collection"
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background"></div>
        </div>
        <div className="relative z-10 h-full container mx-auto px-6 md:px-12 flex flex-col justify-end pb-20 md:pb-28">
          <motion.span
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-accent text-xs font-semibold uppercase tracking-[0.4em] mb-6"
          >
            The Collection
          </motion.span>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground tracking-wide max-w-4xl leading-[1.05]"
          >
            Pieces, made to be lived with.
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="mt-8 max-w-xl text-foreground/70 font-light text-base md:text-lg leading-relaxed"
          >
            A considered catalogue of furniture — manufactured in our Wakad
            workshop. Every piece can be tailored to your space.
          </motion.p>
        </div>
      </section>

      {/* Index strip */}
      <section className="border-y border-border bg-secondary/20">
        <div className="container mx-auto px-6 md:px-12 py-8 md:py-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
          <a
            href="#furniture"
            className="inline-flex items-center justify-center px-6 py-2 text-lg md:text-xl font-semibold uppercase tracking-[0.35em] text-white border border-[rgb(255,204,0)] border-[1.5px] bg-transparent rounded-none transition-all duration-300 ease-in-out hover:bg-[rgb(255,204,0)] hover:text-black hover:scale-105 hover:shadow-[0_16px_40px_-24px_rgba(255,204,0,0.95)] hover:rounded-none"
          >
            Furniture
          </a>
          <span className="text-foreground/50 mx-4 text-lg md:text-xl font-semibold uppercase tracking-[0.35em] opacity-70">
            /
          </span>
          <a
            href="#bespoke"
            className="inline-flex items-center justify-center px-6 py-2 text-lg md:text-xl font-semibold uppercase tracking-[0.35em] text-white border border-[rgb(255,204,0)] border-[1.5px] bg-transparent rounded-none transition-all duration-300 ease-in-out hover:bg-[rgb(255,204,0)] hover:text-black hover:scale-105 hover:shadow-[0_16px_40px_-24px_rgba(255,204,0,0.95)] hover:rounded-none"
          >
            Bespoke
          </a>
        </div>
      </section>

      {/* Furniture */}
      <section id="furniture" className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-16 md:mb-24 max-w-3xl"
          >
            <span className="text-accent text-xs font-semibold uppercase tracking-[0.4em] mb-5 block">
              01 — Furniture
            </span>
            <h2 className="font-serif text-4xl md:text-5xl tracking-wide text-foreground">
              Handcrafted in our Wakad workshop, every piece tells a story.
            </h2>
            <p className="mt-6 text-muted-foreground font-light leading-relaxed">
              Solid wood, honest joinery, slow finishing. We build each piece to
              order — choose the wood, the upholstery, the dimension. Lead time
              is typically 4–6 weeks.
            </p>
          </motion.div>

          <div className="space-y-20 md:space-y-28">
            {products
              .filter((p) => p.category === "Furniture")
              .map((p, i) => (
                <ProductRow key={p.id} product={p} flip={i % 2 === 1} />
              ))}
          </div>
        </div>
      </section>

      {/* Bespoke / CTA */}
      <section id="bespoke" className="py-28 md:py-36">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <span className="text-accent text-xs font-semibold uppercase tracking-[0.4em] mb-6 block">
              02 — Bespoke
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-wide text-foreground leading-[1.15]">
              Don't see your piece? <br />
              <em className="text-foreground/70">We'll make it for you.</em>
            </h2>
            <p className="mt-8 text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
              Most of what we deliver is bespoke — sized to your room, finished
              to your palette, built around the way you actually live. Bring us
              a reference, a sketch, or a single feeling. We'll take it from
              there.
            </p>

            <Link href="/contact">
              <a className="start-project-btn mt-12 inline-block bg-[rgb(255,204,0)] text-black px-10 py-4 text-xs font-bold uppercase tracking-[0.3em] shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 relative overflow-hidden group">
                <span className="relative z-10">Start a Project</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[rgba(255,204,0,0.3)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

function ProductRow({ product, flip }: { product: Product; flip: boolean }) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp}
    >
      <Link href={`/products/${product.slug}`}>
        <a className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center group">
          <div className={`md:col-span-7 ${flip ? "md:order-2" : ""}`}>
            <div className="relative aspect-[4/3] overflow-hidden bg-secondary/40">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
          </div>

          <div className={`md:col-span-5 ${flip ? "md:order-1" : ""}`}>
            <span className="text-accent text-xs font-semibold uppercase tracking-[0.3em] mb-4 block">
              {product.collection}
            </span>
            <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-5 leading-tight group-hover:text-accent transition-colors">
              {product.name}
            </h3>
            <p className="text-muted-foreground font-light leading-relaxed mb-6">
              {product.description}
            </p>
            <div className="pt-5 border-t border-border flex items-center justify-between gap-6">
              <p className="text-foreground/60 text-xs uppercase tracking-[0.25em]">
                {product.material}
              </p>
              <span className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.3em] text-foreground group-hover:text-accent transition-colors whitespace-nowrap">
                View
                <ArrowUpRight size={14} className="ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </div>
        </a>
      </Link>
    </motion.article>
  );
}

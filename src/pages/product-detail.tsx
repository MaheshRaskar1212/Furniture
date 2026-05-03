import { Link, useRoute } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout";
import { useSEO } from "@/hooks/useSEO";
import { products, getProductBySlug } from "@/data/products";
import NotFound from "@/pages/not-found";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ProductDetail() {
  const [, params] = useRoute("/products/:slug");
  const slug = params?.slug ?? "";
  const product = getProductBySlug(slug);

  useSEO({
    title: product
      ? `${product.name} | Tenon — Handcrafted Furniture in Wakad, Pune`
      : "Product | Tenon",
    description: product
      ? `${product.description} Handcrafted to order by Tenon in Wakad, Pimpri-Chinchwad, Pune. ${product.material}.`
      : "",
    canonical: product
      ? `https://tenon.replit.app/products/${product.slug}`
      : undefined,
  });

  if (!product) {
    return <NotFound />;
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <Layout>
      <div className="pt-32 md:pt-36 pb-24 md:pb-32">
        <div className="container mx-auto px-6 md:px-12">
          {/* Breadcrumb */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-12 md:mb-16"
          >
            <Link href="/products">
              <a className="inline-flex items-center text-xs uppercase tracking-[0.3em] text-foreground/60 hover:text-accent transition-colors">
                <ArrowLeft size={14} className="mr-3" />
                Back to the Collection
              </a>
            </Link>
          </motion.div>

          {/* Main */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Image */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              className="lg:col-span-7"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary/40">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: 0.2 }}
              className="lg:col-span-5 lg:sticky lg:top-32"
            >
              <span className="text-accent text-xs font-semibold uppercase tracking-[0.3em] mb-5 block">
                {product.collection}
              </span>
              <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1] mb-8">
                {product.name}
              </h1>
              <p className="text-muted-foreground font-light leading-relaxed text-base md:text-lg mb-10">
                {product.story}
              </p>

              <dl className="border-t border-border divide-y divide-border mb-10">
                {product.details.map((d) => (
                  <div
                    key={d.label}
                    className="grid grid-cols-3 gap-6 py-4"
                  >
                    <dt className="col-span-1 text-xs uppercase tracking-[0.25em] text-foreground/60">
                      {d.label}
                    </dt>
                    <dd className="col-span-2 text-sm text-foreground/90 font-light leading-relaxed">
                      {d.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <a className="inline-flex items-center justify-center bg-accent text-background px-8 py-4 text-xs font-semibold uppercase tracking-[0.3em] hover:bg-accent/90 transition-colors">
                    Enquire About This Piece
                  </a>
                </Link>
                <Link href="/products">
                  <a className="inline-flex items-center justify-center border border-border text-foreground px-8 py-4 text-xs font-semibold uppercase tracking-[0.3em] hover:border-accent hover:text-accent transition-colors">
                    View Collection
                  </a>
                </Link>
              </div>

              <p className="mt-10 text-xs text-foreground/50 leading-relaxed">
                Every Tenon piece is made to order in our Wakad workshop.
                Dimensions, finishes and upholstery can be tailored — visit the
                studio to see samples in person.
              </p>
            </motion.div>
          </div>

          {/* Related */}
          <section className="mt-32 md:mt-40 pt-20 border-t border-border">
            <div className="flex items-end justify-between mb-12 md:mb-16">
              <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-foreground">
                Also from the collection
              </h2>
              <Link href="/products">
                <a className="hidden md:inline-flex items-center text-xs uppercase tracking-[0.3em] text-foreground/70 hover:text-accent transition-colors">
                  View all <ArrowRight size={14} className="ml-3" />
                </a>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
              {related.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={fadeUp}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={`/products/${p.slug}`}>
                    <a className="group block">
                      <div className="relative aspect-[4/3] overflow-hidden bg-secondary/40 mb-6">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        />
                      </div>
                      <span className="text-accent text-[10px] font-semibold uppercase tracking-[0.3em] mb-3 block">
                        {p.collection}
                      </span>
                      <h3 className="font-serif text-xl md:text-2xl text-foreground group-hover:text-accent transition-colors">
                        {p.name}
                      </h3>
                    </a>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}

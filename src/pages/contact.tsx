import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { useSEO } from "@/hooks/useSEO";
import { MapPin, Clock, Star, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  useSEO({
    title: "Contact Tenon | Furniture Manufacturer in Wakad, Pune",
    description: "Visit or contact Tenon at Wakad, Pimpri-Chinchwad, Pune. Get in touch for custom furniture enquiries. Open Mon–Sat, 10 AM onwards. 4.3★ on Google.",
    canonical: "https://tenon.replit.app/contact",
  });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);


  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      const form = e.target as HTMLFormElement;
      form.reset();

      toast({
        title: "Message Sent",
        description: "Thank you — we'll be in touch soon.",
        className: "bg-background border-accent text-foreground",
      });
    }, 800);
  };

  return (
    <Layout>
      <div className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container mx-auto px-6 md:px-12">

          <motion.div
            initial="hidden" animate="visible" variants={fadeUp}
            className="mb-16 md:mb-24"
          >
            <h1 className="text-4xl md:text-6xl font-serif text-foreground tracking-wide">Let's Build Something Together.</h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
            {/* Form */}
            <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.1 }}>
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="relative pt-6">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder=" "
                    className="block w-full bg-transparent border-0 border-b border-border/50 py-2 text-foreground focus:ring-0 focus:border-accent transition-colors peer"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 top-2 text-muted-foreground text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-8 peer-focus:top-2 peer-focus:text-xs peer-focus:text-accent"
                  >
                    Name
                  </label>
                </div>

                <div className="relative pt-6">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder=" "
                    className="block w-full bg-transparent border-0 border-b border-border/50 py-2 text-foreground focus:ring-0 focus:border-accent transition-colors peer"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 top-2 text-muted-foreground text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-8 peer-focus:top-2 peer-focus:text-xs peer-focus:text-accent"
                  >
                    Email
                  </label>
                </div>

                <div className="relative pt-6">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder=" "
                    className="block w-full bg-transparent border-0 border-b border-border/50 py-2 text-foreground focus:ring-0 focus:border-accent transition-colors peer"
                  />
                  <label
                    htmlFor="phone"
                    className="absolute left-0 top-2 text-muted-foreground text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-8 peer-focus:top-2 peer-focus:text-xs peer-focus:text-accent"
                  >
                    Phone
                  </label>
                </div>

                <div className="relative pt-6">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder=" "
                    className="block w-full bg-transparent border-0 border-b border-border/50 py-2 text-foreground focus:ring-0 focus:border-accent transition-colors peer resize-none"
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-0 top-2 text-muted-foreground text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-8 peer-focus:top-2 peer-focus:text-xs peer-focus:text-accent"
                  >
                    Message
                  </label>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row items-start gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-sm tracking-widest uppercase font-semibold rounded-lg transition-all duration-300 ease-in-out hover:scale-105 shadow-md hover:shadow-lg w-fit disabled:opacity-70 disabled:hover:scale-100 disabled:hover:shadow-md"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                  <a
                    href="https://wa.me/919049002727"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-700 text-white text-sm tracking-widest uppercase font-semibold rounded-lg transition-all duration-300 ease-in-out hover:scale-105 shadow-md hover:shadow-lg w-fit"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </form>
            </motion.div>

            {/* Details */}
            <motion.div
              initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }}
              className="flex flex-col gap-10 lg:pl-12"
            >
              <div className="flex gap-6">
                <MapPin className="text-accent shrink-0 mt-1" size={24} strokeWidth={1.5} />
                <div>
                  <h3 className="text-sm tracking-widest uppercase text-muted-foreground font-medium mb-3">Address</h3>
                  <p className="text-foreground font-light leading-relaxed">
                    Sr. No. 277, Main Chowk, Near PCMC School,<br />
                    Behind Arihant Kitchen, Wakad,<br />
                    Pimpri-Chinchwad, Pune,<br />
                    Maharashtra – 411057
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <Clock className="text-accent shrink-0 mt-1" size={24} strokeWidth={1.5} />
                <div>
                  <h3 className="text-sm tracking-widest uppercase text-muted-foreground font-medium mb-3">Hours</h3>
                  <p className="text-foreground font-light leading-relaxed">
                    Monday to Saturday<br />
                    10:00 AM onwards
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <Star className="text-accent shrink-0 mt-1" size={24} strokeWidth={1.5} />
                <div>
                  <h3 className="text-sm tracking-widest uppercase text-muted-foreground font-medium mb-3">Google Rating</h3>
                  <p className="text-foreground font-light leading-relaxed">
                    4.3 ★ (7 Reviews)
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Tenon+Wakad+Pune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors uppercase tracking-widest text-sm font-medium"
                >
                  Find Us on Google Maps
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="w-full bg-secondary/10"
          >
            <iframe
              src="https://www.google.com/maps?q=Tenon+Wakad+Pimpri-Chinchwad+Pune&output=embed"
              width="100%"
              height="420"
              style={{ border: 0, filter: 'grayscale(40%) brightness(0.85) contrast(1.05)' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tenon Location Map"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </Layout>
  );
}
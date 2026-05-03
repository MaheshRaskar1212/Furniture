import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/images/logo.png";

export function Logo() {
  return (
    <div className="flex flex-col items-center justify-center gap-1.5">
      <img src={logoImg} alt="Tenon" className="h-14 w-auto object-contain" />
      <span className="font-sans text-[10px] tracking-[0.3em] font-medium text-foreground">TENON</span>
    </div>
  );
}

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border/50 py-3" : "bg-black/95 backdrop-blur-lg md:bg-transparent md:backdrop-blur-none py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/">
          <a className="hover:opacity-80 transition-opacity text-foreground">
            <Logo />
          </a>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className={`text-xs uppercase tracking-widest font-medium relative group pb-1 text-foreground/90 hover:text-foreground transition-colors`}>
                {link.label}
                <span 
                  className={`absolute left-0 bottom-0 w-full h-[1px] bg-accent transition-transform duration-300 origin-left ${
                    location === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border py-4 px-6 flex flex-col gap-6 shadow-xl">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a 
                className={`text-sm uppercase tracking-widest font-medium ${
                  location === link.href ? "text-accent" : "text-foreground/90"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <div className="mb-8 text-foreground">
          <Logo />
        </div>
        <p className="text-muted-foreground font-serif italic text-lg mb-12 max-w-md mx-auto">
          Manufacturer of Premium Furniture — Wakad, Pune
        </p>
        <div className="w-full h-[1px] bg-border mb-8 max-w-xs mx-auto"></div>
        <p className="text-muted-foreground/60 text-xs tracking-wider">
          © {new Date().getFullYear()} Tenon. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-accent/30">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
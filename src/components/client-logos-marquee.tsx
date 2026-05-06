import type { CSSProperties } from "react";

const logoModules = import.meta.glob("../client_logos/*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

// Helper function to format brand names
function formatBrandName(fileName: string): string {
  return fileName
    .replace(/\.[^.]+$/, "") // Remove file extension
    .replace(/[-_]+/g, " ") // Replace hyphens/underscores with spaces
    .replace(/\b\w/g, (char) => char.toUpperCase()) // Capitalize first letter of each word
    .trim();
}

const logos = Object.entries(logoModules)
  .sort(([left], [right]) => left.localeCompare(right, undefined, { numeric: true }))
  .map(([path, src]) => {
    const fileName = path.split("/").pop() ?? "client-logo";
    const brandName = formatBrandName(fileName);

    return {
      src,
      alt: `${brandName} logo`,
      brandName,
    };
  });

interface ClientLogoCardProps {
  logo: (typeof logos)[0];
  index: number;
}

function ClientLogoCard({ logo, index }: ClientLogoCardProps) {
  return (
    <div
      className="client-logo-card group flex flex-col items-center gap-2 md:gap-3 w-40 md:w-48"
      style={{ "--stagger-index": index } as CSSProperties & { "--stagger-index": number }}
    >
      <div className="relative h-24 md:h-28 w-full flex items-center justify-center transition-all duration-300 group-hover:scale-105">
        <img
          src={logo.src}
          alt={logo.alt}
          loading="lazy"
          decoding="async"
          draggable={false}
          style={{ imageRendering: "auto" }}
          className="h-full w-auto object-contain contrast-105 brightness-105 transition-all duration-300"
        />
      </div>
      <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.1em] text-center text-foreground/80 group-hover:text-accent transition-colors duration-300 line-clamp-2 w-full px-1">
        {logo.brandName}
      </p>
    </div>
  );
}

export function ClientLogosMarquee() {
  if (logos.length === 0) {
    return null;
  }

  const duration = Math.max(40, Math.min(60, logos.length * 3.5));

  return (
    <section className="mt-16 border-t border-border/50 pt-10">
      <div className="mb-8 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Trusted by clients</p>
      </div>

      <div className="overflow-hidden rounded-none bg-secondary/5 px-4 py-8 md:px-6 md:py-12">
        <div
          className="client-logos-marquee"
          style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
          aria-label="Client logos scrolling strip"
        >
          <div className="client-logos-track">
            {logos.map((logo, index) => (
              <ClientLogoCard key={`${logo.src}-${index}`} logo={logo} index={index} />
            ))}
          </div>

          <div className="client-logos-track" aria-hidden="true">
            {logos.map((logo, index) => (
              <ClientLogoCard key={`${logo.src}-duplicate-${index}`} logo={logo} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
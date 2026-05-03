import type { CSSProperties } from "react";

const logoModules = import.meta.glob("../client_logos/*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const logos = Object.entries(logoModules)
  .sort(([left], [right]) => left.localeCompare(right, undefined, { numeric: true }))
  .map(([path, src]) => {
    const fileName = path.split("/").pop() ?? "client-logo";
    const label = fileName.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim();

    return {
      src,
      alt: label ? `${label} logo` : "Client logo",
    };
  });

export function ClientLogosMarquee() {
  if (logos.length === 0) {
    return null;
  }

  const duration = Math.max(20, Math.min(30, logos.length * 1.75));

  return (
    <section className="mt-16 border-t border-border/50 pt-10">
      <div className="mb-6 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Trusted by clients</p>
      </div>

      <div className="overflow-hidden rounded-none bg-secondary/5 px-4 py-5 md:px-6">
        <div
          className="client-logos-marquee"
          style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
          aria-label="Client logos scrolling strip"
        >
          <div className="client-logos-track">
            {logos.map((logo, index) => (
              <img
                key={`${logo.src}-${index}`}
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                decoding="async"
                draggable={false}
                className="client-logos-image h-14 w-auto max-w-[160px] shrink-0 object-contain"
              />
            ))}
          </div>

          <div className="client-logos-track" aria-hidden="true">
            {logos.map((logo, index) => (
              <img
                key={`${logo.src}-duplicate-${index}`}
                src={logo.src}
                alt=""
                loading="lazy"
                decoding="async"
                draggable={false}
                className="client-logos-image h-14 w-auto max-w-[160px] shrink-0 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
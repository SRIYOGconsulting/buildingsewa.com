import Image from "next/image";

const PARTNER_COUNT = 8;
const partnerLogos = Array.from({ length: PARTNER_COUNT }, (_, i) => i + 1);

export default function Partners() {
  return (
    <section
      className="overflow-hidden bg-white py-10 border-y border-zinc-100"
      aria-label="Partner organizations"
    >
      <div className="flex w-max gap-16 animate-scroll">
        {[...partnerLogos, ...partnerLogos].map((n, i) => (
          <div
            key={`${n}-${i}`}
            className="relative h-12 w-28 flex-shrink-0 grayscale opacity-70 transition hover:opacity-100 hover:grayscale-0"
            aria-hidden={i >= PARTNER_COUNT}
          >
            <Image
              src={`/partners/${n}.png`}
              alt={i < PARTNER_COUNT ? `Partner ${n}` : ""}
              fill
              sizes="140px"
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
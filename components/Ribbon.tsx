"use client";

// import FontSizeChanger from './FontSizeChanger'

type RibbonProps = {
  name: string;
  description?: string;
  showfont?: boolean;
};

const Ribbon: React.FC<RibbonProps> = ({ name, description, showfont }) => {
  return (
    <section className="bg-[#0E4541] text-white px-6 py-12 md:py-14 text-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/30 rounded-full" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
          {name}
        </h1>

        {description && (
          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}

        {/* <FontSizeChanger showFont={showfont ?? false} /> */}
      </div>
    </section>
  );
};

export default Ribbon;

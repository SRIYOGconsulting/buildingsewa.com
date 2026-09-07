'use client'
// import FontSizeChanger from './FontSizeChanger'

type RibbonProps = {
  name: string;
  description?: string;
  showfont?: boolean;
};

const Ribbon: React.FC<RibbonProps> = ({ name, description, showfont }) => {
  return (
    <section className="bg-[#0E4541] text-white py-24 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{name}</h1>
      {description && (
        <p className="text-lg md:text-xl max-w-2xl mx-auto">{description}</p>
      )}
      {/* <FontSizeChanger showFont={showfont ?? false} /> */}
    </section>
  )
}

export default Ribbon
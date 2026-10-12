import Image from "next/image";
import Link from "next/link";
import { Home } from "lucide-react";

interface CtaBannerProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  backgroundImage?: string;
}

export default function CtaBanner({
  title,
  description,
  buttonText,
  buttonHref,
  backgroundImage,
}: CtaBannerProps) {
  if (backgroundImage) {
    return (
      <div className="relative overflow-hidden rounded-2xl">
        <Image
          src={backgroundImage}
          alt=""
          width={1400}
          height={500}
          className="h-[260px] w-full object-cover md:h-[300px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E4541] via-[#0E4541]/85 to-transparent" />
        <div className="absolute inset-0 flex max-w-lg flex-col justify-center gap-4 px-8 md:px-12">
          <h3 className="text-2xl font-bold text-white md:text-3xl">{title}</h3>
          <p className="text-sm leading-6 text-white/85 md:text-base">{description}</p>
          <Link
            href={buttonHref}
            className="inline-flex w-fit items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-[#0E4541] transition hover:bg-white/90"
          >
            {buttonText} <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-6 rounded-2xl bg-[#0E4541] px-6 py-8 text-white md:flex-row md:justify-between md:px-10">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/10">
          <Home className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-semibold leading-snug md:text-xl">{title}</h3>
      </div>
      <p className="max-w-md text-sm leading-6 text-white/80">{description}</p>
      <Link
        href={buttonHref}
        className="inline-flex shrink-0 items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-[#0E4541] transition hover:bg-white/90"
      >
        {buttonText} <span aria-hidden>→</span>
      </Link>
    </div>
  );
}
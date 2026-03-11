import Image from "next/image";
import type { Division } from "@/lib/divisions";

interface Props {
  division: Division;
  img: string;
}

export default function DivisionHeroBannerSection({ division, img }: Props) {
  return (
    <div className="relative h-[40vh] min-h-70 bg-[#0e0d0c] overflow-hidden">
      <Image
        src={img}
        alt={division.name}
        fill
        className="object-cover opacity-60"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-linear-to-t from-(--bg) via-transparent to-transparent" />
    </div>
  );
}

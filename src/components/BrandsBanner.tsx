import { Link } from "react-router-dom";

interface Props {
  imagePath: string;
  alt: string;
  spanText?: string;
  pathTo?: string;
}

export default function BrandsBanner({
  imagePath,
  alt,
  spanText,
  pathTo,
}: Props) {
  return (
    <main className="pt-2">
      <div className="grid grid-cols-1 md:grid-cols-1">
        <Link
          to={pathTo || "/"}
          className="relative h-[calc(100vh-64px)] group"
        >
          <img
            src={imagePath}
            alt={alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
          <span className="absolute inset-0 flex items-center justify-center text-white text-5xl font-medium hover:underline">
            {spanText}
          </span>
          
        </Link>
      </div>
    </main>
  );
}

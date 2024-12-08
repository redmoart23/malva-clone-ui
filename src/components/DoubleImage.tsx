import { Link } from "react-router-dom";

interface Props {
  imagePathOne: string;
  imagePathTwo: string;
  altOne: string;
  altTwo: string;
  spanTextOne?: string;
  spanTextTwo?: string;
  spanTextAdditionalOne?: string;
  spanTextAdditionalTwo?: string;
  pathToOne?: string;
  pathToTwo?: string;
}

export default function DoubleImage({
  imagePathOne,
  altOne,
  spanTextOne,
  pathToOne,
  imagePathTwo,
  altTwo,
  spanTextTwo,
  pathToTwo,
  spanTextAdditionalTwo,
}: Props) {
  return (
    <main className="pt-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        {/* Women Section */}
        <Link
          to={pathToOne || "/"}
          className="relative h-[calc(100vh-64px)] group"
        >
          <img
            src={imagePathOne}
            alt={altOne}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
          <span className="absolute inset-0 flex items-center justify-center text-white text-5xl font-medium hover:underline">
            {spanTextOne}
          </span>

        </Link>

        {/* Men Section */}
        <Link
          to={pathToTwo || "/"}
          className="relative h-[calc(100vh-64px)] group"
        >
          <img
            src={imagePathTwo}
            alt={altTwo}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
          <span className="absolute inset-0 flex items-center justify-center text-white text-5xl font-medium no-underline hover:underline">
            {spanTextTwo}
          </span>
          <span className="absolute inset-0 flex items-center justify-center text-white text-2xl font-medium no-underline">
            {spanTextAdditionalTwo}
          </span>
        </Link>
      </div>
    </main>
  );
}

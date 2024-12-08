import { useState } from "react";
import { Link } from "react-router-dom";

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export default function MobileMenu({
  isMenuOpen,
  setIsMenuOpen,
}: MobileMenuProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const menuCategories = [
    {
      name: "Herencia Verde",
      subcategories: [
        "Alejandro Crocker",
        "Alitza Garcia",
        "Camilo Franco",
        "Jorge Duque",
        "Not a Uniform",
        "Onda de Mar",
        "Pamela Stevenson",
        "Relicario",
        "Verdi",
      ],
    },
    {
      name: "New in",
    },
    {
      name: "Malva Edition",
    },
    {
      name: "Ropa",
    },
    {
      name: "Calzado",
    },
    {
      name: "Diseñadores",
    },
    {
      name: "Accesorios",
    },
    {
      name: "Joyería",
    },
  ];

  return (
    <div
      className={`fixed inset-y-0 left-0 w-2/5 bg-white z-40 transform transition-transform duration-300 ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      } overflow-y-auto`}
    >
      <div className="h-16 flex items-center justify-between px-4 border-b">
        <span className="text-sm font-medium">Menu</span>
        <button
          onClick={() => setIsMenuOpen(false)}
          className="w-8 h-8 flex items-center justify-center"
          aria-label="Close menu"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 18L18 6M6 6L18 18" />
          </svg>
        </button>
      </div>
      <nav className="p-4">
        <Link
          to="/"
          className="block py-2 text-sm hover:text-gray-600 text-black"
        >
          inicio
        </Link>
        {menuCategories.map((category) => (
          <div key={category.name} className="mb-4">
            <button
              onClick={() => toggleCategory(category.name)}
              className="flex items-center justify-between w-full py-2 text-sm font-medium"
            >
              {category.name}
              <svg
                className={`w-4 h-4 transition-transform ${
                  expandedCategory === category.name
                    ? "transform rotate-180"
                    : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {expandedCategory === category.name && (
              <div className="ml-4 mt-2 space-y-2">
                {category.subcategories?.map((subcategory) => (
                  <Link
                    key={subcategory}
                    to={`/${category.name.toLowerCase()}/${subcategory
                      .toLowerCase()
                      .replace(" ", "-")}`}
                    className="block py-1 text-sm text-gray-600 hover:text-black"
                  >
                    {subcategory}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}

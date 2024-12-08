export default function Features() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <img src="/MALVA_LOGO.svg" alt="Sostenible" />
          </div>
          <h3 className="text-lg font-medium mb-2">MALVA</h3>
          <p className="text-sm text-gray-600">La alquimia de la moda</p>
        </div>

        <div className="text-center">
          <div className="flex justify-center mb-4">
            <img src="/MALVA_LOGO.svg" alt="Sostenible" />
          </div>
          <h3 className="text-lg font-medium mb-2">MALVA EDITION</h3>
          <p className="text-sm text-gray-600">
            En colaboración con los mejores diseñadores
          </p>
        </div>

        <div className="text-center">
          <div className="flex justify-center mb-2">
            <img src="/tipo_M_Exclusive.svg" alt="Sostenible" />
          </div>
          <h3 className="text-lg font-medium mb-2">MALVA EXCLUSIVE</h3>
          <p className="text-sm text-gray-600">
            Encuentra productos que solo consigues en Malva
          </p>
        </div>

        <div className="text-center">
          <div className="flex justify-center mb-2">
            <img src="/tipo_Sostenible.svg" alt="Sostenible" />
          </div>
          <h3 className="text-lg font-medium mb-2">SOSTENIBILIDAD</h3>
          <p className="text-sm text-gray-600">
            Apoyamos a diseñadores con prácticas sostenibles
          </p>
        </div>
      </div>
    </section>
  );
}

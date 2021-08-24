
const callouts = [
  {
    name: 'Producto 1',
    description: 'Work from home accessories',
    imageSrc: 'https://wongfood.vteximg.com.br/arquivos/ids/381359-750-750/Kit-de-Limpieza-para-Calzado-y-Cartera-Basic-tabaz-carteraz-1-163426128.jpg?v=637360856607430000',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Producto 2',
    description: 'Journals and note-taking',
    imageSrc: 'https://wongfood.vteximg.com.br/arquivos/ids/381359-750-750/Kit-de-Limpieza-para-Calzado-y-Cartera-Basic-tabaz-carteraz-1-163426128.jpg?v=637360856607430000',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Producto 3',
    description: 'Daily commute essentials',
    imageSrc: 'https://wongfood.vteximg.com.br/arquivos/ids/381359-750-750/Kit-de-Limpieza-para-Calzado-y-Cartera-Basic-tabaz-carteraz-1-163426128.jpg?v=637360856607430000',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    name: 'Producto 4',
    description: 'Work from home accessories',
    imageSrc: 'https://wongfood.vteximg.com.br/arquivos/ids/381359-750-750/Kit-de-Limpieza-para-Calzado-y-Cartera-Basic-tabaz-carteraz-1-163426128.jpg?v=637360856607430000',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Producto 5',
    description: 'Journals and note-taking',
    imageSrc: 'https://wongfood.vteximg.com.br/arquivos/ids/381359-750-750/Kit-de-Limpieza-para-Calzado-y-Cartera-Basic-tabaz-carteraz-1-163426128.jpg?v=637360856607430000',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Producto 6',
    description: 'Daily commute essentials',
    imageSrc: 'https://wongfood.vteximg.com.br/arquivos/ids/381359-750-750/Kit-de-Limpieza-para-Calzado-y-Cartera-Basic-tabaz-carteraz-1-163426128.jpg?v=637360856607430000',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]

export default function ProductsSection() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
          <h2 id="#productos" className="text-2xl font-extrabold text-gray-900">PRODUCTOS</h2>

          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative mb-8">
                < div className = "relative group-hover:opacity-75 w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8" >
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

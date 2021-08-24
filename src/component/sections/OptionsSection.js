
const products = [
  {
    id: 1,
    imageSrc: 'https://cdn.shopify.com/s/files/1/0367/8627/4441/files/atributo_1_160x160@2x.jpg?v=1625846701',
    imageAlt: "img-1",
  },
  {
    id: 2,
    imageSrc: 'https://cdn.shopify.com/s/files/1/0367/8627/4441/files/atributo_2_160x160@2x.jpg?v=1625846720',
    imageAlt: "img-2",
  },
  {
    id: 3,
    imageSrc: 'https://cdn.shopify.com/s/files/1/0367/8627/4441/files/atributo_3_160x160@2x.jpg?v=1625846737',
    imageAlt: "img-3",
  },
  {
    id: 4,
    imageSrc: 'https://cdn.shopify.com/s/files/1/0367/8627/4441/files/atributo_4_160x160@2x.jpg?v=1625846756',
    imageAlt: "img-4",
  },
  // More products...
]

export default function OptionsSection() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-10 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full rounded-md overflow-hidden group-hover:opacity-75 cursor-pointer">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full object-center lg:w-full sm:w-1/4"
                />
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

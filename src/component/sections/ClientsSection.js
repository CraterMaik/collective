/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Cliente 1',
    description:
      'Lorem ipsum',
    icon: GlobeAltIcon,
  },
  {
    name: 'Cliente 2',
    description:
      'Lorem ipsum',
    icon: ScaleIcon,
  },
  {
    name: 'Cliente 3',
    description:
      'Lorem ipsum',
    icon: LightningBoltIcon,
  },
  {
    name: 'Cliente 4',
    description:
      'Lorem ipsum',
    icon: AnnotationIcon,
  },
]

export default function ClientsSection() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Nuestros Clientes
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
            accusamus quisquam.
          </p>
        </div>

        <div className="mt-10">
          <dl className="flex flex-wrap -m-4 text-center">
            {features.map((feature) => (
              
              <div key={feature.name} className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className = "border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-gray-900">{feature.name}</h2>
                  <p className="leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}


import WhatsappIcon from 'simple-icons/icons/whatsapp';
import MessengerIcon from 'simple-icons/icons/messenger';
import FacebookIcon from 'simple-icons/icons/facebook';
import InstagramIcon from 'simple-icons/icons/instagram';

export default function ContactSection() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://i.imgur.com/ufBjnPv.png"
            alt="Workflow"
          />
          <h2 className="mt-4 text-center text-xl text-white">Recibe nuestro productos y ofertas especiales</h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                id="nombre-contacto"
                name="nombre"
                type="text"
                autoComplete="nombre"
                required
                className="appearance-none rounded-none relative block w-full mt-1 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Nombre"
              />
            </div>
            <div>
              <input
                id="correo-contacto"
                name="correo"
                type="text"
                autoComplete="correo"
                required
                className="appearance-none rounded-none relative block w-full mt-1 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Correo"
              />
            </div>
            <div>
              <input
                id="celular-contacto"
                name="celular"
                type="text"
                autoComplete="celular"
                required
                className="appearance-none rounded-none relative block w-full mt-1 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Celular"
              />
            </div>
            <div>
              <textarea
                id="about"
                name="about"
                rows={3}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 px-3 py-2 block w-full sm:text-sm border border-gray-300 rounded-md"
                placeholder="Descripción"
                defaultValue={''}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              
              Contactar
            </button>
          </div>
          <div className="text-center">
            <button
              type="button"
              className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <svg role="img" width="28" className="fill-current text-gray-300 hover:text-pink-300 transition delay-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>{WhatsappIcon.title}</title><path fill={'#'+WhatsappIcon.hex} d={WhatsappIcon.path}/></svg>
            </button>
            <button
              type="button"
              className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <svg role="img" width="28" className="fill-current text-gray-300 hover:text-pink-300 transition delay-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>{MessengerIcon.title}</title><path fill={'#'+MessengerIcon.hex} d={MessengerIcon.path}/></svg>
            </button>
            <button
              type="button"
              className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <svg role="img" width="28" className="fill-current text-gray-300 hover:text-pink-300 transition delay-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>{FacebookIcon.title}</title><path fill={'#'+FacebookIcon.hex} d={FacebookIcon.path}/></svg>
            </button>
            <button
              type="button"
              className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <svg role="img" width="28" className="fill-current text-gray-300 hover:text-pink-300 transition delay-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>{InstagramIcon.title}</title><path fill={'#'+InstagramIcon.hex} d={InstagramIcon.path}/></svg>
            </button>
            <h6 className="mt-5 text-center text-lg text-white">Jomm's Corp E.I.R.L.<br />Todos los derechos reservados ©2021</h6>
          </div>
        </form>
      </div>
    </div>
  )
}

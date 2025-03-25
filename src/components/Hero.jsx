import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';

const Hero = () => {
    return (
        <div className='flex flex-col items-center mt-6 lg:mt-8'>
            <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-whide'>
                Herramientas de compilación
                <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>
                    {" "} para desarrolladores
                </span>
            </h1>

            <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
                Potencia tu creatividad y da vida a tus ideas de aplicaciones de realidad virtual con nuestras intuitivas herramientas de desarrollo.
                Empieza hoy mismo y convierte tu imaginación en una realidad inmersiva.
            </p>
            <div className='flex justify-center my-10'>
                <a href='#' className='bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md'>Comenzar</a>
                <a href='#' className='py-3 px-4 mx-3 rounded-md border'>Documentación</a>
            </div>

            <div className='flex flex-col md:flex-row mt-6 lg:mt-10 justify-center'>
                <video autoPlay loop muted className='rounded-lg w-full md:w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'>
                    <source src={video1} type='video/mp4' />
                </video>

                <video autoPlay loop muted className='rounded-lg w-full md:w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'>
                    <source src={video2} type='video/mp4' />
                </video>
            </div>
        </div>
    )
}

export default Hero;
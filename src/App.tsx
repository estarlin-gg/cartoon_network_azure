import { FileInput } from "./components/FileInput";
import { useFetch } from "./hooks/useFetch";
import { FaRegImage } from "react-icons/fa6";
import { Loading } from "./components/Loading";
import { Results } from "./components/Results";

function App() {
  const {
    imageUrl,
    HandleUrl,
    SubmitUrl,
    error,
    isLoading,
    HandleFile,
    response,
  } = useFetch();

  return (
    <>
      <main className="bg-blac">
        <section className="flex items-center flex-col ">
          <div className="p-6 rounded-xl w-[90%] bg-white space-y-3 border-2  md:w-[650px] mt-6">
            <div className="mx-auto  w-fit">
              <img src="../public/logoC.png" alt="" className="w-24" />
            </div>
            <h2 className="text-lg md:text-2xl font-bold text-center mb-6 text-black">
              Sube una imagen o ingresa una URL para identificar a los
              personajes de Cartoon Network
            </h2>
            <div className="flex gap-2">
              <input
                type="text"
                className="block input w-full bg-gray-300 dark:bg-gray-200"
                onChange={HandleUrl}
                placeholder="Introduce una url"
              />
              <button className="btn bg-black  text-white" onClick={SubmitUrl}>
                Enviar
              </button>
            </div>
            <div className="divider">O</div>

            <FileInput onChange={HandleFile} />
            <div
              className={`${
                imageUrl ? "bg-white" : "bg-gray-300"
              } rounded-xl w-full shadow-md overflow-hidden  justify-center flex items-center h-80`}
            >
              {isLoading ? (
                <Loading />
              ) : imageUrl ? (
                <img
                  src={imageUrl}
                  className="min-w-72 h-full "
                  alt="Clasificación de imagen"
                />
              ) : (
                <FaRegImage size={50} />
              )}
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <div className="">
              {response && <Results data={response.predictions} />}
            </div>
          </div>
        </section>
        <section className="mt-4">
          <div className="py-8 px-4 max-w-screen-xl lg:py-16 lg:px-6">
            <div className="max-w-screen-lg text-black dark:text-white sm:text-lg">
              <h2 className="mb-4 text-4xl tracking-tight font-bold text-black dark:text-white">
                Cómo Funciona Nuestro Sistema de Reconocimiento de Personajes
              </h2>
              <p className="mb-4 font-light text-black dark:text-white">
                Nuestro sistema automatizado utiliza tecnologías avanzadas de
                visión por computadora y aprendizaje automático para identificar
                personajes de Cartoon Network en imágenes. Al cargar las fotos
                con nombres de archivo como "cn_char_photo_xx.png", el sistema
                procesa las imágenes para detectar los patrones visuales que
                corresponden a los personajes de la siguiente lista:
              </p>
              <ul className="list-disc text-black dark:text-white pl-6 mb-4 font-medium">
                <li>Ben Tennyson de *Ben 10*</li>
                <li>Finn el Humano de *Hora de Aventura*</li>
                <li>Gumball Watterson de *El Increíble Mundo de Gumball*</li>
                <li>Scooby-Doo de *Scooby-Doo*</li>
                <li>Bugs Bunny de *Looney Tunes*</li>
              </ul>
              <p className="mb-4 font-medium text-black dark:text-white">
                Con un modelo entrenado previamente, el sistema compara las
                características extraídas de cada imagen con una base de datos
                de características visuales. Esto permite reconocer con
                precisión los personajes, incluso en condiciones cambiantes de
                iluminación y fondo, proporcionando resultados rápidos y
                confiables.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;

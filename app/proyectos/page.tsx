import { AumentarCarrito } from "../components/cart/AumentarCarrito";


export const metadata = {
    title:"MIS PROYECTOS",
    description:"PAGINAS PAR LOS PROYECTOS QUE TENGO",
}

export default function Home() {
    return (
        <div className="text-black flex flex-col items-center justify-center h-full">
            <h1 className="text-2xl font-semibold font-serif">CARRITO DE COMPRA</h1>
            <AumentarCarrito/>
        </div>
    )
}
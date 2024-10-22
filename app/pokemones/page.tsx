//import { notFound } from 'next/navigation';
import { CartsPokemon } from '../components/carts-pokemon/cartsPokemon';

export interface Pokemones {
    count: string;
    next: string;
    previous: string;
    results: Result[];
}

export interface Result {
    name: string;
    url: string;
}

export interface Pokemon {
    id: string;
    name: string;
}

// Cambia el tipo de retorno a Promise<Pokemon[]>
const pokemones = async (): Promise<Pokemon[]> => {
    const data: Pokemones = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
        .then(resp => resp.json());

    const pokemone = data.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2)!, // Extrae el ID del URL
        name: pokemon.name
    }));
    //throw notFound() //Manda error 500
    //throw new Error('Not found')
    return pokemone; // Retorna un array de Pokémones
};

export default async function Home() {
    // Cambia el tipo de 'data' a un array de Pokémones
    const data: Pokemon[] = await pokemones();

    return (
        <div className="text-black h-screen w-full flex flex-col items-center overflow-y-scroll">
            <h1 className='text-5xl my-10 font-serif font-bold'>LISTA DE POKEMONES</h1>
            <div className="text-black grid  xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-10 ">
                <CartsPokemon data={data} />
            </div>
        </div>
    );
}

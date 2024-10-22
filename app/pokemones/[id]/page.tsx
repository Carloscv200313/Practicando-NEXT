import { Metadata } from 'next';
interface Props{
    params: {id: string}
}

export async  function  generateMetadata({params}:Props): Promise<Metadata> {
    const pokemon =  await getPokemon(params.id)
    return {
        title: pokemon.name.toUpperCase(),
        description: `Pokemon ${pokemon.name}`
    }
}
const  getPokemon = async (id: string) =>{
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`,{cache: 'force-cache'} )
    .then(resp => resp.json() );
    return pokemon;
}



export default  async function  NamePage({params}: Props) {
    const pokemon = await getPokemon(params.id)
    return (
        <div className="text-black">
            <h1>Pokemon numero {params.id}</h1>
            <h1>Pokemon numero {pokemon.name}</h1>
        </div>
    );
}
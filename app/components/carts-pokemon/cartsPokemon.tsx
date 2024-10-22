import React from 'react'
import { Pokemon } from '@/app/pokemones/page';
import { Cart } from './cart';
interface Props {
    data: Pokemon[],
}
export const CartsPokemon = ({ data }: Props) => {
    return (
        <>
            {
                data.map(pokemon => (
                    <Cart key={pokemon.id} pokemon={pokemon} />
                ))
            }
        </>
    )
}

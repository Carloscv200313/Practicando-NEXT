import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { Pokemon } from '@/app/pokemones/page';
import { IconHeart } from '@tabler/icons-react';

interface Props{
    pokemon: Pokemon,
}
export const Cart = ({pokemon}:Props ) => {
    return (
        <div className="mx-auto right-0 mt-2 w-60">
            <div className="bg-white  overflow-hidden shadow-lg rounded-3xl">
                <div className="text-center p-6 bg-gray-800 border-b ">
                    <Image 
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                        width={100}
                        height={100}
                        alt={`Pokemon ${pokemon.id}`}
                        className="h-32 w-32 text-white  mx-auto" 
                        priority={false}
                        />
                        
                    <p className="pt-2 text-lg font-semibold text-gray-50">{pokemon.name} </p>
                    <p className="text-sm text-gray-100">{pokemon.name}@.com</p>
                    <div className="mt-5">
                        <a
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                        >
                            Ver mas
                        </a>
                    </div>
                </div>
                <div className="border-b">
                    <Link href="/account/campaigns" className="px-4 py-2 hover:bg-gray-100 flex">
                        
                            <div className="text-red-600 ">
                                <IconHeart stroke={2} className=''/>
                            </div>
                            <div className="pl-3">
                                <p className="text-sm font-medium text-gray-800 leading-none">
                                    Agregar a Favoritos
                                </p>
                                <p className="text-xs text-gray-500">Pokemon Favorito</p>
                            </div>
                        
                    </Link>
                </div>
            </div>
        </div>
    )
}

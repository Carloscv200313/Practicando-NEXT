"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
    url: string;
    nombre: string;
    descripcion: string;
    icono: JSX.Element;
}

export const Navbarelegido = ({ url, nombre, descripcion, icono}: Props) => {
    const path = usePathname();

    return (
        <Link
            href={url}
            className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150  
                ${path === url ? ' bg-blue-800 ' : ''}`}
        >
            <div>
                {icono}
            </div>
            <div className="flex flex-col">
                <span className="text-lg text-slate-300 font-bold leading-5">{nombre}</span>
                <span className="text-sm text-slate-500 hidden md:block">{descripcion}</span>
            </div>
        </Link>
    );
};

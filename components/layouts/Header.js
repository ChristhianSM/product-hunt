import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled';
import {css} from '@emotion/react'

import { Buscador } from '../ui/Buscador'
import { Navegacion } from './Navegacion'
import Boton from '../ui/Boton'

const ContenedorHeader = styled.div`
    max-width : 1200px;
    width: 95%;
    margin: 0 auto;

    @media (min-width : 768px){
        display: flex;
        justify-content: space-between;
    }
`

const Logo = styled.p`
    color: var(--naranja);
    font-size: 4rem;
    line-height : 0;
    font-weight: 700;
    font-family: 'Roboro Slab', serif;
    margin-right : 2rem;
`

export const Header = () => {
    const user = false;

    return (
        <header
            css = {css`
                border-bottom : 2px solid var(--gris3);
                padding : 1rem 0;
            `}
        >
            <ContenedorHeader>
                <div
                    css = {css`
                        display: flex;
                        align-items: center;
                    `}
                >
                    <Link href = "/">
                        <Logo>P</Logo>
                    </Link>

                    {/* Buscador */}
                    <Buscador />

                    {/* Navegacion */}
                    <Navegacion />
                </div>

                <div
                    css = {css`
                        display: flex;
                        align-items: center;
                    `}
                >
                    {
                        user ? 
                        (
                            <>
                                <p
                                    css = {css`
                                        margin-right: 2rem;
                                    `}
                                >Hola : Christhian</p>
                                <Boton 
                                    type ="button"
                                    bgColor
                                >
                                    Cerrar Sesion
                                </Boton>
                            </>
                        ):
                        (
                            <>
                                <Link href = "/login">
                                    <Boton bgColor = "true">Login</Boton>
                                </Link>
                                <Link href = "/">
                                    <Boton>Crear Cuenta</Boton>
                                </Link>
                            </>
                        )
                    }
                    {/* Menu de administracion */}
                    
                    
                </div>
            </ContenedorHeader>
        </header>
    );
}

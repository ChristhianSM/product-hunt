import React from 'react'
import { Header } from './Header'
import {Global, css} from '@emotion/react'
import Head from 'next/head'

export const Layout = props => {
    return (
        <>
            <Global 
                styles = {css`
                    :root {
                        --gris: #3d3d3d;
                        --gris2 : #6f6f6f;
                        --gris3 : #e1e1e1;
                        --naranja : #da552f;
                    }

                    html {
                        font-size : 62.5%;
                        box-sizing : border-box;
                    }

                    *, *:before, *:after {
                        box-sizing: inherit;
                    }

                    body {
                        font-size: 1.6rem;
                        line-height: 1.5;
                        font-family : 'PT Sans', sans-serif
                    }

                    h1, h2 {
                        font-family : "Roboto Slab", serif;
                        font-weight : 700;
                    }

                    h3 {
                        font-family : 'PT Sans', sans-serif
                    }

                    h1, h2,h3 {
                        margin: 0 0 2rem 0;
                        line-height : 1.5;
                    }

                    ul {
                        list-style: none;
                        margin : 0;
                        padding: 0
                    }
                    a{
                        text-decoration: none;
                    }
                `}
            />

            <Head>
                <html lang ="es"></html>
                <title>Product Hunt Firebase y next.js</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Roboto+Slab:wght@100;200;300;400;500;600;900&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="/static/css/app.css" />
            </Head>
            <Header />
            <main>
                {props.children}
            </main>
        </>
        
    )
}
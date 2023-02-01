"use client"
import { Navbar, Button } from 'flowbite-react';


export const NavbarC = () =>{
    return (
        <>
                <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand href="/">
                    <img
                        src="/d.png"
                        className="mr-3 h-6 sm:h-9"
                    />
                    <span className="self-center whitespace-nowrap text-xl title-navbar text-white">
                        CdD ESFM
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link
                        href="#acerca"
                        className="hover:white"
                    >
                        Acerca de
                    </Navbar.Link>
                    <Navbar.Link href="#redes">
                        Productos
                    </Navbar.Link>
                    <Navbar.Link href="#registro">
                        Registro Concurso 2023-1
                    </Navbar.Link>
                    <Navbar.Link href="#discord">
                        Discord
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
};
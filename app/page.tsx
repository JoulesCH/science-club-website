"use client"
import {NavbarC} from "./components/NavbarC";

import { Footer } from 'flowbite-react';
import { useState } from "react";
import { FormEvent } from "react";

export default function (){
    const [accepted, setAccepted] = useState(false);
    const [messageSent, setMessageSent] = useState(<> </>);

    const sleep = (ms:any) => new Promise(
      resolve => setTimeout(resolve, ms)
    );

    const handleRegister = async (e:
      FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        //fetch to api

        form.reset();
        setMessageSent(
          <p className="text-[#FF9400] mt-4">
            ¡Registro concluído con éxito!
          </p>
        );
        await sleep(5000);
        setMessageSent(
          <></>);

      };

    

    return (
        <>
        <div className="gradient-background">
        <div className="avatar hidden lg:block">
                <img src="/divulgonO.png"/>
        </div>
            <div className="landing-div relative ">
               <NavbarC/> 
                <div className="stars">
                    
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                </div>
                <div className="flex  pt-[30px] pb-[550px] ">
                    <div className="py-4 px-6  max-w-6xl ">
                    </div>
                    <a href="#convocatoria" className="bg-[#FF9400] hover:bg-[#ff9500d7] hidden lg:flex text-white p-3 rounded-md text font-medium mt-3">Ir al registro</a>
                    
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="none" viewBox="0 0 1680 40" className="relative w-full z-1" ><path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z" fill="white"></path></svg>
            </div>
        </div>
        <div className="px-5 lg:px-28 pt-6 pb-7 z-30" id="acerca">
            <div className="text-3xl  text-center text-slate-600 font-semibold">
                <span className="text-[#FF9400] "> Queremos incentivar a la comunidad de ESFM a crear productos de divulgación científica</span>, como artículos, videos, podcasts y entrevistas. ¿Te gustaría participar? ¡Únete ahora mismo!
            </div>
        </div>
        <div className="px-5 lg:px-28 bg-[#1b2a2f] pb-10" id="redes">
            <div className="pt-5 z-30">
                <div className="text-3xl  text-center text-slate-100 font-semibold pt-7 ">
                   <h2>Conoce nuestras publicaciones recientes</h2>
                   <div className="insta-feed" data-mc-src="d5feeb3e-dd21-4897-81e2-f874d0fd53ba#null" ></div>
                </div>
            </div>
            <svg className="w-3/4 h-7 mt-[-50px] absolute">
              <rect className="fill-[#1b2a2f] dark:fill-[#1b2a2f]"  width="100%" height="100" />
            </svg>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pr-7 pl-10 ">
              <iframe width="100%" height="315" src="https://www.youtube-nocookie.com/embed/w4Af9TKZD2U" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
              <iframe width="100%" height="315" src="https://www.youtube-nocookie.com/embed/giqoQLgBb-w" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
              <iframe width="100%" height="315" src="https://www.youtube-nocookie.com/embed/OQuuXzVgZEY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            </div>


              </div>

        <div className="px-5 lg:px-28 mt-10">
            <h2 className="text-3xl  text-center font-semibold ">Registrate al concurso de apertura 2023</h2>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5"> 
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div id="convocatoria" className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Acerca del concurso</h3>
              <p className="mt-1 text-sm text-gray-600">
                El Club de Divulgación presenta su primer concurso de divulgación abierto a toda la comunidad estudiantil de la Escuela Superior de Física y Matemáticas con el fin de llevar conocimiento a niveles educativos como secundaria y primaria. Con el fin de hacer el concurso más didáctico para todos, se convocan dos categorías: vídeo estilo tiktok y modalidad escrita (tira cómica, caricatura o cuento), explicadas detalladamente más adelante.
                <br/>
                <br/>
              Usa tus conocimientos y tu creatividad para divulgar algún concepto sobre ciencia de tu interés y que su alcance llegue de nuestros compañeros más pequeños y que no se queden sin disfrutar de este maravilloso mundo.
                <br />
                <br />
                <a href="/convocatoriaCdDESFM2023-1.pdf" className="text-[#ff9400] underline"> Leer la convocatoria completa</a>
                </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form action="/register" method="POST" >
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
                        Nombre(s)
                      </label>
                      <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        autoComplete="given-name"
                        required={true}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
                        Apellidos
                      </label>
                      <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        autoComplete="family-name"
                        required={true}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="studentemail" className="block text-sm font-medium text-gray-700">
                        Correo institucional
                      </label>
                      <input
                        type="text"
                        name="studentemail"
                        id="studentemail"
                        autoComplete="email"
                        required={true}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="personalemail" className="block text-sm font-medium text-gray-700">
                        Correo personal
                      </label>
                      <input
                        type="text"
                        name="personalemail"
                        id="personalemail"
                        autoComplete="email"
                        required={true}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                        Categoría
                      </label>
                      <select
                        id="category"
                        name="category"
                        autoComplete="category-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-amber-500 sm:text-sm"
                      >
                        <option>Vídeo</option>
                        <option>Escrita</option>
                        <option>Ambas</option>
                      </select>
                    </div>
                    <div className="col-span-6">
                        <input
                            id="accept"
                            name="accept"
                            type="checkbox"
                            className="focus:ring-amber-500 h-4 w-4 text-amber-600 border-gray-300 rounded mx-1"
                            onChange={(e) => {
                                if (e.target.checked) {
                                    setAccepted(true);
                                } else {
                                  setAccepted(false);
                                }
                            }}
                        />
                        <label htmlFor="accept" className=" text-sm font-medium text-gray-700 "> He leído y acepto los términos y condiciones</label>
                    </div>
                  </div>
                  {messageSent}
                </div>
                <div className="bg-gray-50 px-4 py-3 text-left sm:px-6">
                  <button
                    disabled={!accepted}
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-[#FF9400] hover:bg-[#ff9500d7] py-2 px-4 text-sm font-medium text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                  >
                    ¡Participar!
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="pt-10" id="discord">
      {/* Join us on discord */}
      <div className="bg-[#1b2a2f]">
        <div className="max-w-7xl mx-auto py-12 px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">No te pierdas de ningún aviso</span>
            <span className="block text-[#FF9400]">¡Únete a nuestro Discord!</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="https://discord.gg/mTtaq5Xckg"
                target="_blank"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#7289da] hover:bg-[#7289dac7]"
              >
                <img src="/discord.png"  width="30px" className="mr-3"/>
                Discord Club de Divulgación ESFM
              </a>
            </div>
          </div>
        </div>          
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="none" viewBox="0 0 1680 40" aria-hidden="true" className="relative w-full z-1 mt-[-5px] inline" style={{transform: "scaleY(-1)"}}><path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z" fill="#1b2a2f"></path></svg>
        
    <div className=" pb-[10px]">
        <Footer container={true}>
            <Footer.Copyright
                href="/"
                by=""
                year={2023}
            />
            <Footer.LinkGroup>
                <Footer.Link href="#">
                Acerca de
                </Footer.Link>
                <Footer.Link href="#">
                Redes Sociales
                </Footer.Link>
                <Footer.Link href="#">
                Productos
                </Footer.Link>
                <Footer.Link href="#">
                Registro concurso 2023
                </Footer.Link>
            </Footer.LinkGroup>
        </Footer>
    </div>


        </>
    )
}
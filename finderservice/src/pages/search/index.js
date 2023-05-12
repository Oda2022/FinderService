import Footer from "@components/Footer";
import Layout from "@components/Layout";
import Link from "next/link";
import Image from "next/image"

import { gas, obrero, llave, foco, manguera, tubo , ubi , equipo } from '@public/assets';

export default function Search() {
    const arr = ["1","2","3","4","5","6","7","8","9"];

    return (
        <Layout>
            <div className="bg-white  flex justify-around">
                <div className="mt-14 flex flex-col w-1/5 h-fit">
                    <div className="flex flex-wrap justify-around rounded-2xl h-1/4">
                        <Link href="/">
                            <Image src={manguera} className="flex justify-center items-center m-4 p-3 w-14 h-fit rounded-2xl bg-neutral-200 duration-200 hover:scale-110"></Image>        
                        </Link>   
                        <Link href="/">
                            <Image src={gas} className="flex justify-center items-center m-4 p-3 w-14 h-fit rounded-2xl bg-neutral-200 duration-200 hover:scale-110"></Image>        
                        </Link>  
                        <Link href="/">
                            <Image src={obrero} className="flex justify-center items-center m-4 p-3 w-14 h-fit rounded-2xl bg-neutral-200 duration-200 hover:scale-110"></Image>        
                        </Link>  
                        <Link href="/">
                            <Image src={llave} className="flex justify-center items-center m-4 p-3 w-14 h-fit rounded-2xl bg-neutral-200 duration-200 hover:scale-110"></Image>        
                        </Link>  
                        <Link href="/">
                            <Image src={foco} className="flex justify-center items-center m-4 p-3 w-14 h-fit rounded-2xl bg-neutral-200 duration-200 hover:scale-110"></Image>        
                        </Link>  
                        <Link href="/">
                            <Image src={tubo} className="flex justify-center items-center m-4 p-3 w-14 h-fit rounded-2xl bg-neutral-200 duration-200 hover:scale-110"></Image>        
                        </Link>    
                        <Link href="/">
                            <Image src={ubi} className="flex justify-center items-center m-4 p-3 w-14 h-fit rounded-2xl bg-neutral-200 duration-200 hover:scale-110"></Image>        
                        </Link>  
                        <Link href="/">
                            <Image src={equipo} className="flex justify-center items-center m-4 p-3 w-14 h-fit rounded-2xl bg-neutral-200 duration-200 hover:scale-110"></Image>        
                        </Link>     
                    </div>

                    <div className="bg-neutral-300 mt-10 mb-10 p-6 rounded-xl">
                        <label className="font-bold mb-2">Ordenar por:</label>
                        <div>
                            <select name="OrderFilter" className="w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded focus:outline-none focus:border-gray-500">
                                <option value="Ordenar">-Ordenar-</option>
                                <option value="Cercano">Más cercanos</option>
                                <option value="Ascendente">Nombres (Ascendente)</option>
                                <option value="Descendente">Nombres (Descendente)</option>               
                            </select>
                        </div>

                        <div className="mt-5">
                            <label className="font-bold mb-2">Filtrar por:</label>                
                            <select name="Filters" className="w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded focus:outline-none focus:border-gray-500">
                                <option value="Filtros">-Filtros-</option>
                                <option value="Rating">Rating</option>
                                <option value="Ofertas">Ofertas</option>
                            </select>                       
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-around pt-5 mt-14 mb-6 pl-10 w-1/2 rounded-xl">
                    <div className="w-5/6 py-3 px-3 bg-slate-300/60 rounded-md flex flex-row gap-2 backdrop-blur-sm ">
                        <input type="text" placeholder="Buscar por nombre" className="bg-white/0 placeholder-gray-700 w-full text-xl border-none border-transparent outline-none "/>
                    </div>
                    <div className="font-bold mb-2 mt-5">{arr.length} resultados encontrados</div>
                    <div className="mt-5 flex flex-col flex-wrap">
                        {arr.map((info)=>{
                            return (
                                <div key={info} className="bg-neutral-300 p-5 mb-10 mr-5 rounded-xl duration-200 hover:scale-105">
                                    <h2>Nombre: {info}</h2>
                                    <p>Informacion de: {info}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>


                <div className="bg-neutral-300 flex flex-col w-1/6 h-fit mt-14 mb-10 p-6 rounded-xl">
                    <div>
                        <label className="font-bold mb-2">Métodos de Pago</label>
                        <select name="Payment" className="w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded focus:outline-none focus:border-gray-500">
                            <option value="Ordenar">-Formas de Pago-</option>
                            <option value="Descendente">Efectivo</option>
                            <option value="Ascendente">Mercado Pago</option>
                        </select>
                    </div>
                    <div className="mt-5">
                        <label className="font-bold mb-2">Tipos de Trabajo</label>
                        <div>
                            <select name="Works" className="w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded focus:outline-none focus:border-gray-500">
                                <option value="Trabajos">-Trabajo-</option>
                                <option value="Rating">Obrero</option>
                                <option value="Ofertas">Jardinería</option>
                                <option value="Ofertas">Limpieza</option>
                            </select>    
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    )
}

import React from "react";
import SimpleMap from "../../Components/Map/map";
import {TiSocialFacebook, TiSocialInstagram, TiSocialTwitter} from "react-icons/ti";


export default function Contactenos() {
    return (
      <div className="row-4">
        <div className="mt-14 xl:mx-40 lg:mx-20 cel:mx-3">
          <h2 className="text-pizza text-3xl">Ubicación:</h2>
          <br/>
          <p className="text-xl">Nos ubicamos en la Ciudad de la Investigación de la UCR, San Pedro de Montes de Oca. Del supermercado Muñoz y Nanne 400 metros Norte (entrada principal 
            a la Ciudad de la Investigación)</p>
          <br />
        </div>
        <div className="flex justify-center">
          <SimpleMap/>
        </div>
        <div className="text-center mt-16 md-10 lg:mx-44 gap-12">  
          <h2 className="text-pizza text-3xl">Horario:</h2>
          <p className="text-xl">
            <strong>Lunes a sabado:</strong> 22446913<br />
            <strong>Domingo:</strong> (506)70462055
          </p>  
        </div>  
        <div className="text-center mt-16 md-10 lg:mx-44 gap-12">
          <h2 className="text-pizza text-3xl">Números telefónicos</h2>
          <p className="text-xl">
            <strong>Telefono:</strong> 22446913<br />
            <strong>Whatsapp:</strong> (506)70462055
          </p>  
        </div>  
        <br/>
        <div className="flex flex-col my-10">
          <div className="text-center">
            <h2 className="text-pizza text-3xl">Redes sociales:</h2>
          </div>
          <br/>
          <div className="flex justify-center gap-9 text-4xl">
            <TiSocialFacebook className="cursor-pointer"/> <TiSocialTwitter className="cursor-pointer"/> <TiSocialInstagram className="cursor-pointer"/>
          </div>
        </div>
      </div>  
    )
}
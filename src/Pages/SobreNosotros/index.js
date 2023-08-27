import {TiTick} from "react-icons/ti";

export default function SobreNosotros() {
  return (
    <>
      <div className="row-3">
        <div className="flex flex-row columns-2 cel:flex-col-reverse justify-around mt-10 xl:mx-40 lg:mx-20 cel:mx-3 gap-3">
          <div className="text-justify">
            <h2 className="text-pizza text-3xl">&iquest;Quienes somos?</h2>
            <br/>
            <p className="text-xl">Magma Pizza es una franquicia nacional con 100% talento costarricense. Nuestro objetivo es unir a la familia y a los amigos con nuestras 
            deliciosas pizzas. Ese es nuestro secreto: un lugar donde puedas pasar tus momentos especiales junto con nuestras pizzas llenas de sabor.<br/><br/>
            Con tan solo unos pocos años en el mercado, hemos logrado ser parte de la historia de muchas familias costarricenses, acompañándolos día a día, ya sea en el desayuno,
            almuerzo o cena. Siempre estaremos ahí cuando nos necesites.<br/><br/>
            ¡Lo que sea por tu pizza favorita!
             </p>
          </div>
          <div className="flex-none">
            <img className="h-full w-full" src='https://ci0137.s3.amazonaws.com/magma/sobreNosotros/pizza_giratoria.png' alt="Logo Swap it"/>
          </div>
        </div>
        <br />
        
        <div className="flex flex-row columns-2 cel:flex-col justify-around mt-10 lg:mx-40 cel:mx-3 gap-3">
          <div className="flex-none">
            <img className="h-full w-full" src='https://ci0137.s3.amazonaws.com/magma/sobreNosotros/chef_group_smiling.png' alt="Logo Swap it"/>
          </div>
          <div className="text-justify">
            <h2 className="text-pizza text-3xl">Nuestros valores</h2>
            <br/>
            <p className="text-xl">
              <strong>Respeto:</strong> El respeto por el cliente nos permite generar un clima comodo y agradable, fundamental para que puedas disfrutar de tus alimentos. 
              Igualmente es muy importante el respeto entre los empleados para que asi puedas disfrutar de la mejor pizza de Costa Rica.
              <br/><br/>
              <strong>Calidad:</strong> La obtenemos utilizando los mejores ingredientes, somos muy exigentes con nosotros mismos. 
              Incorporar calidad a cada uno de nuestros alimentos es nuestra prioridad.
              <br/><br/>
              <strong>Compromiso:</strong> Es importante que cada uno de los miembros de nuestro equipo de trabajo asuma el compromiso necesario para alcanzar nuestro 
              principal objetivo: hacerte disfrutar de la mejor pizza
            </p>
          </div>
        </div>
        
        <br />
        
        <div className="flex flex-row columns-2 cel:flex-col-reverse justify-around my-10 lg:mx-40 cel:mx-3 gap-3">
          <div className="text-justify">
            <h2 className="text-pizza text-3xl">Servicio al cliente</h2>
            <br/>
            <p className="text-xl">
              Ya sea que estes dentro de nuestro local o desde tu casa, o bien ya sea en el día o en la noche, siempre estaremos listos para servirte. 
              Nuestra misión es:
            </p>
            <br/>
            <div className="flex">
              <TiTick className="text-green-700 text-3xl"/> 
              <p className="text-xl">Ofrecerte productos de la mejor calidad.</p>
            </div>
            <br/>
            <div className="flex">
              <TiTick className="text-green-700 text-3xl"/>
              <p className="text-xl">Ofrecerte una calida sonrisa.</p>
            </div>
            <br/>
            <div className="flex">
              <TiTick className="text-green-700 text-3xl"/>
              <p className="text-xl">Ofrecerte productos de la mejor calidad.</p>
            </div>
            <br/>
            <p className="text-xl">¡Tu alegría es nuestra prioridad #1!</p>
          </div>
          <div className="flex-none">
            <img className="h-full w-full" src='https://ci0137.s3.amazonaws.com/magma/sobreNosotros/chef_taking_notes.png' alt="Logo Swap it"/>
          </div>
        </div>
      </div> 
    </> 
  )
}
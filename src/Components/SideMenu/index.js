import React from 'react';
import { SideMenuBtn } from '../Buttons';


function SideMenu() {
  return <div>
      <div className="flex flex-col gap-y-4 lg:ml-40 md:ml-10 sm:ml-0 w-1/3 tiny:mx-10">
        <SideMenuBtn text = 'Pizzas' link = '/Pizzas'/>
        <SideMenuBtn text = 'Bebidas' link = '/Bebidas'/>
        <SideMenuBtn text = 'Postres' link = '/Postres'/>
        <SideMenuBtn text = 'Acompañamientos' link = '/Acompanamientos'/>
        <SideMenuBtn text = 'Combos y Promociones' link = '/Promos'/>
      </div>
  </div>
}

export default SideMenu;

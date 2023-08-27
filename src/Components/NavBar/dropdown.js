import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Mixpanel from "../../Services/mixpanel";

import './dropdown.css';

function Dropdown() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        <li>
            <Link className='dropdown-link' to='/Pizzas' onClick={() => {setClick(false); Mixpanel.track(Mixpanel.TYPES.GO_TO_MENU_PIZZAS)}}>
                Pizza
            </Link>

        </li>
        <li>
            <Link className='dropdown-link' to='/Bebidas' onClick={() => {setClick(false); Mixpanel.track(Mixpanel.TYPES.GO_TO_MENU_DRINKS);}}>
                Bebidas
            </Link>
        </li>
        <li>
            <Link className='dropdown-link' to='/Acompanamientos' onClick={() => {setClick(false); Mixpanel.track(Mixpanel.TYPES.GO_TO_MENU_ACCOMPANIMENTS);}}>
                Acompañantes
            </Link>
        </li>
        <li>
            <Link className='dropdown-link' to='/Postres' onClick={() => {setClick(false); Mixpanel.track(Mixpanel.TYPES.GO_TO_MENU_DRINKS);}}>
                Postres
            </Link>
        </li>
        <li>
            <Link className='dropdown-link' to='/Promos' onClick={() => {setClick(false); Mixpanel.track(Mixpanel.TYPES.GO_TO_MENU_PROMOS);}}>
                Combos y promociones
            </Link>
        </li>
      </ul>
    </>
  );
}

export default Dropdown;
import React from 'react';

function FormInput(props) {
    return <div>
       <label className = "text-lg text-white">
          {props.label} 
          <input
            name={props.name}
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            className="mb-6 mt-1 block px-3 py-2 w-64
            bg-white border border-slate-300 rounded-md text-lg shadow-lg text-black placeholder-slate-400
              focus:outline-none focus:border-yellow focus:ring-1 focus:ring-yellow
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
        </label>
    </div>
}

export { FormInput }
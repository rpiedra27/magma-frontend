import React from 'react';

function LoginInput({name, type, value, placeholder, func})
{
    return (
        <input
            name={name} type={type} placeholder={placeholder}
            className="mb-6 mt-1 block px-3 py-2 w-64 bg-white border border-slate-300 rounded-md text-lg shadow-lg text-black placeholder-slate-400
            focus:outline-none focus:border-yellow focus:ring-1 focus:ring-yellow invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            value={value}
            onChange={func}
        />
    )
}

function IngredientInput({inputType, ingredientValue, ingredientName, ingredientFunction} ) {
    return <input
    className="form-radio text-yellow h-5 w-5"
    type={inputType}
    value={ingredientValue}
    name={ingredientName}
    onChange={ingredientFunction}
  />
}

export {LoginInput, IngredientInput}
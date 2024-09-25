import React from 'react'

const TextInput = ({ id, label, value, onChange, required = false, error, }) => {
    return (
        <div className="w-full relative mt-6 pr-4">
            <input
                id={id}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                type="text"
                className={`peer pt-4 px-2 font-light outline-none relative left-2 border-b-2 w-full
                    ${error ? 'border-rose-500' : 'border-neutral-300'}
                    ${error ? 'focus:border-rose-500' : 'focus:border-[#47444c]'}
                `}
            />

            <label
                className={`absolute text-md duration-150 transform -translate-y-3 top-2.5 z-10 origin-[0] select-none left-4
                ${error ? 'text-rose-500' : 'text-zinc-400'}
                `}
            >
                {label}
                {required && <span className="text-rose-500">*</span>}
            </label>

            {error && <p className="text-rose-500 text-xs mt-2">{error}</p>}
        </div>
    )
}

export default TextInput
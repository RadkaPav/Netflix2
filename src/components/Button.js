import React from 'react'

const Button = ({ category, categories, setCategory, setStates }) => {
    return (
        <div className='flex flex-row justify-center'>
            {
                category.map((oneCategory, index) => {
                    return <button
                        key={index}
                        className='w-[150px] text-white bg-[#e50914] p-1 cursor-pointer'
                        onClick={() => {
                            setStates()
                            setCategory(oneCategory)
                        }}
                    >{oneCategory}</button>
                })
            }
        </div>
    )
}

export default Button
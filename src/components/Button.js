import React from 'react'

const Button = ({ title, category, categories, setCategory, setStates }) => {
    return (
        <div className='w-[480px] flex flex-col items-center mx-auto sm:flex-row sm:justify-center sm:mb-1'>
            <div className='text-white w-[300px] text-center sm:w-14'>
                <div className='border-gray-600 border-2 px-2 py-[3px] my-2 rounded sm:my-0'>{title}</div>
            </div>
            <div className='w-[300px] flex flex-row justify-between flex-wrap sm:w-[450px] sm:justify-end'>
                {
                    category.map((oneCategory, index) => {
                        return <button
                            key={index}
                            className='w-[145px] text-white bg-[#e50914] p-1 cursor-pointer rounded mb-1 sm:w-[100px] sm:mb-0 sm:ml-1'
                            onClick={() => {
                                setStates()
                                setCategory(oneCategory)
                            }}
                        >{oneCategory}</button>
                    })
                }
            </div>
        </div>
    )
}

export default Button
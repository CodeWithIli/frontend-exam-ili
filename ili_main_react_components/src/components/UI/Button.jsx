import React from 'react'

export default function Button({btnContent, className, onClick}) {

  return (
    <div className={`${className} grid `}>
        <button onClick={() => onClick()} className={` border-indigo-600 bg-indigo-600 text-white rounded-md p-2`}>
            {btnContent}
        </button>
    </div>
  )
}

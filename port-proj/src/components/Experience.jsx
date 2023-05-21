import React from 'react'
import html from '../assets/html.png';
import css from '../assets/css.png';
import java from '../assets/java.jpg';
import javaScript from '../assets/JavaScript.jpg';
import python from '../assets/python.png';
import bootstrap from '../assets/bootstrap.png';
import github from '../assets/github.png';

const Experience = () => {
    const techs =[
        {
            id:1,
            src: html,
            title: 'HTML',
            style : 'shadow-red-400'
        },
        {
            id:2,
            src: css,
            title: 'CSS',
            style : 'shadow-blue-400'
        },
        {
            id:3,
            src: bootstrap,
            title: 'Boostrap',
            style : 'shadow-purple-400'
        },
        {
            id:4,
            src: javaScript,
            title: 'JAVA SCRIPT',
            style : 'shadow-yellow-300'
        },
        {
            id:5,
            src: python,
            title: 'PYTHON',
            style : 'shadow-sky-200'
        },
        {
            id:6,
            src: java,
            title: 'JAVA',
            style: 'shadow-red-500'
        },
        {
            id:7,
            src: github,
            title: 'GIT HUB',
            style: 'shadow-gray-300'
        },
    ];

  return (
    <div name='experience' 
    className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>These are the technologies I've worked with..</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {techs.map(({id,src,title,style})=>(
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <img src={src} alt="html" className='w-20 mx-auto'/>
                        <p className='mt-4'>{title}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Experience


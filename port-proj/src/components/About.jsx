import React from 'react';

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex-flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <br/>
        <table className="mt-20 mb-5 w-full bg-transparent rounded-lg overflow-hidden shadow-gray-500">
          <thead>
            <tr className="bg-gray-700 text-white cursor-pointer hover:bg-gray-300 hover:text-black transform duration-700 hover:scale-105 transition-transform">
              <th className="py-8 px-8 text-left">S.No</th>
              <th className="py-8 px-4 text-left">College Name</th>
              <th className="py-8 px-4 text-left">Year of Passing</th>
              <th className="py-8 px-4 text-left">Course</th>
              <th className="py-8 px-4 text-left">Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-800 text-white cursor-pointer hover:bg-gray-300 hover:text-black transform duration-700 hover:scale-105 transition-transform">
              <td className="py-6 px-6">1</td>
              <td className="py-6 px-4">Lovely Hearts High School</td>
              <td className="py-6 px-4">2018</td>
              <td className='py-6 px-4'>Schooling</td>
              <td className="py-6 px-4">7.0%</td>
            </tr>
            <tr className="bg-gray-900 text-white cursor-pointer hover:bg-gray-300 hover:text-black transform duration-700 hover:scale-105 transition-transform">
              <td className="py-6 px-6">2</td>
              <td className="py-6 px-4">Quli Qutub Shah Polytechnic College</td>
              <td className="py-6 px-4">2021</td>
              <td className='py-6 px-4'>Diploma</td>
              <td className="py-6 px-4">8.65</td>
            </tr>
            <tr className="bg-gray-800 text-white cursor-pointer hover:bg-gray-300 hover:text-black transform duration-700 hover:scale-105 transition-transform">
              <td className="py-6 px-6">3</td>
              <td className="py-6 px-4">Keshav Memorial Institute Of Technology</td>
              <td className="py-6 px-4">2024</td>
              <td className='py-6 px-4'>Btech</td>
              <td className="py-6 px-4">Pursuing...</td>
            </tr>
          </tbody>
        </table>
        <br/>
      </div>
    </div>
  );
};

export default About;

//import React from 'react'

const Resume = () => {
  return (
    
  

<div className="h-full page-shadow p-6">
  <section className="education mb-6">
    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Education</h2>
    <div className="space-y-4">
      
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-xl font-bold text-gray-700">Technical University of Kenya</h3>
        <p className="text-sm text-gray-500">Higher Diploma in Information Technology (2019 - 2023)</p>
        <p className="text-gray-600 mt-2">
          Focused on network support and frontend development, with a strong foundation in web technologies, software engineering, and system management.
        </p>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-xl font-bold text-gray-700">Edureka</h3>
        <p className="text-sm text-gray-500">Fullstack Web Development (December 2023 - March 2024)</p>
        <p className="text-gray-600 mt-2">
          Focused on MERN stack.
        </p>
      </div>
      
    </div>
  </section>

  
  <section className="work-experience">
    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Work Experience</h2>
    <div className="space-y-4">
      
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-xl font-bold text-gray-700">Intern - KenyaWeb.Com Limited</h3>
        <p className="text-sm text-gray-500">November 2022 - February 2023</p>
        <p className="text-gray-600 mt-2">
          Developed responsive web interfaces using React.js and Tailwind CSS. Collaborated with backend teams to integrate APIs and optimize user experience.
        </p>
      </div>

      
    </div>
  </section>
</div>
)
}

export default Resume
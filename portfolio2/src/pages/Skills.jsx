
const Skills = () => {
  return (
    <div className="h-full page-shadow bg-white px-10">
      <div>
        {/* heading */}
        <div>
          <div className="relative ">
            <div className="text-center text-6xl xl:text-8xl font-bold text-black/5 ">
              SKILLS
            </div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
              My Strengths
            </h1>
          </div>
        </div>
        
        <div>
                <div className="">
              <h1 className="text-2xl md:text-4xl font-bold text-black/80">Languages</h1>
               <p className=" bg-primary/25 text-lg">JavaScript</p>
               <p className=" bg-primary/25 text-lg">TypeScript(currently exploring this)</p>
               </div>
               <div className="">
              <h1 className="text-2xl md:text-4xl font-bold text-black/80">Technologies</h1>
               <p className=" bg-primary/25 text-lg">HTML & CSS</p>
               <p className=" bg-primary/25 text-lg">ReactJs</p>
               <p className=" bg-primary/25 text-lg">TailwindCSS</p>
               <p className=" bg-primary/25 text-lg">NodeJs</p>
               <p className=" bg-primary/25 text-lg">Express</p>
               <p className=" bg-primary/25 text-lg">NextJs(currently exploring this)</p>
               <p className=" bg-primary/25 text-lg">MongoDB</p>
               <p className=" bg-primary/25 text-lg">Firebase</p>
               <p className=" bg-primary/25 text-lg">Redux</p>
               </div>
               <div className="">
              <h1 className="text-2xl md:text-4xl font-bold text-black/80">Deployment</h1>
               <p className=" bg-primary/25 text-lg">Git and Github</p>
               <p className=" bg-primary/25 text-lg">Github actions(Vercel)</p>
               </div>
               <div className="">
              <h1 className="text-2xl md:text-4xl font-bold text-black/80">Soft Skills</h1>
               <p className=" bg-primary/25 w-auto">Effective communnication, Curious and adaptable</p>
               
               </div>
               </div>

      </div>
    </div>
  );
};

export default Skills;
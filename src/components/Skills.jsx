const Skills = () => { 
    const skills = ["Next.js", "React.js", "Appwrite & Firebase", "MySQL", "MongoDb", "HTML", "CSS", "Javascript", "Python", "C & C++"]; 
    return ( 
        <section id="skills"
            className="px-10 w-full my-40 max-w-5xl mx-auto"> 
            <h2 className="text-center text-5xl font-black">My Skills</h2>
            <div className="mt-10 flex gap-5 justify-center  
                            flex-wrap mx-auto max-w-xl"> 
                {skills.map((skill, index) => { 
                    return ( 
                        <div key={index} 
                             className="cursor-pointer px-6 py-5 lg:px-12 lg:py-10  
                                        rounded-full bg-amber-200 lg:text-lg  
                                        flex items-center justify-center  
                                        font-bold hover:shadow-xl"> 
                            {skill} 
                        </div> 
                    )})} 
            </div> 
        </section> 
    ) 
}

export default Skills
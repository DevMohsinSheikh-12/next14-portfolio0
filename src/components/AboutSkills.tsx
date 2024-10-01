import React from "react";
import Image from "next/image";

const Card = ({ imageSrc, title,according, description }:any) => {
  return (
   <>

    <div className="bg-transparent backdrop-blur-md bg-opacity-25 border border-slate-700 text-white rounded-lg p-5 flex flex-col justify-center items-center  ">
   
      <Image
        src={imageSrc}
        alt={title}
        height={94}
        width={99}
        className="w-24 h-24 object-cover mb-4"/>
     
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
     
      <p className="text-gray-600 text-center mt-5">{description}</p>
    </div>
        </>
     )
}



   const SkillsCard = () => {
    
    

     return (
      <>
    
       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-blend-saturation 
       bg-screen bg-cover bg-center h-screen  " > 
        
      <Card
        imageSrc="/images/html.jpg" 
        title="HTML"
        according="Proficient"
        description="This is a short description about John."
        />
      <Card
        imageSrc="/images/css.jpg" 
        title="CSS"
        according="Proficient"
        description="This is a short description about Jane."
        />
      <Card
        imageSrc="/images/js.jpg"
        title="JavaScript"
        according="competent"
        description="This is a short description about Mike."
        />
      <Card
        imageSrc="/images/ts.jpg"
        title="TypeScript"
        according="Proficient"
        description="sdfghjk" />
      <Card
        imageSrc="/images/react.jpg"
        title="ReactJS"
        according="competent"
        description="This is a short description about Mike."
        />

      <Card 
        imageSrc="/images/next.jpg"
        according="Advanced Beginner"
        title="NextJs"
        description="This is a short description about Mike."
        />
        
    </div>
        </>
  );
       
};

export default SkillsCard;

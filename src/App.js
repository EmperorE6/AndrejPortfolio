import './App.css';
import React from 'react';
import mojaSlika from "./myPic.jpeg";
import ugdPic from "./ugd-crop.jpg";
import degreeIcon from "./degree-icon.png";
import certificatePic from "./certificate-pic.png";
import certificateIcon from "./certificate-icon.png";
import JS from "./js.png";
import HTML from "./html.png";
import CSS from "./css.png";
import REACT from "./react.png";
import SQL from "./sql.png";
import NODEJS from "./nodejs.png";
import PHP from "./php.png";
import CSharp from "./c-sharp.png";
import MONGODB from "./MongoDB.png";
import Project1 from "./project1.png";
import Project2 from "./project2.png";
import Project3 from "./project3.png";
import Project4 from "./project4.png";
import Project5 from "./project5.png";
import Project6 from "./project6.png";
import Project7 from "./project7.png";
import Project8 from "./project8.png";
import Project9 from "./project9.1.png";
import linkedinIcon from "./linkedin.png";
import github from "./github.png";
import gmail from "./gmail.png";
import phone from "./telephone.png";
import {useRef,useEffect} from 'react';

function App() {
  const descRef=useRef(null);
  const educRef=useRef(null);
  const skillsRef=useRef(null);
  const projRef=useRef(null);
  const cnctRef=useRef(null);
//funkcija za da se ishandla koga se klikne na kopecto AboutMe da ne odnese do divot so aboutMe
  const handleAboutMeClick=()=>{
   if(descRef.current){
    descRef.current.scrollIntoView({ 
      behavior: 'smooth',
      block: 'center',
      inline: 'center' });
   }
  }
//funkcija za da se ishandla koga se klikne na kopecto MyEducation da ne odnese do divot so myEducation
  const handleEducationClick=()=>{
    if(educRef.current){
     educRef.current.scrollIntoView({ 
       behavior: 'smooth',
       block: 'center',
       inline: 'center' });
    }
   }
   const handleSkillsClick=()=>{
    if(skillsRef.current){
     skillsRef.current.scrollIntoView({ 
       behavior: 'smooth',
       block: 'center',
       inline: 'center' });
    }
   }
   const handleProjectsClick=()=>{
    if(projRef.current){
     projRef.current.scrollIntoView({ 
       behavior: 'smooth',
       block: 'center',
       inline: 'center' });
    }
   }
   const handleContactClick=()=>{
    if(cnctRef.current){
      cnctRef.current.scrollIntoView({ 
       behavior: 'smooth',
       block: 'center',
       inline: 'center' });
    }
   }
  return (
    <div className="App">
      <MyHeader handleAboutMeClick={handleAboutMeClick} handleEducationClick={handleEducationClick} handleSkillsClick={handleSkillsClick} handleProjectsClick={handleProjectsClick} handleContactClick={handleContactClick}></MyHeader>
      <MyDescription descRef={descRef}></MyDescription>
      <VisualLine></VisualLine>
      <MyEducation educRef={educRef}></MyEducation>
      <VisualLine></VisualLine>
      <MySkills skillsRef={skillsRef}></MySkills>
      <VisualLine></VisualLine>
      <MyProjects projRef={projRef}></MyProjects>
      <VisualLine></VisualLine>
      <ContactMe cnctRef={cnctRef}></ContactMe>
    </div>
  );
}
export default App;

function VisualLine(){
  return(
    <div className='line'></div>
  )
}

function MyHeader({handleAboutMeClick,handleEducationClick,handleSkillsClick,handleProjectsClick,handleContactClick}){
  useEffect(() => {
    const header = document.querySelector('.header');


    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('sticky');
          } else {
            entry.target.classList.remove('sticky');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
      observer.observe(header);

    return () => {
        observer.unobserve(header);
    };
  }, []);
  return(
    <div className='header'>

      <div className='innerheader'>
      <div className='left'>
        <p>Andrej's Portfolio</p>
        </div>
        <div className='right'>
        <div className='menu'>
          <ul>
            <li onClick={handleAboutMeClick}>About Me</li>
            <li onClick={handleEducationClick}>My education</li>
            <li onClick={handleSkillsClick}>My Skills</li>
            <li onClick={handleProjectsClick}>My Projects</li>
            <li onClick={handleContactClick}>Contact Me</li>
          </ul>
        </div>
        </div>
      </div>
     

    </div>
  )
}

function MyDescription({descRef}){
 
  return(
    <div className='desc-fullCont'>
      <div className='titleAboutMe'><h1>About Me</h1></div>
 <div className='desc-container' ref={descRef}>
      <div className='picture'>
     <img src={mojaSlika} alt='slika'/>
      </div>
      <div className='aboutMe'>
      <p>Hello, my name is Andrej Gorgiev. I'm graduate computer science engineer with a strong passion for front-end developing with intentions to become a future full stack web developer. Feel free to take a peak at my accomplishments and projects.</p>
      </div>
    </div>
    </div>
   
  )
}



function MyEducation({educRef}){
  useEffect(() => {
    const college = document.querySelector('.college');
    const academy = document.querySelector(".academy");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
      observer.observe(college);
      observer.observe(academy);
    return () => {
        observer.unobserve(college);
        observer.unobserve(academy);
    };
  }, []);
  return(
    <div className='educ-fullCont'ref={educRef}>
          <div className='titleEducation'><h1>Education</h1></div>
<div className='educ-container' >
      <div className='college'>

         <div className='ugd-pic'>
          <img src={ugdPic} height={300} width={400} alt="ugd"/>
         </div>
         <div className='descAndIcon'>
         <div className='degree-icon'>
         <img src={degreeIcon}  width={50} height={50} alt='icon'/>
          </div>
         <div className='college-desc'>
         <h3>Bachelor's degree in Computer Science</h3>
         </div>
         </div>
        
      </div>

      <div className='academy'>
      
    <div className='certificate-pic'>
      <img src={certificatePic} height={300} width={400} alt='certf'></img>
     </div>
     <div className='descAndIcon'>
      <div className='certificate-icon'>
       <img src={certificateIcon}  width={50} height={50} alt='icon'/>
     </div>
    <div className='certificate-desc'>
       <h3>8 month training course in CodeAcademy</h3>
    </div>
    </div>
    
      </div>

    </div>
    </div>
    
  )
}

function MySkills({skillsRef}){
  useEffect(()=>{
const programminglanguageBlocks=document.querySelectorAll(".block");
const softskillsBlocks=document.querySelectorAll(".sft_skills");

const observer=new IntersectionObserver((entries)=>{
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('comingDown');
    } else {
      entry.target.classList.remove('comingDown');
    }
  });
},
{threshold: 0.1,});

const secondObserver= new IntersectionObserver((entries)=>{
entries.forEach((entry)=>{
if(entry.isIntersecting){
  entry.target.classList.add("comingFromRight");
}else{
  entry.target.classList.remove("comingFromRight");
}
});
},
{threshold:0.1,});

softskillsBlocks.forEach((block)=>secondObserver.observe(block));
programminglanguageBlocks.forEach((block) => observer.observe(block));
return()=>{
  programminglanguageBlocks.forEach((block) => observer.unobserve(block));
  softskillsBlocks.forEach((block)=>secondObserver.unobserve(block));
}

  },[])
return(
  <div className='skills-container' ref={skillsRef}>
    <div className='titleSkills'><h1>Skills</h1></div>
<div className='programming-languages'>

<div className='block html'>
<img src={HTML} alt=''/>
</div>
<div className='block css'>
<img src={CSS} alt=''/>
</div>
<div className='block js'>
<img src={JS} alt=''/>
</div>
<div className='block react'>
<img src={REACT} alt=''/>
</div>
<div className='block nodeJs'>
<img src={NODEJS} alt=''/>
</div>
<div className='block PHP'>
<img src={PHP} alt=''/>
</div>
<div className='block sql'>
<img src={SQL} alt=''/>
</div>
<div className='block mongoDB'>
<img src={MONGODB} alt=''/>
</div>
<div className='block C#'>
<img src={CSharp} alt=''/>
</div>
</div>

<div className='soft-skills-fullCont'>

<div className='titleSoftSkills'><h2>Soft Skills</h2></div>
<div className='soft-skills'>
<ul>
  <li className='sft_skills'>Communication</li>
  <li className='sft_skills'>Good listener</li>
  <li className='sft_skills'>Persistent personality</li>
  <li className='sft_skills'>Creative person</li>
  <li className='sft_skills'>Adaptability</li>
  <li className='sft_skills'>Logical and critical thinking</li>
  <li className='sft_skills'>Confident in taking on leadership</li>
  <li className='sft_skills'>Keen to learn</li>
</ul>
</div>
  </div>

</div>

)
}

function MyProjects({projRef}){

const handleGithubRed=(lokacija)=>{
window.location.href=lokacija;
}

  return(
    <div className='projects-fullCont' ref={projRef}>
      <div className='titleProjects'><h1>Projects</h1></div>
      <div className='attention'><p>*click on image in order to see whole code in Github</p></div>
<div className='projects-container'>
<div className='ProjectBlock'>
<div className="imgSpace" >
<img src={Project1} alt='project'  onClick={()=>handleGithubRed("https://github.com/EmperorE6/BMICalculator")}/>
</div>
<div className='descSpace'>
  <p>A BMI calculator coded in React with two metric systems.</p>
</div>
</div>

<div className='ProjectBlock'>
<div className='imgSpace'>
<img src={Project2} alt='project'  onClick={()=>handleGithubRed("https://github.com/EmperorE6/History-Gallery")}/>
</div>
<div className='descSpace'>
<p>Gallery website with most influental historic photos from each decade.</p>
</div>
</div>

<div className='ProjectBlock'>
  <div className='imgSpace'>
<img src={Project3} alt='project'  onClick={()=>handleGithubRed("https://github.com/EmperorE6/RandomQuotesGenerator")}/>
</div>
<div className='descSpace'>
<p>Click on a button and give yourself a daily dose of motivation with my Random Quote Generator website.</p>
</div>
</div>

<div className='ProjectBlock'>
<div className='imgSpace'>
<img src={Project4} alt='project'  onClick={()=>handleGithubRed("https://github.com/EmperorE6/SimpleAJAXQuiz")}/>
</div>
<div className='descSpace'>
<p>Test your knowledge about world. Simple geography quiz using AJAX.</p>
</div>
</div>

<div className='ProjectBlock'>
<div className='imgSpace'>
<img src={Project5} alt='project'  onClick={()=>handleGithubRed("https://github.com/EmperorE6/OnlineStopwatch")}/>
</div>
<div className='descSpace'>
<p>Everyone used a stopwatch in some point of their lifes. Easy and simple but useful and necessery.</p>
</div>
</div>

<div className='ProjectBlock'>
<div className='imgSpace'>
<img src={Project6} alt='project' onClick={()=>handleGithubRed("https://github.com/EmperorE6/WeatherApp")}/>
</div>
<div className='descSpace'>
<p>Search for any city in the world and check what weather is like there in real time.</p>
</div>
</div>

<div className='ProjectBlock'>
<div className='imgSpace'>
<img src={Project7} alt='project'  onClick={()=>handleGithubRed("https://github.com/EmperorE6/CalculatorApp")}/>
</div>
<div className='descSpace'>
<p>A calculator project done with JavaScript with its basics functions.</p>
</div>
</div>

<div className='ProjectBlock'>
<div className='imgSpace'>
<img src={Project8} alt='project'  onClick={()=>handleGithubRed("https://github.com/EmperorE6/Ecommerce-Page")}/>
</div>
<div className='descSpace'>
<p>Online store for clothes shopping done with JavaScript.</p>
</div>
</div>

<div className='ProjectBlock'>
<div className='imgSpace'>
<img src={Project9} alt='project'  onClick={()=>handleGithubRed("https://github.com/EmperorE6/OnlineMarketplace")}/>
</div>
<div className='descSpace'>
<p>This is project that its still on going. An online marketplace with user authentication where you can post what you wish to sale.It is done with React/NodeJS.</p>
</div>
</div>

</div>
<div className='also'>
<p>Also give yourself freedom to explore my Github page, you will find other interesting projects that are not dislayed here. More are to come!</p>
</div>
    </div>
  )
}

function ContactMe({cnctRef}){
  const handleContactLinks=(links)=>{
    window.location.href=links;
  }
  return(
    <div className='contact-fullCont' ref={cnctRef}>
      <div className='contact-Title'><h1>Contact Me</h1></div>
    <div className='contact-container'>
<div className='myContacts'>

<div className='linkedin'>
<img src={linkedinIcon} alt='linkedin'/><span className='linkedin-text' onClick={()=>handleContactLinks("https://www.linkedin.com/in/andrej-gorgiev-4198692b5/")}>My LinkedIn Profile</span>
</div>

<div className='gmail'>
<img src={gmail} alt='gmail'/><span className='gmail-text'>andrej.gorgiev2408@gmail.com</span>
</div>


<div className='github'>
<img src={github} alt='github'/><span className='github-text' onClick={()=>handleContactLinks("https://github.com/EmperorE6")}>My Github Profile</span>
</div>

<div className='phone'>
<img src={phone} alt='phone'/><span className='phone-text'>077-614-897</span>
</div>

</div>


    </div>
    <div className='Est'>
  <div className='established-text'>
    <h3>— Established 2024 —</h3>
  </div>
</div>
    </div>
    
  )
}

import React,{useState} from 'react'
import quotes from './images/bg-pattern-quotation.svg';
import daniel from './images/image-daniel.jpg';
import jeanette from './images/image-jeanette.jpg';
import jonathan from './images/image-jonathan.jpg';
import kira from './images/image-kira.jpg';
import patrick from './images/image-patrick.jpg';
import './App.css'

function App() {

  return (
    <div className="App bg-lightgrayishblue h-screen w-screen  overflow-x-hidden" >
      <section className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 max-w-6xl mx-4 md:mx-auto my-12">
        <div className="relative bg-moderateviolet md:col-start-1 md:col-end-3 p-6 shadow-lg rounded-lg ">
          <div className="flex flex-row">
            <img src={daniel} alt="Daniel" className=" w-10 border-lightviolet rounded-full border-4"/>
            <div className="block mx-3">
            <h2 className="text-lightgray font-Barlow text-bold tracking-wide text-sm">Daniel Clifford</h2>
            <h2 className="text-lightgray font-Barlow text-bold opacity-70 tracking-wide text-sm">Verified Graduate</h2>
            </div>
          </div>
          <div className="relative flex flex-col my-1 z-30">
            <h1 className="text-white font-Barlow font-bold text-xl tracking-wide py-2">I received a job offer mid-course,and the subjects I learned were current,if not more so,in the company I joined.I honestly feel I got every penny's worth.</h1>
            <p className="text-lightgray font-Barlow font-bold text-sm tracking-widest">"I was an EMT for many years before I joined the bootcamp.I've been looking to make a transition and have heard some people who had an amazing experience here.I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter.The next 12 weeks was the best-and most grueling-time of my life.Since completing the course,I've  successfully switched careers,working as a Software Engineer at a VR startup."</p>
          </div>
          <div className="absolute top-0 right-5 md:right-20 z-0">
            <img src={quotes} alt="Quotes"/>

          </div>
        </div>
        <div className="bg-verydarkgrayishblue md:col-span-1 p-6 shadow-lg rounded-md">
        <div className="flex flex-row">
            <img src={jonathan} alt="Jonathan" className=" w-10 border-lightgray rounded-full border-4"/>
            <div className="block mx-3">
            <h2 className="text-lightgray font-Barlow text-bold tracking-wide text-sm">Jonathan Walters</h2>
            <h2 className="text-lightgray font-Barlow text-bold opacity-70 tracking-wide text-sm">Verified Graduate</h2>
            </div>
          </div>
          <div className="flex flex-col my-1">
            <h1 className="text-white font-Barlow font-bold text-xl tracking-wide py-4">The team was very supportive and kept me motivated</h1>
            <p className="text-lightgray font-Barlow font-bold text-sm tracking-widest">"I started as a total newbie with virtually no coding skills.I now know as a mobile engineer for a big company.This was one of the best investments I've made in myself."</p>
          </div>

        </div>
        <div className="bg-white md:row-start-2 md:col-start-1 md:col-end-2 p-4 shadow-lg rounded-sm">
        <div className="flex flex-row">
            <img src={jeanette} alt="Jeanette" className=" w-10 border-white rounded-full border-4"/>
            <div className="block mx-3">
            <h2 className="text-verydarkgrayishblue font-Barlow text-bold tracking-wide text-sm">Jeanette Harmon</h2>
            <h2 className="text-verydarkgrayishblue font-Barlow text-bold opacity-70 tracking-wide text-sm opacity-70">Verified Graduate</h2>
            </div>
          </div>
          <div className="flex flex-col my-1">
            <h1 className="text-verydarkgrayishblue font-Barlow font-bold text-xl tracking-wide py-4">An overall wonderful and rewarding experience</h1>
            <p className="text-verydarkgrayishblue font-Barlow font-bold text-sm tracking-widest opacity-70">"Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love."</p>
          </div>
        </div>
        <div className="bg-verydarkishblue md:col-start-2 md:col-end-4 p-4 shadow-lg rounded-md">
        <div className="flex flex-row">
            <img src={patrick} alt="Jeanette" className=" w-10 border-moderateviolet rounded-full border-4"/>
            <div className="block mx-3">
            <h2 className="text-lightgray font-Barlow text-bold tracking-wide text-sm">Patrick Abrams</h2>
            <h2 className="text-lightgray font-Barlow text-bold opacity-70 tracking-wide text-sm">Verified Graduate</h2>
            </div>
          </div>
          <div className="flex flex-col my-1">
            <h1 className="text-white font-Barlow font-bold text-xl tracking-wide py-4">Awesome teaching support from TAs who did the bootcamp themselves.Getting guidance from them and learning from their experiences was easy.</h1>
            <p className="text-lightgray font-Barlow font-bold text-sm tracking-widest">"The staff seem genuinely concerned about my progress which I find really refreshing.The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer.The standard is above the rest.You will get the personal attention you need from an incredible community of smart and amazing people."</p>
          </div>

        </div>
        <div className="bg-white md:col-start-4 md:col-end-5 md:row-start-1 md:row-end-3  p-4 shadow-lg rounded-md">
        <div className="flex flex-row">
            <img src={kira} alt="Kira" className=" w-10 border-white rounded-full border-4"/>
            <div className="block mx-3">
            <h2 className="text-verydarkgrayishblue font-Barlow text-bold tracking-wide text-sm">Kira Whittle</h2>
            <h2 className="text-verydarkgrayishblue font-Barlow text-bold opacity-70 tracking-wide text-sm opacity-70">Verified Graduate</h2>
            </div>
          </div>
          <div className="flex flex-col my-1">
            <h1 className="text-verydarkgrayishblue font-Barlow font-bold text-xl tracking-wide py-4">Such a life-changing experience.Highly recommended!</h1>
            <p className="text-verydarkgrayishblue font-Barlow font-bold text-sm tracking-widest opacity-70">"Before joining the bootcamp,I've never written a line of code.I needed some structure from professionals who can help me learn programming step by step.I was encouraged to enroll by a former student of theirs who can only say wonderful things abouy the program.
            The entire curriculum and the staffs did not disappoint.They were very hands-on and I never had to wait for assistance.
            The agile team project,in particular was outstanding.It took my learning to the next level that no tutorial could ever have.In fact,I've often  referred to it during interviews as an example of my development experience.
            It certainly helped me land a job as a full-stack developer after receiving multiple offers.100%  recommend! "</p>
          </div>

        </div>

      </section>
    </div>
  );
}
 
export default App;

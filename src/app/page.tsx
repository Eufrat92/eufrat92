"use client"
import Image from "next/image"
import Inter, { Londrina_Sketch } from "next/font/google"
import Link from "next/link"
import { useState } from "react"
import { useEffect} from 'react';

export default function Main() {
  return <>
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen w-screen no-scrollbar">
      <Sidebar/>
      <div className="snap-always snap-center">
        <About/>
      </div>
      <div className="snap-always snap-center">
        <Portofolio/>
      </div>
      <div className="snap-always snap-center">
        <Skills/>
      </div>
      <div className="snap-always snap-center"  >
        <Contact/>
      </div>
    </div>
  </>
}

function About() {
  return (
    <div className="whitespace-nowrap h-screen w-screen bg-[#575757]" id="about">
      <div className="pl-[350px] pt-[110px]">
        <p className="text-[18px] tracking-[6px] font-light text-[#A2E4B0]">ABOUT ME</p>
        <div className="flex flex-row mt-[-4]">
          <p className="text-[72px] font-bold">Hi, Im</p><p className="text-[72px] font-bold text-[#A2E4B0] pl-4">Repat Dwi Gunanda</p>
        </div>
        <p className="text-[36px] font-semibold mt-[-8px]">Frontend Developer</p>
        <p className="text-[20px] font-normal mt-4">
          I am capable of creating and developing <br/>
          mobile applications and web, especially <br/>
          on the frontend. I also have an interest <br /> 
          in game development and 3D modelling.
        </p>
        <Link rel="download" href="https://drive.google.com/drive/folders/10_fGNfMo3wFBek1dZwofJmSQT1CTn_98" className="w-[170px] h-[45px] bg-[rgb(162,228,176)] rounded-[15px] mt-8 flex justify-center items-center hover:border-2 border-black">
          <p className="text-[20px] text-[#575757]">Download CV</p>
        </Link>
      </div>
    </div>
  )
}

function Portofolio() {
  return (
    <div className="whitespace-nowrap h-screen w-screen bg-[#575757] z-50" id="portofolio">
      <div className="pl-[350px] pt-[110px]">
        <p className="text-[18px] tracking-[6px] font-light text-[#A2E4B0]">PORTOFOLIO</p>
        <div className="flex flex-row mt-[-4]">
          <p className="text-[72px] font-bold">My Recent</p><p className="text-[72px] font-bold text-[#A2E4B0] pl-4">Project</p>
        </div>
        <div className="w-[900px] h-[400px] bg-[#4D4D4D] rounded-[25px] drop-shadow-[2px_2px_3px_#000000] mt-2 p-4 flex-row flex">
          <div className="ml-2">
            <Image src="/images/sekolahku.png" alt="profile" width={160} height={180} className="rounded-[5px]"/>
          </div>
          <div className="mt-2 ml-4">
            <p className="text-[36px] font-semibold text-[#A2E4B0]">Sekolahku</p>
            <p className="text-[20px] font-normal mt-4">
              Sekolahku is a mobile and desktop-based applications that combines <br/> 
              three different applications. This applications will remind students of<br/>
              their lesson schedule, picket schedule, assignments, and morning <br/> 
              habituation schedule. It also has features for student attendance and<br/>
              smart trash bins.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Skills() {
  return (
    <div className="whitespace-nowrap h-screen w-screen bg-[#575757] z-50" id="skills">
      <div className="pl-[350px] pt-[110px]">
        <p className="text-[18px] tracking-[6px] font-light text-[#A2E4B0]">SKILLS</p>
        <div className="flex flex-row mt-[-4]">
          <p className="text-[72px] font-bold">Things Im</p><p className="text-[72px] font-bold text-[#A2E4B0] pl-4">Good At</p>
        </div>
        <div className="flex flex-row mt-4">
          <div className="w-[110px] h-[110px] p-4 bg-[#4D4D4D] mt-4 rounded-[25px] drop-shadow-[2px_2px_3px_#000000] flex justify-center items-center">
            <Image src="/images/html.png" alt="profile" width={80} height={80} />
          </div>
          <div className="w-[110px] h-[110px] p-2 bg-[#4D4D4D] ml-12 mt-4 rounded-[25px] drop-shadow-[2px_2px_3px_#000000] flex justify-center items-center">
            <Image src="/images/css.png" alt="profile" width={85} height={85} />
          </div>
          <div className="w-[110px] h-[110px] p-4 bg-[#4D4D4D] ml-12 mt-4 rounded-[25px] drop-shadow-[2px_2px_3px_#000000] flex justify-center items-center">
            <Image src="/images/js.png" alt="profile" width={80} height={80} />
          </div>
          <div className="w-[110px] h-[110px] p-4 bg-[#4D4D4D] ml-12 mt-4 rounded-[25px] drop-shadow-[2px_2px_3px_#000000] flex justify-center items-center">
            <Image src="/images/flutter.png" alt="profile" width={80} height={80} />
          </div>
          <div className="w-[110px] h-[110px] p-4 bg-[#4D4D4D] ml-12 mt-4 rounded-[25px] drop-shadow-[2px_2px_3px_#000000] flex justify-center items-center">
            <Image src="/images/blender.png" alt="profile" width={80} height={80} />
          </div>
        </div>
        <p className="text-[20px] font-normal mt-12">
        The programming languages I am good at are Dart and JavaScript,<br/>
        Im also able to use frameworks such as next js, flutter, and tailwind.<br/>
        I can also do 3D modelling using 3D blender.</p>
      </div>
    </div>
  )
}

function Contact() {
  return (
    <div className="whitespace-nowrap h-screen w-screen bg-[#575757]" id="contact">
      <div className="pl-[350px] pt-[110px]">
        <p className="text-[18px] tracking-[6px] font-light text-[#A2E4B0]">CONTACT</p>
        <div className="flex flex-row mt-[-4]">
          <p className="text-[72px] font-bold">My</p><p className="text-[72px] font-bold text-[#A2E4B0] pl-4">Personal Contact</p>
        </div>
        <div className="w-[250px] h-[35px] bg-white border-black border-3 rounded-[25px] mt-8 justify-start flex items-center">
          <Image src="/images/hp.png" alt="profile" className="rounded-[100px] ml-[-1px]" width={35} height={35} />
          <p className="text-black font-semibold text-[18px] ml-2">+62895374821794</p>
        </div>
        <div className="w-[250px] h-[35px] bg-white border-black border-3 rounded-[25px] mt-6 justify-start flex items-center">
          <Image src="/images/github.png" alt="profile" className="rounded-[100px] ml-[-1px]" width={35} height={35} />
          <p className="text-black font-semibold text-[18px] ml-2">Eufrat92</p>
        </div>
        <div className="w-[250px] h-[35px] bg-white border-black border-3 rounded-[25px] mt-6 justify-start flex items-center">
          <Image src="/images/email.png" alt="profile" className="rounded-[100px] ml-[-1px]" width={35} height={35} />
          <p className="text-black font-semibold text-[18px] ml-2">@dwirepat</p>
        </div>
        <div className="w-[250px] h-[35px] bg-white border-black border-3 rounded-[25px] mt-6 justify-start flex items-center">
          <Image src="/images/linkedin.png" alt="profile" className="rounded-[100px] ml-[-1px]" width={35} height={35} />
          <p className="text-black font-semibold text-[18px] ml-2">Repat Dwi Gunanda</p>
        </div>
      </div>
    </div>
  )
}

function Sidebar() {
  return (
    <aside className="fixed">
      <div className="h-screen w-[235px] flex items-center pt-12 flex-col drop-shadow-[3px_3px_3px_#000000] bg-[#4d4d4d]">
        <div className="h-[155px] w-[155px] bg-white rounded-[100px] justify-centern p-1">
          <Image src="/images/profile.jpeg" alt="profile" className="rounded-[100px]" width={150} height={150} />
        </div>
        <div className=" mt-[5px] flex items-center flex-col">
        <Link href="#about" id="about-button" className="mt-[35px] rounded-[15px] flex justify-start p-0 hover:border-2 border-black">
          <div className="h-[40px] w-[40px] flex items-center justify-center rounded-tl-[15px] rounded-bl-[15px]">
            <Image src="/images/info-white.png" alt="profile" width={25} height={25}/>
          </div>
          <div className="h-[40px] w-[115px] justify-center items-center flex rounded-tr-[15px] rounded-br-[15px]">
            <p>About me</p>
          </div>
        </Link>
        <Link href="#portofolio" id="portofolio-button" className="mt-[20px] rounded-[15px] flex justify-start p-0 hover:border-2 border-black">
          <div className="h-[40px] w-[40px] flex items-center justify-center rounded-tl-[15px] rounded-bl-[15px]">
            <Image src="/images/docs-white.png" alt="profile" width={25} height={25}/>
          </div>
          <div className="h-[40px] w-[115px] justify-center items-center flex rounded-tr-[15px] rounded-br-[15px]">
            <p>Portofolio</p>
          </div>
        </Link>
        <Link href="#skills" id="skills-button" className="mt-[20px] rounded-[15px] flex justify-start p-0 hover:border-2 border-black">
          <div className="h-[40px] w-[40px] flex items-center justify-center rounded-tl-[15px] rounded-bl-[15px]">
            <Image src="/images/skills-white.png" alt="profile" width={25} height={25}/>
          </div>
          <div className="h-[40px] w-[115px] justify-center items-center flex rounded-tr-[15px] rounded-br-[15px]">
            <p>Skills</p>
          </div>
        </Link>
        <Link href="#contact" id="contact-button" className="mt-[20px] rounded-[15px] flex justify-start p-0 hover:border-2 border-black">
          <div className="h-[40px] w-[40px] flex items-center justify-center rounded-tl-[15px] rounded-bl-[15px]">
            <Image src="/images/contact-white.png" alt="profile" width={30} height={30}/>
          </div>
          <div className="h-[40px] w-[115px] justify-center items-center flex rounded-tr-[15px] rounded-br-[15px]">
            <p>Contact</p>
          </div>
        </Link>
        </div>
      </div>
    </aside>
  )
}
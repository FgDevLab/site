'use client';
import { ApplicationIcon, BrainIcon, DartIcon, WordpressIcon, GolangIcon, JavascriptIcon, PythonIcon, ArrowRightIcon, WpIcon, PhpIcon, JavaIcon, DotnetIcon } from "@/components/icons";
import React, { useState } from "react";
import TradingGif from "@/assets/trading.gif";
import BankingGif from "@/assets/banking.gif";
import ArchiveGif from "@/assets/archive.gif";
import HealthGif from "@/assets/health.gif";
import ParticleGif from "@/assets/particle.gif";
import Image from "next/image";
import { Input, Textarea } from "@nextui-org/input";
import HikImage from "@/assets/hik.png"
import IndodaxImage from "@/assets/indodax.png"
import IdxImage from "@/assets/idx.png"
import MojokertoImage from "@/assets/mojokerto.png"
import InattiImage from "@/assets/inatti.png"
import { CircularProgress } from "@nextui-org/progress";
import axios from "axios"

export default function Home() {

  const services = [
    {
      title: "Application Development",
      description: "Build large scalable systems to support your business operations in every platforms.",
      icon: <ApplicationIcon size={60} />
    },
    {
      title: "AI and Machine Learning",
      description: 'Implement ML/AI for faster and smarter autopilot problem solving solutions.',
      icon: <BrainIcon size={60} />
    },
    {
      title: "Wordpress",
      description: "A Fast solution for your business Go-Online with a low launch resource.",
      icon: <WpIcon size={60} />
    },
  ]

  const skills = [
    {
      icon: <JavascriptIcon size={40} />
    },
    {
      icon: <PythonIcon size={40} />
    },
    {
      icon: <DartIcon size={50} />
    },
    {
      icon: <PhpIcon size={50} />
    },
    {
      icon: <GolangIcon size={45} />
    },
    {
      icon: <WordpressIcon size={35} />
    },
  ]

  const [loading, setLoading] = useState(false)

  const [name, setName] = React.useState("Jhon Doe");
  const [email, setEmail] = React.useState("jhondoe@mail.com");
  const [description, setDescription] = React.useState("i want build a...");

  const validateEmail = (v: string) => {
    if (!v) return true
    return v.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i) ? false : true
  }

  const validateName = (v: string) => {
    if (!v) return true
  }

  const validateDescription = (v: string) => {
    if (!v) return true
  }

  const isInvalid = React.useMemo(() => {
    return {
      name: validateName(name),
      email: validateEmail(email),
      description: validateDescription(description)
    }
  }, [name, email, description]);

  const submit = async () => {
    if (isInvalid.name || isInvalid.email || isInvalid.description) return
    setLoading(true)
    try {
      const data = new FormData()
      data.append("name", name)
      data.append("email", email)
      data.append("message", description)
      data.append("access_key", "b21068f6-8e0a-46b5-b10e-78caf3342d0d")
      await axios.post("https://api.web3forms.com/submit", data)
      window.location.reload()
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }

  return (
    <React.Fragment>
      <section className="w-full flex">
        <div className="absolute z-0 w-full h-[78vh] blur-2xl bg-gradient-to-tr from-[#000000] from-50% via-[#1a0325] via-80% to-[#0a0337] to-100%">
        </div>
        <div className="w-full h-[78vh] flex justify-center items-center text-center flex-col z-10">
          <span className="text-4xl leading-normal md:text-6xl font-light md:leading-normal">Empower <span className="gradient-text">organization</span> <br /> With a right solution</span>
          <br />
          <br />
          <span className="md:text-base text-sm max-w-xs md:max-w-2xl">Make the best and useful tools based on your needs. We deliver high-quality software solution for <span className="underline underline-offset-4 cursor-pointer">various industrial sectors </span>over years.</span>
          <br />
          <br />
          <div id="skills"  className="flex justify-center items-center flex-row gap-3">
            <a href="#contact" className="cursor-pointer px-3 font-medium flex flex-row items-center justify-center py-1.5 rounded-xl text-sm border-2 border-[#432f80] bg-gradient-to-b from-[#110d1e] to-[#432f80]">
              Get Free Talk
              <ArrowRightIcon className="ml-2" />
            </a>
          </div>
        </div>
      </section>
      <section  className="flex flex-col items-center gap-16 justify-start">
        <span  className="max-w-xs md:max-w-5xl text-base text-center">Solving problem with various technologies for all needs.</span>
        <div className="w-full max-w-xs md:max-w-5xl grid grid-cols-2 md:grid-cols-6 gap-12">
          {
            skills.map((item) => (
              <div className="flex flex-row justify-start md:justify-center gap-5 md:gap-4 w-full items-center">
                {item.icon}
              </div>
            ))
          }
        </div>
        <div className="w-full md:max-w-5xl max-w-xs grid md:grid-cols-3 gap-7">
          {
            services.map((item) => (
              <div className="flex px-6 py-8 border-t-2 border-x border-[#E5E7EB]/10 flex-col rounded-lg bg-gradient-to-r from-[#151617] from-10% via-[#080808] via-50% to-[#151617] to-100% " >
                {item.icon}
                <span className="text-base font-medium text-white">{item.title}</span>
                <span className="text-xs font-normal text-[#d8d8d8] mt-2">{item.description}</span>
              </div>
            ))
          }
        </div>
      </section>
      <br id="works" />
      <br />
      <br />
      <br />
      <section className="flex flex-col items-center md:gap-16 justify-start">
        <span className="max-w-xs md:max-w-5xl text-base text-center">WE WORK WITH VARIOUS INDUSTRY PLAYER OVER YEARS</span>
        <br className="flex md:hidden" />
        <div className="border-b-3 md:border-3 border-[#CC76FF0F] bg-gradient-to-r from-[#0a090c] from-10% via-[#1d181e] via-50% to-[#0a090c] to-100% w-full items-center grid md:grid-cols-2 md:rounded-2xl md:h-[60vh] md:max-w-5xl">
          <div className="flex w-full flex-col justify-center items-center">
            <Image className="invert contrast-125 brightness-100 grayscale" src={TradingGif} alt="Trading GIF" height={320} />
          </div>
          <div className="flex p-12 md:p-0 md:pr-14 flex-col justify-start items-start">
            <h1 className="text-3xl font-medium">Indodax</h1>
            <span className="px-3 font-medium py-1.5 rounded-xl text-sm border-2 mt-4 border-[#573254] bg-gradient-to-b from-[#1a181c] to-[#573254]">
              Crypto
            </span>
            <Image className="grayscale mt-6" src={IndodaxImage} alt="Trading GIF" height={20} />
            <span className="mt-8 text-gray-300 md:text-white text-sm md:text-base">Building Broker/Third-Party Cryptocurrency Trading Platform For Indodax Indonesia.</span>
          </div>
        </div>
        <div className="border-b-3 md:border-3 border-[#CC76FF0F] bg-gradient-to-r from-[#0a090c] from-10% via-[#1d181e] via-50% to-[#0a090c] to-100% w-full items-center grid md:grid-cols-2 md:rounded-2xl md:h-[60vh] md:max-w-5xl">
          <div className="flex p-12 md:p-0 md:pl-14 flex-col justify-start items-start">
            <h1 className="text-3xl font-medium">IDX Portal</h1>
            <span className="px-3 font-medium py-1.5 rounded-xl text-sm border-2 mt-4 border-[#573254] bg-gradient-to-b from-[#1a181c] to-[#573254]">
              Instution
            </span>
            <Image className="grayscale mt-7" src={IdxImage} alt="Trading GIF" height={50} />
            <span className="mt-8 text-gray-300 md:text-white text-sm md:text-base">Renewal And Improvement Of Indonesian Stock Exchange Internal Core Administration Portal for securities firm and listed companies.</span>
          </div>
          <div className="flex w-full flex-col justify-center items-center">
            <Image className="invert contrast-125 brightness-100 grayscale" src={ArchiveGif} alt="Trading GIF" height={320} />
          </div>
        </div>
        <div className="border-b-3 md:border-3 border-[#CC76FF0F] bg-gradient-to-r from-[#0a090c] from-10% via-[#1d181e] via-50% to-[#0a090c] to-100% w-full items-center grid md:grid-cols-2 md:rounded-2xl md:h-[60vh] md:max-w-5xl">
          <div className="flex w-full flex-col justify-center items-center">
            <Image className="invert contrast-125 brightness-100 grayscale" src={BankingGif} alt="Trading GIF" height={320} />
          </div>
          <div className="flex p-12 md:p-0 md:pr-14 flex-col justify-start items-start">
            <h1 className="text-3xl font-medium">Core Banking Systems</h1>
            <span className="px-3 font-medium py-1.5 rounded-xl text-sm border-2 mt-4 border-[#573254] bg-gradient-to-b from-[#1a181c] to-[#573254]">
              Finance
            </span>
            <Image className="grayscale mt-4" src={HikImage} alt="Trading GIF" height={60} />
            <span className="mt-8 text-gray-300 md:text-white text-sm md:text-base">Digitalization of the BPR HIK GROUP banking system. building a strong banking system to support large-scale transactions.</span>
          </div>
        </div>
        <div className="border-b-3 md:border-3 border-[#CC76FF0F] bg-gradient-to-r from-[#0a090c] from-10% via-[#1d181e] via-50% to-[#0a090c] to-100% w-full items-center grid md:grid-cols-2 md:rounded-2xl md:h-[60vh] md:max-w-5xl">
          <div className="flex p-12 md:p-0 md:pl-14 flex-col justify-start items-start">
            <h1 className="text-3xl font-medium">Pakmo Mojokerto</h1>
            <span className="px-3 font-medium py-1.5 rounded-xl text-sm border-2 mt-4 border-[#573254] bg-gradient-to-b from-[#1a181c] to-[#573254]">
              Goverment
            </span>
            <Image className="grayscale mt-4" src={MojokertoImage} alt="Trading GIF" height={60} />
            <span className="mt-8 text-gray-300 md:text-white text-sm md:text-base">Indonesia's First self-handling Online Civil Registration System for the Mojokerto City Government.</span>
          </div>
          <div className="flex w-full flex-col justify-center items-center">
            <Image className="invert contrast-125 brightness-90 grayscale" src={ArchiveGif} alt="Trading GIF" height={320} />
          </div>
        </div>
        <div className="md:border-3 border-[#CC76FF0F] bg-gradient-to-r from-[#0a090c] from-10% via-[#1d181e] via-50% to-[#0a090c] to-100% w-full items-center grid md:grid-cols-2 md:rounded-2xl md:h-[60vh] md:max-w-5xl">
          <div className="flex w-full flex-col justify-center items-center">
            <Image className="invert contrast-125 brightness-90 grayscale" src={HealthGif} alt="Trading GIF" height={320} />
          </div>
          <div className="flex p-12 md:p-0 md:pr-14 flex-col justify-start items-start">
            <h1 className="text-3xl font-medium">Inatti Injabar</h1>
            <span className="px-3 font-medium py-1.5 rounded-xl text-sm border-2 mt-4 border-[#573254] bg-gradient-to-b from-[#1a181c] to-[#573254]">
              Healthcare
            </span>
            <Image className="grayscale mt-7" src={InattiImage} alt="Trading GIF" height={40} />
            <span className="mt-8 text-gray-300 md:text-white text-sm md:text-base">In the Covid-19 era, fast access to medical services is really needed. We built an online Covid-19 testing and telepharmacy service system for society that has handled thousands of services per month.</span>
          </div>
        </div>
      </section>
      <br />
      <br id="contact" />
      <br />
      <section className="w-full flex">
        <div className="absolute z-0 w-full sm:h-[100vh] blur-2xl bg-gradient-to-br from-[#000000] from-50% via-[#1a0325] via-80% to-[#0a0337] to-100%">
        </div>
        <div className="w-full sm:h-[100vh] flex justify-center items-center text-center flex-col z-10">
          <div className="flex gap-5 text-start  flex-col md:border-1 p-8 border-[#384553] w-full items-start md:rounded-2xl md:max-w-5xl bg-gradient-to-r from-[#14151c] from-10% via-[#0c0c0c] via-50% to-[#14151c] to-100%">
            <span className="text-2xl font-medium">Let’s Scale Together</span>
            <span>Join leading industry team accelerating their growth with us.</span>
            <br />
            <div className="w-full grid md:grid-cols-2 gap-4">
              <Input
                isInvalid={isInvalid.name}
                value={name}
                color={isInvalid.name ? "secondary" : "default"}
                errorMessage="Please enter your name"
                variant="bordered" label="Name*"
                onValueChange={setName}
              />
              <Input isInvalid={isInvalid.email}
                value={email}
                color={isInvalid.email ? "secondary" : "default"}
                errorMessage="Please enter a valid email"
                variant="bordered" label="Name*"
                onValueChange={setEmail} />
            </div>
            <Textarea
              isInvalid={isInvalid.description}
              value={description}
              color={isInvalid.description ? "secondary" : "default"}
              errorMessage="Please enter description"
              onValueChange={setDescription}
              variant="bordered" minRows={6} maxRows={6} placeholder="Please explain your idea in detail (Business model, Timeline, Budget, etc.)*" />
            <br />
            <div onClick={() =>
              submit()
            } className="cursor-pointer w-full px-4 font-medium flex flex-row items-center justify-center py-2 rounded-xl text-sm border-2 border-[#432f80] bg-gradient-to-b from-[#110d1e] to-[#432f80]">
              {
                loading ? <CircularProgress size="sm" aria-label="Loading..." /> : (
                  <>
                    Submit
                    <ArrowRightIcon size={20} className="ml-2" />
                  </>
                )
              }
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

import { ApplicationIcon, BlockchainIcon, BrainIcon, DartIcon, WordpressIcon, GolangIcon, JavascriptIcon, PythonIcon, SolidityIcon, ArrowRightIcon, WpIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";
import React from "react";
import TradingGif from "@/assets/trading.gif";
import BankingGif from "@/assets/banking.gif";
import ArchiveGif from "@/assets/archive.gif";
import HealthGif from "@/assets/health.gif";
import Image from "next/image";
import { Input, Textarea } from "@nextui-org/input";
import HikImage from "@/assets/hik.png"
import IdxImage from "@/assets/idx.png"
import MojokertoImage from "@/assets/mojokerto.png"
import InattiImage from "@/assets/inatti.png"

export default function Home() {

  const services = [
    {
      title: "Application Development",
      description: "Build systems to support your business operations with applications in all platforms.",
      icon: <ApplicationIcon size={60} />
    },
    {
      title: "AI and Machine Learning",
      description: 'Implement ML/AI for faster and smarter problem solving solutions for your needs',
      icon: <BrainIcon size={60} />
    },
    {
      title: "Wordpress",
      description: "A Fast solution for your business Go-Online with a small cost.",
      icon: <WpIcon size={60} />
    },
  ]

  const skills = [
    {
      name: 'Javascript',
      icon: <JavascriptIcon size={40} />
    },
    {
      name: 'Python',
      icon: <PythonIcon size={40} />
    },
    {
      name: 'Golang',
      icon: <GolangIcon size={40} />
    },
    {
      name: 'Dart',
      icon: <DartIcon size={40} />
    },
    {
      name: 'Wordpress',
      icon: <WordpressIcon size={40} />
    },
  ]

  return (
    <React.Fragment>
      <section className="w-full flex">
        <div className="absolute z-0 w-full h-[78vh] blur-2xl bg-gradient-to-tr from-[#000000] from-50% via-[#1a0325] via-80% to-[#0a0337] to-100%">
        </div>
        <div className="w-full h-[78vh] flex justify-center items-center text-center flex-col z-10">
          <span className="text-4xl leading-normal md:text-6xl font-light md:leading-normal">Empower <span className="gradient-text">organization</span> <br /> With a right solution</span>
          <br />
          <br />
          <span className="md:text-base text-sm max-w-md md:max-w-2xl">Make the best and useful tools based on your needs. We deliver high-quality software solution for <span className="underline underline-offset-4 cursor-pointer">every industrial sectors </span>over years.</span>
          <br />
          <br />
          <div className="flex justify-center items-center flex-row gap-3">
            <a href="#contact" className="cursor-pointer px-3 font-medium flex flex-row items-center justify-center py-1.5 rounded-xl text-sm border-2 border-[#432f80] bg-gradient-to-b from-[#110d1e] to-[#432f80]">
              Get Free Talk
              <ArrowRightIcon className="ml-2" />
            </a>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center gap-16 justify-start">
        <span className="max-w-sm md:max-w-5xl text-base text-center">Solving problem with most advanced technologies for all needs.</span>
        <div className="w-full max-w-sm md:max-w-5xl grid grid-cols-2 md:grid-cols-5 gap-12">
          {
            skills.map((item) => (
              <div className="flex flex-row justify-start md:justify-center gap-7 md:gap-4 w-full items-center">
                {item.icon}
                <span>{item.name}</span>
              </div>
            ))
          }
        </div>
        <div className="w-full md:max-w-5xl max-w-md grid md:grid-cols-3 gap-7">
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
      <section className="flex flex-col items-center gap-16 justify-start">
      <span className="max-w-sm md:max-w-5xl text-base text-center">WE WORK WITH MAJOR INDUSTRIAL PLAYER OVER YEARS</span>
        <div className="border-3 border-[#CC76FF0F] bg-gradient-to-r from-[#0a090c] from-10% via-[#1d181e] via-50% to-[#0a090c] to-100% w-full items-center grid md:grid-cols-2 rounded-2xl md:h-[60vh] md:max-w-5xl max-w-md">
          <div className="flex p-12 md:p-0 md:pl-14 flex-col justify-start items-start">
            <h1 className="text-3xl font-medium">IDX Portal</h1>
            <span className="px-3 font-medium py-1.5 rounded-xl text-sm border-2 mt-4 border-[#573254] bg-gradient-to-b from-[#1a181c] to-[#573254]">
              Instution
            </span>
            <Image className="grayscale mt-7" src={IdxImage} alt="Trading GIF" height={50} />
            <span className="mt-8 text-base">Scale’s suite of dataset management, testing, model evaluation, and model comparison tools enable you to “label what matters.” Maximize the value of your labeling budget by identifying the highest value data to label, even without ground truth labels.</span>
          </div>
          <div className="flex w-full flex-col justify-center items-center">
            <Image className="invert contrast-125 brightness-100 grayscale" src={TradingGif} alt="Trading GIF" height={320} />
          </div>
        </div>
        <div className="border-3 border-[#CC76FF0F] bg-gradient-to-r from-[#0a090c] from-10% via-[#1d181e] via-50% to-[#0a090c] to-100% w-full items-center grid md:grid-cols-2 rounded-2xl md:h-[60vh] md:max-w-5xl max-w-md">
          <div className="flex w-full flex-col justify-center items-center">
            <Image className="invert contrast-125 brightness-100 grayscale" src={BankingGif} alt="Trading GIF" height={320} />
          </div>
          <div className="flex p-12 md:p-0 md:pr-14 flex-col justify-start items-start">
            <h1 className="text-3xl font-medium">Sharia core-banking systems</h1>
            <span className="px-3 font-medium py-1.5 rounded-xl text-sm border-2 mt-4 border-[#573254] bg-gradient-to-b from-[#1a181c] to-[#573254]">
              Finance
            </span>
            <Image className="grayscale mt-4" src={HikImage} alt="Trading GIF" height={60} />
            <span className="mt-8 text-base">Scale’s suite of dataset management, testing, model evaluation, and model comparison tools enable you to “label what matters.” Maximize the value of your labeling budget by identifying the highest value data to label, even without ground truth labels.</span>
          </div>
        </div>
        <div className="border-3 border-[#CC76FF0F] bg-gradient-to-r from-[#0a090c] from-10% via-[#1d181e] via-50% to-[#0a090c] to-100% w-full items-center grid md:grid-cols-2 rounded-2xl md:h-[60vh] md:max-w-5xl max-w-md">
          <div className="flex p-12 md:p-0 md:pl-14 flex-col justify-start items-start">
            <h1 className="text-3xl font-medium">Pakmo Mojokerto</h1>
            <span className="px-3 font-medium py-1.5 rounded-xl text-sm border-2 mt-4 border-[#573254] bg-gradient-to-b from-[#1a181c] to-[#573254]">
              Goverment
            </span>
            <Image className="grayscale mt-4" src={MojokertoImage} alt="Trading GIF" height={60} />
            <span className="mt-8 text-base">Scale’s suite of dataset management, testing, model evaluation, and model comparison tools enable you to “label what matters.” Maximize the value of your labeling budget by identifying the highest value data to label, even without ground truth labels.</span>
          </div>
          <div className="flex w-full flex-col justify-center items-center">
            <Image className="invert contrast-125 brightness-90 grayscale" src={ArchiveGif} alt="Trading GIF" height={320} />
          </div>
        </div>
        <div className="border-3 border-[#CC76FF0F] bg-gradient-to-r from-[#0a090c] from-10% via-[#1d181e] via-50% to-[#0a090c] to-100% w-full items-center grid md:grid-cols-2 rounded-2xl md:h-[60vh] md:max-w-5xl max-w-md">
          <div className="flex w-full flex-col justify-center items-center">
            <Image className="invert contrast-125 brightness-90 grayscale" src={HealthGif} alt="Trading GIF" height={320} />
          </div>
          <div className="flex p-12 md:p-0 md:pr-14 flex-col justify-start items-start">
            <h1 className="text-3xl font-medium">Inatti Injabar</h1>
            <span className="px-3 font-medium py-1.5 rounded-xl text-sm border-2 mt-4 border-[#573254] bg-gradient-to-b from-[#1a181c] to-[#573254]">
              Healthcare
            </span>
            <Image className="grayscale mt-7" src={InattiImage} alt="Trading GIF" height={40} />
            <span className="mt-8 text-base">Scale’s suite of dataset management, testing, model evaluation, and model comparison tools enable you to “label what matters.” Maximize the value of your labeling budget by identifying the highest value data to label, even without ground truth labels.</span>
          </div>
        </div>
      </section>
      <br />
      <br id="contact" />
      <br />
      <section className="w-full flex">
        <div className="absolute z-0 w-full h-[100vh] blur-2xl bg-gradient-to-br from-[#000000] from-50% via-[#1a0325] via-80% to-[#0a0337] to-100%">
        </div>
        <div className="w-full h-[100vh] flex justify-center items-center text-center flex-col z-10">
          <div className="flex gap-4 text-start max-w-md flex-col border-1 p-8 border-[#384553] w-full items-start rounded-2xl md:max-w-5xl bg-gradient-to-r from-[#14151c] from-10% via-[#0c0c0c] via-50% to-[#14151c] to-100%">
            <span className="text-2xl font-medium">Let’s Scale Together</span>
            <span>Join leading industrial teams accelerating their growth with us.</span>
            <br />
            <div className="w-full grid md:grid-cols-2 gap-4">
              <Input variant="bordered" label="Name*" />
              <Input variant="bordered" label="Email*" />
            </div>
            <Textarea variant="bordered" minRows={6} maxRows={6} placeholder="Please explain your idea in detail (Business model, Timeline, Budget, etc.)*" />
            <br />
            <div className="cursor-pointer px-4 font-medium flex flex-row items-center justify-center py-2 rounded-xl text-sm border-2 border-[#432f80] bg-gradient-to-b from-[#110d1e] to-[#432f80]">
              Submit
              <ArrowRightIcon size={20} className="ml-2" />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

import Link from "next/link";

import { GitHub, Linkedin, ArrowUp } from "react-feather";

export default function About() {
  return (
    <main className="">
      {/* hero */}

      <div className="pt-72 pb-48 mb-16">
        <div className="text-center">
          <h1 className="text-9xl pb-14 " style={{ fontFamily: "lora" }}>
            Hi! I&apos;m Sabrina...
          </h1>
          <h3 className="text-2xl ">
            ...and this is my portfolio where you can get a peak into
            <br />
            my journey studying Frontend Development and UI/UX Design at KEA
          </h3>
        </div>
      </div>
      <div
        className="
      flex 
      flex-row 
      justify-evenly
      py-20
      text-center 
      items-start    
      border-t-2 
      border-b-2
      border-solid 
      border-emerald-900 
      border-opacity-50
      space-x-14"
      >
        <div className="space-y-6">
          <h3 className="text-4xl">Connect</h3>
          <p className="text-3xl">
            <Link href="https://www.linkedin.com/in/sabrinaos/">
              /li/sabrinaos
            </Link>
          </p>
        </div>
        <div className="space-y-6">
          <h3 className="text-4xl">Email me</h3>
          <p className="text-3xl">sabrinaos@outlook.dk</p>
        </div>
        <div className="space-y-6">
          <h3 className="text-4xl">Call me</h3>
          <p className="text-3xl">+45 5368 8115</p>
        </div>
      </div>

      <embed
        src="/CV.2023.pdf"
        type="application/pdf"
        width="100%"
        height="600px"
      />
    </main>
  );
}

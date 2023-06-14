import Image from "next/image";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </div>
      </div>

      <div className="relative mb-28 flex place-items-center before:absolute before:h-[1000px] before:w-[2000px] before:-translate-x-3/4 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[300px] after:w-[300px] after:translate-x-1/3 after:bg-gradient-conic after:from-buccaneer-200 after:via-buccaneer-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-buccaneer-700 before:dark:opacity-10 after:dark:from-bucaneer-900 after:dark:via-bucaneer-950 after:dark:opacity-40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/salience_logo.png"
          alt="Salience Logo"
          width={400}
          height={100}
          priority
        />
      </div>

      <div className="">
        <h2 className="text-center text-3xl mb-10 text-buccaneer-200">
          Our Products
        </h2>
        <div className="mb-32 w-3/4 mx-auto grid gap-4 justify-center text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
          <ProductCard
            title="Doppler"
            description="White Label Influencer AI Chatbot"
            byline="Join waitlist!"
          />
          <ProductCard
            title="JurisAI"
            description="Legal Support Professionals Workflow Tool"
            byline="Coming Soon!"
          />
          <ProductCard
            title="RNote.ai"
            description="Registered Nurse Workflow Tool"
            byline="Coming Soon!"
          />
        </div>
      </div>
    </main>
  );
}

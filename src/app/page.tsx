"use client"
import { loadAll } from "@tsparticles/all";
import { ISourceOptions, tsParticles } from "@tsparticles/engine";
import Image from "next/image";

export default function Home() {
  async function loadParticles(options: ISourceOptions) {
    await loadAll(tsParticles);
    await tsParticles.load({ id: "tsparticles", options });
  }

  const configs = {
    particles: {
      stroke: {
        width: 5,
        color: {
          value: [
            "#5bc0eb",
            "#fde74c",
            "#9bc53d",
            "#e55934",
            "#fa7921",
            "#2FF3E0",
            "#F8D210",
            "#FA26A0",
            "#F51720"
          ]
        }
      },
      shape: {
        type: "square",
        options: {
          square: {
            fill: false
          }
        }
      },
      rotate: {
        value: 0,
        direction: "counter-clockwise",
        animation: {
          enable: true,
          speed: 2,
          sync: true
        }
      },
      size: {
        value: { min: 1, max: 500 },
        animation: {
          enable: true,
          startValue: "min",
          speed: 60,
          sync: true,
          destroy: "max"
        }
      }
    },
    background: {
      color: "#000"
    },
    emitters: {
      direction: "top",
      position: {
        y: 50,
        x: 50
      },
      rate: {
        delay: 1,
        quantity: 1
      }
    }
  };
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  loadParticles(configs as any);
  return (
    <main className="relative min-h-screen">
      <div
        id="tsparticles"
        className="absolute inset-0 z-0 blur"
      ></div>

      <div className="relative z-10 flex flex-col items-center sm:p-24 p-4 space-y-4 justify-center">
        <div className=" w-fit p-12 items-center flex flex-col rounded-3xl shadow-xl space-y-4 justify-center">
          <div className="">
            <Image
              className=""
              src="/israel-l.gif"
              alt="Isiah is a skid"
              width={180}
              unoptimized
              height={38}
            />
          </div>
          <div>
            <h1 className="text-6xl">❤️</h1>
          </div>
          <div className="">
            <Image
              className="rounded-3xl"
              src="/isiah.gif"
              unoptimized
              alt="Isiah is a skid"
              width={180}
              height={38}
            />
          </div>
        </div>

        <div className="flex-col items-center text-center space-y-2">
          <h1 className="font-bold text-6xl mt-4">Isiah is Jew.</h1>
          <h1 className="text-3xl">Recently isiah has been caught being jewish inside of a call</h1>
          <h1 className="text-2xl">We recommend staying away from isiah and not buying any of his products.</h1>
        </div>

        <h1 className="bottom-0 font-bold text-center">This message is sponsored by Lenny, Chase Wilson and 0bxb</h1>
      </div>
    </main>
  );
}

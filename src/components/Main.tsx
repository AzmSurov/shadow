import React from 'react'
import toast, { Toaster } from "react-hot-toast";
import data from "../Data";
import { SiTailwindcss } from "react-icons/si";
import {TiCode} from 'react-icons/ti'
import ReactTooltip from 'react-tooltip';
const Main = () => {
    const notify = () =>
    toast("Copied to Clipboard", {
      icon: "✅",
    });
  return (
    <div>
              <div className="container mx-auto ">
        <section className="text-white bg-gray-900">
          <div className="max-w-screen-xl px-4 py-32 mx-auto lg:h-12 lg:items-center lg:flex">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                Shadow UI
              </h1>

              <p className="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl">
                Background Gradients for Tailwind CSS
              </p>
            </div>
          </div>
        </section>
        <div className="py-5">
          <div className="grid grid-cols-1 gap-6  md:grid-cols-2 lg:grid-cols-3 px-12 md:px-8 lg:px-4">
            {data.map(({ id, twBg, cssColors, twColors }) => (
              <div className="overflow-hidden rounded-2xl">
                <div key={id}>
                  <div className={"object-cover w-full h-56 " + twBg} />
                  <div className="p-2 bg-white flex flex-row justify-between">
                    <div className="flex gap-0 ">
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(twBg);
                          notify();
                        }}
                        className="px-1 font-medium "
                      >
                        <div>
                        <SiTailwindcss
                          className="border rounded-full border-r-1 px-1  text-cyan-500 hover:text-cyan-600 hover:scale-110"
                          size={30}
                          data-tip="Copy Tailwind CSS"
                        />
                        </div>
                        <ReactTooltip place="bottom"/>

                      </button>

                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(cssColors ? cssColors : "");
                          notify();
                        }}
                        className="px-1 font-medium"
                      > 
                      <div> 
                        <TiCode
                          className="border rounded-full border-r-1 px-1 text-gray-700 hover:text-black hover:scale-110"
                          size={30}
                          data-tip="Copy Regular CSS"
                        />
                        </div>
                        <ReactTooltip place="bottom" />
                      </button>

                    </div>

                    <div className="flex gap-x-2">
                      {twColors?.map((element, twColors) => (
                      <button className={"border rounded-full px-3.5 " + (element)} data-tip={`Copy ${element}`} onClick={() => {
                        navigator.clipboard.writeText(element)
                        notify();
                      }}>
                                              <ReactTooltip place="bottom" />
                                              
                      </button>

                      ))}

                    </div>
                    <Toaster
                      position="bottom-center"
                      toastOptions={{ duration: 1500 }}
                      gutter={8}
                    />
                  </div>{" "}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
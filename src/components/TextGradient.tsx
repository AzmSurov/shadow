import React, {useState} from "react";
import toast, { Toaster } from "react-hot-toast";
import textData from '../textData';
const TextGradient = () => {

    const [textSize, setTextSize] = useState('text-5xl')
    const [inputText, setInputText] = useState('');
    const notify = () =>
    toast("Copied to Clipboard", {
      icon: "✅",
    });

  return (
    <div className=" text-white">
     <div className="max-w-3xl mx-auto text-center py-24">
              <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                Shadow UI
              </h1>

              <p className="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl">
               Text Gradients for Tailwind CSS
              </p>
            </div>
      <div className="container mx-auto grid grid-cols-5 gap-4 px-5 md:px-2 lg:px-0">
  <button className="border border-r-amber-50 border-cover-full text-center" onClick={() => {setTextSize('text-xl')} }>text-xl</button>
  <button className="border border-r-amber-50 border-cover-full text-center" onClick={() => {setTextSize('text-2xl')} }>text-2xl</button>
  <button className="border border-r-amber-50 border-cover-full text-center" onClick={() => {setTextSize('text-3xl')} }>text-3xl</button>
  <button className="border border-r-amber-50 border-cover-full text-center" onClick={() => {setTextSize('text-4xl')} }>text-4xl</button>
  <button className="border border-r-amber-50 border-cover-full text-center" onClick={() => {setTextSize('text-5xl')} }>text-5xl</button>
</div>

      <div className="container mx-auto py-5 px-5 md:px-2 lg:px-0">
      <input
    className="w-full px-2  py-3 pr-12 text-sm border-2 text-gray-200 border-slate-500 rounded bg-slate-600 outline outline-none"
    id="email"
    type="string"
    placeholder="Add your text here"
    value={inputText}
    onChange={(e) => {setInputText(e.target.value)}}
  />
        <div className="flex flex-col divide divide-y-2">
            {textData.map(({id, twBg}) => (
                <div className="flex justify-between py-4 ">
                <span key={id} className={`font-bold ${textSize} ${twBg} `}>
                  {inputText ? inputText : "Hello World!"}
                </span>
                <div className="p-1 shadow-xl  bg-gradient-to-r from-pink-500 to-violet-500  rounded-2xl">
                <button
                  className="text-center lg:px-12 lg:py-3 px-2 py-2 h-10 lg:h-full block p-6 bg-gray-900 text-white sm:p-8 rounded-xl"
                  onClick={() => {
                    navigator.clipboard.writeText(twBg + " " + textSize);
                    notify();
                  }}
                >
                  Copy
                </button>
                </div>
              </div>
            ))}
          

        </div>
        <Toaster
                      position="bottom-center"
                      toastOptions={{ duration: 1500 }}
                      gutter={8}
                    />
      </div>
    </div>
  );
};

export default TextGradient;

import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checkListItems } from "../constants";

const Workflow = () => {
  return (
    <div id="workflow" className="mt-4 lg:mt-0 scroll-mt-[120px]">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl text-center my-6 tracking-wide">
        Acelera el flujo{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">de trabajo</span>
        </h2>

        <div className="flex flex-wrap justify-center">
          <div className="p-2 w-full lg:w-1/2">
            <img src={codeImg} alt="Código" />
          </div>

          <div className="pt-12 w-full lg:w-1/2">
            {checkListItems.map((item, index) => (
              <div key={index} className="flex mb-12">
                <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                  <CheckCircle2 />
                </div>

                <div>
                  <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                  <p className="text-md text-neutral-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Workflow;
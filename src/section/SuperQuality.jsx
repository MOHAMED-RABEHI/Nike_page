import { shoe8 } from "../assets/images"
import Buttone from "../componet/Buttone"
const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container" >
      <div className="flex flex-1 flex-col " >
        <h2 className="font-palanquin  lg:max-w-lg    text-4xl capitalize font-bold ">
            We Provide You
        
          <span className="text-coral-red ">Super</span>
          <span className="text-coral-red ">Quality</span>
            Shoes
        </h2>
        
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style,our meticulouslay
          crafted footwear is designed to elevate your exeperience ,provideing
          you with unmatched quality,innovation,and a touch of elegance.
        </p>
        <p className="info-text mt-6 lg:max-w-lg ">
          Our dedication to detail and execelence ensures your statisfaction
        </p>
        <div className="mt-11">
        <Buttone label="View details"
         />

        </div>
      </div>
      <div className="flex felx-1 justify-center items-center">
        <img src={shoe8} alt="" width={570} height={522} className="object-contain hover:scale-105 transition-all duration-200" />

      </div>
    </section>
  )
}

export default SuperQuality

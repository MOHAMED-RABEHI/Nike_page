import { arrowRight } from "../assets/icons";
import { offer, shoe4, shoe5 } from "../assets/images";
import  Buttone from "../componet/Buttone";

const SpecialOffer = () => {
  return (
    
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
    <div className='flex-1'>
    <h1 className="text-4xl font-bold  text-center" >30% offer </h1>

      <img
        src={shoe4}
        alt='Shoe Promotion'
        width={773}
        height={200}
        className='object-contain w-full h-96'
      />

      <div className="mt-11 flex  gap-9 lg:flex-row   md:flex-col sm:flex-col ">
      <img
        src={shoe5}
        alt='Shoe Promotion'
        width={773}
        height={150}
        className='object-contain h-60'
      />
      <img
        src={shoe5}
        alt='Shoe Promotion'
        width={773}
        height={150}
        className='object-contain  h-60'
      />
      </div>
      
    </div>
    <div className='flex flex-1 flex-col'>
      <h2 className='text-4xl font-palanquin font-bold'>
        <span className='text-coral-red'>Special </span>
        Offer
      </h2>
      <p className='mt-4 info-text'>
        Embark on a shopping journey that redefines your experience with
        unbeatable deals. From premier selections to incredible savings, we
        offer unparalleled value that sets us apart.
      </p>
      <p className='mt-6 info-text'>
        Navigate a realm of possibilities designed to fulfill your unique
        desires, surpassing the loftiest expectations. Your journey with us is
        nothing short of exceptional.
      </p>
      <div className='mt-11 flex flex-wrap gap-4'>
        <Buttone label='Shop now' iconURL={arrowRight} />
        <Buttone
          label='Learn more'
          backgroundColor='bg-white'
          borderColor='border-slate-gray'
          textColor='text-slate-gray'
        />
      </div>
    </div>
  </section>




  )
}

export default SpecialOffer

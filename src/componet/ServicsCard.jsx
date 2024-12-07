
const ServicsCard = ({imgURl,label,subtext}) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16' >
      <div className='w-11 h-11 justify-center items-center flex bg-coral-red rounded-full hover:scale-105 transition-all duration-200'>
        <img src={imgURl} width={24} height={24}
          />
      </div>
      <h3 className='font-bold mt-5 font-palanquin text-3xl leading-normal'>{label}

      </h3>
      <p className='font-montserrat mt-3  text-lg leading-normal text-slate-gray '>{subtext}</p>

    </div>
  )
}

export default ServicsCard

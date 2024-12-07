import { services } from "../content";
import ServicsCard from "../componet/ServicsCard";
const Services = () => {
  return (
    <section className='max-container flex justify-center flex-wrap gap-9 '>
      {services.map((service) => (
        < ServicsCard key={service.label} {...service}  className="hover:scale-105 transition-all duration-200"/>
      ))}
    </section>
  );
};

export default Services;
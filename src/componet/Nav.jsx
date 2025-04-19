import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import { navLinks } from '../content';

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full ' > 
      <nav className='flex justify-between items-center max-container'>
        <a href="/" >
        <img src={headerLogo} alt="Header Logo" width={130} height={30}/>
        
        </a>
        <ul className='flex flex-1 gap-16 justify-center items-center max-lg:hidden'>
         {navLinks.map((item)=>(
          <li key={item.label}>
            <a href={item.href} className=' text-lg leading-normal text-gray-400 font-montserrat'>
              {item.label}
            </a>

            

          </li>
          
        ) )}
        

        </ul>
          <div className='lg:hidden'> 
          <img src={hamburger} alt="Hamburger Menu"  width={25} height={25}/>        
        
        </div>

      </nav>
    </header>






  );
};


export default Nav;

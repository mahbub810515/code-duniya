
import { useState } from "react"
import Container from "../common/Container"
import Listitem from "../ui/Listitem"
import Button from "../ui/Button"
import Flex from "../ui/Flex"
import Image from "../ui/Image"
import { TiThMenu } from "react-icons/ti";

type navList = {
  id: number,
  title: string,
}
const Header = () => {
  let [isOpen,setIsOpen]=useState<boolean>(false);
  let [navList, setnavList] = useState<navList[]>([
    {
      id: 1,
      title: "হোম"
    },
    {
      id: 2,
      title: "আমাদের কোর্সসমহ"
    },
    {
      id: 3,
      title: "যোগাযোগ"
    },
    {
      id: 4,
      title: "ক্যারিয়ার গাইডলাইন"
    },
  ]);

  return (
    <header className="bg-primary py-[15px]">
      <nav className="relative">
        <Container>
          <Flex className="justify-between items-center ">
            <Image className="w-[150px] lg:w-auto" imgUrl="images/logo.png" alt="logoImage"/>
            <ul className="hidden lg:flex gap-[25px] text-white">
              {navList.map((item, index) => (
                <Listitem className="text-2xl font-semibold font-anek" key={index} item={item} />
              ))}
            </ul>
            {isOpen &&
            
            <ul className=" absolute z-10 w-full px-4 py-4 top-[65px] left-0 bg-secondary lg:hidden lg:flex gap-[25px] text-white">
              {navList.map((item, index) => (
                <Listitem className="text-2xl font-semibold font-anek" key={index} item={item} />
              ))}
            </ul>
            }
            <div className="flex items-center gap-5">
            <Button className=" font-semibold font-anek bg-secondary text-lg lg:text-2xl text-white py-[11px] px-3 lg:px-[58px] rounded-[10px]" title="কোর্স দেখুন" >
            </Button>            
            <TiThMenu onClick={()=>setIsOpen(!isOpen)} className=" text-2xl text-white lg:hidden" />
           
            </div>
          </Flex>
        </Container>

      </nav>
    </header>
  )
}

export default Header

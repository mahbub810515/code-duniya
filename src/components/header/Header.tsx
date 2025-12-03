
import { useState } from "react"
import Container from "../common/Container"
import Listitem from "../ui/Listitem"
import Button from "../ui/Button"
import Flex from "../ui/Flex"
import Image from "../ui/image"

type navList = {
  id: number,
  title: string,
}
const Header = () => {
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
      <nav>
        <Container>
          <Flex className="justify-between items-center">
            <Image imgUrl="images/logo.png" alt="logoImage"/>
            <ul className="flex gap-[25px] text-white">
              {navList.map((item, index) => (
                <Listitem className="text-2xl font-semibold font-anek" key={index} item={item} />
              ))}

            </ul>
            <Button className="text-2xl font-semibold font-anek bg-secondary text-white py-[11px] px-[58px] rounded-[10px]" title="কোর্স দেখুন" />
          </Flex>
        </Container>

      </nav>
    </header>
  )
}

export default Header

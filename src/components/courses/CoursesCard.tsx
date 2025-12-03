
import type { coursesCardType } from "../types/Types";
import Button from "../ui/Button"
import Flex from "../ui/Flex"
import Image from "../ui/image"
import { FaStar } from "react-icons/fa";


const CoursesCard = ({item}:{item:coursesCardType}) => {
    return (
        <div className="max-w-[377px] font-anek text-white ">
            <Image imgUrl={item.icon} alt={item.name} />
            <div className="bg-secondary py-4 px-4 ">
                <Flex className="justify-between">
                    <h4 className="text-4 font-bold">{item.category}</h4>
                    <h5>৩০০০ স্টুডেন্ট</h5>
                </Flex>
                <h2 className="text-2xl font-bold">{item.name}</h2>
                <h2 className="text-[13px] font-normal flex item-center gap-2" ><FaStar className="text-yellow-500"/>Rating | 450 Reviews</h2>
                <h2 className="flex justify-between item-center text-2xl font-bold">{item.price} <Button className="text-xl font-semibold font-anek bg-primary text-white py-[9px] px-[35px] rounded-[10px]" title="ডিসকাউন্ট"/></h2>
            </div>
        </div>
    )
}

export default CoursesCard

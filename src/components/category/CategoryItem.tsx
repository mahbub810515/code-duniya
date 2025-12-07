import type { categoryType } from "../types/Types"
import Image from "../ui/Image"


const CategoryItem = ({item}:{item:categoryType}) => {
    return (
        <div className="w-[230px] mx-auto bg-[#1B263B] rounded-[25px] mb-2.5 py-[15px] text-white text-center" >
            <Image imgUrl={item.icon} alt={item.name} className="mx-auto"/>
            <h3 className="font-anek font-semibold text-2xl mt-3">{item.name}</h3>
        </div>
    )
}

export default CategoryItem

import Container from "../common/Container"
import Flex from "../ui/Flex"
import Image from "../ui/Image"
import BannerImage from "../../assets/images/special_feature.png"
import { FaDotCircle } from "react-icons/fa";


const SpecialFeatures = () => {
    return (
        <section className="mt-20 lg:mt-[180px]">
            <Container>
                <Flex className="gap-4 flex-col lg:flex-row">
                    <div className="w-full lg:w-2/4 mr-[35px]">
                        <Image imgUrl={BannerImage} alt="bannerImage" className="rounded-[10px]" />
                    </div>
                    <div className="w-full lg:w-2/4 ml-3">
                        <h3 className="mb-4 lg:mb-[33px] text-2xl lg:text-[36px] font-anek font-bold w-[373px] text-black">আমাদের ক্লাসের বিশেষত্ব </h3>
                        <ul className="mb-3 text-4 lg:text-[24px] font-anek font-medium text-black">
                            <li className="flex gap-[30px] item-center"><FaDotCircle  />সপ্তাহে ২ - ৩ দিন ক্লাস</li>
                            <li className="flex gap-[30px] item-center"><FaDotCircle />অনলাইন / অফলাইন ক্লাস প্রতিটি কোর্সে</li>
                            <li className="flex gap-[30px] item-center"><FaDotCircle />মনোরম ক্লাস রুম</li>
                            <li className="flex gap-[30px] item-center"><FaDotCircle />অনলাইন ২৪/৭ সাপোর্ট</li>
                           <li className="flex gap-[30px] item-center"><FaDotCircle />অত্যাধুনিক মনিটর এবং প্রজেক্টর এর সুবিধা</li>
                        </ul>

                    </div>
                </Flex>
            </Container>

        </section>
    )
}

export default SpecialFeatures

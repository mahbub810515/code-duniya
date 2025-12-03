import Container from "../common/Container"
import Flex from "../ui/Flex"
import Image from "../ui/Image"
import BannerImage from "../../assets/images/special_feature.png"
import { FaDotCircle } from "react-icons/fa";


const SpecialFeatures = () => {
    return (
        <section className="mt-[180px]">
            <Container>
                <Flex>
                    <div className="w-2/4 mr-[35px]">
                        <Image imgUrl={BannerImage} alt="bannerImage" className="rounded-[10px]" />
                    </div>
                    <div className="w-2/4 ml-3">
                        <h3 className="mb-[33px] text-[36px] font-anek font-bold w-[373px] text-black">আমাদের ক্লাসের বিশেষত্ব </h3>
                        <ul className="">
                            <li className="flex gap-[30px] item-center"><FaDotCircle /><h5 className="mb-3 text-[24px] font-anek font-medium text-black">সপ্তাহে ২ - ৩ দিন ক্লাস</h5></li>
                            <li className="flex gap-[30px] item-center"><FaDotCircle /><h5 className="mb-3 text-[24px] font-anek font-medium text-black">অনলাইন / অফলাইন ক্লাস প্রতিটি কোর্সে</h5></li>
                            <li className="flex gap-[30px] item-center"><FaDotCircle /><h5 className="mb-3 text-[24px] font-anek font-medium text-black">মনোরম ক্লাস রুম</h5></li>
                            <li className="flex gap-[30px] item-center"><FaDotCircle /><h5 className="mb-3 text-[24px] font-anek font-medium text-black">অনলাইন ২৪/৭ সাপোর্ট</h5></li>
                           <li className="flex gap-[30px] item-center"><FaDotCircle /><h5 className="mb-3 text-[24px] font-anek font-medium text-black">অত্যাধুনিক মনিটর এবং প্রজেক্টর এর সুবিধা</h5></li>
                        </ul>

                    </div>
                </Flex>
            </Container>

        </section>
    )
}

export default SpecialFeatures

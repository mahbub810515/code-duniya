import Container from "../common/Container"
import Flex from "../ui/Flex"
import BannerImage from "../../assets/images/banner.png";
import Button from "../ui/Button";
import Image from "../ui/Image";

const Banner = () => {
  return (
    <section className="bg-primary pt-10 lg:pt-[81px] pb-[100px] lg:pb-[173px]">
            <Container>
                    <Flex className="gap-4 lg:gap-0 flex-col lg:flex-row">
                        <div className="w-full lg:w-2/4">
                            <h1 className="text-3xl lg:text-[50px] font-anek font-bold w-[435px] text-white">দেশের সর্ব বৃহৎ আইটি ট্রেনিং প্লাটফর্ম </h1>
                            <p className="text-lg lg:text[20px] font-anek font-regular max-w-[457px] my-4 lg:my-[45px] text-white">আইটি ট্রেনিং এর মাধ্যমে নিজেকে স্বাবলম্বী করুন। নিজেকে আইটি এক্সপার্ট হিসেবে গড়ে তুলুন</p>
                            <Button className=" text-lg lg:text-2xl font-semibold font-anek bg-secondary text-white py-2 lg:py-[11px] px-[30px] lg:px-[58px] rounded-[10px]" title="কোর্স দেখুন" />
                        </div>
                        <div className="w-2/4">
                            <Image imgUrl={BannerImage} alt="bannerImage" className="rounded-[10px]"  />
                        </div>
                    </Flex>

            </Container>
    </section>
  )
}

export default Banner


import Container from '../common/Container'
import Image from '../ui/Image'
import FooterImage from "../../assets/images/special_feature.png"
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";
import { IoCall } from "react-icons/io5"
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <section className="bg-primary text-white mt-10 lg:mt-[90px]">
            <Container>
                <h1 className="pt-[30px] text-8 lg:text-[50px] text-center font-anek font-bold text-white">ভর্তি চলছে</h1>
                <p className="text-4 lg:text-[20px] text-center font-anek font-regular mt-[15px] text-white">আমাদের অনলাইন অথবা অফলাইন কোর্সে এনরোল করে ফেলুন</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-9">
                    <h4 className="font-anek font-bold text-3xl text-center py-[9px] px-5 lg:px-[60px] border rounded-[10px]">সকল কোর্স দেখুন</h4>
                    <h4 className="font-anek font-bold text-3xl text-center py-[9px] px-5 lg:px-[60px] border rounded-[10px]">আমাদের সেমিনারে যোগ দিন</h4>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 text-center mt-15  lg:mt-[118px]">
                    <div>
                        <h3 className="mb-2 font-anek font-bold text-center text-[24px]">আমাদের ঠিকানা</h3>
                        <h5 className="flex justify-center gap-3 mb-2 font-anek font-semibold text-[16px]"><FaLocationArrow />২৮ / ২, মেহের প্লাজা,ধানমন্ডি</h5>
                        <h5 className="flex justify-center gap-3 mb-2 font-anek font-semibold text-[16px]"><IoCall />+৮৮ ০১৭১৫৫৫৭৮৯৬</h5>
                        <h5 className="flex justify-center gap-3 mb-2 font-anek font-semibold text-[16px]"><MdEmail />info@codeduniya.com</h5>
                    </div>
                    <div>
                        <h3 className="mb-2 font-anek font-bold text-center text-[24px]">গুরুত্বপূর্ণ লিংক</h3>
                        <h5 className="mb-2 font-anek font-semibold text-[16px]">আমাদের কোর্স</h5>
                        <h5 className="mb-2 font-anek font-semibold text-[16px]">মেন্টর</h5>
                        <h5 className="mb-2 font-anek font-semibold text-[16px]">আমাদের ব্লগ</h5>
                        <h5 className="mb-2 font-anek font-semibold text-[16px]">প্রাইভেসি পলিসি</h5>
                        <h5 className="mb-2 font-anek font-semibold text-[16px]">আমাদের সেমিনার</h5>
                    </div>
                    <div>
                        <h3 className="mb-2 font-anek font-bold text-center text-[24px]">জনপ্রিয় কোর্সগুল</h3>
                        <h5 className="mb-2 font-anek font-semibold text-[16px]">ওয়েব ডেভেলপমেন্ট</h5>
                        <h5 className="mb-2 font-anek font-semibold text-[16px]">গ্রাফিক্স ডিজাইন</h5>
                        <h5 className="mb-2 font-anek font-semibold text-[16px]">অ্যাপ ডেভেলপমেন্ট</h5>
                        <h5 className="mb-2 font-anek font-semibold text-[16px]">সাইবার সিকিউরিটি</h5>
                        <h5 className="mb-2 font-anek font-semibold text-[16px]">ভিডিও এডিটিং</h5>
                    </div>
                    <div className='max-w-[377px] '>
                        <Image imgUrl={FooterImage} alt="footer logo" />
                    </div>
                </div>
                <div>
                    <h1 className="pt-[30px] text-10 lg:text-[80px] text-center font-anek font-bold text-white">কোড দুনিয়া</h1>
                    <h3 className=" text-5 lg:text-[40px] text-center font-anek font-regular mt-2 lg:mt-[15px] text-white">দেশের সর্ববৃহৎ আইটি ট্রেনিং প্লাটফর্ম</h3>
                </div>
                <div className=' flex  gap-5 w-60 mx-auto items-center mt-3'>
                        <FaFacebook className='text-3xl lg:text-[40px] '/>
                        <FaInstagramSquare className='text-3xl lg:text-[40px]' />
                        <FaYoutube className='text-3xl lg:text-[40px]' />
                        <FaXTwitter className='text-3xl lg:text-[40px]' />
                </div>
                <div className='flex justify-between mt-15 lg:mt-[130px] pb-4'>
                    <h3 className=' text-3 lg:text-xl font-regular font-anek'>২০২৪ কপিরাইট  | মাহমুদ হাসান রামীম | সর্বসত্ত্ব সংরক্ষিত</h3>
                    <h3 className=' text-3 lg:text-xl font-regular font-anek'>প্রাইভেসি পলিসি</h3>
                </div>
            </Container>

        </section>
    )
}

export default Footer

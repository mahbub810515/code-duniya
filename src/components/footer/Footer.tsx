
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
        <section className="bg-primary text-white mt-[90px]">
            <Container>
                <h1 className="pt-[30px] text-[50px] text-center font-anek font-bold text-white">ভর্তি চলছে</h1>
                <p className="text-[20px] text-center font-anek font-regular mt-[15px] text-white">আমাদের অনলাইন অথবা অফলাইন কোর্সে এনরোল করে ফেলুন</p>
                <div className="flex gap-[50px] ml-[340px] mt-[50px]">
                    <h4 className="font-anek font-bold text-5 py-[9px] px-[60px] border-[1px] rounded-[10px]">সকল কোর্স দেখুন</h4>
                    <h4 className="font-anek font-bold text-5 py-[9px] px-[60px] border-[1px] rounded-[10px]">আমাদের সেমিনারে যোগ দিন</h4>
                </div>
                <div className="flex justify-between mt-[118px]">
                    <div>
                        <h3 className="mb-2 font-anek font-bold text-[24px]">আমাদের ঠিকানা</h3>
                        <h4 className="flex gap-3 mb-2 font-anek font-semibold text-[24px]"><FaLocationArrow />২৮ / ২, মেহের প্লাজা, ধানমন্ডি, ঢাকা</h4>
                        <h4 className="flex gap-3 mb-2 font-anek font-semibold text-[24px]"><IoCall />+৮৮ ০১৭১৫৫৫৭৮৯৬</h4>
                        <h4 className="flex gap-3 mb-2 font-anek font-semibold text-[24px]"><MdEmail />info@codeduniya.com</h4>
                    </div>
                    <div>
                        <h3 className="mb-2 font-anek font-bold font-[24px]">গুরুত্বপূর্ণ লিংক</h3>
                        <h4 className="mb-2 font-anek font-semibold font-[24px]">আমাদের কোর্স</h4>
                        <h4 className="mb-2 font-anek font-semibold font-[24px]">মেন্টর</h4>
                        <h4 className="mb-2 font-anek font-semibold font-[24px]">আমাদের ব্লগ</h4>
                        <h4 className="mb-2 font-anek font-semibold font-[24px]">প্রাইভেসি পলিসি</h4>
                        <h4 className="mb-2 font-anek font-semibold font-[24px]">আমাদের সেমিনার</h4>
                    </div>
                    <div>
                        <h3 className="mb-2 font-anek font-bold font-[24px]">জনপ্রিয় কোর্সগুল</h3>
                        <h4 className="mb-2 font-anek font-semibold font-[24px]">ওয়েব ডেভেলপমেন্ট</h4>
                        <h4 className="mb-2 font-anek font-semibold font-[24px]">গ্রাফিক্স ডিজাইন</h4>
                        <h4 className="mb-2 font-anek font-semibold font-[24px]">অ্যাপ ডেভেলপমেন্ট</h4>
                        <h4 className="mb-2 font-anek font-semibold font-[24px]">সাইবার সিকিউরিটি</h4>
                        <h4 className="mb-2 font-anek font-semibold font-[24px]">ভিডিও এডিটিং</h4>
                    </div>
                    <div className='w-[377px] '>
                        <Image imgUrl={FooterImage} alt="footer logo" />
                    </div>
                </div>
                <div>
                    <h1 className="pt-[30px] text-[80px] text-center font-anek font-bold text-white">কোড দুনিয়া</h1>
                    <h3 className="text-[40px] text-center font-anek font-regular mt-[15px] text-white">দেশের সর্ববৃহৎ আইটি ট্রেনিং প্লাটফর্ম</h3>
                </div>
                <div className='flex gap-[20px] w-[240px] ml-[500px] mt-[12px]'>
                        <FaFacebook className='text-[50px] mr-[20px]'/>
                        <FaInstagramSquare className='text-[50px] mr-[20px]' />
                        <FaYoutube className='text-[50px] mr-[20px]' />
                        <FaXTwitter className='text-[50px]' />
                </div>
                <div className='flex justify-between mt-[130px] pb-[16px]'>
                    <h3>২০২৪ কপিরাইট  | মাহমুদ হাসান রামীম | সর্বসত্ত্ব সংরক্ষিত</h3>
                    <h3>প্রাইভেসি পলিসি</h3>
                </div>
            </Container>

        </section>
    )
}

export default Footer

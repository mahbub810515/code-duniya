
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import AdvantagesItem from './AdvantagesItem'
import Container from '../common/Container';
import Slider from 'react-slick';

const Advantages = () => {
    let advantageItem = [
        {
            id: 1,
            title: "৯০ %",
            subTitle: "সফলতার হার",
            discription: "এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট  বাসবে  এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট বাসবেএখানে কিছু টেক্সট  বাসবে"
        },
        {
            id: 1,
            title: "১০,০০০ +  %",
            subTitle: "ক্যারিয়ার প্লেসমেন্ট",
            discription: "এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট  বাসবে  এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট বাসবেএখানে কিছু টেক্সট  বাসবে"
       
        },
        {
            id: 1,
            title: "১,০০,০০০ + ",
            subTitle: "স্টুডেন্ট এর পছন্দ",
            discription: "এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট  বাসবে  এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট বাসবেএখানে কিছু টেক্সট  বাসবে"
       
        },
    ];
     interface customArrowProps {
            style?:React.CSSProperties;
            onClick?:React.MouseEventHandler<HTMLDivElement>;
        }
        function SampleNextArrow(props:customArrowProps) {
            const {  style, onClick } = props;
            return (
                <div
                    className=" bg-secondary rounded-[50%] left-[550px] top-[350px]"
                    style={{ ...style, display: "inline-block", color:"white", fontSize:"40px",width:"40px",height:"40px", position:"absolute",zIndex:"999",right:"0px",}}
                    onClick={onClick}
                ><FaAngleRight /> </div>
            );
        }
    
        function SamplePrevArrow(props:customArrowProps) {
            const { style, onClick } = props;
            return (
                <div
                    className=" bg-secondary rounded-[50%] left-[500px] top-[350px]"
                    style={{ ...style, position:"absolute",zIndex:"999", display: "inline-block", color:"white",fontSize:"40px",width:"40px",height:"40px" }}
                    onClick={onClick}
                ><FaAngleLeft /></div>
            );
        }
    
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 2,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            className: "center",
            gap:20,
            responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                }
            }
        ]
        };
    return (
        <section className="w-full">
            <Container>
                <Slider {...settings}>
                    {advantageItem.map((item)=>(
                        <AdvantagesItem item={item}/>
                    ))}
                    {advantageItem.map((item)=>(
                        <AdvantagesItem item={item}/>
                    ))}
                </Slider>
            </Container>
        </section>
    )
}

export default Advantages

import Container from "../common/Container"
import CategoryItem from "./CategoryItem"
import graphicdesignImage from "../../assets/images/graphic-design.png";
import networkingImage from "../../assets/images/network.png";
import softwareImage from "../../assets/images/software.png";
import mediaImage from "../../assets/images/media.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";



const Category = () => {
    let categoryItem = [
        {
            id: 1,
            name: "গ্রাফিকস",
            icon: graphicdesignImage,
        },
        {
            id: 2,
            name: "নেটওয়ার্কিং",
            icon: networkingImage,
        },
        {
            id: 3,
            name: "সফটওয়্যার",
            icon: softwareImage,
        },
        {
            id: 4,
            name: "ফিল্ম মিডিয়া",
            icon: mediaImage
        },
    ]
    interface customArrowProps {
        style?: React.CSSProperties;
        onClick?: React.MouseEventHandler<HTMLDivElement>;
    }
    function SampleNextArrow(props: customArrowProps) {
        const { style, onClick } = props;
        return (
            <div
                className=" bg-secondary rounded-[50%] top-2/4 translate-y-[-50%]"
                style={{ ...style, display: "inline-block", color: "white", fontSize: "40px", width: "40px", height: "40px", position: "absolute", zIndex: "999", right: "0px", }}
                onClick={onClick}
            ><FaAngleRight /> </div>
        );
    }

    function SamplePrevArrow(props: customArrowProps) {
        const { style, onClick } = props;
        return (
            <div
                className=" bg-secondary rounded-[50%] top-2/4 translate-y-[-50%]"
                style={{ ...style, position: "absolute", zIndex: "999", left: "-50px", display: "inline-block", color: "white", fontSize: "40px", width: "40px", height: "40px" }}
                onClick={onClick}
            ><FaAngleLeft /></div>
        );
    }

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        className: "center",
        gap: 20,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
        <section className="w-full absolute top-135 ">
            <Container>
                <Slider {...settings}>
                    {categoryItem.map((item) => (
                        <CategoryItem item={item} />
                    ))}
                    {categoryItem.map((item) => (
                        <CategoryItem item={item} />
                    ))}
                </Slider>

            </Container>
        </section>
    )
}

export default Category

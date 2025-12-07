import Container from "../common/Container"
import Title from "../ui/Title"
import CoursesCard from "./CoursesCard"
import mernImg from "..//../assets/images/MERN.png"
import videoEditing from "..//../assets/images/video_editing.png"
import UIUXDesign from "..//../assets/images/ux_ui.png"
import Button from "../ui/Button"



const Courses = () => {
    let courseItem = [
        {
            id: 1,
            category:"web & software",
            name: "MERN stack development",
            icon: mernImg,
            price:"৳ 1,20000 BDT"
        },
        {
            id: 2,
            category:"grephics & multimedia",
            name: "Video Editing",
            icon: videoEditing,
             price:"৳ 1,00000 BDT",
        },
        {
            id: 3,
            category:"professinal",
            name: "Ui Ux design",
            icon: UIUXDesign,
             price:"৳ 1,40000 BDT",
        },
        {
            id: 4,
            category:"web & software",
            name: "MERN stack development",
            icon: mernImg,
            price:"৳ 1,20000 BDT"
        },
        {
            id: 5,
            category:"grephics & multimedia",
            name: "Video Editing",
            icon: videoEditing,
             price:"৳ 1,00000 BDT",
        },
        {
            id: 6,
            category:"professinal",
            name: "Ui Ux design",
            icon: UIUXDesign,
             price:"৳ 1,40000 BDT",
        },

    ];
    return (
        <section className="mt-[180px]">
            <Container>
                <Title mainTitle="আমাদের কোর্স সমুহ" subTitle="আমাদের সমস্ত কোর্স সুদক্ষ মেন্টর দ্বারা পরিচালিত  এবং সমৃদ্ধ রিসোর্স দ্বারা পরিপূর্ণ" />
                <div className="mt-10 lg:mt-[62px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {courseItem.map((item) => (
                            <CoursesCard item={item} />
                        ))}
                    </div>
                    <Button className="my-[41px] mx-auto py-1 px-8 lg:px-[55px] block text-4 lg:text-[24px] font-bold font-anek bg-secondary text-white rounded-[10px]" title="আরও কোর্স দেখুন" />
                </div>
            </Container>
        </section>
    )
}

export default Courses

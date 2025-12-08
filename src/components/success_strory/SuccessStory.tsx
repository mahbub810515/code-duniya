import Button from "../ui/Button"
import Image from "../ui/Image"
import Title from "../ui/Title"
import SuccessImage from "..//..//assets/images/successImage.png"
import Container from "../common/Container"


const SuccesStory = () => {

    return (
        <section className="mt-15 lg:mt-[180px]">
            <Container>
                <Title mainTitle="আমাদের সফলতার গল্পগুলো" subTitle="আমাদের হাতে তৈরি হওয়া প্রতিটি নক্ষত্র" />
                <div className="mt-10 lg:mt-[62px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <Image imgUrl={SuccessImage} alt="success image" className="" />
                        <Image imgUrl={SuccessImage} alt="success image" className="" />
                        <Image imgUrl={SuccessImage} alt="success image" className="" />
                        <Image imgUrl={SuccessImage} alt="success image" className="" />
                    </div>
                    <Button className=" my-6 lg:my-[41px] mx-auto block text-[24px] font-bold font-anek bg-secondary text-white py-1 px-10 lg:px-[55px] rounded-[10px]" title="আরও দেখুন" />
                </div>
            </Container>

        </section>
    )
}

export default SuccesStory

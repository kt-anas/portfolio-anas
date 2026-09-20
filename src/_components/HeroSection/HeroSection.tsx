
import TextAnimation from "../TextAnimation";


const fadeUpBlur = {
    hidden: { filter: 'blur(10px)', opacity: 0, y: 20 },
    visible: {
        filter: 'blur(0px)',
        opacity: 1,
        y: 0,
        transition: { ease: 'linear' },
    },
};


const HeroSection = () => {

    return (
        <section className="relative min-h-screen flex justify-end pt-0 md:pt-24">
            <div
                className="
                    container-fluid
                    flex
                    
                    flex-col
                    justify-end
                    pb-20
                    sm:pb-12
                    md:pb-16
                "
            >



                <TextAnimation
                    as="p"
                    text="I'm Muhammed Anas,"
                    variants={fadeUpBlur}
                    classname="text-[18px] leading-[26px] font-medium normal-case"
                />


                <TextAnimation
                    as="h1"
                    text="WEB DEVELOPER & DESIGNER."
                    variants={fadeUpBlur}
                    classname="mt-5 uppercase  text-[65px] sm:text-[90px] md:text-[120px]  lg:text-[200px] leading-[1] font-medium tracking-[-4px]"
                    breakAfter={['DEVELOPER']}

                />

                {/* <TextAnimation
                    as="p"
                    text="I design and build modern, responsive & interactive digital experiences for the web."
                    variants={fadeUpBlur}
                    classname="mt-5 text-[18px] leading-[26px] font-medium normal-case"
                /> */}


                {/* <div className="bottom-10 left-8">
                    <SocialSection />
                </div> */}




            </div>

        </section>
    );
};

export default HeroSection;
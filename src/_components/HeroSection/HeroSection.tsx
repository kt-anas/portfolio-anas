import SocialSection from "../SocialSection";

const HeroSection = () => {
    return (
        <section className="relative min-h-[calc(100vh-80px)] px-8 pt-24">
            <div className="container flex flex-col gap-[2.5rem] lg:gap-[3.75rem]">

                {/* Intro */}
                <p className="text-[18px] leading-[26px] font-medium">
                    I'm Muhammed Anas,
                </p>

                {/* Heading */}
                <h1 className="mt-5 text-[100px] leading-[1] font-medium tracking-[-4px]">
                    FRONT-END
                    <br />
                    DEVELOPER &
                    <br />
                    DESIGNER.
                </h1>

                {/* Description */}
                <p className="mt-12 ml-[200px] max-w-[560px] text-[24px] leading-[34px] font-normal text-[#555]">
                    I design and build modern, responsive & interactive
                    <br />
                    digital experiences for the web.
                </p>

                {/* Social */}
                <div className=" bottom-10 left-8">
                    <SocialSection />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
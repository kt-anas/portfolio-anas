import SocialSection from "../SocialSection";

const HeroSection = () => {
    return (
        <section className="relative min-h-[calc(100vh-80px)] px-8 pt-24">

            {/* Intro */}
            <p className="text-[18px] leading-[26px] font-medium">
                I'm Muhammed Anas,
            </p>

            {/* Heading */}
            <h1 className="mt-5 text-[90px] leading-[0.95] font-medium tracking-[-4px]">
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
            <div className="absolute bottom-10 left-8">
                <SocialSection />
            </div>

        </section>
    );
};

export default HeroSection;
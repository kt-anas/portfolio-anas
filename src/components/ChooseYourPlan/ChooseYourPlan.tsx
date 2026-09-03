"use client"

import Image from "next/image"

const ChooseYourPlan = () => {
    return (
        <section

            className="bg-white py-[3.75rem]  md:pb-20 lg:pb-[7.5rem] pt-0 relative z-10"
        >
            <div className="container flex flex-col gap-[2.5rem] md:gap-[3.125rem]">
                {/* Header — title only, centered on mobile */}

                <h2 className="font-(family-name:--font-primary) text-[1.75rem] sm:text-[2.5rem] md:text-[2.75rem] lg:text-[3.25rem] font-normal text-black tracking-[-0.125rem] md:tracking-[-0.094rem] leading-normal md:leading-[1.08] lg:leading-[3.915rem] text-center md:text-left w-full">
                    Price
                </h2>


                {/* Cards */}

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[1.25rem]">
                    <div
                        className={`relative min-h-[29.0625rem] md:min-h-[32.8125rem] lg:min-h-[40rem] flex-1 rounded-[0.75rem] md:rounded-[1.5625rem] overflow-hidden p-[1.875rem] md:p-8 lg:p-[3.125rem] ${false ? "text-white" : "bg-[#f5f3f1] text-black"
                            }`}
                    >
                        {/* Featured card background */}

                        <div className="absolute inset-0 pointer-events-none rounded-[0.75rem] md:rounded-[1.5625rem]">
                            <div className="absolute inset-0 bg-[#f5f3f1] rounded-[0.75rem] md:rounded-[1.5625rem]" />
                            <div className="absolute inset-0 overflow-hidden rounded-[0.75rem] md:rounded-[1.5625rem]">
                                <Image
                                    src={"/images/bg-mobile.webp"}
                                    alt={"image"}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                        </div>


                        {/* Badge */}

                        <div className="absolute top-[1.875rem] right-[1.875rem] md:top-[3.125rem] md:right-[3.0625rem] inline-flex items-center rounded-full border border-white px-[0.8125rem] py-[0.4375rem] md:bg-black/28 md:backdrop-blur-[2px] z-10">
                            <span className="font-(family-name:--font-primary) text-[0.75rem] font-semibold text-white leading-none">
                                plan badge
                            </span>
                        </div>


                        {/* Content wrapper */}
                        <div className="relative z-10 flex flex-col gap-[3.75rem] md:gap-0 md:h-full md:justify-between">
                            {/* Top section */}
                            <div className="flex flex-col gap-[1.25rem]">
                                {/* Plan name + value */}
                                <div
                                    className={`flex flex-col gap-[0.25rem] pb-[1.25rem] border-b border-[#e5e5e5] ${false ? "md:border-white/30" : ""
                                        }`}
                                >
                                    <span
                                        className={`font-(family-name:--font-primary) text-[1.125rem] md:text-[1.375rem] font-normal leading-normal opacity-50 ${false ? "md:opacity-70" : ""
                                            }`}
                                    >
                                        plan name
                                    </span>

                                    <div className="font-(family-name:--font-primary) font-medium tracking-[-0.063rem]">
                                        <span className="text-[2.25rem] md:text-[2.625rem] lg:text-[3rem] leading-normal">
                                            plan value
                                        </span>

                                        <>
                                            <span className="text-[2.25rem] md:text-[3rem]">{" "}</span>
                                            <span className="text-[1.125rem] md:text-[1.125rem] lg:text-[1.25rem] leading-normal">
                                                plan value_suffix
                                            </span>
                                        </>

                                    </div>
                                </div>

                                {/* Features list */}
                                <div className="flex flex-col gap-[1.125rem]">
                                    <span className="font-(family-name:--font-primary) text-[1rem] font-medium tracking-[-0.031rem] leading-[1.5]">
                                        plan features_title
                                    </span>

                                    <ul className="flex flex-col gap-[0.875rem] md:gap-[1rem]">

                                        <li

                                            className="flex items-start gap-[0.625rem] md:gap-[1rem]"
                                        >
                                            <div
                                                className=" size-[1.25rem] md:size-[1.5rem] shrink-0  text-black"


                                            />
                                            <span className="font-(family-name:--font-primary) text-[0.875rem] md:text-[1rem] font-normal tracking-[-0.031rem] leading-[1.5]">
                                                feature label
                                            </span>
                                        </li>

                                    </ul>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <button
                                type="button"
                                onClick={() => console.log("plan clicked")}
                                className={`inline-flex items-center justify-center h-[3.125rem] md:h-[3.4375rem] w-full px-[1.5rem] md:px-[1.75rem] py-[0.9375rem] font-(family-name:--font-primary) text-[0.875rem] font-semibold rounded-full ${false ? "white-btn" : "black-btn"
                                    }`}
                            >
                                Choose Your Plan
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default ChooseYourPlan

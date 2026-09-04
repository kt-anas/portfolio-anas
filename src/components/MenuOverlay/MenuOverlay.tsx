"use client";

type MenuOverlayProps = {
    open: boolean;
    onClose: () => void;
};

const MenuOverlay = ({ open, onClose }: MenuOverlayProps) => {
    return (
        <div
            className={`
        fixed inset-0 z-[100]
        transition-all duration-500
        ${open ? "visible opacity-100" : "invisible opacity-0"}
      `}
        >

            <div className="absolute inset-0 bg-white grid grid-cols-[60%_40%]">

                {/* LEFT */}
                <div className="relative px-16 py-10">

                    {/* Logo */}
                    <div className="text-2xl font-bold">
                        A → LERIC
                        <span className="block text-xs text-center font-normal">
                            Since . 2018
                        </span>
                    </div>

                    {/* Close */}
                    <button
                        onClick={onClose}
                        className="absolute top-10 right-10 text-3xl font-light"
                    >
                        ×
                    </button>

                    {/* Navigation */}
                    <nav className="mt-24 max-w-[700px]">

                        <a
                            href="/"
                            className="group flex items-center gap-5 mb-8"
                        >
                            <span className="text-sm text-gray-400">
                                01
                            </span>

                            <span className="text-[50px] font-semibold leading-none">
                                Home
                            </span>

                            <span className="text-3xl ml-auto">
                                →
                            </span>
                        </a>

                        <a
                            href="/pages"
                            className="group flex items-center gap-5 mb-8"
                        >
                            <span className="text-sm text-gray-400">
                                02
                            </span>

                            <span className="text-[50px] font-semibold leading-none">
                                Pages
                            </span>

                            <span className="text-3xl ml-auto">
                                →
                            </span>
                        </a>

                        <a
                            href="/blog"
                            className="group flex items-center gap-5 mb-8"
                        >
                            <span className="text-sm text-gray-400">
                                03
                            </span>

                            <span className="text-[50px] font-semibold leading-none">
                                Blog
                            </span>

                            <span className="text-3xl ml-auto">
                                →
                            </span>
                        </a>

                        <a
                            href="/contact"
                            className="group flex items-center gap-5"
                        >
                            <span className="text-sm text-gray-400">
                                04
                            </span>

                            <span className="text-[50px] font-semibold leading-none">
                                Contact
                            </span>

                            <span className="text-3xl ml-auto">
                                →
                            </span>
                        </a>

                    </nav>
                </div>

                {/* RIGHT */}
                <div className="bg-gray-100 flex items-center justify-center">

                    <div className="w-[60%]">

                        <h2 className="text-3xl font-semibold mb-10">
                            Get In Touch
                        </h2>

                        <div className="space-y-7">

                            <div>
                                <p className="text-gray-500 text-sm mb-2">
                                    Phone
                                </p>
                                <p className="font-medium">
                                    +4 (234) 567 8910
                                </p>
                            </div>

                            <div>
                                <p className="text-gray-500 text-sm mb-2">
                                    Email
                                </p>
                                <p className="font-medium">
                                    hello@gmail.com
                                </p>
                            </div>

                            <div>
                                <p className="text-gray-500 text-sm mb-2">
                                    Address
                                </p>
                                <p className="font-medium">
                                    602 Elgin St. Celina, Delaware
                                    <br />
                                    1009
                                </p>
                            </div>

                            <div>
                                <p className="text-gray-500 text-sm mb-3">
                                    Follow us
                                </p>

                                <div className="flex gap-3">
                                    <div className="w-10 h-10 border rounded-full flex items-center justify-center">
                                        ◎
                                    </div>

                                    <div className="w-10 h-10 border rounded-full flex items-center justify-center">
                                        X
                                    </div>

                                    <div className="w-10 h-10 border rounded-full flex items-center justify-center">
                                        ◎
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default MenuOverlay;
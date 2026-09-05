import {
    FaDribbble,
    FaPinterestP,
    FaBehance,
    FaLinkedinIn,
} from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

export default function SocialSection() {
    return (
        <div className="flex flex-col gap-4">
            <p className="text-[16px] leading-[24px] font-medium text-[#030303]">
                Follow Me
            </p>

            <div className="flex items-center gap-3">
                {/* Dribbble */}
                <a
                    href="#"
                    className="w-[38px] h-[38px] rounded-full border border-[#e5e5e5] flex items-center justify-center text-[#555] hover:text-black hover:border-black transition-all"
                >
                    <FaDribbble size={16} />
                </a>

                {/* Pinterest */}
                <a
                    href="#"
                    className="w-[38px] h-[38px] rounded-full border border-[#e5e5e5] flex items-center justify-center text-[#555] hover:text-black hover:border-black transition-all"
                >
                    <FaPinterestP size={16} />
                </a>

                {/* Behance */}
                <a
                    href="#"
                    className="w-[38px] h-[38px] rounded-full border border-[#e5e5e5] flex items-center justify-center text-[#555] hover:text-black hover:border-black transition-all"
                >
                    <FaBehance size={16} />
                </a>

                {/* LinkedIn */}
                <a
                    href="#"
                    className="w-[38px] h-[38px] rounded-full border border-[#e5e5e5] flex items-center justify-center text-[#555] hover:text-black hover:border-black transition-all"
                >
                    <FaLinkedinIn size={16} />
                </a>

                {/* Resume */}
                <a
                    href="/resume.pdf"
                    download
                    className="h-[38px] px-5 rounded-full border border-[#e5e5e5] flex items-center gap-2 text-[14px] font-medium text-[#030303] hover:border-black transition-all"
                >
                    <span>Download Resume</span>

                </a>
            </div>
        </div>
    );
}
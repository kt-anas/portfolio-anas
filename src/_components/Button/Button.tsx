export default function Button({ variant = 'default' }) {
    const isDark = variant === 'dark';

    return (
        <button
            type="button"
            className={`
                group relative overflow-hidden rounded-full
                h-[48px] px-[25px]
                flex items-center justify-center
                text-[14px] leading-[20px] font-medium
                whitespace-nowrap

                ${isDark
                    ? 'border border-white/20 bg-white text-[#030303]'
                    : 'border border-black/40 bg-[#030303] text-white'
                }

                before:absolute
                before:inset-0
                before:-translate-x-full
                before:rounded-full
                before:transition-transform
                before:duration-300
                before:ease-in-out
                before:content-['']

                ${isDark
                    ? 'before:bg-[#030303] hover:before:translate-x-0'
                    : 'before:bg-white hover:before:translate-x-0'
                }
            `}
        >
            <span className="relative z-10 flex items-center gap-[8px]">
                {/* Arrow */}
                <svg
                    className={`
                        h-[10px] w-[25px] shrink-0
                        transition-all duration-300 ease-in-out
                        group-hover:order-2

                        ${isDark
                            ? 'text-[#030303] group-hover:text-white'
                            : 'text-white group-hover:text-[#030303]'
                        }
                    `}
                    viewBox="0 0 25 10"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M18.675 9.91054L24.72 5.63362C24.806 5.56483 24.8766 5.47086 24.9255 5.36023C24.9744 5.2496 25 5.12579 25 5C25 4.87421 24.9744 4.7504 24.9255 4.63977C24.8766 4.52914 24.806 4.43518 24.72 4.36638L18.675 0.0894619C18.5572 0.0111909 18.4215 -0.0168364 18.2892 0.00979851C18.157 0.0364334 18.0358 0.116215 17.9446 0.236567C17.8535 0.356918 17.7977 0.510993 17.7859 0.674501C17.7742 0.838009 17.8072 1.00165 17.8798 1.13963L19.633 4.26665L0.598757 4.26665C0.439957 4.26665 0.287661 4.34391 0.175371 4.48144C0.0630817 4.61897 0 4.8055 0 5C0 5.1945 0.0630817 5.38103 0.175371 5.51856C0.287661 5.65609 0.439957 5.73335 0.598757 5.73335L19.633 5.73335L17.8798 8.86038C17.8072 8.99835 17.7742 9.16199 17.7859 9.3255C17.7977 9.48901 17.8535 9.64308 17.9446 9.76343C18.0358 9.88378 18.157 9.96357 18.2892 9.9902C18.4215 10.0168 18.5572 9.98881 18.675 9.91054Z"
                        fill="currentColor"
                    />
                </svg>

                {/* Text */}
                <span
                    className={`
                        transition-colors duration-300
                        ${isDark
                            ? 'text-[#030303] group-hover:text-white'
                            : 'text-white group-hover:text-[#030303]'
                        }
                    `}
                >
                    LET’S TALK
                </span>
            </span>
        </button>
    );
}
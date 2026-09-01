export default function Button() {
    return (
        <button
            type="button"
            className="
        h-[48px]
        px-[25px]
        rounded-full
        bg-[#030303]
        text-white
        flex
        items-center
        justify-center
        gap-2
        text-[14px]
        leading-[20px]
        font-medium
        whitespace-nowrap
      "
        >
            <span className="text-[18px]">→</span>
            <span>LET’S TALK</span>
        </button>
    );
}
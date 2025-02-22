
export const Input = () => {
    return (
        <div className="absolute z-50 top-0 w-[567px] h-[80px] rounded-full flex items-center bg-white px-[24px] py-[18px] gap-4">
            <img
                src="https://res.cloudinary.com/dl3wkodkk/image/upload/v1739152680/Weather%20API/search-svgrepo-com_f5yguv.svg"
                className="w-[35px] h-[35px]"
            />
            <input placeholder="Search" className="py-4 px-2 rounded-full m-10 w-full focus:outline-none text-[32px] font-semibold" />
        </div>
    )
}

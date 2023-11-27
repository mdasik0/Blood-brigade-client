
const Navbar = () => {
    return (
        <>
            <div className="max-w-[85%] mx-auto ">
                <div className="flex justify-between items-center">
                    <div className="flex items-center text-red-500 h-fit">
                        <span className="text-[58px] font-bold">B</span>
                        <div>
                            <p className="font-bold leading-5 mt-[6px]">lood</p>
                            <p className="font-semibold pb-1">rigade</p>
                        </div>
                    </div>
                    <ul className="flex gap-3 font-semibold">
                        <li className="active bg-red-500 px-3 py-1 rounded-full text-white">Home</li>
                        <li>Donars</li>
                        <li>Sign In</li>
                    </ul>
                </div>
            </div>
            <div>
                Other Navbar
            </div>
        </>
    );
};

export default Navbar;
const Header = () => {
    return(
        <nav className="w-full flex justify-between items-center py-5 px-24">
            <a href="#" className="font-bold text-2xl text-gray-800">Travel Blog</a>
            <div>
                <nav className="links">
                    <a href="#" className="text-sm text-gray-800">HOME</a>
                    <a href="#" className="text-sm text-gray-500 ml-8 hover:text-gray-800">BEST PLACES</a>
                    <a href="#" className="text-sm text-gray-500 ml-8 hover:text-gray-800">DESTINATIONS</a>
                    <a href="#" className="text-sm text-gray-500 ml-8 hover:text-gray-800">TRAVEL TIPS</a>
                    <a href="#" className="text-sm text-gray-500 ml-8 hover:text-gray-800">TRAVEL RESOURCES</a>
                </nav>
            </div>
        </nav>
    );
}

export default Header;
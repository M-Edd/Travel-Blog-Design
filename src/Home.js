import HeroImg from './heroImg.jpg';
import PlaneIcon from './planeicon.png';
import ArrowIcon from './arrowicon.png';
import DownArrow from './downarrow.png';
import UpArrow from './uparrow.png';
import MapIcon from './mapicon.jpg';
import ParisIcon from './parisicon.jpg';
import RiverIcon from './rivericon.jpg';
const Home = () => {
    return(
        <div className="h-screen">
            <div className="relative">
                <img src={HeroImg} className="w-5/6 heroimg" alt="HeroImg" />
                <div className="w-96 text-left p-8 bg-gray-700 absolute text-white top-32 right-28">
                    <div className="flex items-center">
                        <p className="font-bold text-xs">Why you should go for a trip...</p>
                        <img className="ml-1" src={PlaneIcon} alt="PlaneIcon" />
                    </div>
                    <p className="font-bold text-4xl mt-4 mb-6">Traveling is Easier than You think.</p>
                    <a href="#" className="flex items-baseline text-xs font-semibold">READ MORE <img className="ml-3" src={ArrowIcon} alt="ArrowIcon" /></a>
                </div>
                <div className="thumbnails flex justify-between items-center absolute right-0">
                    <div className="flex items-center mr-15 mt-20">
                        <a href="#" className=""><img className="ml-3" src={UpArrow} alt="ArrowIcon" /></a>
                        <a href="#" className=""><img className="ml-3" src={DownArrow} alt="ArrowIcon" /></a>
                    </div>
                    <img src={RiverIcon} className="w-56 h-40" alt="HeroImg" />
                    <img src={MapIcon} className="w-56 h-40" alt="HeroImg" />
                    <img src={ParisIcon} className="w-56 h-40" alt="HeroImg" />
                </div>
            </div>
        </div>
    );
}

export default Home;
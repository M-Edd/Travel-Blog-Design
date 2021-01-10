import PhoneIcon from './phoneicon.png';
import EmailIcon from './emailicon.png';
import TwitterIcon from './twittericon.png';
import FacebookIcon from './facebookicon.png';
import InstagramIcon from './instagramicon.png';
import YoutubeIcon from './youtubeicon.png';
import DownArrow from './downarrow.png';

const Footer = () => {
    return(
        <div className="w-full bg-gray-900 pt-24 pb-7 px-20 text-white">
            <div className="flex justify-between items-baseline">
                <div className="text-left">
                    <a href="#" className="font-bold text-2xl">Travel Blog</a>
                    <div className="flex justify-start items-baseline mt-5">
                        <img src={PhoneIcon} alt="Phone" />
                        <p className="ml-5">0628-040-783</p>
                    </div>
                    <div className="flex justify-between items-baseline">
                        <img src={EmailIcon} alt="Email" />
                        <p className="ml-5">info@Eddamoun.com</p>
                    </div>
                    <div className="flex justify-start items-center mt-5">
                        <img className="border h-5 w-5 p-1 border-white rounded-full mr-5 hover:bg-blue-400" src={TwitterIcon} alt="Twitter" />
                        <img className="border h-5 w-5 p-1 border-white rounded-full mr-5 hover:bg-red-500" src={InstagramIcon} alt="Instagram" />
                        <img className="border h-5 w-5 p-1 border-white rounded-full mr-5 hover:bg-blue-700" src={FacebookIcon} alt="Facebook" />
                        <img className="h-5 w-5 p-1 bg-red-600 rounded-full hover:bg-red-900" src={YoutubeIcon} alt="Youtube" />
                    </div>
                </div>
                <div className="text-left">
                    <a href="#" className="font-bold text-2xl">Subscribe To Our Newsletter</a>
                    <p className="mt-5">Get the best content deliverd straight into your inbox.</p>
                    <form className="mt-5 flex items-center">
                        <input className="border border-white bg-transparent pl-3 h-8 w-96" type="email" name="email" placeholder="Your email Address" />
                        <a className="p-3 bg-white hover:bg-gray-200"><img src={DownArrow} alt="Send"/></a>
                    </form>
                </div>
                <div className="text-left list-none">
                    <li className="mb-3"><a href="#" className="font-bold text-lg">HOME</a></li>
                    <li className="mb-3"><a href="#" className="text-gray-400 hover:text-white font-medium text-base">BEST PLACES</a></li>
                    <li className="mb-3"><a href="#" className="text-gray-400 hover:text-white font-medium text-base">DESTINATIONS</a></li>
                    <li className="mb-3"><a href="#" className="text-gray-400 hover:text-white font-medium text-base">TRAVEL TIPS</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white font-medium text-base">TRAVEL RESOURCES</a></li>
                </div>
            </div>
            <p className="mt-6 text-gray-600">Copyright 2021 - React Design Test - By <strong className="hover:text-white">Eddamoun</strong></p>
        </div>
    );
}

export default Footer;
import { Link } from "react-router-dom";
// shadcn components
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { MdMenu } from "react-icons/md";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
	return (
		<div className="flex items-center justify-between font-inter rounded-radius border border-gray bg-navBg px-8 py-4">
			{/* logo */}
			<Link to="/" className="flex items-center">
				<svg
					width="26"
					height="28"
					viewBox="0 0 26 28"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M19.7058 16.9781L23.6024 13.0815C23.6024 10.4095 22.9344 7.84888 21.7098 5.62224L12.6362 14.0278V28H14.3619C20.4295 28 25.3837 23.1014 25.3837 16.9781H19.7058Z"
						fill="#1570EF"
					/>
					<path
						d="M5.67793 11.0219L1.78131 14.9185C1.78131 17.5905 2.4493 20.1511 3.67396 22.3777L12.7475 13.9722V0H11.0219C4.95427 0 0 4.89861 0 11.0219H5.67793Z"
						fill="#53B1FD"
					/>
				</svg>
				<h1 className="font-inter font-semibold ml-2">
					ClearLink<span className="text-blue">.</span>
				</h1>
			</Link>
			{/* dropdowns */}
			<div className="hidden items-center lg:flex">
				{/* products */}
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuTrigger className="text-darkGray font-semibold text-lg">
								Products
							</NavigationMenuTrigger>
							<NavigationMenuContent className="w-96 px-4 py-4 border rounded-sm border-gray bg-navBg">
								<div className="w-60 text-sm">
									<ul>
										<li className="border-b border-gray pb-2 cursor-pointer duration-500 font-medium hover:text-darkGray">
											Video Conferencing Platform
										</li>
										<li className="my-4 border-b border-gray pb-2 cursor-pointer duration-500 font-medium hover:text-darkGray">
											High-Quality Video
										</li>
										<li className="mb-4 border-b border-gray pb-2 cursor-pointer duration-500 font-medium hover:text-darkGray">
											User-Friendly Interface
										</li>
										<li className="cursor-pointer duration-500 font-medium hover:text-darkGray">
											More
										</li>
									</ul>
								</div>
							</NavigationMenuContent>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
				{/* solutions */}
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuTrigger className="text-darkGray font-semibold text-lg">
								Solutions
							</NavigationMenuTrigger>
							<NavigationMenuContent className="w-96 px-4 py-4 border rounded-sm border-gray bg-navBg">
								<div className="w-60 text-sm">
									<ul>
										<li className="border-b border-gray pb-2 cursor-pointer duration-500 font-medium hover:text-darkGray">
											ClearLink Video Conferencing Solution
										</li>
										<li className="my-4 border-b border-gray pb-2 cursor-pointer duration-500 font-medium hover:text-darkGray">
											Enhanced Video Quality
										</li>
										<li className="mb-4 border-b border-gray pb-2 cursor-pointer duration-500 font-medium hover:text-darkGray">
											User-Friendly Experience
										</li>
										<li className=" border-b border-gray pb-2 mb-4 cursor-pointer duration-500 font-medium hover:text-darkGray">
											Innovation in Communication
										</li>
										<li className="cursor-pointer duration-500 font-medium hover:text-darkGray">
											Global Connectivity
										</li>
									</ul>
								</div>
							</NavigationMenuContent>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
				{/* resources */}
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuTrigger className="text-darkGray font-semibold text-lg">
								Resources
							</NavigationMenuTrigger>
							<NavigationMenuContent className="w-96 px-4 py-4 border rounded-sm border-gray bg-navBg">
								<div className="w-60 text-sm">
									<ul>
										<li className="border-b border-gray pb-2 cursor-pointer duration-500 font-medium hover:text-darkGray">
											Technical Support and Documentation
										</li>
										<li className="my-4 border-b border-gray pb-2 cursor-pointer duration-500 font-medium hover:text-darkGray">
											Customer Support
										</li>
										<li className="mb-4 border-b border-gray pb-2 cursor-pointer duration-500 font-medium hover:text-darkGray">
											Training and Onboarding
										</li>
										<li className=" border-b border-gray pb-2 cursor-pointer duration-500 font-medium hover:text-darkGray">
											Updates and Upgrades
										</li>
										<li className="my-4 border-b border-gray pb-2 cursor-pointer duration-500 font-medium hover:text-darkGray">
											Community Forums or User Groups
										</li>
										<li className="cursor-pointer duration-500 font-medium hover:text-darkGray">
											Integration Documentation
										</li>
									</ul>
								</div>
							</NavigationMenuContent>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
				<Link to="/" className="text-darkGray font-semibold text-lg">
					Pricing
				</Link>
			</div>
			<div className="hidden items-center lg:flex">
				<button className="border border-border rounded-radius bg-white text-md font-semibold px-6 py-3.5">
					Talk to sales
				</button>
				<button className="ml-4 text-white rounded-radius bg-blue text-md font-semibold px-6 py-3.5">
					Sign up for free
				</button>
			</div>
			<div className="lg:hidden">
				<MobileNavbar>
					<MdMenu className="lg:hidden" />
				</MobileNavbar>
			</div>
		</div>
	);
};

export default Navbar;

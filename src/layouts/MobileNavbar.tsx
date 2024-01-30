import { Link } from "react-router-dom";
// shadcn components
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

const MobileNavbar = ({ children }: any) => {
	return (
		<div className="flex flex-col items-center">
			<Drawer>
				<DrawerTrigger>{children}</DrawerTrigger>
				<DrawerContent className="h-96 flex flex-col items-center">
					{/* dropdowns */}
					<div className="flex flex-col items-center md:hidden">
						{/* products */}
						<NavigationMenu>
							<NavigationMenuList>
								<NavigationMenuItem className="z-50">
									<NavigationMenuTrigger className="text-darkGray font-semibold text-lg">
										Products
									</NavigationMenuTrigger>
									<NavigationMenuContent className="w-60 px-4 py-4 border rounded-sm border-gray bg-navBg z-50">
										<div className="w-full text-sm">
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
					<div className="flex items-center mt-16">
						<button className="border border-border rounded-radius bg-white text-md font-semibold px-6 py-3.5">
							Talk to sales
						</button>
						<button className="ml-4 text-white rounded-radius bg-blue text-md font-semibold px-6 py-3.5">
							Sign up for free
						</button>
					</div>
				</DrawerContent>
			</Drawer>
		</div>
	);
};

export default MobileNavbar;

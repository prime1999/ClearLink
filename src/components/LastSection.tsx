import image from "/png/mockup.png";

const LastSection = () => {
	return (
		<div className="flex flex-col justify-between mt-32 lg:flex-row">
			<div className="lg:w-[579px]">
				<h6 className="text-xl text-[#101828] font-semibold lg:text-[36px] lg:leading-normal">
					Ready to clear the path to perfect communication?
				</h6>
				<ul className="mt-8">
					<li className="flex items-center">
						<svg
							width="28"
							height="29"
							viewBox="0 0 28 29"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M8.75 14.4999L12.25 17.9999L19.25 10.9999M25.6667 14.4999C25.6667 20.9432 20.4433 26.1666 14 26.1666C7.55668 26.1666 2.33334 20.9432 2.33334 14.4999C2.33334 8.0566 7.55668 2.83325 14 2.83325C20.4433 2.83325 25.6667 8.0566 25.6667 14.4999Z"
								stroke="#175CD3"
								stroke-width="2.33333"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						<p className="ml-4 text-md font-normal text-[#475467] lg:text-2xl">
							30 days free trial
						</p>
					</li>
					<li className="flex items-center my-4">
						<svg
							width="28"
							height="29"
							viewBox="0 0 28 29"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M8.75 14.4999L12.25 17.9999L19.25 10.9999M25.6667 14.4999C25.6667 20.9432 20.4433 26.1666 14 26.1666C7.55668 26.1666 2.33334 20.9432 2.33334 14.4999C2.33334 8.0566 7.55668 2.83325 14 2.83325C20.4433 2.83325 25.6667 8.0566 25.6667 14.4999Z"
								stroke="#175CD3"
								stroke-width="2.33333"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						<p className="ml-4 text-md font-normal text-[#475467] lg:text-2xl">
							Cancel at any time
						</p>
					</li>
					<li className="mb-4 flex items-center">
						<svg
							width="28"
							height="29"
							viewBox="0 0 28 29"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M8.75 14.4999L12.25 17.9999L19.25 10.9999M25.6667 14.4999C25.6667 20.9432 20.4433 26.1666 14 26.1666C7.55668 26.1666 2.33334 20.9432 2.33334 14.4999C2.33334 8.0566 7.55668 2.83325 14 2.83325C20.4433 2.83325 25.6667 8.0566 25.6667 14.4999Z"
								stroke="#175CD3"
								stroke-width="2.33333"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						<p className="ml-4 text-md font-normal text-[#475467] lg:text-2xl">
							Access to all features
						</p>
					</li>
					<li className="flex items-center">
						<svg
							width="28"
							height="29"
							viewBox="0 0 28 29"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M8.75 14.4999L12.25 17.9999L19.25 10.9999M25.6667 14.4999C25.6667 20.9432 20.4433 26.1666 14 26.1666C7.55668 26.1666 2.33334 20.9432 2.33334 14.4999C2.33334 8.0566 7.55668 2.83325 14 2.83325C20.4433 2.83325 25.6667 8.0566 25.6667 14.4999Z"
								stroke="#175CD3"
								stroke-width="2.33333"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						<p className="ml-4 text-md font-normal text-[#475467] lg:text-2xl">
							Peronalized onboarding
						</p>
					</li>
				</ul>
				<div className="flex flex-col items-center mt-8 md:flex-row">
					<button className="w-full border border-border rounded-radius px-6 py-3.5 font-semibold text-md">
						Talk to sales
					</button>
					<button className="w-full bg-blue mt-4 text-white rounded-radius px-6 py-3.5 font-semibold text-md md:ml-4 md:mt-0">
						Start your free trial
					</button>
				</div>
			</div>
			<div className="w-full mt-4 shadow-lg relative lg:-right-6 lg:-mr-8 lg:shadow-0 lg:mt-0 lg:w-[1024px]">
				<img src={image} className="w-fulls" />
			</div>
		</div>
	);
};

export default LastSection;

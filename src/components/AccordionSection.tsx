import { useState } from "react";
import { Link } from "react-router-dom";
// shadcn component
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionSection = () => {
	const [isAccordion, setIsAccordion] = useState<string>("");
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleToggleAccordion = (value: any) => {
		setIsAccordion(value);
		setIsOpen((prevState) => !prevState);
	};

	type dataContent = {
		head: string;
		body: string;
	};

	const data: dataContent[] = [
		{
			head: "How many participants can join a ClearLink video conference?",
			body: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small teamcollaborations and large-scale webinars, ensuring you have the right fit for your needs.",
		},
		{
			head: "Can I use ClearLink on multiple devices?",
			body: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small teamcollaborations and large-scale webinars, ensuring you have the right fit for your needs.",
		},
		{
			head: "How does ClearLink ensure the security of my video conferences?",
			body: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small teamcollaborations and large-scale webinars, ensuring you have the right fit for your needs.",
		},
		{
			head: "Do I need to download any software to use ClearLink?",
			body: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small teamcollaborations and large-scale webinars, ensuring you have the right fit for your needs.",
		},
		{
			head: "What kind of customer support does ClearLink provide?",
			body: "ClearLink offers flexible meeting options. Depending on yoursubscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small teamcollaborations and large-scale webinars, ensuring you have the right fit for your needs.",
		},
	];
	return (
		<div className="flex flex-col justify-between lg:flex-row">
			<div className="w-full lg:w-[547px]">
				<p className="text-blue text-lg font-semibold">support</p>
				<h1 className="text-5xl font-semibold text-heroGray mt-2">FAQs</h1>
				<p className="mt-4 text-darkGray text-xl font-normal">
					Everything you need to know about the product and billing. Can’t find
					the answer you’re looking for? Please{" "}
					<Link to="/" className="border-b">
						chat to our friendly team.
					</Link>
				</p>
			</div>
			<div>
				<Accordion
					type="single"
					collapsible
					className="w-full border-none lg:w-[755px]"
				>
					{data.map((data) => (
						<>
							<AccordionItem
								key={data.head}
								value={data.head}
								className={`${
									isAccordion === data.head && isAccordion !== ""
										? "bg-[#F9FAFB] border border-[#EAECF0] rounded-[16px] my-4"
										: "border-[#EAECF0]"
								} p-8`}
							>
								<AccordionTrigger
									className="hover:no-underline"
									onClick={() => handleToggleAccordion(data.head)}
								>
									<p className="text-md lg:text-xl">{data.head}</p>
									{isAccordion === data.head && isOpen ? (
										<svg
											width="24"
											height="26"
											viewBox="0 0 24 26"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											className="ml-4"
										>
											<path
												d="M8 14H16M22 14C22 19.5228 17.5228 24 12 24C6.47715 24 2 19.5228 2 14C2 8.47715 6.47715 4 12 4C17.5228 4 22 8.47715 22 14Z"
												stroke="#98A2B3"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									) : isAccordion !== data.head ? (
										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											className="ml-4"
										>
											<path
												d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
												stroke="#98A2B3"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									) : (
										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											className="ml-4"
										>
											<path
												d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
												stroke="#98A2B3"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									)}
								</AccordionTrigger>
								<AccordionContent className="text-lg font-normal text-[#475467]">
									{data.body}
								</AccordionContent>
							</AccordionItem>
						</>
					))}
				</Accordion>
			</div>
		</div>
	);
};

export default AccordionSection;

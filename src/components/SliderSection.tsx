import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import SliderDesign from "./SliderDesign";

// images
import shopify from "/png/shopify.png";
import slider1 from "/png/slider1.png";
import slider2 from "/png/slider2.png";
import slider3 from "/png/slider3.png";
import slider4 from "/png/slider4.png";
import slider5 from "/png/slider5.png";
import avatar from "/png/Avatar.png";

const SliderSection = () => {
	const sliderData = [
		{
			logo: shopify,
			comment:
				"ClearLink has upgraded our remote meetings. High-quality video, screensharing, and top-notch security make it essential for our team.",
			CommenterPic: avatar,
			commenterName: "Sarah Thompson",
			commenterRole: "PRoject Mmanager, Shopify",
			images: {
				image1: slider1,
				image2: slider2,
				image3: slider3,
				image4: slider4,
				image5: slider5,
			},
		},
		{
			logo: shopify,
			comment:
				"ClearLink has upgraded our remote meetings. High-quality video, screensharing, and top-notch security make it essential for our team.",
			CommenterPic: avatar,
			commenterName: "Sarah Thompson",
			commenterRole: "PRoject Mmanager, Shopify",
			images: {
				image1: slider1,
				image2: slider2,
				image3: slider3,
				image4: slider4,
				image5: slider5,
			},
		},
	];
	return (
		<div className="w-11/12 mx-auto">
			<Carousel>
				<CarouselContent>
					{sliderData.map((data) => (
						<CarouselItem className="flex justify-between gap-12">
							<SliderDesign data={data} />
						</CarouselItem>
					))}
				</CarouselContent>
				<div className="relative w-12 mx-auto">
					<CarouselPrevious className="rounded-full" />
					<CarouselNext />
				</div>
			</Carousel>
		</div>
	);
};

export default SliderSection;

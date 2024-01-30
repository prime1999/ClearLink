import Navbar from "@/layouts/Navbar";
import bg from "/png/Background.png";
import Hero from "./Hero";

const TopSection = () => {
	return (
		<div
			style={{
				backgroundImage: `url(${bg})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}
			className="w-11/12 mx-auto py-8"
		>
			<Navbar />
			<Hero />
		</div>
	);
};

export default TopSection;

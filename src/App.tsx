import { BrowserRouter as Router } from "react-router-dom";
// components
import TopSection from "./components/TopSection";
import CompaniesSection from "./components/CompaniesSection";
import AdvatageSection from "./components/AdvatageSection";
import LastSection from "./components/LastSection";
import SliderSection from "./components/SliderSection";
import AccordionSection from "./components/AccordionSection";
import Footer from "./layouts/Footer";

const App = () => {
	return (
		<>
			<Router>
				<TopSection />
				<div className="w-11/12 mx-auto font-inter mt-8 mb-16">
					<CompaniesSection />
					<AdvatageSection />
				</div>
				<div className="bg-[#F9FAFB] py-24 font-inter">
					<SliderSection />
				</div>
				<div className="w-11/12 mx-auto font-inter mt-8">
					<AccordionSection />
					<LastSection />
				</div>
				<Footer />
			</Router>
		</>
	);
};

export default App;

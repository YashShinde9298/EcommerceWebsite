import { LiaShippingFastSolid, LiaMoneyBillWaveSolid, LiaGiftSolid } from "react-icons/lia";
import { FiPhoneCall } from "react-icons/fi";
import FeatureCard from "./FeatureCard";

const data = [
    {
        title: "Free Shipping",
        icon: <LiaShippingFastSolid />
    },
    {
        title: "Best Price Guarantee",
        icon: <LiaMoneyBillWaveSolid />
    },
    {
        title: "Free Curbside Pickup",
        icon: <LiaGiftSolid />
    },
    {
        title: "Support 24/7",
        icon: <FiPhoneCall />
    }
]

function FeatureSection() {
    return (
        <div className="container pt-16">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {data.map((ele)=> <FeatureCard key={ele.title} title={ele.title} icon={ele.icon}     />)}
            </div>
        </div>
    );
}

export default FeatureSection;
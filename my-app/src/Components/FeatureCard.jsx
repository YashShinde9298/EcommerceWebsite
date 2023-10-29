function FeatureCard({ title, icon }) {
    return (
        <div className="fle items-center gap-4">
            <div className="bg-gray-200 w-[50px] h-[50px] text-accentDark text-[24px] grid place-items-center rounded-full">
                {icon}
            </div>
            <h3 className="text-accent font-medium text-xl">{title}</h3>
            <p className="text-gray-500 text-[14px]">Lorem, ipsum dolor.</p>
        </div>
    );
}

export default FeatureCard;
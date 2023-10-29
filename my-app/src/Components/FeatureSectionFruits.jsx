import ProductCard from "./ProductCard";

const data = [
    { id: 0, img: "../../img/kiwi.jpg", name: "Kiwi", price: "$500" },
    { id: 1, img: "../../img/greenpeas.jpg", name: "Green Peas", price: "$100" },
    { id: 2, img: "../../img/tomato.jpg", name: "Tomato", price: "$100" },
    { id: 3, img: "../../img/berries.jpg", name: "Blueberries", price: "$200" }
]

function FeatureSectionFruits() {
    return (
        <div className="container pt-16">
            <div className="lg:flex justify-between items-center">
                <div>
                    <h3 className="font-medium text-2xl">Fruits & Vegetables</h3>
                    <p className="text-gray-500 mt-2">Buy farm fresh fruits and vegetables online at the best prices</p>
                </div>

                <div className="space-x-4 mt-8 lg:mt-0">
                    <button className="feature_btn">Fruits</button>
                    <button className="text-gray-500 hover:text-accent">Vegetables</button>
                    <button className="text-gray-500 hover:text-accent">Bread & Bakery</button>
                </div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
                <div>
                    <img className="w-full h-full object-cover" src={"../../img/fruitsnveges.jpg"} alt="banner" />
                </div>

                {data.map((ele) => <ProductCard key={ele.id} img={ele.img} name={ele.name} price={ele.price} />)}
            </div>
        </div>
    );
}

export default FeatureSectionFruits;
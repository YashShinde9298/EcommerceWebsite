import CategoryCard from "./CategoryCard";

const data = [
    {
        id: 0,
        name: "Fresh Fruits",
        count: "9 Products",
        img: "../../img/fruits.jpg"
    },
    {
        id: 1,
        name: "Fresh Vegetables",
        count: "8 Products",
        img: "../../img/vegetables.jpg"
    },
    {
        id: 2,
        name: "Canned Goods",
        count: "17 Products",
        img: "../../img/goods.jpg"
    },
    {
        id: 3,
        name: "Fishes",
        count: "10 Products",
        img: "../../img/fish.jpg"
    },
    {
        id: 4,
        name: "Bread and Bakery",
        count: "12 Products",
        img: "../../img/bread.jpg"
    },
    {
        id: 5,
        name: "Eggs",
        count: "2 Products",
        img: "../../img/eggs.jpg"
    },
    {
        id: 6,
        name: "Chicken",
        count: "15 Products",
        img: "../../img/chicken.jpg"
    },
    {
        id: 7,
        name: "Soft Drinks",
        count: "6 Products",
        img: "../../img/beverages.jpg"
    }
]

function Category() {
    return (<div className="container pt-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.map((ele) => <CategoryCard key={ele.id} img={ele.img} name={ele.name} count={ele.count} />)}
        </div>
    </div>);
}

export default Category;
{/*import About from "./About";
import hero from './assets/hero.png';
import ProductCard from "./ProductCard";


function Home(){
    const a = 5;
    const b = 10;
    const name = "Khushi Garg"
    const age = 19
    const login = true
    const url = "https://amazon.com"
    function greet(){
        return "Hi";
    }
    const Student ={
        name : "Khushi Garg",
        age : 19
    }
    const fruits = ["apple", "mango", "orange"];
    return(
        <>
        <h1>HOME COMPONENT</h1>
        <br />
        <h2> Number is :- {a}</h2>
        <br />
        <h2>My name is {name}.</h2>
        <p><i> Wanna go home !!</i></p>
        <br />
        <p>Sum = {a+b}</p>
        <br />
        <p>{name.toUpperCase()}</p>
        <p className = "test">Frontend react</p>
        <br />
        <label htmlFor="">NEW NEW ME</label>
        <p style={{backgroundColor : "lightcoral", color :"black"}}>Chitkara University</p> 
        {greet()}
        <br />
        <p>{Student.age}</p>
        <h2>{fruits.join(",")}</h2>

        <img src = {hero}></img>
        <a href={url}>Go to link</a>
<br />
<h2>{age>=18?"Adult":"Not adult"}</h2>
<br />
<h2>{login?<About/>:"Please login first!!"}</h2>

<h2> {login || <About/>}</h2>

<br />
 <ProductCard name ="Iphone 17" description = "Mobile Phone" price={80000} available = {true}/>
 <br />
 <ProductCard name ="Samsung Galaxy" description = "Mobile Phone" price={190000} available = {false}/>
 <br />
<ProductCard name ="Sony camera" description = "camera" price={38000} available = {false}/>      
<br />  
       <ProductCard name ="Blue jeans" description = "Camera" price={82000} available = {true}/>

<ul>
{fruits.map((fruit)=>{
    return(
        <li key = "index">{fruit}</li>
    )
})}
</ul>
</>
    )
}
export default Home;*/}

import ProductCard from "./ProductCard";
import "./Home.css";
import phone from "./assets/phone.jpg";
import laptop from "./assets/laptop.jpg";
import watch from "./assets/watch.jpg";
import headphones from "./assets/headphones.jpg";
import camera from "./assets/camera.jpg";
import shoes from "./assets/shoes.jpg";
import tshirt from "./assets/tshirt.jpg";
import jeans from "./assets/jeans.jpg";
import bag from "./assets/bag.jpg";
import tablet from "./assets/tablet.jpg";
import keyboard from "./assets/keyboard.jpg";
import mouse from "./assets/mouse.jpg";
import speaker from "./assets/speaker.jpg";
import sunglasses from "./assets/sunglasses.jpg";
import smartwatch from "./assets/smartwatch.jpg";
import jacket from "./assets/jacket.jpg";
function Home() {

    const products = [
        {
            name: "iPhone 17",
            description: "Latest Apple smartphone",
            price: 80000,
            available: true,
            image: phone
        },
        {
            name: "HP Laptop",
            description: "Powerful laptop for students",
            price: 65000,
            available: true,
            image: laptop
        },
        {
            name: "Smart Watch",
            description: "Fitness and smart watch",
            price: 5000,
            available: true,
            image: watch
        },
        {
            name: "Headphones",
            description: "Wireless headphones",
            price: 3500,
            available: false,
            image: headphones
        },
        {
            name: "Sony Camera",
            description: "Professional digital camera",
            price: 38000,
            available: true,
            image: camera
        },
        {
            name: "Running Shoes",
            description: "Comfortable sports shoes",
            price: 4500,
            available: true,
            image: shoes
        },
        {
            name: "Cotton T-Shirt",
            description: "Comfortable casual t-shirt",
            price: 999,
            available: true,
            image: tshirt
        },
        {
            name: "Blue Jeans",
            description: "Regular fit blue jeans",
            price: 1800,
            available: true,
            image: jeans
        },
        {
            name: "College Bag",
            description: "Stylish laptop backpack",
            price: 2200,
            available: false,
            image: bag
        },
        {
            name: "Android Tablet",
            description: "Portable entertainment tablet",
            price: 22000,
            available: true,
            image: tablet
        },
        {
            name: "Mechanical Keyboard",
            description: "RGB gaming keyboard",
            price: 4000,
            available: true,
            image: keyboard
        },
        {
            name: "Wireless Mouse",
            description: "Smooth wireless mouse",
            price: 1200,
            available: true,
            image: mouse
        },
        {
            name: "Bluetooth Speaker",
            description: "Portable music speaker",
            price: 2500,
            available: true,
            image: speaker
        },
        {
            name: "Sunglasses",
            description: "Stylish sunglasses",
            price: 1500,
            available: false,
            image: sunglasses
        },
        {
            name: "Smartwatch Pro",
            description: "Advanced smartwatch",
            price: 7000,
            available: true,
            image: smartwatch
        },
        {
            name: "Denim Jacket",
            description: "Classic denim jacket",
            price: 3000,
            available: true,
            image: jacket
        }
    ];

    return (
        <>
            <h1 className="title">My Product Store</h1>

            <div className="product-container">
                {products.map((product, index) => {
                    return (
                        <ProductCard
                            key={index}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            available={product.available}
                            image={product.image}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default Home;
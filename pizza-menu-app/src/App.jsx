// import { useState } from "react";

import "./App.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
// Creating components: if we want to create components in React then we must Capitalize the name of the function that is a convention
// Components does not accept more than one standalone element thats why we must nest them inside another component like a div
// Also is a really bad idea to nest components functions (Bad Practice)
// When we talk about nested components in React we are talking about declaring them in the top level scope and calling them inside JSX.

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  );
}

function Header() {
  // const style = {
  //   color: "red",
  //   fontSize: "32px",
  //   textTransform: "uppercase",
  // };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Company Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {Array.isArray(pizzas) && pizzas.length > 0 ? (
        <>
          {/*React Fragment: permits siblings renderization in jsx */}
          <p>
            Authentic italian cuisine. 6 creative dishes to choose from. All
            from our stone ove, all organic, all delicius.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are still working in our meny please come back later</p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredient="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredient="Tomato, mozarella, mushrooms"
        photoName="pizzas/funghi.jpg"
        price={12}
      /> */}
    </main>
  );
}
function Pizza({ pizzaObj }) {
  console.log(pizzaObj);

  // If we want to filter some elements inside an object we can use an if statement that returns null
  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut && "sold-out"}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  // console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("we are currently open!") else alert("Sorry we are closed");

  // if (!isOpen) return (<p>Closed</p>);

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We are currently closed! we will be more than happy to welcome you
          between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
  // 👆 if we open {} in jsx we enter in Javascript mode
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We are open from {openHour}:00 until {closeHour}:00. Come visit us or
        order Online.
      </p>
      <p>{new Date().toLocaleTimeString()}</p>
      <button className="btn">Order Now!</button>
    </div>
  );
}
// We combine small components in one big component in order to create our UI

export default App;

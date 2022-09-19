import "./App.css";
import CarCard from "./Components/CarCard";
function App() {
  return (
    <div className="App">
      <h2>E-Commerce Website</h2>
      <div className="products">
        <CarCard
          src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=452&q=80"
          model = "Hurican"
          title="Lambogini"
          price="$246,700"
        />
        <CarCard
          src="https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          model = "C- Class"
          title="Mercedes Benz"
          price="$218,500"
        />
        <CarCard
          src="https://images.unsplash.com/photo-1555353540-64580b51c258?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
          model = "Fastback"
          title="Mustang"
          price="$320,200"
        />
      </div>
    </div>
  );
}

export default App;

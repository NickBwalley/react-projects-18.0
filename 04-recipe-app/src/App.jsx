import "./App.css";

function App() {
  return (
    <div className="App">
      <main className="main_container">
        <header className="main_header">
          <div className="text-container">
            <h1 className="header-title">
              Look for <span>Banger</span> Food
            </h1>
            <p className="header-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              illo odio hic beatae ab laborum delectus aliquid. Eum, est?
              Mollitia!
            </p>
            <div className="header-input-container">
              <input type="text" placeholder="Find a recipe..." />
              <button>Search</button>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1520073201527-6b044ba2ca9f?q=80&w=1912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="main_img"
            />
          </div>
        </header>
        <section className="cards">
          <div className="card">
            <img
              src="https://thehappypear.ie/wp-content/uploads/2021/09/IMG_4780-scaled.jpg"
              alt=""
            />
            <div className="card-content">
              <h3>Poke Bowl</h3>
              <div className="card-info">
                <div className="tag">
                  <p>Romantic Dinner</p>
                </div>
              </div>
              <p className="time-text">60minutes</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

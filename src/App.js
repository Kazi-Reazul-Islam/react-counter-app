import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="container my-5 w-50">
      <div className="card text-center ">
        <div className="card-body">
          <div className="card-title my-5">
            <h1>Counter App</h1>
            <div className="card-count my-5">
              <h2>{count}</h2>
              <div className="card-button my-5">
                <button
                  className="btn btn-success mx-3"
                  onClick={() => setCount(count + 1)}
                >
                  Increment
                </button>
                <button
                  className="btn btn-warning mx-3"
                  onClick={() => setCount(count - 1)}
                  disabled={count === 0}
                >
                  Decrement
                </button>
                <button
                  className="btn btn-danger mx-3"
                  onClick={() => setCount(0)}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react";

let handleSubmit = (e) => {
  e.preventDefault();
};

function Home() {
  return (
    <div className="text-center">
      <div className="title mt-16">
        <span className="text-primary text-4xl">
          Looking for your next{" "}
          <span className="text-primary-content">drink?</span>
        </span>

        <p className="text-primary text-2xl mt-8">
          Browse through thousands of our cocktail recipes.
        </p>
      </div>

      <form
        action=""
        className="searchArea mt-8 mx-auto"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Search Cocktails"
          class="input input-bordered input-primary focus:outline-none"
        />

        <button class="btn btn-ghost text-primary relative">Search</button>
      </form>
    </div>
  );
}

export default Home;

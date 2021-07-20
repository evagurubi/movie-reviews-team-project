import { useState, useEffect } from "react";

function Movies() {
  useEffect(() => {
    const url = new URL(window.location.href);
    const code = url.searchParams.get("code");
    //console.log(code);

    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }), // if key is same as value, use it once
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // myToken
        // if (!data.token) {
        //   return history.push("/");
        // }
        localStorage.setItem("myToken", data.myToken);
        // login();

        // history.push("/"); // can be used in javascript, redirects to home like Link would (inside return), or like Redirect would
      });
  }, []);

  return (
    <div>
      <h2>Logged in</h2>
    </div>
  );
}

export default Movies;

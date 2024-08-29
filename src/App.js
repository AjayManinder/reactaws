import React, { useState } from "react";
import MovieSearch from "./Components/MovieSearch";
import Header from "./Components/Header"
import {Route, Routes,Router} from "react-router-dom"
import "./App.css";
import Home from "./Home";
class App extends React.Component {
	render() {
	return(
		<div className="App">
        {/* <div className="App-header"> */}


<Header/>
<MovieSearch/>
          {/* 
            <Route path="/" element={<Header />} />
            <Route path="/" element={<MovieSearch />} />
            // <Route path="/Home" element={<Home />} />
            
          </Routes> */}
     
      </div>
      // </div>

	);
}
}

export default App;

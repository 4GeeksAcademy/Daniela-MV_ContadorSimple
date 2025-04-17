import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div className=" text-center">
            <h1>Contador</h1>
			
			<div>
              {props.digDos}
			</div>

			<div>
              {props.digUno}
			</div>

			
		</div>
	);
};

export default Home;
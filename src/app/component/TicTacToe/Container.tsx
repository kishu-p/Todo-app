import React, { useState } from "react";
import Square from "./square";

const Container = () => {
	const [state, setState] = useState(Array(9).fill(null))
	return (
		<div className="lg:w-[800px] rounded-[40px] bg1 mx-auto p-10">
			<h1 className="text-3xl font-semibold">Tic Tac Toe Game</h1>
			<div className="pt-10">
				<div className="flex justify-center">
					<Square />
					<Square />
					<Square />
				</div>
				<div className="flex justify-center">
					<Square />
					<Square />
					<Square />
				</div>
				<div className="flex justify-center">
					<Square />
					<Square />
					<Square />
				</div>
			</div>
		</div>
	);
};

export default Container;

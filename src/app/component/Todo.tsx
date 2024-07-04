"use client";
import type React from "react";
import { useState } from "react";
import Container from "./TicTacToe/Container";
import Weather from "./WeatherApp/Weather";
import StopWatch from "./StopWatch";

const Todo = () => {
	const [count, setCount] = useState(0);
	const [input, setInput] = useState("");

	const handleInputChange = (e: {
		target: { value: React.SetStateAction<string> };
	}) => {
		setInput(e.target.value);
	};

	const handleCheckEvenOdd = () => {
		setCount(Number.parseInt(input));
	};

	return (
		<div>
			<Weather />
			<div className="lg:max-w-7xl mx-auto p-10">
				<h1 className="flex items-center justify-center text-xl font-semibold p-5">
					This will check the entered number whether the given number is even or
					odd.
				</h1>
				<div className="lg:w-[800px] rounded-[40px] bg1 mx-auto p-10">
					<h1 className="text-3xl font-semibold">Check even or odd</h1>
					<div className="">
						<div className="pt-10 text-lg font-medium">
							<p>Value: {count}</p>
							<p>Value is : {count % 2 === 0 ? "Even" : "Odd"}</p>
						</div>
						<input
							id="input-num"
							type="number"
							value={input}
							onChange={handleInputChange}
							className="text-red-500"
						/>
						<div className="flex gap-6 py-4">
							<button
								onClick={handleCheckEvenOdd}
								type="button"
								className="bg-zinc-800 hover:bg-zinc-700/40 px-4 py-2 rounded-md font-semibold"
							>
								Check Even/Odd
							</button>
							<button
								onClick={() => setCount(count + 1)}
								type="button"
								className="bg-zinc-800 hover:bg-zinc-700/40 px-4 py-2 rounded-md font-semibold"
							>
								Increment
							</button>
							<button
								onClick={() => setCount(count - 1)}
								type="button"
								className="bg-zinc-800 hover:bg-zinc-700/40 px-4 py-2 rounded-md font-semibold"
							>
								Decrement
							</button>
						</div>
					</div>
				</div>
			</div>
			<StopWatch />
			<Container />
		</div>
	);
};

export default Todo;

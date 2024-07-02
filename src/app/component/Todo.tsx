"use client";
import React, { useState } from "react";

const Todo = () => {
	const [count, setCount] = useState(0);

	return (
		<div className="lg:max-w-7xl mx-auto p-10">
			<h1 className="flex items-center justify-center text-xl font-semibold text-black p-5">
				This will check the entered number whether the given number is even or
				odd.
			</h1>
			<div className="w-[800px] rounded-[40px] bg-black mx-auto p-10">
				<h1 className="text-3xl font-semibold">Todo App</h1>
				<div className="">
					<div className="pt-10 text-lg font-medium">
						<p>Count Component : {count}</p>
						<p>Value is : {count % 2 === 0 ? "Even" : "Odd"}</p>
					</div>
					<div className="flex gap-6 py-4">
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
	);
};

export default Todo;

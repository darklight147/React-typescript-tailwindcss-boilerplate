import React from 'react';

function App() {
	return (
		<div className="">
			<header className="flex justify-center py-20">
				<div className="max-w-md rounded overflow-hidden shadow-lg">
					<div className="px-6 py-4">
						<div className="font-bold text-xl mb-2">Mohamed Belkamel</div>
						<p className="text-gray-700 text-base">
                you're ready to build your react-typescript-tailwind
						</p>
					</div>
					<div className="px-6 py-4">
						<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
							#react
						</span>
						<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
							#typescript
						</span>
						<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
							#tailwind
						</span>
					</div>
				</div>
			</header>
		</div>
	);
}

export default App;

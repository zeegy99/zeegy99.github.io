import Link from "next/link";

export default function Coursework() {
	return (
		<div className="flex justify-center w-full h-screen">
			<div className="flex flex-col justify-start mt-32 w-[700px] h-auto gap-12 ">
				<div className="flex flex-row justify-between items-center">
					<span className="font-semibold text-3xl">Coursework</span>
					<div className="flex flex-row flex-shrink-0 justify-evenly items-center text-md w-auto gap-4">
						<Link
							href="/"
							className="text-gray-400 hover:text-black"
						>
							home
						</Link>
						<Link href="/coursework" className="">
							coursework
						</Link>
						<Link
							href="/miscellaneous"
							className="text-gray-400 hover:text-black"
						>
							miscellaneous
						</Link>
					</div>
				</div>
				<div className="fade-in">
					<span className="text-lg font-medium">Textbooks:</span>
					<ul className="list-disc pl-6">
						<li>
							Analysis by Ross (
							<span className="cursor-pointer text-blue-500 hover:text-blue-400">
								<a href="/notes/Analysis_Notes.pdf">notes</a>
							</span>
							/
							<span className="cursor-pointer text-blue-500 hover:text-blue-400">
								<a href="Analysis_hw.pdf">homework</a>
							</span>
							)
						</li>

						<li>
							Stochastic Processes II by Shreeve (
							<span className="cursor-pointer text-blue-500 hover:text-blue-400">
								<a href="/notes/Shreeve_Notes.pdf">notes</a>
							</span>
							/
							<span className="cursor-pointer text-blue-500 hover:text-blue-400">
								<a href="\">homework</a>
							</span>
							)
						</li>

		
					</ul>
				</div>
				<div className="fade-in">
					<span className="text-lg font-medium">Presentations:</span>
					<ul className="list-disc pl-6">
						<li>
							Martingale (
							<span className="cursor-pointer text-blue-500 hover:text-blue-400">
								<a href="/presentations/Martingale.1.pdf">
									slides
								</a>
							</span>
							)
						</li>

						<li>
							SDE's + Applications (
							<span className="cursor-pointer text-blue-500 hover:text-blue-400">
								<a href="/presentations/Ito.pdf">
									slides
								</a>
							</span>
							)
						</li>

						<li>
							Analysis (
							<span className="cursor-pointer text-blue-500 hover:text-blue-400">
								<a href="/notes/test.pdf">
									Notes
								</a>
							</span>
							)
						</li>



						
					</ul>
				</div>
			</div>
		</div>
	);
}

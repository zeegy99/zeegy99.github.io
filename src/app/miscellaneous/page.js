import Link from "next/link";

export default function Miscellaneous() {
	return (
		<div className="flex justify-center w-full h-screen">
			<div className="flex flex-col justify-start mt-32 w-[700px] h-auto gap-12">
				<div className="flex flex-row justify-between items-center">
					<span className="text-3xl font-semibold">
						Miscellaneous
					</span>
					<div className="flex flex-row flex-shrink-0 justify-evenly items-center text-md w-auto gap-4">
						<Link
							href="/"
							className="text-gray-400 hover:text-black"
						>
							home
						</Link>
						<Link
							href="/coursework"
							className="text-gray-400 hover:text-black"
						>
							coursework
						</Link>
						<Link href="/miscellaneous" className="">
							miscellaneous
						</Link>
					</div>
				</div>
				<div className="fade-in">
					<span className="text-lg font-medium">TFT ACCOUNT:</span>
					<ul className="list-disc pl-6">
						<li>
							Student: CRITICAL #2454 RANK: BRONZ 2(
							<span className="cursor-pointer text-blue-500 hover:text-blue-400">
								<a href="https://tactics.tools/player/na/Critical/2454" target="_blank" rel="noopener noreferrer">
                                              PROFESSIONAL COACH
                                            </a>
							</span>
							/
							<span className="cursor-pointer text-blue-500 hover:text-blue-400">
								<a href="/">solutions</a>
							</span>
							)
						</li>
					</ul>
				</div>
				<div className="fade-in"></div>
			</div>
		</div>
	);
}

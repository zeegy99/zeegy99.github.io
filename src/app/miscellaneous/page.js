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
					<span className="text-lg font-medium">TFT:</span>
					<ul className="list-disc pl-6">

					<li>
						My TFT Challenger Accounts:  (
							<span className="cursor-pointer text-blue-500 hover:text-blue-400">
								<a href="https://lolchess.gg/profile/na/Ttv%20Zeegy99-NA1/set11" target="_blank" rel="noopener noreferrer">
                                              Challenger Set 6.5 Acct
                                            </a>
							</span>
							/
							<span className="cursor-pointer text-blue-500 hover:text-blue-400">
								<a href="https://lolchess.gg/profile/na/Zeegyboogydoog-NA1/set11">Zeegyboogydoog Account</a>
							</span>
							)
						</li>

						<span className="text-lg font-medium">Students (TFT) </span>
						<ul className="list-disc pl-6"></ul>
						<li>


							Student: Andrew RANK: Masters(
							<span className="cursor-pointer text-blue-500 hover:text-blue-400">
								<a href="https://tactics.tools/player/na/0pp0rtunities" target="_blank" rel="noopener noreferrer">
                                              
                                            </a>
							</span>
							/
							<span className="cursor-pointer text-blue-500 hover:text-blue-400">
								<a href="/">solutions</a>
							</span>
							)
						</li>

						<li>
							Student: FOBERT THE MUNDO ABUSER (
							<span className="cursor-pointer text-blue-500 hover:text-blue-400">
								<a href="https://www.op.gg/summoners/na/sAigroeg-NA1" target="_blank" rel="noopener noreferrer">
                                              He can't carry spandan
                                            </a>
							</span>
							
							
							)
						</li>

						<li>
							Student: Whatever27 (
							<span className="cursor-pointer text-blue-500 hover:text-blue-400">
								<a href="https://www.op.gg/summoners/na/sAigroeg-NA1" target="_blank" rel="noopener noreferrer">
                                              The goat of chess
                                            </a>
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

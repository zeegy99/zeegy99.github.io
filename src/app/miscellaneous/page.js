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
						Challenger TFT Accounts  (
							<span className="cursor-pointer text-blue-500 hover:text-blue-400">
								<a href="https://lolchess.gg/profile/na/Zeegyboogydoog-NA1/set12" target="_blank" rel="noopener noreferrer">
                                              Rank 50
                                            </a>
							</span>
							/
							<span className="cursor-pointer text-blue-500 hover:text-blue-400">
								<a href="https://lolchess.gg/profile/na/Ttv%20Zeegy99-NA1/set12">Second Acct</a>
							</span>
							)
						</li>

						
					<li>
						Twitch Stream  (
							<span className="cursor-pointer text-blue-500 hover:text-blue-400">
								<a href="https://www.twitch.tv/zeegy99" target="_blank" rel="noopener noreferrer">
                                              Zeegy99
                                            </a>
							</span>
							
							)
						</li>

					
					

					</ul>
				</div>
				<div className="fade-in"></div>
				Hey if you found this, youre pretty cool

				<div className="fade-in">
					<span className="text-lg font-medium">Chess:</span>
					<ul className="list-disc pl-6">

					<li>
						Chess.com Account  (
							<span className="cursor-pointer text-blue-500 hover:text-blue-400">
								<a href="https://www.chess.com/member/ygpei" target="_blank" rel="noopener noreferrer">
                                              chess.com
                                            </a>
							</span>
							
							)
						</li>

					<li>
						Lichess Account (
							<span className="cursor-pointer text-blue-500 hover:text-blue-400">
								<a href="https://lichess.org/@/ygpei" target="_blank" rel="noopener noreferrer">
                                              Lichess
                                            </a>
							</span>
							
							)
						</li>

						<li>
						(
							<span className="cursor-pointer text-blue-500 hover:text-blue-400">
								<a href="https://musiclab.chromeexperiments.com/Song-Maker/song/5500318625955840" target="_blank" rel="noopener noreferrer">
                                              My totally super favorite student Ethans creation
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

"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
	IconBrandGithub,
	IconBrandLinkedin,
	IconCheck,
} from "@tabler/icons-react";
import Tooltip from "@mui/material/Tooltip";

export default function Home() {
	const [isCopied, setIsCopied] = useState(false);

	const handleEmailClick = () => {
		const email = "fryuan@iu.edu";
		navigator.clipboard.writeText(email).then(() => {
			setIsCopied(true);
			setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
		});
	};
	return (
		<div className="flex justify-center w-full h-screen">
			<div className="flex flex-col justify-start mt-32 w-[700px] h-auto gap-12">
				<div className="flex flex-row justify-between items-center">
					<span className="text-3xl font-semibold">
						Fredrich Yuan
					</span>
					<div className="flex flex-row flex-shrink-0 justify-evenly items-center text-md w-auto gap-4">
						<Link href="/" className="">
							home
						</Link>
						<Link
							href="/coursework"
							className="text-gray-400 hover:text-black"
						>
							coursework
						</Link>
						<Link
							href="/miscellaneous"
							className="text-gray-400 hover:text-black"
						>
							miscellaneous
						</Link>

						<Link
							href="/projects"
							className="text-gray-400 hover:text-black"
						>
							projects
						</Link>
					</div>
				</div>
				<div className="text-md fade-in">
					Hello! Im Fred, a senior at Indiana University studying Finance, Math & CS. Im interested in NLP & Computer Vision and applications towards Finance. 
					<br />
					<br />
					Last Summer I was a ML researcher looking at space-efficient algorithms bridging computer vision and natural language representations of items.
					<br />
					<br />
					My hobbies include Chess, TFT, and Teaching math & Chess to people! 
					<br/>
					<br/>
					Leetcode: 338 solved, 187 mediums https://leetcode.com/u/zeegy99/
					<br/>
					<br/>

					Email:
					<span
						onClick={handleEmailClick}
						className="ml-2 select-text"
					>
						{isCopied ? (
							<span>
								[<span>Copied!</span>]
							</span>
						) : (
							<Tooltip title="Click to copy" arrow>
								<span className="underline cursor-pointer">
									[
									<span className="underline text-blue-500">
										fred.yuan392@gmail.com
									</span>
									]
								</span>
							</Tooltip>
						)}
					</span>
					{isCopied && (
						<IconCheck className="inline-block ml-2 text-green-500" />
					)}
				</div>
				<div className="flex flex-row justify-start items-center gap-2 fade-in">
					<div className="border-2 border-gray-100 hover:border-gray-300 transition-bg duration-300 hover:bg-gray-100 rounded-md">
						<IconBrandGithub
							size={32}
							stroke={2}
							className="hover:font-medium hover:text-black text-gray-600 p-1"
							onClick={() =>
								window.open(
									"https://github.com/zeegy99",
									"_blank"
								)
							}
						/>
					</div>
					<div className="border-2 border-gray-100 hover:border-gray-300 transition-bg duration-300 hover:bg-gray-100 rounded-md">
						<IconBrandLinkedin
							size={32}
							stroke={2}
							className="hover:font-medium hover:text-black text-gray-600 p-1"
							onClick={() =>
								window.open(
									"https://www.linkedin.com/in/fredrichyuan/",
									"_blank"
								)
							}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

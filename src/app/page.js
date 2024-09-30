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
					</div>
				</div>
				<div className="text-md fade-in">
					Hello! I am the future rank 1 + TFT Worlds winner, and I study math + finance. I primarily study probability and have gone through grad probability theory classes. 

					<br />
					<br />
					My resume:  (
							<span className="cursor-pointer text-blue-500 hover:text-blue-400">
								<a href="/notes/Fred_Yuan_Resume.pdf" target="_blank" rel="noopener noreferrer">
                                              Resume
                                            </a>
							</span>
							
							)
					
					<br />
					<br />

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
										fryuan@iu.edu
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

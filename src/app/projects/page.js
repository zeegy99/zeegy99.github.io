import Link from "next/link";

export default function Projects() {
    const projects = [
        {
            title: "Streaming Cardinality Estimation [Research]",
            date: "May 2026",
            tags: ["algorithms", "probabilistic", "nlp"],
            description:
                "Researched space-efficient algorithms for distinct element estimation in data streams, exploring probabilistic approaches to reduce memory overhead without sacrificing accuracy.",
            links: [
                {label: "Link to Github", url: "https://github.com/zeegy99/openCLIP-"}
                ],
        },
        {
            title: "MACD Backtest",
            date: "May 2026",
            tags: ["python, backtesting"],
            description:
                "An addition to Momentum from J&T 1993, looking at MACD strategy (Moving Average Convergenec Divergence) to find During longer periods or periods of general growth, the sharpe and max drawdown significantly outperforms The s&p500. ",
            links: [
                {label: "Link to Github", url: "https://github.com/zeegy99/Quant_Backtesting_Models/blob/main/MACD.ipynb"}
                ],
        },
        {
            title: "Ecommerce Website",
            date: "May 2026",
            tags: ["AWS, Stripe, Full-Stack (React/Flask), Jenkins"],
            description:
                "An ecommerce website where my younger brother sells penspinning products. Used AWS Amplify for domain hosting, EC2 for backend & configured payment authorization through stripe.",
            links: [
                {label: "Website", url: "https://main.d17idx7qvwhf3b.amplifyapp.com/"}, 
                {label: "Link to Github", url: "https://github.com/zeegy99/Frank-s-Penspinning-Website"}
                ],
        },
        {
            title: "Elon TSLA Sentiment Analysis",
            date: "March 2024",
            tags: ["Python, Webscraping"],
            description:
                "Scraped Elons Tweets to see if his tweets or sentiment of his tweets had impact on TSLA stock price",
            links: [
                {label: "Link to Github", url: "https://github.com/zeegy99/Elon-SA/tree/master"}
                ],
        },
        {
            title: "Biblios Multiplayer Game",
            date: "May 2025",
            tags: ["Render, OAuth, Full-Stack"],
            description:
                "Online version of the discontinued game Biblios",
            links: [
                {label: "Website", url: "https://playbiblios.com/"}, 
                {label: "Link to Github", url: "https://github.com/zeegy99/b_test"}
                ],
        },
        {
            title: "Discord Bot",
            date: "March 2025",
            tags: ["Python, Discord"],
            description:
                "Personalized Kpop Discord Bot that finds Kpop GIFS. !Karina",
            links: [
                {label: "Link to Github", url: "https://github.com/zeegy99/ZeegyDiscordBot"}
                ],
        },
        
        
        
        
    ];

    return (
        <div className="flex justify-center w-full h-screen">
            <div className="flex flex-col justify-start mt-32 w-[700px] h-auto gap-12">
                {/* Header */}
                <div className="flex flex-row justify-between items-center">
                    <span className="text-3xl font-semibold">Projects</span>
                    <div className="flex flex-row flex-shrink-0 justify-evenly items-center text-md w-auto gap-4">
                        <Link href="/" className="text-gray-400 hover:text-black">home</Link>
                        <Link href="/coursework" className="text-gray-400 hover:text-black">coursework</Link>
                        <Link href="/miscellaneous" className="text-gray-400 hover:text-black">miscellaneous</Link>
                        <Link href="/projects" className="">projects</Link>
                    </div>
                </div>

                {/* Project list */}
                <div className="flex flex-col gap-8 fade-in">
                    {projects.map((project, idx) => (
                        <div key={idx} className="flex flex-col gap-1 border-b border-gray-100 pb-8">
                            <div className="flex flex-row items-baseline gap-3">
                                <span className="text-lg font-semibold">#{project.title}</span>
                                <span className="text-gray-400 text-sm">{project.date}</span>
                                <div className="flex flex-row gap-1">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-xs text-blue-500">{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {project.description}
                            </p>
                            {project.links.length > 0 && (
                                <div className="flex flex-row gap-2 mt-1 text-sm">
                                    {project.links.map((link, i) => (
                                        <span key={i}>
                                            {i > 0 && <span className="text-gray-300 mr-2">·</span>}
                                            <a href={link.url} target="_blank" rel="noopener noreferrer"
                                                className="text-blue-500 hover:text-blue-400">
                                                {link.label}
                                            </a>
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
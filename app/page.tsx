import Image from 'next/image'

export default function Home() {
  return (
    <>
			<div className="h-screen w-screen flex flex-col justify-between bg-white">
				<div className="flex-grow flex flex-col items-center justify-center">
					<h1 className="text-5xl lg:text-8xl md:text-6xl sm:text-5xl text-center font-bold text-orange-500 shimmer">
						bubbly.design
					</h1>
				</div>
				<footer className="text-center pb-4">
					<p className="text-sm font-normal text-black">
						coming soon by{" "}
						<a  
							href="https://twitter.com/felpix_"
							target="new"
							className="text-blue-600 hover:text-blue-500"
						>
							felpix
						</a>
					</p>
				</footer>
			</div>
    </>
    
  )
}

import Image from 'next/image'

export default function Home() {
  return (
    <>
			<div className="h-screen w-screen flex flex-col justify-between bg-white">
				<div className="flex-grow flex flex-col items-center justify-center">
					<h1 className="text-8xl text-center font-bold text-orange-500 shimmer">
						Bubbly.Design
					</h1>
				</div>
				<footer className="text-center pb-4">
					<p className="text-sm font-normal text-black">
						Coming soon by{" "}
						<a  
							href="https://twitter.com/felpix_"
							target="new"
							className="text-blue-600 hover:text-blue-500"
						>
							Felpix
						</a>
					</p>
				</footer>
			</div>
    </>
    
  )
}

import React from 'react';

interface Props {
	media: any[];
	limit: number;
	count: number;
	offset: number;
	handleNext: () => void;
	handlePrev: () => void;
}

const MediaList: React.FC<Props> = ({ media, limit, offset, count, handleNext, handlePrev }) => {
	return <div className="bg-white">
		<div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
			<div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
				{media.map((el: any) => (
					<div key={el.id} className="group relative">
						<div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
							{el.type === "image" ? <img
								alt=' '
								src={el.src}
								className="w-full h-full object-center object-cover lg:w-full lg:h-full"
							/> : <video controls className="w-full h-full object-center object-cover lg:w-full lg:h-full">
								<source src={el.src} type="video/mp4" />
							</video>
							}
						</div>
						<div className="mt-4 flex justify-between">
							<div>
								<h3 className="text-sm text-gray-700 truncate w-28">
									<a
										href={el.src}
									>
										{el.src}
									</a>
								</h3>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
		<nav
			className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
			aria-label="Pagination"
		>
			<div className="hidden sm:block">
				<p className="text-sm text-gray-700">
					Showing <span className="font-medium">{offset}</span> to <span className="font-medium">{(offset + limit) > count ? count : (offset + limit)}</span> of{' '}
					<span className="font-medium">{count}</span> results
				</p>
			</div>
			<div className="flex-1 flex justify-between sm:justify-end">
				<button
					onClick={handlePrev}
					className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
				>
					Previous
				</button>
				<button
					onClick={handleNext}
					className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
				>
					Next
				</button>
			</div>
		</nav>
	</div>;
};

export default MediaList;

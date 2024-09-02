import Hero from '@/components/Hero';

export default function Home() {
	return (
		<main className='relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 bg-red-600'>
			<div className='max-w-7xl w-full'>
				<Hero />
			</div>
		</main>
	);
}

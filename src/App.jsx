import "./App.css";
import Card from "./kompo/Card";

function App() {
	return (
		<>
			<div className='BMW'>
				<h1>100 YEARS OF "MAKE A LIFE A RIDE" BMW MOTORAD</h1>
			</div>
			<div className='KARTICI'>
				<Card
					img='https://mcn-images.bauersecure.com/wp-images/4775/2021-bmw-c400gt.jpg'
					model='BMW C400 GT'
					price='$12,000'
					availability='Now'
				/>
				<Card
					img='https://imgcdn.oto.com/large/gallery/roadtest/67/1919/bmw-c-400-x-slant-rear-view-full-image-484708.jpg'
					model='BMW C400 X'
					price='$11,300'
					availability='Now'
				/>
				<Card
					img='https://mcn-images.bauersecure.com/wp-images/204633/1440x960/2023-bmw-m1000rr-01.jpg?mode=max&quality=90&scale=down'
					model='BMW Full carbon'
					price='$48,000'
					availability='Only order'
				/>
				<Card
					img='https://www.roadracingworld.com/wp-content/uploads/2022/05/P90462711-BMW-M-1000-RR-50-Years-M_1652910466.jpg'
					model='M Anniversary Edition '
					price='Unknown'
					availability='Direct sale'
				/>
				<Card
					img='https://images.jdmagicbox.com/quickquotes/images_main/bmw-m-1000-rr-competition-bs6-light-white-270823891-ntytu.png'
					model='BMW 1000rr'
					price='$32,000'
					availability='Now'
				/>
				<Card
					img='https://cdn.motor1.com/images/mgl/Aelz6/s1/nippy-normans-bmw-r-1800-gs-concept.jpg'
					model='BMW 1800 GS'
					price='unknown'
					availability='July 2024'
				/>
				<Card
					img='https://www.brisans.com.au/storage/temp/public/469/9c4/b81/img_e35db0f6844cd85d15a04178717b7fba_730_0_0_0_auto_webp_3bcd38d55a29be99e2b1df8409fe2bbf9386719f__730.webp'
					model='BMW S 1000 RR Race'
					price='unknown'
					availability='2024 September'
				/>
				<Card
					img='https://cdn-fastly.motorcycle.com/media/2023/06/26/11783155/media.jpg?size=1200x628'
					model='BMW C650 GT'
					price='$16,000'
					availability='Now'
				/>
			</div>
		</>
	);
}

export default App;

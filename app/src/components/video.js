import React from 'react'
import thumb from '../assets/thumb.jpg'

const Video = ({ video }) => {
	const [isVideoLoaded, setIsVideoLoaded] = React.useState(false)
	const onLoadedData = () => {
		setIsVideoLoaded(true)
	}
	return (
		<div className="container">
			<img
				src={thumb}
				className="video-thumb tiny"
				alt="thumb"
				style={{ opacity: isVideoLoaded ? 0 : 1 }}
			/>
			<video
				autoPlay
				playsInline
				muted
				loop
				src={video}
				onLoadedData={onLoadedData}
				style={{ opacity: isVideoLoaded ? 1 : 0 }}
			/>
		</div>
	)
}
export default Video
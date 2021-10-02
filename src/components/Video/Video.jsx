import React from 'react'
import videoBtn from '../../img/video/video-btn.png'

const Video = () => {
	return (
		<section className='video'>
			<div className='video-wrap'>
				<div className='video-wrap-cloud'>
					<div className='video-cloud'>
						Школа нового поколения. Наша авторская методика обучения по <br />
						технологии SMART позволяет достичь 100% вовлечения учеников <br />в
						изучаемый материал.
					</div>
				</div>
				<div className='video-btn'>
					<a href='/'>
						<div className='video-img'>
							<img src={videoBtn} alt='video-btn' />
						</div>
						<div className='video-text'>
							<div>Смотреть</div>
							<br />
							<div>видео</div>
						</div>
					</a>
				</div>
			</div>
		</section>
	)
}

export default Video

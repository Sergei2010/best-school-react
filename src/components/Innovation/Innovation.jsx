import React from 'react'
import switchLeft from '../../img/innovation/innovation-slider-switch-left.png'
import switcRight from '../../img/innovation/innovation-slider-switch-right.png'
import elipse_1 from '../../img/choose/choose-elipse-1.png'
import elipse_2 from '../../img/choose/choose-elipse-2.png'

const Innovation = () => {
	return (
		<section className='innovation'>
			<div className='innovation-wrap'>
				<div className='innovation-grid'>
					<div className='innovation-grid-header'>
						<p>5D-ЭФФЕКТ</p>
						<p>ДЛЯ БЫСТРОГО ПРОГРЕССА</p>
					</div>
					<div className='innovation-grid-info'>
						<div className='innovation-grid-info-left'>
							<div className='innovation-grid-info-left-text'>
								<p>1D - ИННОВАЦИОННОСТЬ</p>
								<p>SMART-ТЕХНОЛОГИИ</p>
								<p>
									Технологическое оснащение кабинетов <br />
									позволяет использовать мультимедиа <br />
									вместо тетрадей, а масштабные <br />
									проекции создают атмосферу <br />
									настоящего кинотеатра. <br />
								</p>
							</div>
						</div>
						<div className='innovation-grid-info-rigth'>
							<div className='innovation-grid-info-slider'>
								<div className='innovation-grid-info-slider-left'>
									<a href='/'>
										<img src={switchLeft} alt='switch-left' />
									</a>
								</div>
								<div className='innovation-grid-info-slider-main'></div>
								<div className='innovation-grid-info-slider-right'>
									<a href='/'>
										<img src={switcRight} alt='switch-right' />
									</a>
								</div>
							</div>
							<div className='innovation-grid-info-slider-bottom'>
								<a href='/'>
									<img src={elipse_1} alt='elipse1' />
								</a>
								<a href='/'>
									<img src={elipse_2} alt='elipse2' />
								</a>
								<a href='/'>
									<img src={elipse_2} alt='elipse2' />
								</a>
								<a href='/'>
									<img src={elipse_2} alt='elipse2' />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Innovation

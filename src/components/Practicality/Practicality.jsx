import React from 'react'
import switchLeft from '../../img/individuality/individuality-slider-switch-left.png'
import switchRight from '../../img/individuality/individuality-slider-switch-right.png'
import elipse_1 from '../../img/choose/choose-elipse-1.png'
import elipse_2 from '../../img/choose/choose-elipse-2.png'

const Practicality = () => {
	return (
		<section className='practicality'>
			<div className='practicality-wrap'>
				<div className='practicality-grid'>
					<div className='practicality-grid-info'>
						<div className='practicality-grid-info-left'>
							<div className='practicality-grid-info-left-text'>
								<p>5D - ПРАКТИЧНОСТЬ</p>
								<p>
									LIFE-CLUB - ЯЗЫК В ПОВСЕДНЕВНОЙ <br />
									ЖИЗНИ
								</p>
								<p>
									Мы организовываем квесты, спортивные <br />
									мероприятия на английском, а так же <br />
									выездные занятия после изучения <br />
									каждой темы для практики языка в <br />
									естественной среде и снижения уровня <br />
									стеснения среди англоговорящих. <br />
								</p>
							</div>
						</div>
						<div className='practicality-grid-info-right'>
							<div className='practicality-grid-info-slider'>
								<div className='practicality-grid-info-slider-left'>
									<a href='/'>
										<img src={switchLeft} alt='switch-left' />
									</a>
								</div>
								<div className='practicality-grid-info-slider-main'></div>
								<div className='practicality-grid-info-slider-right'>
									<a href='/'>
										<img src={switchRight} alt='switch-right' />
									</a>
								</div>
							</div>
							<div className='practicality-grid-info-slider-bottom'>
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

export default Practicality

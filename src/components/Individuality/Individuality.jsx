import React from 'react'
import switchLeft from '../../img/individuality/individuality-slider-switch-left.png'
import switchRight from '../../img/individuality/individuality-slider-switch-right.png'
import elipse_1 from '../../img/choose/choose-elipse-1.png'
import elipse_2 from '../../img/choose/choose-elipse-2.png'

const Individuality = () => {
	return (
		<section className='individuality'>
			<div className='individuality-wrap'>
				<div className='individuality-grid'>
					<div className='individuality-grid-info'>
						<div className='individuality-grid-info-left'>
							<div className='individuality-grid-info-slider'>
								<div className='individuality-grid-info-slider-left'>
									<a href='/'>
										<img src={switchLeft} alt='switch-left' />
									</a>
								</div>
								<div className='individuality-grid-info-slider-main'></div>
								<div className='individuality-grid-info-slider-right'>
									<a href='/'>
										<img src={switchRight} alt='switch-right' />
									</a>
								</div>
							</div>
							<div className='individuality-grid-info-slider-bottom'>
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
						<div className='individuality-grid-info-rigth'>
							<div className='individuality-grid-info-right-text'>
								<p>2D - ИНДИВИДУАЛЬНОСТЬ</p>
								<p>МИНИ-ГРУППЫ 3-6 ЧЕЛОВЕК</p>
								<p>
									Наиболее эффективная наполняемость <br />
									групп по результатам международных <br />
									исследований составляет 3-6 человек. За счёт <br />
									этого сохраняется индивидуальный подход и <br />
									максимально присутствует практика языка <br />
									между друг другом. <br />
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Individuality

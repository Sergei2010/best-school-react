import React from 'react'
import switchLeft from '../../img/individuality/individuality-slider-switch-left.png'
import switchRight from '../../img/individuality/individuality-slider-switch-right.png'
import elipse_1 from '../../img/choose/choose-elipse-1.png'
import elipse_2 from '../../img/choose/choose-elipse-2.png'

const Versatility = () => {
	return (
		<section className='versatility'>
			<div className='versatility-wrap'>
				<div className='versatility-grid'>
					<div className='versatility-grid-info'>
						<div className='versatility-grid-info-left'>
							<div className='versatility-grid-info-left-text'>
								<p>3D - УНИВЕРСАЛЬНОСТЬ</p>
								<p>СООТВЕТСТВИЕ ФГОС и CAMBRIDGE</p>
								<p>
									Школа BEST реализует обучение <br />
									по уникальной авторской методике, <br />
									которая полностью интегрирована со <br />
									SMART технологиями и соответствует <br />
									требованиям школьной программы <br />
									и международному стандарту <br />
									CAMBRIDGE. <br />
								</p>
							</div>
						</div>
						<div className='versatility-grid-info-right'>
							<div className='versatility-grid-info-slider'>
								<div className='versatility-grid-info-slider-left'>
									<a href='/'>
										<img src={switchLeft} alt='switch-left' />
									</a>
								</div>
								<div className='versatility-grid-info-slider-main'></div>
								<div className='versatility-grid-info-slider-right'>
									<a href='/'>
										<img src={switchRight} alt='switch-right' />
									</a>
								</div>
							</div>
							<div className='versatility-grid-info-slider-bottom'>
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

export default Versatility

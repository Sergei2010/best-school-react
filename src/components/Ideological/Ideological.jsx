import React from 'react'
import switchLeft from '../../img/individuality/individuality-slider-switch-left.png'
import switchRight from '../../img/individuality/individuality-slider-switch-right.png'
import elipse_1 from '../../img/choose/choose-elipse-1.png'
import elipse_2 from '../../img/choose/choose-elipse-2.png'

const Ideological = () => {
	return (
		<section className='ideological'>
			<div className='ideological-wrap'>
				<div className='ideological-grid'>
					<div className='ideological-grid-info'>
						<div className='ideological-grid-info-left'>
							<div className='ideological-grid-info-slider'>
								<div className='ideological-grid-info-slider-left'>
									<a href='/'>
										<img src={switchLeft} alt='switch-left' />
									</a>
								</div>
								<div className='ideological-grid-info-slider-main'></div>
								<div className='ideological-grid-info-slider-right'>
									<a href='/'>
										<img src={switchRight} alt='switch-right' />
									</a>
								</div>
							</div>
							<div className='ideological-grid-info-slider-bottom'>
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
						<div className='ideological-grid-info-rigth'>
							<div className='ideological-grid-info-right-text'>
								<p>4D - ИДЕЙНОСТЬ</p>
								<p>
									ИНТЕРАКТИВНЫЕ ПУТЕШЕСТВИЯ <br />И ЖИВЫЕ ГЕРОИ
								</p>
								<p>
									Современные кабинеты стилистически <br />
									оформлены под атмосферу разных стран, <br />
									чтобы учащиеся максимально <br />
									прочувствовали традиции народов мира и <br />
									увидели сказки и мифы в реальном времени <br />
									в процессе изучения английского языка. <br />
									Это интересно! <br />
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Ideological

import React from 'react'
import choose_1_3 from '../../img/choose/choose-btn-1-3.png'
import choose_4_6 from '../../img/choose/choose-btn-4-6.png'
import choose_1_2 from '../../img/choose/choose-btn-1-2.png'
import choose_3 from '../../img/choose/choose-btn-3.png'
import choose_4 from '../../img/choose/choose-btn-4.png'
import choose_5_6 from '../../img/choose/choose-btn-5-6.png'
import choose_7 from '../../img/choose/choose-btn-7.png'
import choose_8 from '../../img/choose/choose-btn-8.png'
import choose_9 from '../../img/choose/choose-btn-9.png'
import choose_10 from '../../img/choose/choose-btn-10.png'
import choose_11 from '../../img/choose/choose-btn-11.png'
import choose_turism from '../../img/choose/choose-btn-turism-english.png'
import choose_summer_winter from '../../img/choose/choose-btn-summer-winter-camp.png'
import choose_video from '../../img/choose/choose-video.png'
import choose_slider_switch_left from '../../img/choose/choose-slider-switch-left.png'
import choose_slider_switch_right from '../../img/choose/choose-slider-switch-right.png'
import choose_elipse_1 from '../../img/choose/choose-elipse-1.png'
import choose_elipse_2 from '../../img/choose/choose-elipse-2.png'

const Choose = () => {
	return (
		<section className='choose'>
			<div className='choose-wrap'>
				<div className='choose-grid'>
					<div className='choose-grid-header'>
						<span>ВЫБИРАЙ ОБУЧЕНИЕ ПОД КОНКРЕТНЫЙ</span>
						<span> ВОЗВРАСТ И ИНТЕРЕСЫ</span>
					</div>
					<form action='./js/choose.js' className='choose-grid-filter'>
						<div>
							<a href='/'>
								<img src={choose_1_3} alt='1-3-year-old' />
							</a>
						</div>
						<div>
							<a href='/'>
								<img src={choose_4_6} alt='4-6-year-old' />
							</a>
						</div>
						<div>
							<a href='/'>
								<img src={choose_1_2} alt='1-2className' />
							</a>
						</div>
						<div>
							<a href='/'>
								<img src={choose_3} alt='3className' />
							</a>
						</div>
						<div>
							<a href='/'>
								<img src={choose_4} alt='4className' />
							</a>
						</div>
						<div>
							<a href='/'>
								<img src={choose_5_6} alt='5-6className' />
							</a>
						</div>
						<div>
							<a href='/'>
								<img src={choose_7} alt='7className' />
							</a>
						</div>
						<div>
							<a href='/'>
								<img src={choose_8} alt='8className' />
							</a>
						</div>
						<div>
							<a href='/'>
								<img src={choose_9} alt='9className' />
							</a>
						</div>
						<div>
							<a href='/'>
								<img src={choose_10} alt='10className' />
							</a>
						</div>
						<div>
							<a href='/'>
								<img src={choose_11} alt='11className' />
							</a>
						</div>
						<div>
							<a href='/'>
								<img src={choose_turism} alt='turism-english' />
							</a>
						</div>
						<div>
							<a href='/'>
								<img src={choose_summer_winter} alt='summer-winter-camp' />
							</a>
						</div>
					</form>
					<div className='choose-grid-info'>
						<div className='choose-grid-info-left'>
							<div className='choose-grid-info-left-text'>
								<h2>ПОЧЕМУ СТОИТ НАЧАТЬ</h2>
								<p>
									Ваш малыш - гений. Ведь до 3-х лет <br />
									дети осваивают колосальный объём <br />
									информации, благодаря высокой <br />
									активности мозга. Для ребёнка одинаково <br />
									новой является информация на любых <br />
									языках мира, включая родной. Будет <br />
									звучать вокруг два языка - малыш выучит <br />
									два, а будет пять - выучит пять.
								</p>
							</div>
							<div className='choose-grid-info-left-link'>
								<a href='/'>
									<img src={choose_video} alt='btn-video' />
									<p>Смотреть видео</p>
								</a>
							</div>
						</div>
						<div className='choose-grid-info-rigth'>
							<div className='choose-grid-info-slider'>
								<div className='choose-grid-info-slider-left'>
									<a href='/'>
										<img src={choose_slider_switch_left} alt='switch-left' />
									</a>
								</div>
								<div className='choose-grid-info-slider-main'></div>
								<div className='choose-grid-info-slider-right'>
									<a href='/'>
										<img src={choose_slider_switch_right} alt='switch-right' />
									</a>
								</div>
							</div>
							<div className='choose-grid-info-slider-bottom'>
								<a href='/'>
									<img src={choose_elipse_1} alt='elipse1' />
								</a>
								<a href='/'>
									<img src={choose_elipse_2} alt='elipse2' />
								</a>
								<a href='/'>
									<img src={choose_elipse_2} alt='elipse2' />
								</a>
								<a href='/'>
									<img src={choose_elipse_2} alt='elipse2' />
								</a>
							</div>
						</div>
					</div>
					<button className='choose-grid-btn'>Помочь выбрать курс?</button>
				</div>
			</div>
		</section>
	)
}

export default Choose

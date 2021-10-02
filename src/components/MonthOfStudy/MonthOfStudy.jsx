import React from 'react'
import switchLeft from '../../img/individuality/individuality-slider-switch-left.png'
import switchRight from '../../img/individuality/individuality-slider-switch-right.png'
import btn1 from '../../img/month-of-study/month-of-study-grid-slider-bottom-btn1.png'
import btn2 from '../../img/month-of-study/month-of-study-grid-slider-bottom-btn2.png'
import btn3 from '../../img/month-of-study/month-of-study-grid-slider-bottom-btn3.png'

const MonthOfStudy = () => {
	return (
		<section className='month-of-study'>
			<div className='month-of-study-wrap'>
				<div className='month-of-study-grid'>
					<div className='month-of-study-grid-header'>
						<span>МЕСЯЦ ОБУЧЕНИЯ В</span>
						<span>10 ФОТО</span>
						<p>
							Ненавижу английский в школе. Опять получил 3! Родители недовольны
							...
						</p>
					</div>
					<div className='month-of-study-grid-info'>
						<div className='month-of-study-grid-slider'>
							<div className='month-of-study-grid-slider-left'>
								<a href='/'>
									<img src={switchLeft} alt='switch-left' />
								</a>
							</div>
							<div className='month-of-study-grid-slider-main'></div>
							<div className='month-of-study-grid-slider-right'>
								<a href='/'>
									<img src={switchRight} alt='switch-right' />
								</a>
							</div>
						</div>
						<div className='month-of-study-grid-slider-bottom'>
							<a href='/'>
								<img src={btn1} alt='step1' />
							</a>
							<a href='/'>
								<img src={btn2} alt='step2' />
							</a>
							<a href='/'>
								<img src={btn3} alt='step3' />
							</a>
							<a href='/'>
								<img src={btn2} alt='step2' />
							</a>
							<a href='/'>
								<img src={btn3} alt='step3' />
							</a>
							<a href='/'>
								<img src={btn2} alt='step2' />
							</a>
							<a href='/'>
								<img src={btn3} alt='step3' />
							</a>
							<a href='/'>
								<img src={btn2} alt='step2' />
							</a>
							<a href='/'>
								<img src={btn3} alt='step3' />
							</a>
							<a href='/'>
								<img src={btn2} alt='step2' />
							</a>
							<a href='/'>
								<img src={btn3} alt='step3' />
							</a>
						</div>
					</div>
					<div className='month-of-study-grid-footer'>
						<p></p>
						<p>По каким учебникам проводятся занятия?</p>
						<p>
							Школа BEST реализует обучение по уникальной аиторской методике,
							которая полностью <br />
							интегрирована со SMART технологиями. Авторская программа полностью
							соответствует <br />
							требованиям школьной программы и международному стандарту
							CAMBRIDGE.
						</p>
					</div>
					<button className='month-of-study-grid-btn'>
						Задать свой вопрос
					</button>
				</div>
			</div>
		</section>
	)
}

export default MonthOfStudy

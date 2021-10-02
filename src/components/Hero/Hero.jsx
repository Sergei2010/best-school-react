import React from 'react'
import listDown from '../../img/hero/list-down.png'

const Hero = () => {
	return (
		<div className='hero'>
			<div className='hero-wrap'>
				<div className='hero-left'>
					<div className='hero-list-down'>
						<a href='/'>
							<img src={listDown} alt='list-down' />
						</a>
					</div>
				</div>
				<div className='hero-right'>
					<h1>
						<p>ГОВОРИ ПО-АНГЛИЙСКИ,</p>
						<p>ПОКА ДРУГИЕ</p>
						<p>ОБ ЭТОМ МЕЧТАЮТ</p>
					</h1>
					<h3>
						<p>Инновационное обучение</p>
						<p>с 5-D эффектом</p>
					</h3>
					<button className='hero-btn'>Записаться бесплатно</button>
				</div>
			</div>
		</div>
	)
}

export default Hero

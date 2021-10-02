import React from 'react'
import switchLeft from '../../img/individuality/individuality-slider-switch-left.png'
import switchRight from '../../img/individuality/individuality-slider-switch-right.png'
import mainSwitch from '../../img/reviews/reviews-slider-main-switch.png'
import sliderList1 from '../../img/reviews/reviews-slider-list1.png'
import sliderList2 from '../../img/reviews/reviews-slider-list2.png'
import reviews from '../../img/reviews/reviews-body.png'

const Reviews = () => {
	return (
		<section className='reviews'>
			<div className='reviews-wrap'>
				<div className='reviews-header'>
					<p>
						<span>ОТЗЫВЫ</span> ДОВОЛЬНЫХ УЧЕНИКОВ И <br />
						ИХ РОДИТЕЛЕЙ
					</p>
				</div>
				<div className='reviews-slider'>
					<div className='reviews-slider-switch-left'>
						<a href='/'>
							<img src={switchLeft} alt='switch-left' />
						</a>
					</div>
					<div className='reviews-slider-main'>
						<div className='reviews-slider-main-1'>
							<a href='/'>
								<img src={mainSwitch} alt='main-switch' />
							</a>
						</div>
						<div className='reviews-slider-main-2'>
							<a href='/'>
								<img src={mainSwitch} alt='main-switch' />
							</a>
						</div>
						<div className='reviews-slider-main-3'>
							<a href='/'>
								<img src={mainSwitch} alt='main-switch' />
							</a>
						</div>
					</div>
					<div className='reviews-slider-switch-right'>
						<a href='/'>
							<img src={switchRight} alt='switch-right' />
						</a>
					</div>
					<div className='reviews-slider-list'>
						<a href='/'>
							<img src={sliderList1} alt='slider-list1' />
						</a>
						<a href='/'>
							<img src={sliderList2} alt='slider-list2' />
						</a>
						<a href='/'>
							<img src={sliderList2} alt='slider-list2' />
						</a>
						<a href='/'>
							<img src={sliderList2} alt='slider-list2' />
						</a>
					</div>
				</div>
				<div className='reviews-body'>
					<img src={reviews} alt='reviews-body' />
				</div>
				<button className='reviews-btn'>Читать больше отзывов</button>
			</div>
		</section>
	)
}

export default Reviews

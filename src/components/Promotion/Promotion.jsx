import React from 'react'

const Promotion = () => {
	return (
		<section className='promotion'>
			<div className='container'>
				<div className='promotion-grid'>
					<div className='promotion-grid-header'>
						<div>
							<h4>
								74% людей, подавших заявку на пробный урок,
								<br />
								начинают регулярные занятия
							</h4>
						</div>
					</div>
					<div className='promotion-grid-tel'>
						<input type='tel' placeholder='Введите ваш телефон' />
					</div>
					<div className='promotion-grid-name'>
						<input
							type='text'
							className='promotion-name'
							placeholder='Введите ваше имя'
						/>
					</div>
					<button className='promotion-grid-btn'>Записаться бесплатно</button>
					<div className='promotion-grid-footer'>
						<div></div>
						<h4>
							Нажимая кнопку "Заказать консультацию", я даю согласие <br />
							на обработку моих персональных данных
						</h4>
					</div>
					<a href='/' className='promotion-grid-link'>
						<div></div>
					</a>
				</div>
			</div>
		</section>
	)
}

export default Promotion

import React from 'react'

const Promotion2 = () => {
	return (
		<section className='promotion2'>
			<div className='container'>
				<div className='promotion2-grid'>
					<div className='promotion2-header'>
						<div>
							<h4>Заполните форму и мы свяжемся с Вами в течении часа</h4>
						</div>
					</div>
					<div className='promotion2-tel'>
						<input type='tel' placeholder='Введите ваш телефон' />
					</div>
					<div className='promotion2-name'>
						<input
							type='text'
							className='promotion-name'
							placeholder='Введите ваше имя'
						/>
					</div>
					<button className='promotion2-btn'>Записаться бесплатно</button>
					<div className='promotion2-footer'>
						<div></div>
						<h4>
							Нажимая кнопку "Заказать консультацию", я даю согласие <br />
							на обработку моих персональных данных
						</h4>
					</div>
					<div className='promotion2-link'>
						<a href='/'>promotion</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Promotion2

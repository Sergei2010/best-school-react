import React from 'react'

const Form = () => {
	return (
		<section className='form'>
			<div className='container'>
				<div className='form-grid'>
					<div className='form-grid-email'>
						<input type='email' placeholder='Укажите почту' />
					</div>
					<button className='form-grid-btn'>Записаться бесплатно</button>
					<div className='form-grid-rectangel'>
						<div></div>
					</div>
					<div className='form-grid-footer'>
						<h4>
							Нажимая кнопку "Заказать консультацию", я даю согласие <br />
							на обработку моих персональных данных
						</h4>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Form

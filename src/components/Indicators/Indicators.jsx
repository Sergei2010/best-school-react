import React from 'react'

const Indicators = () => {
	return (
		<section className='indicators'>
			<div className='container'>
				<div className='indicators-wrap'>
					<div className='indicators-item'>
						<h1 className='indicators-size'>4,7</h1>
						<h3 className='indicators-name'>
							средний <br />
							школьный бал
						</h3>
					</div>
					<div className='indicators-item'>
						<h1 className='indicators-size'>5</h1>
						<h3 className='indicators-name'>филиалов</h3>
					</div>
					<div className='indicators-item'>
						<h1 className='indicators-size'>3516</h1>
						<h3 className='indicators-name'>выпусников</h3>
					</div>
					<div className='indicators-item'>
						<h1 className='indicators-size'>С 1 года</h1>
						<h3 className='indicators-name'>занятия</h3>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Indicators

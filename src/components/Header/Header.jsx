import React from 'react'
import logo from '../../img/header/logo.png'
import chevron from '../../img/header/chevron.png'
import phone from '../../img/header/phone.png'

const Header = () => {
	return (
		<section className='header-hero-wrap'>
			<header className='header'>
				<div className='header-wrap'>
					<section className='header-info'>
						<p className='logo-img'>
							<img src={logo} alt='logo' />
						</p>
						<p className='logo-info'>
							Школа иностранных
							<br />
							языков
						</p>
						<div className='logo-city'>
							<p>ВЫБЕРИТЕ ГОРОД</p>
							<nav>
								<ul className='topmenu'>
									<li>
										<a href='/'>
											<table>
												<tbody>
													<tr>
														<td>МОСКВА</td>
														<td>
															<img src={chevron} alt='chevron' />
														</td>
													</tr>
												</tbody>
											</table>
										</a>
										<ul className='submenu'>
											<li>
												<a href='/'>САНКТ-ПЕТЕРБУРГ</a>
											</li>
											<li>
												<a href='/'>КАЛИНИНГРАД</a>
											</li>
											<li>
												<a href='/'>ТЮМЕНЬ</a>
											</li>
											<li>
												<a href='/'>КУРСК</a>
											</li>
										</ul>
									</li>
								</ul>
							</nav>
						</div>
					</section>
					<section className='header-phone'>
						<p className='phone-icon'>
							<a href='/'>
								<img src={phone} alt='phone' />
							</a>
						</p>
						<p className='phone-num'>
							<span>наш телефон:</span>
							<br />
							+79 222 597 222
						</p>
						<button className='header-phone-btn'>Заказать звонок</button>
					</section>
				</div>
			</header>
		</section>
	)
}

export default Header

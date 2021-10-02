import React from 'react'
import footerLink from '../../img/footer/footer-link.png'
import footerLogo from '../../img/footer/footer-logo.png'
import footerVk from '../../img/footer/footer-vk.png'
import footerIns from '../../img/footer/footer-ins.png'
import footerCall from '../../img/footer/footer-call.png'

const Footer = () => {
	return (
		<footer className='footer'>
			<nav>
				<a href='/'>
					<img src={footerLink} alt='link' />
				</a>
				<p className='footer-up'>НАВЕРХ</p>
			</nav>
			<nav>
				<section className='footer-logo'>
					<a href='/'>
						<img src={footerLogo} alt='footer-logo' />
					</a>
					<p>
						Школа иностранных
						<br />
						языков
					</p>
				</section>
				<section className='footer-networks'>
					<p>
						Следуйте за
						<br />
						нашими новостями
					</p>
					<p className='footer-networks-icons'>
						<a href='/' name='vk'>
							<img src={footerVk} alt='vk' />
						</a>
						<a href='/' name='ins'>
							<img src={footerIns} alt='ins' />
						</a>
					</p>
				</section>
				<section className='footer-call'>
					<a href='/' name='call'>
						<img src={footerCall} alt='call' />
					</a>
					<p className='footer-call-info'>
						<span>&nbsp;&nbsp;НАШ ТЕЛЕФОН:</span>
						<br />
						+79 222 597 222
					</p>
					<button className='footer-btn'>Заказать звонок</button>
				</section>
			</nav>
		</footer>
	)
}

export default Footer

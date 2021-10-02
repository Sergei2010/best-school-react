import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.sass'

const NavBar = () => {
	return (
		<header className='header'>
			<div className='navbar'>
				<div className='container'>
					<div className='navbar-wrap'>
						<Link to='/'>О школе</Link>
						<Link to='/choose'>Курсы</Link>
						<Link to='/advantages'>Преимущества</Link>
						<Link to='/monthOfStudy'>Процесс</Link>
						<Link to='/awards'>Достижения</Link>
						<Link to='/reviews'>Отзывы</Link>
					</div>
				</div>
			</div>
		</header>
	)
}

export default NavBar

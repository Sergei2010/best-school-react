import { Route, Switch } from 'react-router-dom'
import NavBar from '../NavBar'
import MainPage from '../MainPage'
import Choose from '../Choose'
import MonthOfStudy from '../MonthOfStudy'
import Awards from '../Awards'
import Reviews from '../Reviews'
import Advantages from '../Advantages'
import Footer from '../Footer'

function App() {
	return (
		<div className='container'>
			<NavBar />
			<Switch>
				<Route path='/' exact component={MainPage} />
				<Route path='/awards' component={Awards} />
				<Route path='/reviews' component={Reviews} />
				<Route path='/choose' component={Choose} />
				<Route path='/advantages' component={Advantages} />
				<Route path='/monthOfStudy' component={MonthOfStudy} />
			</Switch>
			<Footer />
		</div>
	)
}

export default App

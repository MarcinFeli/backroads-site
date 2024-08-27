import logo from '../images/logo.svg'
import { pageLinks, socialLinks } from './data'
import { SocialLink } from '../types/types'
import PageLinks from './PageLinks'

const Nav = () => {
	return (
		<nav className='navbar'>
			<div className='nav-center'>
				<div className='nav-header'>
					<img src={logo} className='nav-logo' alt='backroads' />
					<button type='button' className='nav-toggle' id='nav-toggle'>
						<i className='fas fa-bars'></i>
					</button>
				</div>
				<PageLinks pageLinks={pageLinks} />
				<ul className='nav-icons'>
					{socialLinks.map((link: SocialLink) => (
						<li key={link.id}>
							<a href={link.href} target='_blank' className='nav-icon'>
								<i className={link.icon}></i>
							</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	)
}

export default Nav

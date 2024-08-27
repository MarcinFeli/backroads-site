import { PageLink } from '../types/types'

interface PageLinksProps {
    pageLinks: PageLink[]
}
const PageLinks: React.FC<PageLinksProps> = ({ pageLinks }) => {
	return (
		<ul className='nav-links' id='nav-links'>
			{pageLinks.map(link => (
				<li key={link.id}>
					<a href={link.href} className='nav-link'>
						{link.text}
					</a>
				</li>
			))}
		</ul>
	)
}

export default PageLinks

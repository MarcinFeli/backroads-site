import Titles from './Titles'
import { articles } from './data'
import { Article } from '../types/types'
const Services = () => {
	return (
		<section className='section services' id='services'>
			<Titles title='our' subtitle='services' />
			<div className='section-center services-center'>
				{articles.map((article: Article) => {
					const { id, icon, title, text } = article
					return (
						<article key={id} className='service'>
							<span className='service-icon'>
								<i className={icon}></i>
							</span>
							<div className='service-info'>
								<h4 className='service-title'>{title}</h4>
								<p className='service-text'>{text}</p>
							</div>
						</article>
					)
				})}
			</div>
		</section>
	)
}

export default Services

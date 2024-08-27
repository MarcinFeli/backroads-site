import Titles from './Titles'
import { tours } from './data'
import { Tour } from '../types/types'
const Tours = () => {
	return (
		<section className='section' id='tours'>
			<Titles title='our' subtitle='tours' />
			<div className='section-center featured-center'>
				{tours.map((tour: Tour) => {
					const { id, name, date, img, info, country, days, price } = tour
					return (
						<article key={id} className='tour-card'>
							<div className='tour-img-container'>
								<img src={img} className='tour-img' alt='' />
								<p className='tour-date'>{date}</p>
							</div>
							<div className='tour-info'>
								<div className='tour-title'>
									<h4>{name}</h4>
								</div>
								<p>{info}</p>
								<div className='tour-footer'>
									<p>
										<span>
											<i className='fas fa-map'></i>
										</span>{' '}
										{country}
									</p>
									<p>{days} days</p>
									<p>from ${price}</p>
								</div>
							</div>
						</article>
					)
				})}
			</div>
		</section>
	)
}

export default Tours

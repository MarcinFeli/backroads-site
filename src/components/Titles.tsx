import { Title } from '../types/types'
const Titles = ({ title, subtitle }: Title) => {
	return (
		<div className='section-title'>
			<h2>
				{title} <span>{subtitle}</span>
			</h2>
		</div>
	)
}

export default Titles

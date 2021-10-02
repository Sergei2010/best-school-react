import React from 'react'
import aboutTechnology from '../../img/awards/awards-about-school-technology.png'
import aboutCollective from '../../img/awards/awards-about-school-collective.png'
import aboutResults from '../../img/awards/awards-about-school-results.png'
import aboutMethodology from '../../img/awards/awards-about-school-methodology.png'
import certificateAll from '../../img/awards/awards-certificate-all.png'
import awardsAll from '../../img/awards/awards-all.png'

const Awards = () => {
	return (
		<section className='awards'>
			<div className='awards-container'>
				<div className='awards-about-school'>
					<img src={aboutTechnology} alt='school-technology' />
					<img src={aboutMethodology} alt='school-methodology' />
					<img src={aboutCollective} alt='school-collective' />
					<img src={aboutResults} alt='school-results' />
				</div>
				<div className='awards-certificate'>
					<p>
						<span>КОМПЕТЕНТНОСТЬ,</span> ПОДТВЕРЖДЁННАЯ ОФИЦИАЛЬНО
					</p>
					<img src={certificateAll} alt='certificate-all' />
				</div>
				<div className='awards-awards'>
					<div className='awards-title'>
						<p>
							<span>НАГРАДЫ И ДОСТИЖЕНИЯ,</span> КОТОРЫМИ МЫ ГОРДИМСЯ
						</p>
						<img src={awardsAll} alt='awards-all' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Awards

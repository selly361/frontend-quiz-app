import { subjectsData } from 'Constants/subjectsData'

function SubjectIcon({ index }) {
	const { Icon, class: className, label } = subjectsData[index]

	return (
		<div className='subject-icon'>
			<div className={`subject-icon__icon-container ${className}`}>
				<Icon />
			</div>
			<h2 className='subject-icon__label'>{label}</h2>
		</div>
	)
}

export default SubjectIcon

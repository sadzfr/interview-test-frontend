import Switch from './Switch'



function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

interface Props {
	selected: any;
	setSelected: any;
	publishingOptions: any;
}

const SwitchContainer: React.FC<Props> = ({ selected, setSelected, publishingOptions }) => {

	return (
		<Switch
			selected={selected}
			setSelected={setSelected}
			classNames={classNames}
			publishingOptions={publishingOptions}
		/>
	)
}

export default SwitchContainer;
export const decorators = [
	(Story) => {
		import('../src/styles/global.scss')

		return <Story />
	}
];

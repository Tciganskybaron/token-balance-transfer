export const validateValue = (val: string) => {
		return !isNaN(Number(val)) && Number(val) > 0;
	};

import predicateType from './predicateType';

const createPredicate = <T>(
	predicate: predicateType<T> = x => !!x
): ((item: T) => boolean) | undefined => {
	let fn;
	if (typeof predicate === 'string') {
		fn = (item: T) => !!(item as any)[predicate];
	} else if (Array.isArray(predicate)) {
		fn = (item: T) => (item as any)[predicate[0]] === predicate[1];
	} else if (typeof predicate === 'object') {
		fn = (item: T) => {
			return Object.keys(predicate).every(
				v => !(v in predicate) || (item as any)[v] === predicate[v]
			);
		};
	} else if (typeof predicate === 'function') {
		fn = predicate;
	}
	return fn;
};

export default createPredicate;

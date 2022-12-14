import applyArrayFn from '../helpers/applyArrayFn';

const flatMapDeep = <T>(collection: T, iteratee: any): T => {
	return applyArrayFn({
		collection: collection,
		fnName: 'map',
		iteratee: iteratee,
	}).flat(Infinity);
};

export default flatMapDeep;

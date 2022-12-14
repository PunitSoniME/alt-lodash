import createPredicate from '../helpers/createPredicate';
import predicateType from '../helpers/predicateType';

/**
 *
 * @param collection
 * @param predicate
 * @returns
 */
const dropWhile = <T>(collection: T[], predicate: predicateType<T>): T[] => {
	const fn = createPredicate(predicate);

	for (let i = 0; i < collection.length; i++) {
		if (!(fn as any)(collection[i])) {
			return collection.slice(i);
		}
	}

	return collection;
};

export default dropWhile;

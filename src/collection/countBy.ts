import predicateType from '../util/predicateType';
import prepareObject, { prepareObjectTypes } from '../util/prepareObject';

const countBy = <T>(collection: T[], predicate: predicateType<T>): Object => {
	const { result } = prepareObject(
		collection,
		predicate,
		prepareObjectTypes.count
	);
	return result;
};

export default countBy;

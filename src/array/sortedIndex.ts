import baseSortedIndex from '../helpers/baseSortedIndex';

const sortedIndex = <T>(collection: T[], value: T): number =>
	baseSortedIndex(collection, value);

export default sortedIndex;

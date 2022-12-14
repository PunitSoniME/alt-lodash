import _clamp from 'lodash/clamp';
import { clamp } from '../../src/number';

describe('Number', () => {
	describe('clamp', () => {
		it('clamp(-10, -5, 5)', () => {
			expect(clamp(-10, -5, 5)).toEqual(_clamp(-10, -5, 5));
		});

		it('clamp(10, -5, 5)', () => {
			expect(clamp(10, -5, 5)).toEqual(_clamp(10, -5, 5));
		});
	});
});

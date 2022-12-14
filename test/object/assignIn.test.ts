import _assignIn from 'lodash/assignIn';
import { assignIn } from '../../src/object';

function Foo() {
	//	@ts-ignore
	this.a = 1;
}
function Bar() {
	//	@ts-ignore
	this.c = 3;
}
Foo.prototype.b = 2;
Bar.prototype.d = 4;

describe('Object', () => {
	describe('assignIn', () => {
		it('assignIn({ a: 0 }, new (Foo as any), new (Bar as any))', () => {
			expect(
				assignIn({ a: 0 }, new (Foo as any)(), new (Bar as any)())
			).toEqual(_assignIn({ a: 0 }, new (Foo as any)(), new (Bar as any)()));
		});
	});
});

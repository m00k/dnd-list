import { move } from './util';

describe('util', () => {
    describe('move()', () => {
        const list = [
            'first',
            'second',
            'third',
            'fourth',
            'fifth',
        ];

        describe('when to > from should move an item', () => {
            it('from index 0 to 1', () => {
                const expected = [
                    'second',
                    'first',
                    'third',
                    'fourth',
                    'fifth',
                ];
                const actual = move(list, 0, 1);
                expect(actual).toEqual(expected);
            });
    
            it('from index 1 to 2', () => {
                const expected = [
                    'first',
                    'third',
                    'second',
                    'fourth',
                    'fifth',
                ];
                const actual = move(list, 1, 2);
                expect(actual).toEqual(expected);
            });
    
            it('from index 0 to 3', () => {
                const expected = [
                    'second',
                    'third',
                    'fourth',
                    'first',
                    'fifth',
                ];
                const actual = move(list, 0, 3);
                expect(actual).toEqual(expected);
            });
    
            it('from index 1 to 3', () => {
                const expected = [
                    'first',
                    'third',
                    'fourth',
                    'second',
                    'fifth',
                ];
                const actual = move(list, 1, 3);
                expect(actual).toEqual(expected);
            });
        });

        describe('when from > to should move an item', () => {
            it('from index 4 to 3', () => {
                const expected = [
                    'first',
                    'second',
                    'third',
                    'fifth',
                    'fourth',
                ];
                const actual = move(list, 4, 3);
                expect(actual).toEqual(expected);
            });

            it('from index 4 to 2', () => {
                const expected = [
                    'first',
                    'second',
                    'fifth',
                    'third',
                    'fourth',
                ];
                const actual = move(list, 4, 2);
                expect(actual).toEqual(expected);
            });

            it('from index 3 to 1', () => {
                const expected = [
                    'first',
                    'fourth',
                    'second',
                    'third',
                    'fifth',
                ];
                const actual = move(list, 3, 1);
                expect(actual).toEqual(expected);
            });

            it('from last to first', () => {
                const expected = [
                    'fifth',
                    'first',
                    'second',
                    'third',
                    'fourth',
                ];
                const actual = move(list, 4, 0);
                expect(actual).toEqual(expected);
            });
        });

        describe('when from === to should return the list as is', () => {
            expect(move(list, 3, 3)).toEqual(list);
        });
    });
});
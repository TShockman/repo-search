import {selectBookmarksState} from '../selectors';
import {NAME} from '../actions';

test('selectBookmarksState selects correct state subportion', () => {
  const mockState = {
    [NAME]: 'correct',
    otherStuff: 'wrong'
  };

  expect(selectBookmarksState(mockState)).toBe('correct');
});
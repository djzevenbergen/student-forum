import editingReducer from '../../reducers/editing-reducer';

describe("editingReducer", () => {


  test('Should editing state to true', () => {
    expect(editingReducer(false, { type: 'ADD_POST' })).toEqual(true);
  });
});
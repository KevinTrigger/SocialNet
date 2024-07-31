import { classNames } from "./classNames";


describe('classNames', () => {
  test('with empty params', () => {
    const expected = ''
    expect(classNames('', {}, [])).toBe(expected);
  })
  test('with only 1 param', () => {
    const expected = 'testClass'
    expect(classNames('testClass')).toBe(expected);
  })
  test('with 2 params (class + mods)', () => {
    const expected = 'myClass hovered testProp';
    expect(classNames('myClass', {hovered: true, checked: false, testProp: true})).toBe(expected);
  })
  test('with 2 params + (class + additional)', () => {
    const expected = 'myClass mockCl newCl';
    expect(classNames('myClass', {}, ['mockCl', 'newCl'])).toBe(expected);
  })
  test('with 2 params + empty additional', () => {
    const expected = 'myClass checked testProp'; 
    expect(classNames('myClass', {hovered: false, checked: true, testProp: true}, [])).toBe(expected);
  })
})  
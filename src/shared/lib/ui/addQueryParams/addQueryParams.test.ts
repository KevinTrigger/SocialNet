import { getQueryParams } from "./addQueryParams";

describe('shared/url/addQueryParams', () => {
  test('with 1 param', () => {
    const params = getQueryParams({
      myParam: '5'
    })
    expect(params).toBe(`?myParam=5`);
  })

  test('with 2 params', () => {
    const params = getQueryParams({
      myParam: '5',
      size: 'small'
    })
    expect(params).toBe(`?myParam=5&size=small`);
  })

  test('with 3 params', () => {
    const params = getQueryParams({
      myParam: '5',
      size: 'small',
      view: 'bigInt'
    })
    expect(params).toBe(`?myParam=5&size=small&view=bigInt`);
  })

  test('with empty params', () => {
    const params = getQueryParams({})
    expect(params).toBe(`?`);
  })

  test('with one of params - undefined', () => {
    const params = getQueryParams({
      myParam: '5',
      size: undefined
    })
    expect(params).toBe(`?myParam=5`);
  })
})  
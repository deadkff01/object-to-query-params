import objectToQueryParams from '../src';

describe('objectToQueryParams tests', () => {
  test('test object transform', () => {
    const object = {
      name: 'testname',
      password: 'qwerty',
    };
    expect(objectToQueryParams(object)).toEqual(
      'name=testname&password=qwerty'
    );
  });

  test('test more object props transform', () => {
    const object = {
      name: 'testname',
      lastName: 'testlastname',
      password: 'qwerty',
      type: 'user',
    };
    expect(objectToQueryParams(object)).toEqual(
      'name=testname&lastName=testlastname&password=qwerty&type=user'
    );
  });

  test('test URI prop encoding', () => {
    const object = {
      name: 'test name',
      lastName: 'some lastname',
    };

    console.log(objectToQueryParams(object));
    expect(objectToQueryParams(object)).toEqual(
      'name=test%20name&lastName=some%20lastname'
    );
  });
});

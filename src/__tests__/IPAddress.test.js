import {IPAddress} from '../IPAddress.js';

describe('IPAddress - base class', () => {
  test('Abstract class - constructor test', () => {
    expect(() => {
      new IPAddress('some-ip-address');
    }).toThrow(
      '"IPAddress" is an abstract class, please use "IPv4Address" or "IPv6Address"'
    );
  });
});

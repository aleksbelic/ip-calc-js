import {IPAddress} from '../IPAddress.js';

describe('IPAddress', () => {
  test('0.0.0.0 to binary format', () => {
    const ip = new IPAddress('0.0.0.0');
    expect(ip.toBinary()).toBe('00000000.00000000.00000000.00000000');
  });

  test('255.255.255.255 to binary format', () => {
    const ip = new IPAddress('255.255.255.255');
    expect(ip.toBinary()).toBe('11111111.11111111.11111111.11111111');
  });

  test('192.168.1.1 to binary format', () => {
    const ip = new IPAddress('192.168.1.1');
    expect(ip.toBinary()).toBe('11000000.10101000.00000001.00000001');
  });
});

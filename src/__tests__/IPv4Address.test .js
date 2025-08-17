import {IPv4Address} from '../IPv4Address.js';

describe('IPv4 address', () => {
  test('0.0.0.0 to binary format', () => {
    const ipv4AddressObj = new IPv4Address('0.0.0.0');
    expect(ipv4AddressObj.toBinary()).toBe(
      '00000000.00000000.00000000.00000000'
    );
  });

  test('255.255.255.255 to binary format', () => {
    const ipv4AddressObj = new IPv4Address('255.255.255.255');
    expect(ipv4AddressObj.toBinary()).toBe(
      '11111111.11111111.11111111.11111111'
    );
  });

  test('192.168.1.1 to binary format', () => {
    const ipv4AddressObj = new IPv4Address('192.168.1.1');
    expect(ipv4AddressObj.toBinary()).toBe(
      '11000000.10101000.00000001.00000001'
    );
  });

  test('10.54.3.127 to hex format', () => {
    const ipv4AddressObj = new IPv4Address('10.54.3.127');
    expect(ipv4AddressObj.toHex()).toBe('0a36037f');
  });

  test('0A36037F to decimal format', () => {
    const ipv4AddressObj = IPv4Address.fromHex('0a36037f');
    expect(ipv4AddressObj.toString()).toBe('10.54.3.127');
  });
});

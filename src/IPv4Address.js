import {IPAddress} from './IPAddress.js';

export class IPv4Address extends IPAddress {
  /**
   * Create an IPv4 address instance.
   * @param {string} address - IPv4 address in dotted-decimal format (e.g., "192.168.0.14")
   * @throws {Error} If the address is not well-formed.
   */
  constructor(address) {
    super(address);
    this.address = address;
    if (this.isValid() === false) {
      throw new Error('Invalid IPv4 address format');
    }
  }

  /**
   * Validate whether the IPv4 address is well-formed.
   * @returns {boolean}
   */
  isValid() {
    const octets = this.address.split('.');
    return (
      octets.length === 4 &&
      octets.every(octet => {
        const num = parseInt(octet, 10);
        return num >= 0 && num <= 255 && !isNaN(num);
      })
    );
  }

  /**
   * Convert the IPv4 address to binary representation.
   * @returns {string} - Binary format (e.g., "11000000.10101000.00000001.00000001")
   */
  toBinary() {
    return this.address
      .split('.')
      .map(o => parseInt(o, 10).toString(2).padStart(8, '0'))
      .join('.');
  }

  /**
   * Convert the IPv4 address to hexadecimal representation.
   * @returns {string} - Hex format (e.g., "c0:a8:01:01")
   */
  toHex() {
    return this.address
      .split('.')
      .map(o => parseInt(o, 10).toString(16).padStart(2, '0'))
      .join(':');
  }

  /**
   * Create an IPv4 address instance from a binary string.
   * @param {string} binary - Binary IPv4 address (e.g., "11000000.10101000.00000001.00000001")
   * @returns {IPAddress}
   */
  static fromBinary(binary) {
    return new IPv4Address(
      binary
        .split('.')
        .map(o => parseInt(o, 2).toString(10))
        .join('.')
    );
  }

  /**
   * Create an IPv4 address instance from a hexadecimal string.
   * @param {string} hex - Hexadecimal IPv4 address (e.g., "c0:a8:01:01")
   * @returns {IPAddress}
   */
  static fromHex(hex) {
    return new IPv4Address(
      hex
        .split(':')
        .map(o => parseInt(o, 16).toString(10))
        .join('.')
    );
  }
}

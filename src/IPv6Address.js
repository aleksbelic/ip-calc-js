// src/ip/IPv6Address.js
import {IPAddress} from './IPAddress.js';

export class IPv6Address extends IPAddress {
  /**
   * Create an IPv6 address instance.
   * @param {string} address - IPv6 address in hexadecimal format (e.g., "2001:0db8::1")
   * @throws {InvalidArgumentException} If the address is not well-formed.
   */
  constructor(address) {
    super(address);
    this.address = address;
    if (this.isValid() === false) {
      throw new InvalidArgumentException('Invalid IPv6 address format');
    }
    this.address = this.toHex();
  }

  /**
   * Validate whether the IPv6 address is well-formed.
   * @returns {boolean}
   */
  isValid() {
    return /^(([0-9a-fA-F]{1,4}:){1,7}([0-9a-fA-F]{1,4}|:)|::)$/.test(
      this.address
    );
  }

  /**
   * Convert the IPv6 address to its binary representation.
   *
   * Each 16-bit block (hexadecimal, separated by `:`) is converted
   * to binary and padded to 16 bits. Empty blocks from zero-compression (`::`)
   * are treated as zeros.
   * @returns {string} Binary representation of the IPv6 address.
   * @example
   * "2001:0db8::1" →
   * "0010000000000001:0000110110111000:0000000000000000:0000000000000000:0000000000000000:0000000000000000:0000000000000000:000000000000000
   */
  toBinary() {
    return this.address
      .split(':')
      .map(block =>
        parseInt(block || '0', 16)
          .toString(2)
          .padStart(16, '0')
      )
      .join(':');
  }

  /** @returns {string} */
  toHex() {
    return this.address
      .split(':')
      .map(block => block.padStart(4, '0'))
      .join(':');
  }

  /** @returns {IPv6Address} */
  static fromBinary(binary) {
    return new IPv6Address(
      binary
        .split(':')
        .map(b => parseInt(b, 2).toString(16))
        .join(':')
    );
  }
}

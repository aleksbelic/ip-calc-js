export class IPAddress {
  /**
   * @param {string} address - IPv4 address in dotted-decimal format (e.g., "192.168.1.1")
   */
  constructor(address) {
    /** @private */
    this.address = address;
  }

  /**
   * Return the IPv4 address as a string.
   * @returns {string}
   */
  toString() {
    return this.address;
  }

  /**
   * Convert the IPv4 address to binary representation.
   * @returns {string} - Binary format (e.g., "11000000.10101000.00000001.00000001")
   */
  toBinary() {
    return this.address
      .split('.')
      .map(octet => parseInt(octet, 10).toString(2).padStart(8, '0'))
      .join('.');
  }

  /**
   * Convert the IPv4 address to hexadecimal representation.
   * @returns {string} - Hex format (e.g., "c0:a8:01:01")
   */
  toHex() {
    return this.address
      .split('.')
      .map(octet => parseInt(octet, 10).toString(16).padStart(2, '0'))
      .join(':');
  }

  /**
   * Validate whether the IPv4 address is well-formed.
   * @returns {boolean}
   */
  isValid() {
    const octets = this.address.split('.');
    if (octets.length !== 4) return false;
    return octets.every(octet => {
      const num = parseInt(octet, 10);
      return !isNaN(num) && num >= 0 && num <= 255;
    });
  }

  /**
   * Create an IPAddress instance from a binary string.
   * @param {string} binary - Binary IPv4 address (e.g., "11000000.10101000.00000001.00000001")
   * @returns {IPAddress}
   */
  static fromBinary(binary) {
    const octets = binary
      .split('.')
      .map(octet => parseInt(octet, 2).toString(10));
    return new IPAddress(octets.join('.'));
  }

  /**
   * Create an IPAddress instance from a hexadecimal string.
   * @param {string} hex - Hexadecimal IPv4 address (e.g., "c0:a8:01:01")
   * @returns {IPAddress}
   */
  static fromHex(hex) {
    const octets = hex
      .split(':')
      .map(octet => parseInt(octet, 16).toString(10));
    return new IPAddress(octets.join('.'));
  }
}

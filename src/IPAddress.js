export class IPAddress {
  constructor() {
    if (new.target === IPAddress) {
      throw new Error(
        '"IPAddress" is an abstract class, please use "IPv4Address" or "IPv6Address"'
      );
    }
  }

  /**
   * Must be implemented in derived classes.
   * @returns {string}
   */
  toBinary() {
    throw new Error('Method "toBinary()" must be implemented in subclass');
  }

  /**
   * Must be implemented in derived classes.
   * @returns {string}
   */
  toHex() {
    throw new Error('Method "toHex()" must be implemented in subclass');
  }

  /**
   * Must be implemented in derived classes.
   * @returns {boolean}
   */
  isValid() {
    throw new Error('Method "isValid()" must be implemented in subclass');
  }
}

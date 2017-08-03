/** @flow */
/* eslint no-restricted-syntax: [2, "class"] */

/**
 * Calorie Object
 * @typedef {Object} Calorie
 * @property {number} value - a numerical value for a Calorie.
 */
type Calorie = number;

/**
 * TrainingVolume Object
 * @typedef {Object} TrainingVolume
 * @property {Calorie} base - Indicates a base training volume.
 * @property {Calorie} light - Indicates a light training volume.
 * @property {Calorie} mediun - Indicates a medium training volume.
 * @property {Calorie} heavy - Indicates a heavy training volume.
 *
 */
export type TrainingVolume = {
  base ?: Calorie,
  light ?: Calorie,
  medium ?: Calorie,
  heavy ?: Calorie
}

/**
 * Class representing a Training Volume
 *
 * @private
 */
export default class Volume {
  base: Calorie;
  light: Calorie;
  medium: Calorie;
  heavy: Calorie;

  /**
   * @param  {TrainingVolume} init
   * @returns Volume
   */
  constructor(init ?: TrainingVolume) {
    const input = init !== undefined ? init : {};
    this.base = input.base || 0;
    this.light = input.light || 0;
    this.medium = input.medium || 0;
    this.heavy = input.heavy || 0;
  }


  /**
   * Convert an generic Object into a Volume.
   *
   * @static
   * @param {any} obj
   * @returns @this
   *
   * @memberOf Volume
   */
  static fromObject(obj): * {
    return new this(obj);
  }


  /**
   * Convert an Array into a Volume
   *
   * @static
   * @param {Array<any>} input
   * @returns null
   *
   * @memberOf Volume
   */
  static fromArray(input: Array<any>): * {
    const result = {};
    input.forEach((i) => {
      result[i[0]] = i[1];
    });
    return this.fromObject(result);
  }


  /**
   * Get the Volume's value; "base", "light", "medium", "heavy".
   *
   * @param {string} value
   * @returns {number}
   *
   * @memberOf Volume
   */
  get(value: string): number {
    switch (value) {
      case 'base':
        return this.base;
      case 'light':
        return this.light;
      case 'medium':
        return this.medium;
      case 'heavy':
        return this.heavy;
      default:
        return 0;
    }
  }

  /**
   * Convert Volume to Array.
   *
   * @returns {Array<any>}
   *
   * @memberOf Volume
   */
  toArray(): Array<any> {
    return Object.keys(this).map((key) => [key, this.get(key)]);
  }

  /**
   * Returns Array of Volume key parameters.
   *
   * @returns {Array<string>}
   *
   * @memberOf Volume
   */
  keys(): Array<string> {
    return Object.keys(this);
  }

  /**
   * Returns Array of Volume values.
   *
   * @returns {Array<any>}
   *
   * @memberOf Volume
   */
  values(): Array<any> {
    return Object.values(this);
  }

  /**
   * Returns Array of Volume key: values.
   *
   * @returns {Array<any>}
   *
   * @memberOf Volume
   */
  entries(): Array<any> {
    return Object.entries(this);
  }
}

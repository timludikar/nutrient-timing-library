/** @flow */

import { Profile } from '../../src/models';

describe('Profile model', () => {
  it('initializes', () => {
    const profile = new Profile();
    expect(profile).toBeDefined();
  });

  it('converts centimeters to inches', () => {
    const profile = new Profile();
    profile.addHeightInCM(187.96);
    expect(profile.height).toBeCloseTo(74);
  });

  it('converts feet to inches', () => {
    const profile = new Profile();
    profile.addHeightInFeet(6, 2);
    expect(profile.height).toBeCloseTo(74, 0);
  });

  it('converts Kgs to Lbs', () => {
    const profile = new Profile();
    profile.addWeightInKg(97.72);
    expect(profile.weight).toBeCloseTo(215, 0);
  });

  it('can be set to male', () => {
    const profile = new Profile();
    profile.setMale();
    expect(profile.sex).toEqual('m');
  });

  it('can be set to female', () => {
    const profile = new Profile();
    profile.setFemale();
    expect(profile.sex).toEqual('f');
  });
});

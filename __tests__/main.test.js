/** @flow */
import { Models, Services, Profile } from '../src';

describe('library interface', () => {
  it('has Profile end-point', () => {
    expect(Profile).toBeInstanceOf(Function);
  });

  it('has Models Object', () => {
    expect(Models).toBeInstanceOf(Object);
  });

  it('Models Object has Calories', () => {
    expect(Models.Calories).toBeDefined();
    expect(Models.Calories).toBeInstanceOf(Function);
  });

  it('Models Object has Nutrient', () => {
    expect(Models.Nutrient).toBeDefined();
    expect(Models.Nutrient).toBeInstanceOf(Function);
  });

  it('Models Object has Protein', () => {
    expect(Models.Protein).toBeDefined();
    expect(Models.Protein).toBeInstanceOf(Function);
  });

  it('Models Object has Carbohydrate', () => {
    expect(Models.Carbohydrate).toBeDefined();
    expect(Models.Carbohydrate).toBeInstanceOf(Function);
  });

  it('Models Object has Fat', () => {
    expect(Models.Fat).toBeDefined();
    expect(Models.Fat).toBeInstanceOf(Function);
  });

  it('has Service Object', () => {
    expect(Services).toBeInstanceOf(Object);
  });

  it('Service Object has BMR', () => {
    expect(Services.bmr).toBeDefined();
    expect(Services.bmr).toBeInstanceOf(Object);
    expect(Services.bmr.calculate).toBeInstanceOf(Function);
  });

  it('Service Object has macros', () => {
    expect(Services.macros).toBeDefined();
    expect(Services.macros).toBeInstanceOf(Object);
    expect(Services.macros.calculateCarbohydrate).toBeInstanceOf(Function);
    expect(Services.macros.calculateFat).toBeInstanceOf(Function);
    expect(Services.macros.calculateProtein).toBeInstanceOf(Function);
  });
});

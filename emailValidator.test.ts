import { validateEmail } from './emailValidator';

describe('Email Validator', () => {
  test("Doit retourner false si l'email ne contient pas de @", () => {
    expect(validateEmail('toto.com')).toBe(false);
  });

  test("Doit retourner false si pas de point après l'arobase", () => {
    expect(validateEmail('toto@gmailcom')).toBe(false);
  });

  test('Doit retourner false si le point est le tout dernier caractère', () => {
    expect(validateEmail('toto@gmail.com.')).toBe(false);
  });

  test('Doit retourner true pour un email valide classique', () => {
    expect(validateEmail('toto@gmail.com')).toBe(true);
  });

  test("Doit retourner false si l'email contient des espaces", () => {
    expect(validateEmail('toto @gmail.com')).toBe(false);
    expect(validateEmail('toto@gmail.com ')).toBe(false);
  });

  test("Doit retourner false s'il n'y a rien avant l'arobase", () => {
    expect(validateEmail('@gmail.com')).toBe(false);
  });

  test("Doit retourner false s'il n'y a rien après l'arobase", () => {
    expect(validateEmail('toto@')).toBe(false);
  });
});

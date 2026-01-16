import { validateEmail } from './emailValidator';

describe('Email Validator', () => {
    test('Doit retourner false si l\'email ne contient pas de @', () => {
        expect(validateEmail("toto.com")).toBe(false);
    });
});
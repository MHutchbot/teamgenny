const Intern = require('../lib/Intern.js')

describe('When an intern object is created', () => {
    let paco;
    beforeEach(() => {
        paco = new Intern("Paco Osuna", 1111, 'PACO@gmail.com', 'U of Amazon')
    });
    test('Create an intern Object', () => {
        expect(paco.name).toEqual(expect.any(String));
        expect(paco.id).toEqual(expect.any(Number));
        expect(paco.email).toBe('paco@gmail.com');
        expect(paco.school).toBe('U of Nowhere);
    })

    describe('When a school is created', () => {
        let paco;
        beforeEach(() => {
            paco = new Intern("Paco Osuna", 1111, 'paco@gmail.com', 'U of Amazon')
        });
        test('Get school', () => {
            expect(george.getSchool()).toEqual(expect.stringContaining('U of Amazon'));
        })
    })

    describe('When an intern role is created', () => {
        let paco;
        beforeEach(() => {
            paco = new Intern("Paco Osuna", 1111, 'pacosuna@gmail.com', 'U of Amazon')
        });
        test('Get intern role', () => {
            expect(paco.getRole()).toEqual(expect.stringContaining('Intern'));
        })
    })
})
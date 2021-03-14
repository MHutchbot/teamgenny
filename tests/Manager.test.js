const Manager = require('../lib/Manager.js')

describe('When an manager object is created', () => {
    let AS;
    beforeEach(() => {
        AS = new Manager("Arnold Schwarzeneggar", 9999, 'AS@hotmail.com', '3105557777')
    });
    test('Create an manager Object', () => {
        expect(as.name).toEqual(expect.any(String));
        expect(as.id).toEqual(expect.any(Number));
        expect(as.email).toBe('AS@hotmail.com');
        expect(as.office).toEqual(expect.any(String));
    })

    describe('When a office number is created', () => {
        let as;
        beforeEach(() => {
            as = new Manager("Big Red", 9999, 'as@gmail.com', '310-555-8787')
        });
        test('Get office number', () => {
            expect(as.getOffice()).toEqual(expect.any(String));
        })
    })

    describe('When an manager role is created', () => {
        let AS;
        beforeEach(() => {
            AS = new Manager("AS", 9999, 'AS@hotmail.com', '310-998-9898')
        });
        test('Get manager role', () => {
            expect(AS.getRole()).toEqual(expect.stringContaining('Team Manager'));
        })
    })
})
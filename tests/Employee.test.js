const Employee = require('../lib/Employee.js');

describe('When an employee object is created', () => {
    let Shaniqua;
    beforeEach(() => {
        eloise = new Employee('Shaniqua', 8888, 'shaniqua@test.com')
    });
    test('Create an Employee Object', () => {
        expect(Shaniqua.name).toEqual(expect.any(String));
        expect(Shaniqua.name).toEqual("Shaniqua");
        expect(Shaniqua.id).toEqual(expect.any(Number));
        expect(Shaniqua.email).toBe('Shaniqua@test.com');
    })

    describe('When an employee name is created', () => {
        let Shaniqua;
        beforeEach(() => {
            Shaniqua = new Employee('Shaniqua', 8888, 'Shaniqua@test.com')
        });
        test('Get employee name', () => {
            expect(Shaniqua.getName()).toEqual(expect.stringContaining('Shaniqua'));
        })
    })

    describe('When an employee id is created', () => {
        let eloise;
        beforeEach(() => {
            Shaniqua = new Employee('Shaniqua', 8888, 'Shaniqua@test.com')
        });
        test('Get employee id', () => {
            expect(Shaniqua.getId()).toEqual(expect.any(String));
        })
    })

    describe('When an employee email is created', () => {
        let Shaniqua;
        beforeEach(() => {
            eloise = new Employee('Shaniqua', 8888, 'Shaniqua@test.com')
        });
        test('Get employee email', () => {
            expect(Shaniqua.getEmail()).toEqual(expect.any(String));
        })
    })

    describe('When an employee role is created', () => {
        let Shaniqua;
        beforeEach(() => {
            Shaniqua = new Employee('Shaniqua', 8888, 'Shaniqua@test.com')
        });
        test('Get employee role', () => {
            expect(Shaniqua.getRole()).toEqual(expect.stringContaining('Employee'));
        })
    })
})


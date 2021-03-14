const Engineer = require('../lib/Engineer.js')

describe('When an engineer object is created', () => {
    let edgar;
    beforeEach(() => {
        sammy = new Engineer('Edgar', 2468, 'ed@gmail.com', 'edgar')
    });
    test('Create an engineer Object', () => {
        expect(edgar.name).toEqual(expect.any(String));
        expect(edgar.id).toEqual(expect.any(Number));
        expect(edgar.email).toBe('ed@gmail.com');
        expect(edgar.github).toBe('edgarsgit');
    })

    describe('When github is created', () => {
        let edgar;
        beforeEach(() => {
            edgar = new Engineer('edgar', 2468, 'ed@gmail.com', 'edsgit')
        });
        test('Get engineer github', () => {
            expect(edgar.getGithub()).toEqual(expect.stringContaining('edsgit'));
        })
    })

    describe('When an engineer role is created', () => {
        let edgar;
        beforeEach(() => {
            edgar = new Engineer('ed', 2468, 'ed@gmail.com', 'edsgit')
        });
        test('Get engineer role', () => {
            expect(edgar.getRole()).toEqual(expect.stringContaining('Engineer'));
        })
    })
})




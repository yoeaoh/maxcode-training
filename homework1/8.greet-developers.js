// https://maxcode.dev/problems/greet-developers/

function greetDevelopers(list) {
    return list.map(developer => ({
            ...developer,
            greeting: `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`
        })
    )
}

const list1 = [
    {
        firstName: 'Sofia',
        lastName: 'I.',
        country: 'Argentina',
        continent: 'Americas',
        age: 35,
        language: 'Java',
    },
    {
        firstName: 'Lukas',
        lastName: 'X.',
        country: 'Croatia',
        continent: 'Europe',
        age: 35,
        language: 'Python',
    },
    {
        firstName: 'Madison',
        lastName: 'U.',
        country: 'United States',
        continent: 'Americas',
        age: 32,
        language: 'Ruby',
    }
];

const list2 = [
    {
        firstName: 'Sofia',
        lastName: 'I.',
        country: 'Argentina',
        continent: 'Americas',
        age: 35,
        language: 'Java',
        greeting: 'Hi Sofia, what do you like the most about Java?',
    },
    {
        firstName: 'Lukas',
        lastName: 'X.',
        country: 'Croatia',
        continent: 'Europe',
        age: 35,
        language: 'Python',
        greeting: 'Hi Lukas, what do you like the most about Python?',
    },
    {
        firstName: 'Madison',
        lastName: 'U.',
        country: 'United States',
        continent: 'Americas',
        age: 32,
        language: 'Ruby',
        greeting: 'Hi Madison, what do you like the most about Ruby?'
    }
];

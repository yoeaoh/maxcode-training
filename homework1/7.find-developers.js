// https://maxcode.dev/problems/find-developers/

function findDevelopers(teams) {
    return teams.reduce((acc, {_, members}) => {
        const developers = members.filter(member => member.role === 'developer')
        developers.forEach(dev => acc.push(dev.name))
        return acc;
    }, []).sort()
}

const teams = [
    {
        name: "1",
        members: [
            { name: "Alice", role: "developer" },
            { name: "Bob", role: "designer" },
        ],
    },
    {
        name: "2",
        members: [
            { name: "Carol", role: "developer" },
            { name: "Dave", role: "qa" },
        ],
    },
];

console.log(findDevelopers(teams)); // ["Alice", "Carol"]

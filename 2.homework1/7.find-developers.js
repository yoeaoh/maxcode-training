// https://maxcode.dev/problems/find-developers/

function findDevelopers(teams) {
    const result = teams
        .values()
        .flatMap((team) => { console.log("flatMap", team); return team.members; })
        .filter(({ role }) => { console.log("filter", role); return role === 'developer'; })
        .map(({ name }) => { console.log("map", name); return name; })
        .take(2)
        .toArray()
        .sort();

    console.log(result);

    // return teams.reduce((acc, {members}) => {
    //     const developers = members.filter(member => member.role === 'developer')
    //     developers.forEach(dev => acc.push(dev.name))
    //     return acc;
    // }, []).sort()
}

const teams = [
    {
        name: "1",
        members: [
            { name: "Alice", role: "developer" },
            { name: "Bob", role: "asd" },
            { name: "Qwe", role: "developer" },
        ],
    },
    {
        name: "2",
        members: [
            { name: "Carol", role: "gjit" },
            { name: "Dave", role: "developer" },
        ],
    },
];

console.log(findDevelopers(teams)); // ["Alice", "Carol"]

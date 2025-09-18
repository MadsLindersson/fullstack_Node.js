"use strict"

let nextId = 13;

const greekGods = [
    { id: 1, name: "Zeus", role: "Sky and thunder god" },
    { id: 2, name: "Poseidon", role: "God of the sea" },
    { id: 3, name: "Ares", role: "God of war" },
    { id: 4, name: "Athena", role: "Goddess of wisdom" },
    { id: 5, name: "Hera", role: "Goddess of marriage and family" },
    { id: 6, name: "Apollo", role: "God of the sun, music, and prophecy" },
    { id: 7, name: "Artemis", role: "Goddess of the hunt and moon" },
    { id: 8, name: "Demeter", role: "Goddess of agriculture" },
    { id: 9, name: "Hephaestus", role: "God of fire and craftsmanship" },
    { id: 10, name: "Aphrodite", role: "Goddess of love and beauty" },
    { id: 11, name: "Hermes", role: "Messenger god and god of trade" },
    { id: 12, name: "Hestia", role: "Goddess of the hearth" }
];

function findGreekGodById (id, listOfGreekGods)    {
    const idToInt = parseInt(id);
    return listOfGreekGods.find(god => god.id === idToInt);
}

function createGreekGod (greekGod)  {
    greekGod.id = nextId++;
    greekGods.push(greekGod);

    return greekGod;
}

function updateGreekGod (greekGodFromClient, id)  {
    if(!doesIdExist(id)) {
        return { errorMessage: "Id does not exist"};
    };
    
    const greekGodToUpdate = greekGods.find(greekGod => id === greekGod.id);

    Object.assign(greekGodToUpdate, greekGodFromClient);

    return greekGodToUpdate;

}

function deleteGreekGod (id)    {
    const index = greekGods.findIndex(god => god.id === id);
    
    if (index !== -1)   {
        greekGods.splice(index, 1);
        return `Greek god with id: ${id} has been succesfully deleted.`;
    } else {
        return `Could not find greek god with id: ${id}.`;
    };
}

function doesIdExist (id) {
    const greekGod = greekGods.find(greekGod => id === greekGod.id);

    if (!greekGod)   {
        return false
    } else {
        return true;
    }
}

module.exports = {
    greekGods,
    findGreekGodById,
    createGreekGod,
    updateGreekGod,
    deleteGreekGod
};

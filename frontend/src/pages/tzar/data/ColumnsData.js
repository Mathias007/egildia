export const nationsColumnsStructure = {
    col_name: { title: "Nazwa", dataIndex: "name", align: "center" },
    col_cost: { title: "Koszt", dataIndex: "cost", align: "left" },
    col_hp: { title: "HP", dataIndex: "hp", align: "center" },
    col_resistance: {
        title: "Odporność",
        dataIndex: "resistance",
        align: "center"
    },
    col_description: { title: "Działanie", dataIndex: "description" },
    col_image: { title: "Grafika", dataIndex: "image", align: "center" }
};

export const spellsColumnsStructure = {
    col_name: { title: "Czar", dataIndex: "name", align: "center" },
    col_description: { title: "Działanie", dataIndex: "description" },
    col_cost: {
        title: "Koszt rzutu",
        dataIndex: "cost",
        align: "left"
    },
    col_speller: {
        title: "Rzucający",
        dataIndex: "speller",
        align: "center"
    }
};

export const technologiesColumnsStructure = {
    col_image: {
        title: "Grafika",
        dataIndex: "image",
        align: "center"
    },
    col_name: {
        title: "Technologia",
        dataIndex: "name",
        align: "center"
    },
    col_cost: {
        title: "Cena w złocie",
        dataIndex: "cost",
        align: "left"
    },
    col_building: {
        title: "Budynek",
        dataIndex: "building",
        align: "center"
    },
    col_description: { title: "Działanie", dataIndex: "description" },
    col_nation: { title: "Nacja", dataIndex: "nation", align: "center" }
};

export const unitsColumnsStructure = {
    col_name: { title: "Nazwa", dataIndex: "name", align: "center" },
    col_attack: { title: "Atak", dataIndex: "attack", align: "center" },
    col_defence: {
        title: "Obrona",
        dataIndex: "defence",
        align: "center"
    },
    col_hp: { title: "HP", dataIndex: "hp", align: "center" },
    col_description: { title: "Opis", dataIndex: "description" },
    col_cost: { title: "Koszt", dataIndex: "cost", align: "left" }
};

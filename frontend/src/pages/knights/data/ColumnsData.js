export const buildingsColumnsStructure = {
    col_name: { title: "Nazwa", dataIndex: "name", align: "center" },
    col_cost: { title: "Koszt", dataIndex: "cost", align: "left" },
    col_fields: { title: "Pola", dataIndex: "fields", align: "center" },
    col_durability: {
        title: "Wytrzymałość",
        dataIndex: "durability",
        align: "center"
    },
    col_description: { title: "Działanie", dataIndex: "description" },
    col_worker: {
        title: "Pracownik",
        dataIndex: "worker",
        align: "center"
    },
    col_image: { title: "Grafika", dataIndex: "image", align: "center" }
};

export const unitsColumnsStructure = {
    col_name: { title: "Nazwa", dataIndex: "name", align: "center" },
    col_image: { title: "Grafika", dataIndex: "image", align: "left" },
    col_role: { title: "Rola", dataIndex: "role", align: "center" },
    col_specification: {
        title: "Miejsce pracy lub wyposażenie",
        dataIndex: "specification",
        align: "center"
    }
};

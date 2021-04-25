import React from "react";

import Image from "../../components/universal/ImageComponent";

import { imgPath } from "./_tzarGeneralData";
const { general, section, dir, format } = imgPath;

const generateName = (name) => {
    const src = `${general}/${section.tzar}/${dir.units}/${dir.icons}/${name[0]}/${name[2]}.${format.png}`;
    return (
        <>
            <h3>
                <strong>{name[1]}</strong>
            </h3>
            <Image src={src} alt={name[1]} />
        </>
    );
};

export const unitsColumnsStructure = [
    {
        title: "Nazwa",
        dataIndex: "name",
        align: "center",
        render: (name) => generateName(name),
    },
    {
        title: "Atak",
        dataIndex: "attack",
        align: "center",
    },
    {
        title: "Obrona",
        dataIndex: "defence",
        align: "center",
    },
    {
        title: "HP",
        dataIndex: "hp",
        align: "center",
    },
    {
        title: "Opis",
        dataIndex: "description",
        align: "left",
    },
    {
        title: "Koszt",
        dataIndex: "cost",
        align: "left",
    },
];

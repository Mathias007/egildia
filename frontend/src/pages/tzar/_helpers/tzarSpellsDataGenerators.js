import React from "react";

import Image from "../../components/universal/ImageComponent";

import { imgPath } from "./_tzarGeneralData";
const { general, section, dir, format } = imgPath;

const generateName = (name) => {
    const src = `${general}/${section.tzar}/${dir.spells}/${name[2]}.${format.png}`;

    return (
        <>
            <h3>
                <strong>{name[1]}</strong>
            </h3>
            <Image src={src} alt={name[1]} />
        </>
    );
};

export const spellsColumnsStructure = [
    {
        title: "Czar",
        dataIndex: "name",
        align: "center",
        render: (name) => generateName(name),
    },
    {
        title: "Działanie",
        dataIndex: "description",
        align: "left",
    },
    {
        title: "Koszt rzutu",
        dataIndex: "cost",
        align: "left",
    },
    {
        title: "Rzucający",
        dataIndex: "speller",
        align: "center",
    },
];

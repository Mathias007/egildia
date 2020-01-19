import React from "react";
import Img from "react-image";

import { imgPath } from "./_TzarGeneralData";
const { general, section, dir, format } = imgPath;

const generateName = name => (
    <>
        <h3>
            <strong>{name[1]}</strong>
        </h3>
        <Img
            src={require(`../../../${general}/${section.tzar}/${dir.spells}/${name[2]}.${format.png}`)}
        />
    </>
);

export const spellsColumnsStructure = [
    {
        title: "Czar",
        dataIndex: "name",
        align: "center",
        render: name => generateName(name)
    },
    {
        title: "Działanie",
        dataIndex: "description",
        align: "left"
    },
    {
        title: "Koszt rzutu",
        dataIndex: "cost",
        align: "left"
    },
    {
        title: "Rzucający",
        dataIndex: "speller",
        align: "center"
    }
];

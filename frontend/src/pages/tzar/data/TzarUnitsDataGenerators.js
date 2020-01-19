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
            src={require(`../../../${general}/${section.tzar}/${dir.units}/${dir.icons}/${name[0]}/${name[2]}.${format.png}`)}
        />
    </>
);

export const unitsColumnsStructure = [
    {
        title: "Nazwa",
        dataIndex: "name",
        align: "center",
        render: name => generateName(name)
    },
    {
        title: "Atak",
        dataIndex: "attack",
        align: "center"
    },
    {
        title: "Obrona",
        dataIndex: "defence",
        align: "center"
    },
    {
        title: "HP",
        dataIndex: "hp",
        align: "center"
    },
    {
        title: "Opis",
        dataIndex: "description",
        align: "left"
    },
    {
        title: "Koszt",
        dataIndex: "cost",
        align: "left"
    }
];

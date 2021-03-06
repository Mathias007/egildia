import React from "react";

import Image from "../../components/universal/ImageComponent";

import { imgPath } from "./_tzarGeneralData";
const { general, section, dir, format } = imgPath;

const generateName = (name) => {
    return (
        <h3>
            <strong>{name}</strong>
        </h3>
    );
};

const generateImage = (image) => {
    const src = `${general}/${section.tzar}/${dir.technologies}/${image}.${format.png}`;

    return <Image src={src} alt={image} />;
};

export const technologiesColumnsStructure = [
    {
        title: "Grafika",
        dataIndex: "image",
        align: "center",
        render: (image) => generateImage(image),
    },
    {
        title: "Technologia",
        dataIndex: "name",
        align: "center",
        render: (name) => generateName(name),
    },
    {
        title: "Cena w złocie",
        dataIndex: "cost",
        align: "left",
    },
    {
        title: "Budynek",
        dataIndex: "building",
        align: "center",
    },
    {
        title: "Działanie",
        dataIndex: "description",
        align: "left",
    },
    {
        title: "Nacja",
        dataIndex: "nation",
        align: "center",
    },
];

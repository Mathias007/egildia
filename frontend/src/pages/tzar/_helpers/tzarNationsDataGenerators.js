import React from "react";

import Image from "../../components/universal/ImageComponent";

import { imgPath, descriptionSubHeaders } from "./_tzarGeneralData";
const { general, section, dir, format } = imgPath;

const generateName = (name) => {
    const src = `${general}/${section.tzar}/${dir.buildings}/${name[0]}/${name[2]}.${format.png}`;

    return (
        <>
            <h3>
                <strong>{name[1]}</strong>
            </h3>
            <Image src={src} alt={name[1]} />
        </>
    );
};

const generateDescription = (description) => {
    return (
        <p>
            <span>
                <strong>{descriptionSubHeaders[0]}</strong>
                {description[0]}
            </span>
            <span>
                <strong>{descriptionSubHeaders[1]}</strong>
                {description[1]}
            </span>
        </p>
    );
};

const generateImage = (image) => {
    const src = `${general}/${section.tzar}/${dir.buildings}/${image[0]}/${image[1]}.${format.png}`;

    return <Image src={src} alt={image} />;
};

export const nationsColumnsStructure = [
    {
        title: "Nazwa",
        dataIndex: "name",
        align: "center",
        render: (name) => generateName(name),
    },
    {
        title: "Koszt",
        dataIndex: "cost",
        align: "left",
    },
    {
        title: "HP",
        dataIndex: "hp",
        align: "center",
    },
    {
        title: "Odporność",
        dataIndex: "resistance",
        align: "center",
    },
    {
        title: "Działanie",
        dataIndex: "description",
        align: "left",
        render: (description) => generateDescription(description),
    },
    {
        title: "Grafika",
        dataIndex: "image",
        align: "center",
        render: (image) => generateImage(image),
    },
];

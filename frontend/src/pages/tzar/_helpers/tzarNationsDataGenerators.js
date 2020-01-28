import React from "react";
import Img from "react-image";

import { imgPath, descriptionSubHeaders } from "./_TzarGeneralData";
const { general, section, dir, format } = imgPath;

const generateName = name => {
    return (
        <>
            <h3>
                <strong>{name[1]}</strong>
            </h3>
            <Img
                src={require(`../../../${general}/${section.tzar}/${dir.buildings}/${name[0]}/${name[2]}.${format.png}`)}
            />
        </>
    );
};

const generateDescription = description => {
    return (
        <span>
            <p>
                <strong>{descriptionSubHeaders[0]}</strong>
                {description[0]}
            </p>
            <p>
                <strong>{descriptionSubHeaders[1]}</strong>
                {description[1]}
            </p>
        </span>
    );
};

const generateImage = image => {
    return (
        <Img
            src={require(`../../../${general}/${section.tzar}/${dir.buildings}/${image[0]}/${image[1]}.${format.png}`)}
        />
    );
};

export const nationsColumnsStructure = [
    {
        title: "Nazwa",
        dataIndex: "name",
        align: "center",
        render: name => generateName(name)
    },
    {
        title: "Koszt",
        dataIndex: "cost",
        align: "left"
    },
    {
        title: "HP",
        dataIndex: "hp",
        align: "center"
    },
    {
        title: "Odporność",
        dataIndex: "resistance",
        align: "center"
    },
    {
        title: "Działanie",
        dataIndex: "description",
        align: "left",
        render: description => generateDescription(description)
    },
    {
        title: "Grafika",
        dataIndex: "image",
        align: "center",
        render: image => generateImage(image)
    }
];

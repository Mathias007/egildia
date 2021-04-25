import React from "react";

import { textBetweenTags } from "../../../_config/globalContentVariables";

import Image from "../../components/universal/ImageComponent";

import { imgPath } from "./_knightsGeneralData";
const { general, section, dir, format } = imgPath;

const generateName = (name) => {
    return (
        <h3>
            <strong>{name}</strong>
        </h3>
    );
};

const generateImage = (image) => {
    const src = `${general}/${section.knights}/${dir.units}/${image}.${format.PNG}`;

    return <Image src={src} alt={image} />;
};

const generateSpecification = (specification) => {
    if (specification[0] === "cywil") {
        let workplaceElements = specification[1].match(textBetweenTags);

        return workplaceElements ? (
            workplaceElements.map((element, index) => {
                const src = `${general}/${section.knights}/${dir.icons}/${element}.${format.png}`;

                return <Image key={element} src={src} alt={element} />;
            })
        ) : (
            <p>{specification[1]}</p>
        );
    } else {
        let equipmentElements = specification[2].match(textBetweenTags);

        return equipmentElements
            ? equipmentElements.map((element, index) => {
                  const src = `${general}/${section.knights}/${dir.materials}/${element}.${format.png}`;

                  return <Image src={src} alt={element} />;
              })
            : null;
    }
};

export const unitsColumnsStructure = [
    {
        title: "Nazwa",
        dataIndex: "name",
        align: "center",
        render: (name) => generateName(name),
    },
    {
        title: "Grafika",
        dataIndex: "image",
        align: "left",
        render: (image) => generateImage(image),
    },
    {
        title: "Rola",
        dataIndex: "role",
        align: "center",
    },
    {
        title: "Miejsce pracy lub wyposażenie",
        dataIndex: "specification",
        align: "center",
        render: (specification) => generateSpecification(specification),
    },
];

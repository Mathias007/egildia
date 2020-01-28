import React from "react";
import Img from "react-image";

import { textBetweenTags } from "../../../_config/globalContentVariables";

import { imgPath } from "./_knightsGeneralData";
const { general, section, dir, format } = imgPath;

const generateName = name => (
    <h3>
        <strong>{name}</strong>
    </h3>
);

const generateImage = image => (
    <Img
        src={require(`../../../${general}/${section.knights}/${dir.units}/${image}.${format.PNG}`)}
    />
);

const generateSpecification = specification => {
    if (specification[0] === "cywil") {
        let workplaceElements = specification[1].match(textBetweenTags);
        console.log(workplaceElements);

        return workplaceElements ? (
            workplaceElements.map((element, index) => (
                <Img
                    key={element}
                    src={require(`../../../${general}/${section.knights}/${dir.icons}/${element}.${format.png}`)}
                />
            ))
        ) : (
            <p>{specification[1]}</p>
        );
    } else {
        let equipmentElements = specification[2].match(textBetweenTags);
        console.log(equipmentElements);

        return equipmentElements
            ? equipmentElements.map((element, index) => (
                  <Img
                      src={require(`../../../${general}/${section.knights}/${dir.materials}/${element}.${format.png}`)}
                  />
              ))
            : null;
    }
};

export const unitsColumnsStructure = [
    {
        title: "Nazwa",
        dataIndex: "name",
        align: "center",
        render: name => generateName(name)
    },
    {
        title: "Grafika",
        dataIndex: "image",
        align: "left",
        render: image => generateImage(image)
    },
    {
        title: "Rola",
        dataIndex: "role",
        align: "center"
    },
    {
        title: "Miejsce pracy lub wyposażenie",
        dataIndex: "specification",
        align: "center",
        render: specification => generateSpecification(specification)
    }
];

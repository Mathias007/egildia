import React from "react";
import Img from "react-image";

import { textBetweenTags } from "../../../_config/globalContentVariables";

import { imgPath } from "./serviceData";
const { general, section, dir, format } = imgPath;

export const generateName = name => (
    <h3>
        <strong>{name}</strong>
    </h3>
);

export const generateImage = image => (
    <Img
        src={require(`../../../${general}/${section.knights}/${dir.units}/${image}.${format.PNG}`)}
    />
);

export const generateSpecification = specification => {
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

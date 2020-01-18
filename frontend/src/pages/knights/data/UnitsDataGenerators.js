import React from "react";
import Img from "react-image";

import { textBetweenTags } from "../../../_config/globalContentVariables";

const componentClassnames = {
    images: {
        building: "knights-image-building",
        icon: "knights-image-icon",
        material: "knights-image-material",
        unit: "knights-image-unit"
    },
    content: "knights-units-content",
    table: "knights-units-table"
};

const imgPath = {
    general: "img",
    section: {
        knights: "knights"
    },
    dir: {
        buildings: "budynki",
        icons: "ikony",
        materials: "surowce",
        units: "jednostki"
    },
    format: {
        bmp: "bmp",
        png: "png",
        PNG: "PNG"
    }
};

const { general, section, dir, format } = imgPath;

export const generateName = name => (
    <h3>
        <strong>{name}</strong>
    </h3>
);

export const generateImage = image => (
    <Img
        className={componentClassnames.images.unit}
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
                    className={componentClassnames.images.icon}
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
                      className={componentClassnames.images.material}
                      src={require(`../../../${general}/${section.knights}/${dir.materials}/${element}.${format.png}`)}
                  />
              ))
            : null;
    }
};

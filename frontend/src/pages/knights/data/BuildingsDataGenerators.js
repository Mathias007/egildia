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

const descriptionSubHeaders = ["Opis: ", "Potrzebuje: ", "Produkuje: "];

const { general, section, dir, format } = imgPath;

export const generateName = name => {
    return (
        <>
            <h3>
                <strong>{name[0]}</strong>
            </h3>
            <Img
                className={componentClassnames.images.icon}
                src={require(`../../../${general}/${section.knights}/${dir.icons}/${name[1]}.${format.png}`)}
            />
        </>
    );
};

export const generateCost = cost => {
    return (
        <p>
            {cost[0]}
            <Img
                className={componentClassnames.images.material}
                src={require(`../../../${general}/${section.knights}/${dir.materials}/deska.${format.png}`)}
            />
            <br />
            {cost[1]}
            <Img
                className={componentClassnames.images.material}
                src={require(`../../../${general}/${section.knights}/${dir.materials}/kamien.${format.png}`)}
            />
        </p>
    );
};

export const generateDescription = description => {
    return (
        <span>
            {description.map((fragment, index) => {
                if (fragment) {
                    let materialElements = fragment.match(textBetweenTags);
                    return (
                        <p key={fragment}>
                            <strong>{descriptionSubHeaders[index]}</strong>
                            {materialElements
                                ? materialElements.map((element, index) => (
                                      <Img
                                          key={index}
                                          className={
                                              componentClassnames.images
                                                  .material
                                          }
                                          src={require(`../../../${general}/${section.knights}/${dir.materials}/${element}.${format.png}`)}
                                      />
                                  ))
                                : fragment}
                        </p>
                    );
                } else return null;
            })}
        </span>
    );
};

export const generateWorker = worker => {
    return worker ? (
        <Img
            className={componentClassnames.images.unit}
            src={require(`../../../${general}/${section.knights}/${dir.units}/${worker}.${format.PNG}`)}
        />
    ) : null;
};

export const generateImage = image => {
    return (
        <Img
            className={componentClassnames.images.building}
            width="120px"
            height="100px"
            src={require(`../../../${general}/${section.knights}/${dir.buildings}/${image}.${format.bmp}`)}
        />
    );
};

import React from "react";
import Img from "react-image";

import { textBetweenTags } from "../../../_config/globalContentVariables";

import { imgPath, descriptionSubHeaders } from "./serviceData";
const { general, section, dir, format } = imgPath;

export const generateName = name => {
    return (
        <>
            <h3>
                <strong>{name[0]}</strong>
            </h3>
            <Img
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
                src={require(`../../../${general}/${section.knights}/${dir.materials}/deska.${format.png}`)}
            />
            <br />
            {cost[1]}
            <Img
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
            src={require(`../../../${general}/${section.knights}/${dir.units}/${worker}.${format.PNG}`)}
        />
    ) : null;
};

export const generateImage = image => {
    return (
        <Img
            width="120px"
            height="100px"
            src={require(`../../../${general}/${section.knights}/${dir.buildings}/${image}.${format.bmp}`)}
        />
    );
};

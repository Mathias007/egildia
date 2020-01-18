import React from "react";
import Img from "react-image";

import { imgPath, descriptionSubHeaders } from "./serviceData";
const { general, section, dir, format } = imgPath;

export const generateName = name => {
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

export const generateDescription = description => {
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

export const generateImage = image => {
    return (
        <Img
            src={require(`../../../${general}/${section.tzar}/${dir.buildings}/${image[0]}/${image[1]}.${format.png}`)}
        />
    );
};

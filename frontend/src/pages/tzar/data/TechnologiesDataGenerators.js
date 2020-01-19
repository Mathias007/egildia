import React from "react";
import Img from "react-image";

import { imgPath } from "./serviceData";
const { general, section, dir, format } = imgPath;

export const generateName = name => {
    return (
        <h3>
            <strong>{name}</strong>
        </h3>
    );
};

export const generateImage = image => {
    return (
        <>
            <Img
                src={require(`../../../${general}/${section.tzar}/${dir.technologies}/${image}.${format.png}`)}
            />
        </>
    );
};

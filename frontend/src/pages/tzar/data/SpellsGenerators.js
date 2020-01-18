import React from 'react'
import Img from "react-image";

import {imgPath} from "./serviceData";
const { general, section, dir, format } = imgPath;

export const generateName = name => (
    <>
        <h3>
            <strong>{name[1]}</strong>
        </h3>
        <Img
            src={require(`../../../${general}/${section.tzar}/${dir.spells}/${name[2]}.${format.png}`)}
        />
    </>
);

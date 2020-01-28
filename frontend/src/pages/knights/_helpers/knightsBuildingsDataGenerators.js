import React from "react";
import Img from "react-image";

import { textBetweenTags } from "../../../_config/globalContentVariables";

import { imgPath, descriptionSubHeaders } from "./_knightsGeneralData";
const { general, section, dir, format } = imgPath;

const generateName = name => {
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

const generateCost = cost => {
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

const generateDescription = description => {
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

const generateWorker = worker => {
    return worker ? (
        <Img
            src={require(`../../../${general}/${section.knights}/${dir.units}/${worker}.${format.PNG}`)}
        />
    ) : null;
};

const generateImage = image => {
    return (
        <Img
            width="120px"
            height="100px"
            src={require(`../../../${general}/${section.knights}/${dir.buildings}/${image}.${format.bmp}`)}
        />
    );
};

export const buildingsColumnsStructure = [
    {
        title: "Nazwa",
        dataIndex: "name",
        align: "center",
        render: name => generateName(name)
    },
    {
        title: "Koszt",
        dataIndex: "cost",
        align: "left",
        render: cost => generateCost(cost)
    },
    {
        title: "Pola",
        dataIndex: "fields",
        align: "center"
    },
    {
        title: "Wytrzymałość",
        dataIndex: "durability",
        align: "center"
    },
    {
        title: "Działanie",
        dataIndex: "description",
        align: "left",
        render: description => generateDescription(description)
    },
    {
        title: "Pracownik",
        dataIndex: "worker",
        align: "center",
        render: worker => generateWorker(worker)
    },
    {
        title: "Grafika",
        dataIndex: "image",
        align: "center",
        render: image => generateImage(image)
    }
];

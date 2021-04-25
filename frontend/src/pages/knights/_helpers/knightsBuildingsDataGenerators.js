import React from "react";

import { textBetweenTags } from "../../../_config/globalContentVariables";

import Image from "../../components/universal/ImageComponent";

import { imgPath, descriptionSubHeaders } from "./_knightsGeneralData";
const { general, section, dir, format } = imgPath;

const generateName = (name) => {
    const src = `${general}/${section.knights}/${dir.icons}/${name[1]}.${format.png}`;

    return (
        <>
            <h3>
                <strong>{name[0]}</strong>
            </h3>
            <Image src={src} alt={name[0]} />
        </>
    );
};

const generateCost = (cost) => {
    const woodSrc = `${general}/${section.knights}/${dir.materials}/deska.${format.png}`;
    const stoneSrc = `${general}/${section.knights}/${dir.materials}/kamien.${format.png}`;

    return (
        <>
            <p>
                <span>{cost[0]}</span> <Image src={woodSrc} alt={cost[0]} />
            </p>
            <p>
                <span>{cost[1]}</span> <Image src={stoneSrc} alt={cost[1]} />
            </p>
        </>
    );
};

const generateDescription = (description) => {
    return (
        <p>
            {description.map((fragment, index) => {
                if (fragment) {
                    let materialElements = fragment.match(textBetweenTags);
                    return (
                        <span key={fragment}>
                            <strong>{descriptionSubHeaders[index]}</strong>
                            {materialElements
                                ? materialElements.map((element, index) => {
                                      const src = `${general}/${section.knights}/${dir.materials}/${element}.${format.png}`;

                                      return (
                                          <Image
                                              key={index}
                                              src={src}
                                              alt={element}
                                          />
                                      );
                                  })
                                : fragment}
                        </span>
                    );
                } else return null;
            })}
        </p>
    );
};

const generateWorker = (worker) => {
    const src = `${general}/${section.knights}/${dir.units}/${worker}.${format.PNG}`;

    return worker ? <Image src={src} alt={worker} /> : null;
};

const generateImage = (image) => {
    const src = `${general}/${section.knights}/${dir.buildings}/${image}.${format.bmp}`;

    return <Image src={src} alt={image} />;
};

export const buildingsColumnsStructure = [
    {
        title: "Nazwa",
        dataIndex: "name",
        align: "center",
        render: (name) => generateName(name),
    },
    {
        title: "Koszt",
        dataIndex: "cost",
        align: "left",
        render: (cost) => generateCost(cost),
    },
    {
        title: "Pola",
        dataIndex: "fields",
        align: "center",
    },
    {
        title: "Wytrzymałość",
        dataIndex: "durability",
        align: "center",
    },
    {
        title: "Działanie",
        dataIndex: "description",
        align: "left",
        render: (description) => generateDescription(description),
    },
    {
        title: "Pracownik",
        dataIndex: "worker",
        align: "center",
        render: (worker) => generateWorker(worker),
    },
    {
        title: "Grafika",
        dataIndex: "image",
        align: "center",
        render: (image) => generateImage(image),
    },
];

import React from "react";
import Img from "react-image";

export default function ImageComponent(props) {
    const { src, alt } = props;

    return <Img src={require(`../../../${src}`).default} alt={alt} />;
}

import { buttonCompositionVariations } from "../../../_config/globalContentVariables";
import {
    createSingleWrappedButton,
    createSingleNonWrappedButton,
    createDoubleButton
} from "./_helpers/buttonCreators";

export default function ButtonComponent(props) {
    const { composition, ...buttonProps } = props;

    const { single_nowrap, double } = buttonCompositionVariations;

    let buttonElement;

    switch (composition) {
        case double:
            buttonElement = createDoubleButton({ ...buttonProps });
            return buttonElement;

        case single_nowrap:
            buttonElement = createSingleNonWrappedButton({ ...buttonProps });
            return buttonElement;

        default:
            buttonElement = createSingleWrappedButton({ ...buttonProps });
            return buttonElement;
    }
}

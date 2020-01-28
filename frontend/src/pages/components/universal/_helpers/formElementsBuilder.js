import { inputFieldTypes } from "../../../_config/globalContentVariables";
import {
    createDatePicker,
    createDefaultInput,
    createPasswordInput,
    createSelect,
    createTextArea
} from "./InputCreators";

const { date, password, select, textarea } = inputFieldTypes;

export default function FormElementBuilder(props) {
    const {
        fieldType,
        message,
        minLength,
        pattern,
        required,
        validator,
        ...inputProps
    } = props;

    let decoratorRules = [
        {
            required,
            message
        }
    ];
    let formElement;

    switch (fieldType) {
        case date:
            decoratorRules.unshift({
                type: "object",
                required
            });

            formElement = createDatePicker({ ...inputProps });
            return { decoratorRules, formElement };

        case password:
            decoratorRules.push(
                { min: minLength, message: "Hasło za krótkie!" },
                {
                    pattern,
                    message: "Hasło nie spełnia wymagań!"
                },
                { validator }
            );

            formElement = createPasswordInput({ ...inputProps });
            return { decoratorRules, formElement };

        case select:
            formElement = createSelect({ ...inputProps });
            return { decoratorRules, formElement };

        case textarea:
            formElement = createTextArea({ ...inputProps });
            return { decoratorRules, formElement };

        default:
            decoratorRules = [
                {
                    type: fieldType,
                    required,
                    message
                }
            ];

            formElement = createDefaultInput({ ...inputProps });
            return { decoratorRules, formElement };
    }
}

import React, { useEffect, useState } from 'react';
import InputMask, {
    BeforeMaskedStateChangeStates,
    InputState,
} from 'react-input-mask';
import { Container } from './styles';

interface PropsInput {
    setValue: (e: string) => any;
    type?: string;
    maskInput?: string;
    errors?: [
        {
            description: string;
            errorType: string;
            inputName: string;
        },
    ];
    validationStatus?: 'error' | 'sucess' | 'validating';
    inputRef?: React.RefObject<HTMLInputElement>;
    alwaysShowMask?: boolean;
    maskPlaceholder?: string | null | undefined;
    beforeMaskedStateChange?(states: BeforeMaskedStateChangeStates): InputState;
    label: string;
    placeHolder: string;
    [x: string]: any;
}

export const Input: React.FC<PropsInput> = ({
    setValue,
    errors,
    children,
    type,
    maskInput,
    validationStatus,
    alwaysShowMask,
    inputRef,
    maskPlaceholder,
    maskChar = '',
    label,
    placeHolder,
    beforeMaskedStateChange,
    ...attrs
}) => {
    const [inputValue, setInputValue] = useState<string>('');

    useEffect(() => {
        setValue(inputValue);
    }, [inputValue]);
    if (!maskInput) {
        return (
            <Container className={validationStatus} {...attrs}>
                {label ? label : null}
                <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    type={type}
                    ref={inputRef}
                    placeholder={placeHolder}
                />
                {errors && errors.length
                    ? errors.map((error, index) =>
                          index === 1 ? <span>{error.description}</span> : null,
                      )
                    : null}
                {children}
            </Container>
        );
    } else
        return (
            <Container className={validationStatus} {...attrs}>
                {label ? label : null}

                <InputMask
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    type={type}
                    mask={maskInput}
                    inputRef={inputRef}
                    alwaysShowMask={alwaysShowMask}
                    maskPlaceholder={maskPlaceholder}
                    beforeMaskedStateChange={beforeMaskedStateChange}
                    placeholder={placeHolder}
                    maskChar={maskChar}
                />
                {errors && errors.length
                    ? errors.map((error, index) =>
                          index === 1 ? <span>{error.description}</span> : null,
                      )
                    : null}
                {children}
            </Container>
        );
};

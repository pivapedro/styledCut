import { InputProps } from '../components/Input/styles';
const theme = {
    border: {
        radius: {
            xs: '0px',
            sm: '8px',
            md: '16px',
            pill: '24px',
            circle: '50%',
        },
        width: {
            xs: '0px',
            sm: '1px',
            md: '2px',
            lg: '4px',
            xl: '8px',
        },
    },
    opacity: {
        xs: '8%',
        sm: '16%',
        md: '24%',
        lg: '64%',
        xl: '80%',
    },
    shadow: {
        none: '0px 0px 4px 2px rgba(0, 0, 0, 0.25)',
        lower: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        upper: '0px -4px 4px rgba(0, 0, 0, 0.25)',
        right: '4px 0px 4px rgba(0, 0, 0, 0.25)',
        left: '-4px 0px 4px rgba(0, 0, 0, 0.25)',
    },
    icon: {
        xs: '16px',
        sm: '24px',
        md: '32px',
        lg: '48px',
        xl: '56px',
    },
    input: {
        md: '16px',
        xs: '24px',
        sm: '32px',
        lg: '48px',
        xl: '56px',
    },
};
export default theme;

export const setWidth = (props: InputProps, inputType: string) => {
    switch (inputType) {
        case 'input':
            const { md, xs, sm, lg } = props;

            return md
                ? theme.input.md
                : xs
                ? theme.input.xs
                : sm
                ? theme.input.sm
                : lg
                ? theme.input.lg
                : 'auto';

        default:
            break;
    }
};

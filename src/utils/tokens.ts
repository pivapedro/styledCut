import { InputProps } from "../components/Input/styles";
const theme = {
  border: {
    radius: {
      xs: "0px",
      sm: "8px",
      md: "16px",
      pill: "24px",
      circle: "50%",
    },
    width: {
      xs: "0px",
      sm: "1px",
      md: "2px",
      lg: "4px",
      xl: "8px",
    },
  },
  opacity: {
    xs: "8%",
    sm: "16%",
    md: "24%",
    lg: "64%",
    xl: "80%",
  },
  shadow: {
    none: "0px 0px 4px 2px rgba(0, 0, 0, 0.25)",
    lower: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    upper: "0px -4px 4px rgba(0, 0, 0, 0.25)",
    right: "4px 0px 4px rgba(0, 0, 0, 0.25)",
    left: "-4px 0px 4px rgba(0, 0, 0, 0.25)",
  },
  icon: {
    xs: "16px",
    sm: "24px",
    md: "32px",
    lg: "48px",
    xl: "56px",
  },
  input: {
    md: "424px",
    xs: "202px",
    sm: "313px",
    lg: "646px",
    xl: "100%",
  },
};
export default theme;

export const setWidth = (props: any, inputType: string) => {
  console.log(props);
  switch (inputType) {
    case "input":
      const { md, xs, sm, lg } = props;

      return md
        ? theme.input.md
        : xs
        ? theme.input.xs
        : sm
        ? theme.input.sm
        : lg
        ? theme.input.lg
        : theme.input.xl;

    default:
      return "auto";
  }
};
interface Propscards {
  [x: string]: RegExp;
}

export const getFlag = (input: string) => {
  const cardnumber = input.replace(/[^0-9]+/g, "");

  const re: Propscards = {
    elo: /^(4011(78|79)|43(1274|8935)|45(1416|7393|763(1|2))|50(4175|6699|67[0-7][0-9]|9000)|50(9[0-9][0-9][0-9])|627780|63(6297|6368)|650(03([^4])|04([0-9])|05(0|1)|05([7-9])|06([0-9])|07([0-9])|08([0-9])|4([0-3][0-9]|8[5-9]|9[0-9])|5([0-9][0-9]|3[0-8])|9([0-6][0-9]|7[0-8])|7([0-2][0-9])|541|700|720|727|901)|65165([2-9])|6516([6-7][0-9])|65500([0-9])|6550([0-5][0-9])|655021|65505([6-7])|6516([8-9][0-9])|65170([0-4]))/,
    visa: /^4[0-9]{15}$/,
    mastercard: /^((5(([1-2]|[4-5])[0-9]{8}|0((1|6)([0-9]{7}))|3(0(4((0|[2-9])[0-9]{5})|([0-3]|[5-9])[0-9]{6})|[1-9][0-9]{7})))|((508116)\\d{4,10})|((502121)\\d{4,10})|((589916)\\d{4,10})|(2[0-9]{15})|(67[0-9]{14})|(506387)\\d{4,10})/,
    americanExpress: /^3[47][0-9]{13}$/,
    aura:/^((?!504175))^((?!5067))(^50[0-9])/,
    baneseCard: /^3[47][0-9]{13}$/,
    diners: /(36[0-8][0-9]{3}|369[0-8][0-9]{2}|3699[0-8][0-9]|36999[0-9])/,
    discover: /^6(?:011|5[0-9]{2})[0-9]{12}/,
    fortBrasil: /^628167/,
    GrandCard: /^605032/,
    hipercard: /^606282|^3841(?:[0|4|6]{1})0/,
    jcb: /^(?:2131|1800|35\d{3})\d{11}/,
    personalCard: /'^636085'/,
    sorocred: /'^627892|^636414'/,
    valecard: /'^606444|^606458|^606482'/,
  };

  for (var key in re) {
    if (re[key].test(cardnumber)) {
      return key;
    }
  }

  return "";
};

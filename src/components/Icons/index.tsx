/* eslint-disable no-fallthrough */
import React, { Fragment } from "react";

import { Container } from "./styles";

import { ReactComponent as Information } from "../../assets/icon/information.svg";
import { ReactComponent as Close } from "../../assets/icon/Settings-Close.svg";
import { ReactComponent as Error } from "../../assets/icon/forbidden-2.svg";
import { ReactComponent as Sucess } from "../../assets/icon/verify.svg";
import { ReactComponent as Alert } from "../../assets/icon/warning-2.svg";

interface IconProps {
  name:
    | "menu"
    | "user"
    | "arrow"
    | "filter"
    | "money"
    | "shop"
    | "time"
    | "search"
    | "notification"
    | "archive"
    | "files"
    | "companies"
    | "setting"
    | "tags"
    | "grid"
    | "support"
    | "computers"
    | "content"
    | "type"
    | "design"
    | "business"
    | "messages"
    | "location"
    | "media"
    | "building"
    | "weather"
    | "transport"
    | "school"
    | "diverse"
    | "information"
    | "settings-close"
    | "verify"
    | "forbbidden-2"
    | "error"
    | "alert"
    | "sucess"
    | "information"
    | "info"
    | "primary"
    | "erro"
    | "close";
  type?: string;
  [x: string]: any;
}

export const Icon: React.FC<IconProps> = ({ name, type, ...attrs}) => {
  switch (name) {
    case "settings-close":
    case "close":
      return <Close {...attrs} />;
    case "info":
    case "primary":
    case "information":
      return <Information {...attrs} />;
    case "error":
    case "erro":
      return <Error {...attrs} />;
    case "alert":
      return <Alert {...attrs} />;
    case "sucess":
      return <Sucess {...attrs} />;
    default:
      return <Container>{name}</Container>;
  }
};

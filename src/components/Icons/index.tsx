/* eslint-disable no-fallthrough */
import React, { Fragment } from "react";

import { Container } from "./styles";

import { ReactComponent as Information } from "../../assets/icon/information.svg";
import { ReactComponent as Close } from "../../assets/icon/Settings-Close.svg";

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
    | "primary"
    | "close";
  type?: string;
}

export const Icon: React.FC<IconProps> = ({ name, type }) => {
  switch (name) {
    case "settings-close" || "close" :
      return <Close />;
    case "information" || "info":
      return <Information />;
    default:
      return <Container>{name}</Container>;
  }
};

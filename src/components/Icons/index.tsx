/* eslint-disable no-fallthrough */
import React, { Fragment } from "react";

import { Container } from "./styles";

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
    | "diverse";
  type: string;
}

export const Icon: React.FC<IconProps> = ({ name, type }) => {
  
  return <Container>{({ type })}</Container>;
};

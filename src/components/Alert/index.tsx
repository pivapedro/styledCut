import React from "react";
import { Icon } from "../Icons";
import { Container, Side } from "./styles";

interface PropsAlert {
  alerts:
    | []
    | Array<{
        icon?: Boolean;
        closable?: Boolean;
        label: string;
        status: Boolean;
        type: "error" | "alert" | "sucess" | "information" | "primary";
        open: Boolean;
      }>;
  side?: "left" | "rigth";
}

export const Alert: React.FC<PropsAlert> = ({
  children,
  
  alerts,
  side = "rigth",
}) => {
  return (
    <Side {...side} className={open ? 'visible' : 'hidden'} >
      {alerts.map((alert) => (
        <Container className={alert.type}>
          {alert.icon && <Icon name={alert.type} />}
          {alert.status && <>{alert.type}</>}
          <label>{alert.label}</label>
          {alert.closable && <Icon name="settings-close"  />}
        </Container>
      ))}
    </Side>
  );
};

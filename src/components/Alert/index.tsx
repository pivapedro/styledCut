import React, { useEffect, useState } from "react";
import { Icon } from "../Icons";
import { Container, Side } from "./styles";

export interface PropsAlerts {
  alerts:
    | Array<{
        icon?: Boolean;
        closable?: Boolean;
        label: string;
        status: Boolean;
        type: "error" | "alert" | "sucess" | "info" | "primary";
        open: Boolean;
        [x: string]: any;
      }>
    | [];
  side?: "left" | "rigth";
}

interface AlertProps {
  alerts: {
    icon?: Boolean;
    closable?: Boolean;
    label: string;
    status: Boolean;
    type: "error" | "alert" | "sucess" | "info" | "primary";
    open: Boolean;
  };
}
export const Alerts: React.FC<PropsAlerts> = ({
  children,
  alerts,
  side = "rigth",
  ...attr
}) => {
  return (
    <Side {...side}>
      {alerts.map((alert, index) => (
        <Alert key={index} alerts={alert} {...attr} />
      ))}
    </Side>
  );
};

const Alert: React.FC<AlertProps> = ({ alerts, ...attr }) => {
  const [open, setOpen] = useState<Boolean>(alerts.open);
  const [dNone, setDnone] = useState<string>("");

  useEffect(() => {
    if (open && alerts.closable) {
      setTimeout(() => {
        //setOpen(!open);
      }, 6000);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (open && alerts.closable) {
        setDnone("d-none");
      }
    }, 5000);
  }, [open]);

  return (
    <Container
      {...attr}
      className={
        alerts.type && !!open
          ? "visible " + alerts.type
          : `hidden  ${alerts.type}  ${dNone}`
      }
    >
      {alerts.icon && <Icon name={alerts.type} />}
      <div>
        {alerts.status && <>{alerts.type}</>}
        <label>{alerts.label}</label>
      </div>
      {alerts.closable ? (
        <Icon name="settings-close" onClick={() => setOpen(!open)} />
      ) : (
        <svg />
      )}
    </Container>
  );
};

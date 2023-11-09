import { IconDefinition } from "@fortawesome/free-solid-svg-icons"

type TAlert = {
    title: string;
    message: string;
    alertType: string;
    close: () => void;
}

type TAlertTypes<T> = {
    [key: string]: T;
}

export type { TAlert, TAlertTypes }

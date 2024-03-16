import { Button, Spinner } from "@material-tailwind/react";
import React, { ReactNode } from "react";

interface IProps {
    text: string | ReactNode;
    type?: "button" | "submit" | "reset" | undefined;
    variant?: "filled" | "gradient" | "outlined" | "text";
    className?: string;
    disabled?: boolean;
    loading?: boolean;
    size?: "sm" | "md" | "lg";
    onClick?: () => void;
}

export const CustomButton = ({
    text,
    className = "",
    type = "button",
    variant,
    disabled = false,
    loading = false,
    size,
    onClick,
}: IProps) => {
    return (
        <Button
            type={type}
            variant={variant || "filled"}
            className={className}
            disabled={disabled}
            onClick={onClick}
            size={size || "sm"}
        >
            {loading && <Spinner />}
            {!loading && text}
        </Button>
    );
};

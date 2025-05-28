import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useSelector, useDispatch } from "react-redux";
import {
    increment,
    clear,
    toggleDisabled,
} from "../store/modules/counterStore";
export default function GroupOrientation() {
    const { count, disabled } = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
        <>
            <ButtonGroup
                orientation="vertical"
                aria-label="Vertical button group"
                sx={{ margin: 2 }}
            >
                <Button
                    key="CLICK"
                    onClick={() => dispatch(increment())}
                    disabled={disabled}
                >
                    CLICK:{count}
                </Button>
                <Button key="CLEAR" onClick={() => dispatch(clear())}>
                    CLEAR
                </Button>
                <Button
                    key="DISABLE"
                    onClick={() => dispatch(toggleDisabled())}
                >
                    {disabled ? "ABLE" : "DISABLE"}
                </Button>
            </ButtonGroup>
        </>
    );
}

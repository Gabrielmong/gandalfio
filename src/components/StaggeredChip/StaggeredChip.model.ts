import { ChipProps } from "@mui/material";

export interface StaggeredChipProps extends ChipProps {
    delay: number;
    ready: boolean;
}
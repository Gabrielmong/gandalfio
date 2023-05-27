import { ListItemProps } from "@mui/material";
import { Tech } from "models";

export interface StaggeredListItemProps extends ListItemProps {
    delay: number;
    onAnimationComplete?: () => void;
    skill: Tech;
    direction: "left" | "right";
}

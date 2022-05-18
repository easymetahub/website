import React from "react";
import {HouseDoorFill} from 'react-bootstrap-icons';

export const SideBarData = [
    {
        label: "Home",
        icon: <HouseDoorFill />,
        key: "/"
    },
    {
        label: "Group",
        icon: <HouseDoorFill />,
        key: "/group",
        nodes: [
            {
                label: "Home",
                icon: <HouseDoorFill />,
                key: "/"
            }
        ]
    }
]
import {
    Cog6ToothIcon,
    BellIcon,
    HomeIcon,
    Bars3Icon,
    ChevronDownIcon,
    ChevronRightIcon,
    CubeTransparentIcon,
    InboxIcon,
    MagnifyingGlassIcon,
    PowerIcon,
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    XMarkIcon,
} from "@heroicons/react/16/solid";
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    Alert,
    Card,
    Chip,
    Drawer,
    IconButton,
    Input,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Navbar,
    Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <>
            <Navbar className="min-w-full px-4 py-3 mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4">
                <div className="flex flex-wrap items-center justify-between gap-y-4 text-black">
                    <Typography
                        as="a"
                        href="#"
                        variant="h6"
                        className="mr-4 ml-2 cursor-pointer py-1.5"
                    >
                        Material Tailwind
                    </Typography>
                    <div className="hidden lg:block">
                        <div className="ml-auto flex gap-1 md:mr-4">
                            <IconButton variant="text">
                                <HomeIcon className="h-4 w-4" />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </Navbar>
        </>
    );
};

import {
    Tab as TabMT,
    Tabs as TabsMT,
    TabsHeader,
    TabsBody,
    TabPanel,
} from "@material-tailwind/react";
import { ReactNode } from "react";

interface IRenderContentProps {
    render: (record: any) => ReactNode;
}

interface ITabsProps {
    renderContent?: JSX.Element[];
    tabsHeader: string[];
    valueDefault: string;
}
export const Tabs = ({
    renderContent,
    valueDefault,
    tabsHeader,
}: ITabsProps) => {
    return (
        <TabsMT value={valueDefault}>
            <TabsHeader>
                {tabsHeader.map((tab, index) => (
                    <TabMT key={`tab_${index}`} value={tab}>
                        {tab}
                    </TabMT>
                ))}
            </TabsHeader>
            <TabsBody>
                {renderContent?.map((content, index) => (
                    <TabPanel key={`tab_${index}`} value={tabsHeader[index]}>
                        {content}
                    </TabPanel>
                ))}
            </TabsBody>
        </TabsMT>
    );
};

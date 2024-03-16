import React, { ReactNode } from "react";
import {
    Avatar,
    Card,
    CardBody,
    Chip,
    IconButton,
    SpeedDialAction,
    Spinner,
    Tooltip,
    Typography,
} from "@material-tailwind/react";

interface IColumn {
    title: string;
    key: string;
    render?: (record: any) => ReactNode;
}

interface ITableProps {
    data: any[];
    columns?: IColumn[];
    loading?: boolean;
    striped?: boolean;
    bordered?: boolean;
    hover?: boolean;
    title?: string;
    onRowClick?: (row: any) => void;
}

export const GenericTable = ({
    data,
    columns,
    loading,
    striped,
    title,
    hover,
    onRowClick,
}: ITableProps) => {
    return (
        <Card shadow className="w-full">
            <CardBody className="py-4">
                <Typography variant="h6" color="blue-gray" className="mb-4">
                    {title}
                </Typography>
                <div className="overflow-x-auto mt-6">
                    <table className="table-auto border-collapse w-full">
                        <thead>
                            {columns && (
                                <tr className="rounded-lg text-sm font-medium text-gray-700 text-left">
                                    {columns.map((column) => (
                                        <th
                                            key={column.key}
                                            className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                                        >
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal leading-none opacity-70"
                                            >
                                                {column.title}
                                            </Typography>
                                        </th>
                                    ))}
                                </tr>
                            )}
                        </thead>
                        <tbody className="text-sm font-normal text-gray-700">
                            {loading && (
                                <tr>
                                    <td
                                        colSpan={columns?.length}
                                        className="border-y border-blue-gray-100 p-4"
                                    >
                                        <Spinner />
                                    </td>
                                </tr>
                            )}
                            {!loading &&
                                data.map((record, index) => {
                                    return (
                                        <tr
                                            key={index}
                                            onClick={() =>
                                                onRowClick && onRowClick(record)
                                            }
                                        >
                                            {columns?.map((column) => (
                                                <td
                                                    key={column.key}
                                                    className={`border-y border-blue-gray-100 p-4`}
                                                >
                                                    {column.render
                                                        ? column.render(record)
                                                        : record[column.key]}
                                                </td>
                                            ))}
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                    {!loading && data.length === 0 && (
                        <div className="flex flex-col p-4 items-center justify-center">
                            <img
                                src="/assets/images/ilustration_empty.svg"
                                alt="Placeholder"
                                className=" h-96 w-full mx-auto"
                            />
                            <Typography
                                variant="h6"
                                color="blue-gray"
                                className="mt-8"
                            >
                                Nenhum registro encontrado
                            </Typography>
                        </div>
                    )}
                </div>
            </CardBody>
        </Card>
    );
};

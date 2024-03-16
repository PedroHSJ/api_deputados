import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import { Button } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";

interface IPagination {
    page: number;
    perPage: number;
    total: number;
    onPageChange: (page: number) => void;
}

export const Pagination = ({
    page,
    perPage,
    total,
    onPageChange,
}: IPagination) => {
    const [pages, setPages] = useState<number[]>([1]);
    const [firstPage, setFirstPage] = useState<number>(1);
    const [lastPage, setLastPage] = useState<number>(1);

    const calcPages = () => {
        const allPages: number[] = !total
            ? [1]
            : new Array(Math.ceil(total / perPage))
                  .fill(null)
                  .map((_: undefined, index: number) => index + 1);

        setPages(allPages);

        if (allPages.length <= 10) {
            setFirstPage(1);
            setLastPage(allPages.length);
        } else {
            if (page <= 6) {
                setFirstPage(1);
                setLastPage(10);
            } else if (page + 4 >= total) {
                setFirstPage(total - 9);
                setLastPage(allPages.length);
            } else {
                setFirstPage(page - 5);
                setLastPage(page + 4);
            }
        }
    };

    useEffect(() => {
        calcPages();
    }, []);

    useEffect(() => {
        calcPages();
    }, [page, perPage, total]);

    return (
        <>
            <Button
                variant="text"
                className="flex items-center gap-2"
                onClick={() => onPageChange(page - 1)}
                disabled={page === 1}
            >
                <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
                Anterior
            </Button>

            <Button
                variant="text"
                className="flex items-center gap-2"
                onClick={() => onPageChange((prev) => prev + 1)}
                disabled={page === pages.length}
            >
                Próximo
                <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </Button>
        </>
    );
};

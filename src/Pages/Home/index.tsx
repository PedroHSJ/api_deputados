import { useEffect, useState } from "react";
import { useDeputados } from "../../hooks/useDeputados";
import { GenericTable } from "../../components/Table";
import { CustomButton } from "../../components/Buttons/custom-button";
import {
    Card,
    CardBody,
    Input,
    Select,
    Typography,
    Option,
    Avatar,
    Button,
} from "@material-tailwind/react";
import { Pagination } from "../../components/Pagination";
import { partidos, ufs } from "../../constants";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const { deputados, error, loading, getAllDeputados } = useDeputados();
    const [actualPage, setActualPage] = useState<number>(1);
    const [name, setName] = useState<string | undefined>("");
    const [partido, setPartido] = useState<string | undefined>("");
    const [uf, setUf] = useState<string | undefined>("");
    const navigate = useNavigate();

    useEffect(() => {
        if (!error) return;
        toast.error(error);
    }, [error]);

    useEffect(() => {
        getAllDeputados({
            pagina: 1,
            itens: 10,
            ordem: "ASC",
            ordenarPor: "nome",
        });
    }, []);

    useEffect(() => {
        getAllDeputados({
            pagina: actualPage,
            itens: 10,
            ordem: "ASC",
            ordenarPor: "nome",
            nome: name != "" ? name : undefined,
            siglaPartido: partido != "" ? partido : undefined,
            siglaUf: uf != "" ? uf : undefined,
        });
    }, [actualPage]);

    const columns = [
        {
            title: "",
            key: "avatar",
            width: 50,
            render(record: any) {
                return <Avatar src={record.urlFoto} />;
            },
        },
        {
            title: "Nome",
            key: "nome",
            width: 200,
        },
        {
            title: "Partido",
            key: "siglaPartido",
            width: 100,
        },
        {
            title: "UF",
            key: "siglaUf",
            width: 100,
        },
        {
            title: "Ações",
            key: "actions",
            className: "text-center",
            width: 100,
            render(record: any) {
                return (
                    <>
                        <CustomButton
                            text="Detalhes"
                            onClick={() => navigate(`/deputado/${record.id}`)}
                        />
                    </>
                );
            },
        },
    ];

    const handleSearch = () => {
        getAllDeputados({
            pagina: 1,
            itens: 10,
            ordem: "ASC",
            ordenarPor: "nome",
            nome: name,
            siglaPartido: partido,
            siglaUf: uf,
        });
    };

    // useEffect(() => {
    //     //debounce to input name

    //     if (name === "" && partido === "" && uf === "") return;
    //     const timer = setTimeout(() => {
    //         getAllDeputados({
    //             pagina: 1,
    //             itens: 10,
    //             ordem: "ASC",
    //             ordenarPor: "nome",
    //             nome: name,
    //             siglaPartido: partido,
    //             siglaUf: uf,
    //         });
    //     }, 2000);
    //     return () => clearTimeout(timer);
    // }, [name, partido, uf]);

    return (
        <div>
            <Typography variant="h3" className="mb-4">
                Olá, seja bem-vindo!
            </Typography>

            <Typography variant="small" className="mb-4">
                Aqui você pode visualizar os dados dos deputados federais do
                Brasil.
            </Typography>
            <div className="flex flex-wrap gap-4 w-1/4">
                <Input
                    label="Nome do deputado"
                    className="mb-4"
                    variant="standard"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Select
                    label="Partido"
                    variant="standard"
                    placeholder="Selecione o partido"
                    className="mb-4"
                    onSelect={(e) => setPartido(e)}
                >
                    {partidos.map((partido) => (
                        <Option value={partido} key={partido}>
                            {partido}
                        </Option>
                    ))}
                </Select>

                <Select
                    label="UF"
                    variant="standard"
                    placeholder="Selecione a UF"
                    className="mb-4"
                    onChange={(e) => setUf(e)}
                >
                    {ufs.map((uf) => (
                        <Option value={uf} key={uf}>
                            {uf}
                        </Option>
                    ))}
                </Select>
                <Button disabled={loading} size="sm" onClick={handleSearch}>
                    Buscar
                </Button>
            </div>

            <CardBody>
                <GenericTable
                    key={`table-deputados`}
                    data={deputados}
                    loading={loading}
                    columns={columns}
                    hover
                    title="Deputados Federais"
                />
            </CardBody>
            <div className="flex flex-row">
                <Pagination
                    page={actualPage}
                    perPage={10}
                    total={513}
                    onPageChange={(page) => setActualPage(page)}
                />
            </div>
        </div>
    );
};

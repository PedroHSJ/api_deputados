import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useDeputados } from "../../hooks/useDeputados";
import {
    Avatar,
    Card,
    CardBody,
    CardHeader,
    Typography,
} from "@material-tailwind/react";
import { Tabs } from "../../components/Tabs";

export const DeputadoDetails = () => {
    const params = useParams<{ id: string }>();
    const { id } = params;
    const navigate = useNavigate();
    const { deputadoDetails, error, loading, getDeputadoById } = useDeputados();

    useEffect(() => {
        if (!id) {
            toast.error("Deputado não encontrado");
            navigate("/");
        }
        getDeputadoById(Number(id));
    }, [id, navigate]);
    return (
        <Card>
            <CardHeader
                color="transparent"
                floated={false}
                shadow={false}
                className="mx-0 flex items-center gap-4 p-4"
            >
                {!loading && deputadoDetails && (
                    <>
                        <img
                            src={deputadoDetails.ultimoStatus.urlFoto}
                            className="h-48 w-48 object-cover object-center rounded-md "
                        />
                        <div className="flex flex-col">
                            <Typography color="blue-gray" variant="h5">
                                {deputadoDetails.ultimoStatus.nome}
                            </Typography>
                            <Typography color="blue-gray" variant="p">
                                {deputadoDetails.ultimoStatus.email}
                            </Typography>
                        </div>
                    </>
                )}
            </CardHeader>

            <CardBody className="p-4">
                <div className="flex flex-col gap-4">
                    {/* <div className="flex flex-col gap-2 bg-blue-gray-100 rounded-lg p-4">
                        <Typography color="blue-gray" variant="h6">
                            Informações
                        </Typography>
                    </div>
                    <div className="flex flex-col gap-2 bg-blue-gray-100 rounded-lg p-4 text-black font-bold">
                        <Typography>
                            Nome: {deputadoDetails?.ultimoStatus.nome}
                        </Typography>
                        <Typography variant="span">
                            CPF: {deputadoDetails?.cpf}
                        </Typography>
                        <Typography variant="span">
                            Data de nascimento:{" "}
                            {deputadoDetails?.dataNascimento}
                        </Typography>
                        <Typography variant="span">
                            Escolaridade: {deputadoDetails?.escolaridade}
                        </Typography>
                        <Typography variant="span">
                            Sexo: {deputadoDetails?.sexo}
                        </Typography>
                    </div> */}

                    <Tabs
                        tabsHeader={[
                            "Informações",
                            "Gabinete",
                            "Redes Sociais",
                        ]}
                        valueDefault="Informações"
                        key={`tab-${id}`}
                        renderContent={[
                            <>
                                <div className="flex flex-col gap-2 bg-blue-gray-100 rounded-lg p-4">
                                    <Typography color="blue-gray" variant="h6">
                                        Informações
                                    </Typography>
                                </div>
                                <div className="flex flex-col gap-2 bg-blue-gray-100 rounded-lg p-4 text-black font-bold">
                                    <Typography>
                                        Nome:{" "}
                                        {deputadoDetails?.ultimoStatus.nome}
                                    </Typography>
                                    <Typography variant="span">
                                        CPF: {deputadoDetails?.cpf}
                                    </Typography>
                                    <Typography variant="span">
                                        Data de nascimento:{" "}
                                        {deputadoDetails?.dataNascimento}
                                    </Typography>
                                    <Typography variant="span">
                                        Escolaridade:{" "}
                                        {deputadoDetails?.escolaridade}
                                    </Typography>
                                    <Typography variant="span">
                                        Sexo: {deputadoDetails?.sexo}
                                    </Typography>
                                </div>
                            </>,
                            <>
                                <div className="flex flex-col gap-2 bg-blue-gray-100 rounded-lg p-4">
                                    <Typography color="blue-gray" variant="h6">
                                        Gabinete
                                    </Typography>
                                </div>
                                <div className="flex flex-col gap-2 bg-blue-gray-100 rounded-lg p-4 text-black font-bold">
                                    <Typography>
                                        Nome:{" "}
                                        {
                                            deputadoDetails?.ultimoStatus
                                                .gabinete.nome
                                        }
                                    </Typography>
                                    <Typography variant="span">
                                        Email:{" "}
                                        {
                                            deputadoDetails?.ultimoStatus
                                                .gabinete.email
                                        }
                                    </Typography>
                                    <Typography variant="span">
                                        Telefone:{" "}
                                        {
                                            deputadoDetails?.ultimoStatus
                                                .gabinete.telefone
                                        }
                                    </Typography>
                                </div>
                            </>,
                            <>
                                <div className="flex flex-col gap-2 bg-blue-gray-100 rounded-lg p-4">
                                    <Typography color="blue-gray" variant="h6">
                                        Redes Sociais
                                    </Typography>
                                </div>
                                <div className="flex flex-col gap-2 bg-blue-gray-100 rounded-lg p-4 text-black font-bold">
                                    {deputadoDetails?.redeSocial.map(
                                        (rede, index) => (
                                            <Typography key={index}>
                                                {rede}
                                            </Typography>
                                        )
                                    )}
                                </div>
                            </>,
                        ]}
                    />
                </div>
            </CardBody>
        </Card>
    );
};

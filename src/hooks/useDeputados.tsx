import { useState } from "react";
import { IDeputado } from "../interfaces/IDeputado";
import { IParams } from "../interfaces/IParams";
import { getAllDeputadosApi } from "../services/DeputadoApi";

interface IUseDeputados {
    deputados: Partial<IDeputado>[];
    loading: boolean;
    error: string;
    getAllDeputados: (params: IParams) => Promise<void>;
}

export const useDeputados = (): IUseDeputados => {
    const [deputados, setDeputados] = useState<Partial<IDeputado>[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const getAllDeputados = async (params: IParams) => {
        setError("");
        setLoading(true);
        try {
            const { dados } = await getAllDeputadosApi(params);

            setDeputados(dados);
        } catch (error) {
            setError(`Ocorreu um erro ao buscar os deputados: ${error}`);
        } finally {
            setLoading(false);
        }
    };

    return { getAllDeputados, deputados, loading, error };
};

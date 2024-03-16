import { useState } from "react";
import { IDeputado } from "../interfaces/IDeputado";
import { IParams } from "../interfaces/IParams";
import {
    getAllDeputadosApi,
    getDeputadoByIdApi,
} from "../services/DeputadoApi";

interface IUseDeputados {
    deputados: IDeputado[] | undefined;
    loading: boolean;
    error: string;
    deputadoDetails: IDeputado | undefined;
    getAllDeputados: (params: IParams) => Promise<void>;
    getDeputadoById: (id: number) => Promise<void>;
}

export const useDeputados = (): IUseDeputados => {
    const [deputados, setDeputados] = useState<IDeputado[] | undefined>([]);
    const [deputadoDetails, setDeputadoDetails] = useState<IDeputado>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const getAllDeputados = async (params: IParams) => {
        setError("");
        setLoading(true);
        try {
            const response = await getAllDeputadosApi(params);
            if (response?.dados) setDeputados(response?.dados as IDeputado[]);
        } catch (error) {
            setError(`Ocorreu um erro ao buscar os deputados: ${error}`);
        } finally {
            setLoading(false);
        }
    };

    const getDeputadoById = async (id: number) => {
        setError("");
        setLoading(true);
        try {
            const response = await getDeputadoByIdApi(id);
            if (response?.dados) setDeputadoDetails(response?.dados);
        } catch (error) {
            setError(`Ocorreu um erro ao buscar o deputado: ${error}`);
        } finally {
            setLoading(false);
        }
    };

    return {
        getAllDeputados,
        getDeputadoById,
        deputados,
        deputadoDetails,
        loading,
        error,
    };
};

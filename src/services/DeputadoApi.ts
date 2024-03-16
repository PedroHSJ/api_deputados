import api from ".";
import { IDeputado } from "../interfaces/IDeputado";
import { IParams } from "../interfaces/IParams";
import { IResponse } from "../interfaces/IResponse";

export const getAllDeputadosApi = async (
    params: IParams
): Promise<IResponse<Partial<IDeputado>>> => {
    const response = await api.get<IResponse<Partial<IDeputado>>>(
        "/deputados",
        {
            params,
        }
    );
    return response.data;
};

export const getDeputadoByIdApi = async (
    id: number
): Promise<IResponse<IDeputado>> => {
    const response = await api.get<IResponse<IDeputado>>(`/deputados/${id}`);
    return response.data;
};

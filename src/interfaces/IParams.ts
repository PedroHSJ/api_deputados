export interface IParams {
    nome?: string;
    siglaPartido?: string;
    siglaUf?: string;
    pagina?: number;
    itens?: number;
    ordem?: "ASC" | "DESC";
    ordenarPor?: "nome" | "siglaPartido" | "siglaUf";
}

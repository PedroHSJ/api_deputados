export interface IResponse<T> {
    dados: T;
    links: {
        rel: string;
        href: string;
    };
}

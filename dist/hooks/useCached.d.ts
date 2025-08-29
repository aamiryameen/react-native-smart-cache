export declare function useCached<T>(key: string, fetcher: () => Promise<T>, ttl?: number): {
    data: T;
    loading: boolean;
};

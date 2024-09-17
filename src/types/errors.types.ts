export interface ApiErrorResponse {
    response: {
        data: {
            message: string;
            errors?: Record<string, string[]>;
            error: string;
        };
    };
}

export interface NewsState {
    data: { id: number; title: string }[];
    status: '' | 'loading' | 'failed';
    error: string | null | undefined;
};

export type LanguageState = {
    language: string;
};

export interface HeaderPageProps {
    isAuthenticated: boolean;
};

export interface ProfilePageProps {
    setIsAuthenticated: (value: boolean) => void;
};

export interface LoginPageProps {
    isAuthenticated: boolean;
    setIsAuthenticated: (value: boolean) => void;
};
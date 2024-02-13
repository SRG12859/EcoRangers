export type AuthContextType = {
  JWT: string;
  login: (email: string, password: string) => void;
  signup: (email: string, password: string) => void;
  logout: () => void;
  isLoading: boolean;
  AT: string;
  isLoggedIn: boolean;
  civilPt: number;
  uN: String;
  getUser: Function;
};

export default interface User {
  name: string;
  company_name: string;
  cnpj: string;
  email: string;
  phone: string;
  password: string;
  isAdmin: boolean;
}

export default interface UserLogin {
  email: string;
  password: string;
}

export default interface UserParams {
  id: string;
}

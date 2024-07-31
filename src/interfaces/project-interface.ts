export default interface ProjectRequest {
  name: string;
  cnpj: string;
  userId: string;
}

export default interface ProjectUpdate {
  status: string;
  progress: string;
  updatedAt: Date;
}

export default interface ProjectParams {
  id: string;
}

export class RolModel {
  _id: string;
  NombreRol: string;
  Description: string;
  Estado: boolean;
  IdUser: string;
  Permiso: any[] = [];
}

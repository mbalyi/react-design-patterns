export enum Permission {
    DENIED = "denied",
    ALLOWED = "allowed",
    LIMITED = "limited",
  }
  
export interface Data {
    id: number;
    name: string;
    permission: Permission;
  }
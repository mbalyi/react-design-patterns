import { Data, Permission } from "../types/data";

export const EXAMPLE_DATA: Data[] = [
    { id: 1, name: "Not valid data", permission: Permission.DENIED },
    { id: 2, name: "valid data", permission: Permission.ALLOWED },
    { id: 3, name: "Limited data", permission: Permission.LIMITED },
];
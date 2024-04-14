export type FieldType = 'string' | 'boolean' | 'number' | 'link';

export interface TableColumn {
    name: string;
    width: string;
    type: FieldType;
}
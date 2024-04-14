export type FieldType = 'string' | 'checkbox' | 'number' | 'link' | 'img';

export interface TableColumn {
    name: string;
    width: string;
    type: FieldType;
    show: boolean;
    relatedToDataColumn: boolean;
    urlImg?: string;
    resource?: (id: string) => void;
}
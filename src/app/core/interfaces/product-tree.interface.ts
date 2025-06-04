export interface ProductTreeLine {
    ItemCode: string;
    Quantity: number;
    Warehouse: string;
    Price: number;
    Currency: string;
    IssueMethod: string;
    ItemName: string;
}

export interface ProductTree {
    TreeCode: string;
    ProductDescription: string;
    Quantity: number;
    Warehouse: string;
    ProductTreeLines: ProductTreeLine[];
}

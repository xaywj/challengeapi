export class CreateOrderdetailDto {
    order_id: number;
    product_id: number;
    quantity: number;
    price: number;
    created_date: Date;
    updated_at: Date;
}

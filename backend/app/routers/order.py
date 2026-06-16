from fastapi import APIRouter,Depends,HTTPException
from sqlalchemy.orm import Session
from app.models import Product, Order
from app.schema import OrderCreate
from app.dependencies import get_db

router=APIRouter()

@router.post("/")
def create_order(order:OrderCreate,
                 db:Session=Depends(get_db)):

    product=db.query(Product).filter(
        Product.id==order.product_id
    ).first()

    if product.quantity < order.quantity:
        raise HTTPException(
            status_code=400,
            detail="Insufficient stock"
        )

    total=product.price*order.quantity

    product.quantity-=order.quantity

    o=Order(
        customer_id=order.customer_id,
        product_id=order.product_id,
        quantity=order.quantity,
        total_amount=total
    )

    db.add(o)
    db.commit()

    return o


@router.get("/")
def get_orders(db:Session=Depends(get_db)):
    return db.query(Order).all()

@router.get("/{id}")
def get_order(
        id: int,
        db: Session = Depends(get_db)
):

    order = db.query(Order).filter(
        Order.id == id
    ).first()

    if not order:
        raise HTTPException(
            status_code=404,
            detail="Order not found"
        )

    return order

@router.delete("/{id}")
def delete_order(
        id: int,
        db: Session = Depends(get_db)
):

    order = db.query(Order).filter(
        Order.id == id
    ).first()

    if not order:
        raise HTTPException(
            status_code=404,
            detail="Order not found"
        )

    db.delete(order)

    db.commit()

    return {
        "message": "Order deleted"
    }
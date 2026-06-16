from fastapi import APIRouter,Depends,HTTPException
from sqlalchemy.orm import Session
from app.models import Customer
from app.schema import CustomerCreate
from app.dependencies import get_db

router=APIRouter()

@router.post("/")
def create_customer(customer:CustomerCreate,
                    db:Session=Depends(get_db)):

    check=db.query(Customer).filter(
        Customer.email==customer.email
    ).first()

    if check:
        raise HTTPException(
            status_code=400,
            detail="Email already exists"
        )

    c=Customer(**customer.dict())

    db.add(c)
    db.commit()

    return c


@router.get("/")
def get_customers(db:Session=Depends(get_db)):
    return db.query(Customer).all()


@router.delete("/{id}")
def delete_customer(
        id: int,
        db: Session = Depends(get_db)
):

    customer = db.query(Customer).filter(
        Customer.id == id
    ).first()

    if not customer:
        raise HTTPException(
            status_code=404,
            detail="Customer not found"
        )

    db.delete(customer)

    db.commit()

    return {
        "message": "Customer deleted"
    }


@router.get("/{id}")
def get_customer(
        id: int,
        db: Session = Depends(get_db)
):

    customer = db.query(Customer).filter(
        Customer.id == id
    ).first()

    if not customer:
        raise HTTPException(
            status_code=404,
            detail="Customer not found"
        )

    return customer
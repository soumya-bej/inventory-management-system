from fastapi import APIRouter,Depends,HTTPException
from sqlalchemy.orm import Session
from app.models import Product
from app.schema import ProductCreate
from app.dependencies import get_db

router=APIRouter()

@router.post("/")
def create_product(product:ProductCreate,
                   db:Session=Depends(get_db)):

    check=db.query(Product).filter(
        Product.sku==product.sku
    ).first()

    if check:
        raise HTTPException(
            status_code=400,
            detail="SKU already exists"
        )

    p=Product(**product.dict())

    db.add(p)
    db.commit()

    return p


@router.get("/")
def get_products(db:Session=Depends(get_db)):
    return db.query(Product).all()


@router.get("/{id}")
def get_product(id:int,
                db:Session=Depends(get_db)):

    return db.query(Product).filter(
        Product.id==id
    ).first()


@router.put("/{id}")
def update_product(
    id: int,
    product: ProductCreate,
    db: Session = Depends(get_db)
):

    p = db.query(Product).filter(
        Product.id == id
    ).first()

    if not p:
        raise HTTPException(
            status_code=404,
            detail="Product not found"
        )

    p.name = product.name
    p.sku = product.sku
    p.price = product.price
    p.quantity = product.quantity

    db.commit()
    db.refresh(p)

    return p


@router.delete("/{id}")
def delete_product(
        id: int,
        db: Session = Depends(get_db)
):

    product = db.query(Product).filter(
        Product.id == id
    ).first()

    if not product:
        raise HTTPException(
            status_code=404,
            detail="Product not found"
        )

    db.delete(product)

    db.commit()

    return {
        "message": "Product deleted"
    }
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import engine
from app.models import Base
from app.routers import product, customer, order

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(product.router, prefix="/products", tags=["Products"])
app.include_router(customer.router, prefix="/customers", tags=["Customers"])
app.include_router(order.router, prefix="/orders", tags=["Orders"])
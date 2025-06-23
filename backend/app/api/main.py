from app.api.routes import items, login, private, users, utils
from app.core.config import settings
from fastapi import APIRouter

api_router = APIRouter()
api_router.include_router(login.router)
api_router.include_router(users.router)
api_router.include_router(utils.router)
api_router.include_router(items.router)

if settings.ENVIRONMENT == "local":
    api_router.include_router(private.router)

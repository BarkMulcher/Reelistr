from fastapi import APIRouter, Depends, Response
from typing import List, Optional, Union
from queries.movie_collection import (
    Error,
    CollectionIn,
    CollectionOut,
    CollectionRespository
)

router = APIRouter()

@router.post("/user/{user_id}/collections", response_model = CollectionOut)
def create_collection(
    user_id: str,
    collection: CollectionIn,
    response: Response,
    repo: CollectionRespository= Depends(),
):
    return repo.create(collection, user_id)



@router.get("/user/collections/{collection_id}", response_model = Optional[CollectionOut])
def get_one(
    collection_id: int,
    response: Response,
    repo: CollectionRespository= Depends(),
) -> CollectionOut:
    collection = repo.get_one(collection_id)
    if collection is None:
            response.status_code = 404
    return collection

@router.put("/user/collections/{collection_id}", response_model = CollectionOut)
def update_collection(
    # user_id: str
    collection_id: int,
    collection: CollectionIn,
    repo: CollectionRespository= Depends(),
) -> CollectionOut:
    return repo.update(collection_id, collection)

@router.delete("/user/collections/{collection_id}/", response_model = bool)
def delete_collection(
    collection_id: int,
    response: Response,
    repo: CollectionRespository= Depends(),
) -> bool:
    return repo.delete(collection_id)

@router.get("/user/collections/", response_model = List[CollectionOut])
def get_all(
    repo: CollectionRespository= Depends(),
):
    return repo.get_all()

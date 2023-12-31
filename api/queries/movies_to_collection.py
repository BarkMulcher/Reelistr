from pydantic import BaseModel
from typing import List
from queries.pool import pool


class Error(BaseModel):
    message: str


class MovieToCollectionIn(BaseModel):
    # movie_id: int
    collection_id: int


class MovieToCollectionOut(BaseModel):
    id: int
    movie_id: int
    collection_id: int


class MovieToCollectionRepo:
    def add_movie_to_collection(self, username: str, movie_id: int, collection_id: int) -> MovieToCollectionOut: # noqa
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    INSERT INTO movies_in_collections
                        (
                        username,
                        collection_id,
                        movie_id
                        )
                    VALUES
                    (%s, %s, %s)
                    RETURNING id, collection_id, movie_id
                    """,
                    [
                        username,
                        collection_id,
                        movie_id
                    ]
                )
                collec = result.fetchone()
                collection = MovieToCollectionOut(
                    id=collec[0],
                    collection_id=collec[1],
                    movie_id=collec[2]
                )
                return collection

    def get_all_movies_in_collection(self, username: str, collection_id: int) -> List[MovieToCollectionOut]: # noqa
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                        SELECT * FROM movies_in_collections
                        WHERE
                        username = %s
                        AND
                        collection_id = %s
                    """,
                    [
                        username,
                        collection_id
                    ]
                )
                print("result:", result)
                movies = []
                for film in result:
                    movie = MovieToCollectionOut(
                        id=film[0],
                        movie_id=film[3],
                        collection_id=film[2],
                    )
                    movies.append(movie)
                return movies

# order matters here
    def delete_movie_in_collection(self, username: str, collection_id: int, movie_id: int) -> bool: # noqa
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM movies_in_collections
                        WHERE
                        username = %s
                        AND
                        collection_id = %s
                        AND
                        movie_id = %s
                        """,
                        [
                            username,
                            collection_id,
                            movie_id
                        ]
                    )
                    if db.rowcount > 0:
                        return True
                    else:
                        return False
        except Exception as e:
            print(e)
            return False

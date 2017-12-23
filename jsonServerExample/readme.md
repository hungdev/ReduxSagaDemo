json-server --watch db.json --port 3004

http://localhost:3000/movies?name=The Blind Side&releaseYear=2009
http://localhost:3000/movies?id=1&id=2
http://localhost:3000/movies?_page=1&_limit=5
http://localhost:3000/movies?_sort=name&_order=asc
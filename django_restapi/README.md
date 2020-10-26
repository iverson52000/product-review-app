# Restaurant Review App Backend API
The backend REST API built in Django, Django Rest Framework, Django Rest Auth, for Restaurant Review App 

## REST API end points
Admin: Can add/edit/delete, restaurants, users and reviews

Regular User: Can rate and leave a comment for a restaurant

**Restaurant**

Persmission: IsAuthenticatedOrReadOnly

(GET, POST) `/viewset/restaurant/`

(GET, POST) `/viewset/restaurant/:id/`

**Review**

Persmission: IsAuthenticatedOrReadOnly

(GET, POST) `/viewset/review/`

(GET, POST) `/viewset/review/:id/`

**Authentication**

Token based authentication

`/auth/login/`

`/auth/logout/`

`/auth/registration/`


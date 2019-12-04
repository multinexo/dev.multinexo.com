---
resource: auth_clients
permalink: /docs/0.0.23/resources/auth_clients/
version: 0.0.23
singular: resource
section: AuthFactor
partOf: user
attributes:
  -
    name: name
    crud: 'create, read, update'
  -
    name: secret
    crud: 'create, read, update'
  -
    name: redirect
    crud: 'create, read, update'
  -
    name: personal_access_client
    crud: 'create, read, update'
  -
    name: password_client
    crud: 'create, read, update'
  -
    name: revoked
    crud: 'create, read, update'
relationships:
  -
    resource: user
    alias: user
    crud: 'create, read, update'

---

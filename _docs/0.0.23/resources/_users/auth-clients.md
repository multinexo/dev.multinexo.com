---
resource: auth_clients
permalink: /docs/0.0.23/resources/auth_clients/
version: 0.0.23
singular: resource
section: Users
partOf: user
attributes:
  -
    name: name
    crud: 'create, read, update'
    filter: StringFilter
    sortable: 'true'
  -
    name: redirect
    crud: 'create, read, update'
  -
    name: revoked
    crud: read
    sortable: 'true'
  -
    name: secret
    crud: read
    sortable: 'true'
relationships:
  -
    resource: user
    alias: user
    crud: 'create, read, update'

---

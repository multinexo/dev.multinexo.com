---
resource: tokens
permalink: /docs/0.0.23/resources/tokens/
version: 0.0.23
singular: resource
section: AuthFactor
partOf: user
attributes:
  -
    name: name
    crud: 'create, read, update'
  -
    name: revoked
    crud: 'create, read, update'
  -
    name: expires_at
    crud: read
relationships:
  -
    resource: auth_client
    alias: auth_client
    crud: 'create, read, update'

---

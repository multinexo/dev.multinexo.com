---
resource: additional_accounts
permalink: /docs/0.0.23/resources/additional_accounts/
version: 0.0.23
singular: resource
section: Users
partOf: user
attributes:
  -
    name: email
    crud: 'create, read'
    required: true
    rules:
      - email
  -
    name: activated
    crud: read
  -
    name: last_login
    crud: read
relationships:
  -
    resource: user
    alias: user
    crud: 'create, read, update'

---

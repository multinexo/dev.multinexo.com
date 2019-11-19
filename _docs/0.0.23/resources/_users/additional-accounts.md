---
resource: additional_accounts
version: 0.0.23
permalink: /docs/0.0.23/resources/additional_accounts/
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
relationships: {  }

---

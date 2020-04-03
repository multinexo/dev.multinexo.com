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
    sortable: 'true'
    required: true
    rules:
      - email
  -
    name: activated
    crud: read
    sortable: 'true'
  -
    name: last_login
    crud: read
    sortable: 'true'
relationships: {  }

---

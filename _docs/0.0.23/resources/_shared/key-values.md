---
resource: key_values
permalink: /docs/0.0.23/resources/key_values/
version: 0.0.23
singular: resource
section: Shared
partOf: company
attributes:
  -
    name: key
    crud: 'create, read'
    required: true
    value_type: string
  -
    name: value
    crud: 'create, read, update'
    required: true
    value_type: string
relationships:
  -
    resource: author
    alias: author
    crud: 'create, read, update'
  -
    resource: company
    alias: company
    crud: 'create, read, update'

---

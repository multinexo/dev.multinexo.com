---
resource: entity_types
permalink: /docs/0.0.23/resources/entity_types/
version: 0.0.23
singular: resource
section: Entities
partOf: guest
attributes:
  -
    name: name
    crud: 'create, read, update'
    required: true
    value_type: string
    rules:
      - 'max:96'
relationships: {  }

---

---
resource: mercadolibre_categories
permalink: /docs/0.0.23/resources/mercadolibre_categories/
version: 0.0.23
singular: resource
section: Products
partOf: guest
attributes:
  -
    name: name
    crud: 'create, read, update'
    filter: StringFilter
    sortable: 'true'
  -
    name: publication_meta_keys
    crud: 'create, read, update'
    filter: StringFilter
    sortable: 'true'
  -
    name: full_name
    crud: 'create, read, update'
    filter: StringFilter
    sortable: 'true'
relationships:
  -
    resource: children
    alias: children
    crud: read
  -
    resource: parent
    alias: parent
    crud: 'create, read, update'

---

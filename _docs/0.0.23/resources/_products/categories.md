---
resource: categories
permalink: /docs/0.0.23/resources/categories/
version: 0.0.23
singular: resource
section: Products
partOf: company
attributes:
  -
    name: name
    crud: 'create, read, update'
    filter: StringFilter
    sortable: 'true'
    required: true
    rules:
      - 'max:96'
  -
    name: deleted
    crud: 'create, read, update'
    filter: DeletedFilter
    sortable: 'true'
relationships:
  -
    resource: categories
    alias: categories
    crud: read
  -
    resource: pricelist_categories
    alias: pricelist_categories
    crud: 'create, read, update'
  -
    resource: parentcategory
    alias: parentcategory
    crud: 'create, read, update'

---

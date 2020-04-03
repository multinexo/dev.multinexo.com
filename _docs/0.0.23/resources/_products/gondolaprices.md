---
resource: gondolaprices
permalink: /docs/0.0.23/resources/gondolaprices/
version: 0.0.23
singular: resource
section: Products
partOf: company
attributes:
  -
    name: only_modified
    crud: 'create, read'
    sortable: 'true'
  -
    name: date
    crud: read
    sortable: 'true'
  -
    name: pdf_url
    crud: read
    sortable: 'true'
relationships:
  -
    resource: pricelist
    alias: pricelist
    crud: 'create, read, update'
  -
    resource: category
    alias: category
    crud: 'create, read, update'
  -
    resource: supplier
    alias: supplier
    crud: 'create, read, update'

---

---
version: 0.0.23
resource: gondolaprices
permalink: /docs/0.0.23/resources/gondolaprices/
singular: resource
section: Products
partOf: company
attributes:
  -
    name: only_modified
    crud: 'create, read'
  -
    name: date
    crud: read
  -
    name: pdf_url
    crud: read
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

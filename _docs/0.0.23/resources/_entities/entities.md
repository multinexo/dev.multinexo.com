---
resource: entities
permalink: /docs/0.0.23/resources/entities/
version: 0.0.23
singular: resource
section: Entities
partOf: company
attributes:
  -
    name: contact_name
    crud: 'create, read, update'
    value_type: string
    rules:
      - 'max:96'
  -
    name: street_name
    crud: 'create, read, update'
    value_type: string
    rules:
      - 'max:96'
  -
    name: street_number
    crud: 'create, read, update'
    value_type: numeric
  -
    name: location
    crud: 'create, read, update'
  -
    name: province
    crud: 'create, read, update'
  -
    name: additional_info
    crud: 'create, read, update'
  -
    name: email
    crud: 'create, read, update'
    rules:
      - email
  -
    name: phone
    crud: 'create, read, update'
    rules:
      - 'max:96'
  -
    name: observations
    crud: 'create, read, update'
  -
    name: balance
    crud: read
    sortable: 'true'
  -
    name: balance_at
    crud: read
    sortable: 'true'
  -
    name: latitude
    crud: 'create, read, update'
  -
    name: longitude
    crud: 'create, read, update'
  -
    name: has_account
    crud: 'create, read, update'
  -
    name: pdf_url
    crud: read
    sortable: 'true'
  -
    name: identification_id
    crud: 'create, read, update'
    value_type: integer
  -
    name: responsibility_id
    crud: 'create, read, update'
    required: true
    value_type: integer
  -
    name: name
    crud: 'create, read, update'
    filter: StringFilter
    sortable: 'true'
    required: true
    value_type: string
    rules:
      - 'max:96'
  -
    name: entity_type
    crud: 'create, read, update'
    filter: EnumFilter
    sortable: 'true'
    required: true
    value_type: 'enum (client, supplier, employee, creditor, subdist, prevent)'
  -
    name: identification_number
    crud: 'create, read, update'
    filter: StringFilter
    sortable: 'true'
    rules:
      - 'max:15'
  -
    name: deleted
    crud: read
    filter: DeletedFilter
    sortable: 'true'
  -
    name: pareto_class
    crud: read
    filter: EnumFilter
    sortable: 'true'
  -
    name: pareto_percent
    crud: read
    filter: NumberFilter
    sortable: 'true'
relationships:
  -
    resource: transactions
    alias: transactions
    crud: read
  -
    resource: documents
    alias: documents
    crud: read
  -
    resource: orders
    alias: orders
    crud: read
  -
    resource: invoices
    alias: invoices
    crud: read
  -
    resource: responsibility
    alias: responsibility
    crud: 'create, read, update'
  -
    resource: pricelist
    alias: pricelist
    crud: 'create, read, update'
  -
    resource: author
    alias: author
    crud: 'create, read, update'
  -
    resource: identification
    alias: identification
    crud: 'create, read, update'
  -
    resource: products
    alias: products
    crud: read
  -
    resource: seller
    alias: seller
    crud: 'create, read, update'
  -
    resource: recommended_products
    alias: recommended_products
    crud: 'create, read, update'

---

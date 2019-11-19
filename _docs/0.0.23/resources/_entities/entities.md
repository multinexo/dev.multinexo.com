---
resource: entities
version: 0.0.23
permalink: /docs/0.0.23/resources/entities/
singular: resource
section: Entities
partOf: company
attributes:
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
    name: entity_type
    crud: 'create, read, update'
    filter: EnumFilter
    required: true
    value_type: 'in [client, supplier, employee, creditor, subdist, prevent]'
  -
    name: observations
    crud: 'create, read, update'
  -
    name: balance
    crud: read
  -
    name: balance_at
    crud: read
  -
    name: identification_number
    crud: 'create, read, update'
    filter: StringFilter
    rules:
      - 'max:15'
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
    name: deleted
    crud: read
    filter: DeletedFilter
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
  -
    name: pdf_url
    crud: read
  -
    name: identification_id
    crud: 'create, read, update'
    value_type: integer
  -
    name: responsibility_id
    crud: 'create, read, update'
    required: true
    value_type: integer
relationships:
  -
    resource: transactions
    alias: transactions
    crud: 'create, read, update'
  -
    resource: documents
    alias: documents
    crud: 'create, read, update'
  -
    resource: orders
    alias: orders
    crud: 'create, read, update'
  -
    resource: invoices
    alias: invoices
    crud: 'create, read, update'
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
    crud: 'create, read, update'
  -
    resource: seller
    alias: seller
    crud: 'create, read, update'

---

---
resource: mercadolibre_attributes
version: 0.0.23
permalink: /docs/0.0.23/resources/mercadolibre_attributes/
singular: resource
section: Products
partOf: company
attributes:
  -
    name: title
    crud: 'create, read, update'
    rules:
      - 'max:96'
  -
    name: description
    crud: 'create, read, update'
  -
    name: available_qty
    crud: 'create, read, update'
  -
    name: pictures
    crud: 'create, read, update'
  -
    name: meli_category_id
    crud: 'create, read, update'
  -
    name: price
    crud: 'create, read, update'
    value_type: numeric
  -
    name: currency_id
    crud: 'create, read, update'
  -
    name: shipping_mode
    crud: 'create, read, update'
  -
    name: seller_custom_field
    crud: 'create, read, update'
  -
    name: listing_type_id
    crud: 'create, read, update'
    value_type: 'in [gold_pro, gold_premium, gold_special, gold, silver, bronze, free]'
  -
    name: item_condition
    crud: 'create, read, update'
    value_type: 'in [new, used, reconditioned]'
  -
    name: warranty_type
    crud: 'create, read, update'
    value_type: 'in [factory, seller]'
  -
    name: warranty_time
    crud: 'create, read, update'
  -
    name: official_store_id
    crud: 'create, read, update'
  -
    name: fortype
    crud: 'create, read, update'
    value_type: 'in [company, product]'
relationships:
  -
    resource: publication
    alias: publication
    crud: 'create, read, update'
  -
    resource: company
    alias: company
    crud: 'create, read, update'

---

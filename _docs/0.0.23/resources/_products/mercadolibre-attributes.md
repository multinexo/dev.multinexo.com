---
resource: mercadolibre_attributes
permalink: /docs/0.0.23/resources/mercadolibre_attributes/
version: 0.0.23
singular: resource
section: Products
partOf: company
attributes:
  -
    name: title
    crud: 'create, read, update'
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
relationships:
  -
    resource: publication
    alias: publication
    crud: 'create, read, update'

---

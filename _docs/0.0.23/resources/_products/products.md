---
version: 0.0.23
resource: products
permalink: /docs/0.0.23/resources/products/
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
    name: saleable
    crud: 'create, read, update'
    filter: SaleableFilter
    sortable: 'true'
  -
    name: description
    crud: 'create, read, update'
  -
    name: sku
    crud: 'create, read, update'
    filter: StringFilter
    rules:
      - 'max:96'
  -
    name: internal_code
    crud: 'create, read, update'
    filter: StringFilter
    rules:
      - 'max:96'
  -
    name: supplier_code
    crud: 'create, read, update'
    filter: StringFilter
    rules:
      - 'max:96'
  -
    name: conduct
    crud: 'create, read, update'
    value_type: 'in [variant_parent, variant_common, compound, common]'
    required: true
  -
    name: product_type
    crud: 'create, read, update'
    filter: EnumFilter
  -
    name: duration
    crud: 'create, read, update'
    value_type: integer
  -
    name: stock_type
    crud: 'create, read, update'
    filter: EnumFilter
    value_type: 'in [disabled, negative, positive]'
    required: true
  -
    name: replacement_cost
    crud: 'create, read, update'
    value_type: numeric
    rules:
      - 'max:999999'
  -
    name: stock
    crud: 'create, read, update'
    value_type: numeric
  -
    name: stock_alert
    crud: 'create, read, update'
    value_type: numeric
  -
    name: stock_alert_percent
    crud: 'create, read, update'
    filter: NumberFilter
    sortable: 'true'
  -
    name: stock_desired
    crud: 'create, read, update'
    value_type: numeric
  -
    name: cost_with_tax
    crud: 'create, read, update'
  -
    name: category_id
    crud: ''
    filter: EnumFilter
  -
    name: high
    crud: 'create, read, update'
  -
    name: width
    crud: 'create, read, update'
  -
    name: length
    crud: 'create, read, update'
  -
    name: weight
    crud: 'create, read, update'
  -
    name: weight_element
    crud: 'create, read, update'
  -
    name: units_per_package
    crud: 'create, read, update'
  -
    name: units_per_box
    crud: 'create, read, update'
  -
    name: deleted
    crud: 'create, read, update'
    filter: DeletedFilter
  -
    name: updated_at
    crud: 'create, read, update'
  -
    name: allow_fractions
    crud: 'create, read, update'
  -
    name: price
    crud: read
  -
    name: client_price_with_tax
    crud: read
  -
    name: subdist_price
    crud: read
  -
    name: prevent_price
    crud: read
relationships:
  -
    resource: author
    alias: author
    crud: read
  -
    resource: category
    alias: category
    crud: read
  -
    resource: currency
    alias: currency
    crud: read
  -
    resource: compound_children
    alias: compound_children
    crud: read
  -
    resource: compound_parents
    alias: compound_parents
    crud: read
  -
    resource: futureprices
    alias: futureprices
    crud: read
  -
    resource: inventories
    alias: inventories
    crud: read
  -
    resource: measures
    alias: measures
    crud: read
  -
    resource: photos
    alias: photos
    crud: read
  -
    resource: pricelist_products
    alias: pricelist_products
    crud: read
  -
    resource: publications
    alias: publications
    crud: read
  -
    resource: suppliers
    alias: suppliers
    crud: read
  -
    resource: tax
    alias: tax
    crud: read
  -
    resource: variants_children
    alias: variants_children
    crud: read
  -
    resource: variant_parent
    alias: variant_parent
    crud: read

---

#### Special relationships
Si es un producto en particular, entonces.


[pricelist_products](pricelist-products) `hasMany`{: .code}

[futureprices](futureprices) `hasMany`{: .code}

Si el atributo **conduct** es `variant_parent`{: .code}, entonces.

[variants_children](variants-children) `hasMany`{: .code}

Si el atributo **conduct** es `variant_common`{: .code}, entonces.

[variants_parents](variants-parents) `hasMany`{: .code}

[compound_parents](compound-parents) `hasMany`{: .code}

Si el atributo **conduct** es `compound`{: .code}, entonces.

[compound_children](compound-children) `hasMany`{: .code}

Si el atributo **conduct** es `common`{: .code}, entonces.

[compound_parents](compound-parents) `hasMany`{: .code}

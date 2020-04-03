---
resource: products
permalink: /docs/0.0.23/resources/products/
version: 0.0.23
singular: resource
section: Products
partOf: company
attributes:
  -
    name: description
    crud: 'create, read, update'
  -
    name: duration
    crud: 'create, read, update'
    value_type: integer
  -
    name: stock_alert
    crud: 'create, read, update'
    value_type: numeric
  -
    name: stock_desired
    crud: 'create, read, update'
    value_type: numeric
  -
    name: cost_with_tax
    crud: 'create, read, update'
  -
    name: photo_url
    crud: read
    sortable: 'true'
  -
    name: category_id
    crud: ''
    filter: EnumFilter
    sortable: 'true'
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
    name: updated_at
    crud: 'create, read, update'
  -
    name: allow_fractions
    crud: 'create, read, update'
  -
    name: price
    crud: read
    sortable: 'true'
  -
    name: client_price_with_tax
    crud: read
    sortable: 'true'
  -
    name: subdist_price
    crud: read
    sortable: 'true'
  -
    name: prevent_price
    crud: read
    sortable: 'true'
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
    name: sku
    crud: 'create, read, update'
    filter: StringFilter
    sortable: 'true'
    rules:
      - 'max:96'
  -
    name: internal_code
    crud: 'create, read, update'
    filter: StringFilter
    sortable: 'true'
    rules:
      - 'max:96'
  -
    name: supplier_code
    crud: 'create, read, update'
    filter: StringFilter
    sortable: 'true'
    rules:
      - 'max:96'
  -
    name: conduct
    crud: 'create, read, update'
    filter: EnumFilter
    sortable: 'true'
    value_type: 'enum (variant_parent, variant_common, compound, common)'
    required: true
  -
    name: product_type
    crud: 'create, read, update'
    filter: EnumFilter
    sortable: 'true'
    rules:
      - 'max:96'
    value_type: 'enum (service, product)'
  -
    name: replacement_cost
    crud: 'create, read, update'
    value_type: numeric
    rules:
      - 'max:999999'
  -
    name: stock_type
    crud: 'create, read, update'
    filter: EnumFilter
    sortable: 'true'
    value_type: 'enum (disabled, negative, positive)'
  -
    name: stock_alert_percent
    crud: 'create, read, update'
    filter: NumberFilter
    sortable: 'true'
  -
    name: stock
    crud: 'create, read'
    sortable: 'true'
    value_type: numeric
  -
    name: deleted
    crud: 'create, read, update'
    filter: DeletedFilter
    sortable: 'true'
relationships:
  -
    resource: author
    alias: author
    crud: 'create, read, update'
  -
    resource: category
    alias: category
    crud: 'create, read, update'
  -
    resource: currency
    alias: currency
    crud: 'create, read, update'
  -
    resource: compound_children
    alias: compound_children
    crud: 'create, read, update'
  -
    resource: compound_parents
    alias: compound_parents
    crud: 'create, read, update'
  -
    resource: futureprices
    alias: futureprices
    crud: 'create, read, update'
  -
    resource: inventories
    alias: inventories
    crud: read
  -
    resource: measures
    alias: measures
    crud: 'create, read, update'
  -
    resource: photos
    alias: photos
    crud: 'create, read, update'
  -
    resource: pricelist_products
    alias: pricelist_products
    crud: 'create, read, update'
  -
    resource: publications
    alias: publications
    crud: 'create, read, update'
  -
    resource: suppliers
    alias: suppliers
    crud: 'create, read, update'
  -
    resource: tax
    alias: tax
    crud: 'create, read, update'
  -
    resource: variants_children
    alias: variants_children
    crud: 'create, read, update'
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

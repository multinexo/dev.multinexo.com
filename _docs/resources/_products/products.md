---
resource: products
permalink: /docs/resources/products/
section: Products
partOf: company
attributes:
  - name: name
  - name: description
  - name: sku
  - name: internal_code
  - name: supplier_code
  - name: conduct
    valuetype: common | compound | variant_common | variant_parent
  - name: product_type
  - name: duration
  - name: stock_type
    valuetype: disabled | negative | positive
  - name: replacement_cost
  - name: author_id
  - name: company_id
  - name: category_id
  - name: currency_id
  - name: price
    crud: read
  - name: price_with_tax
    crud: read
  - name: price_subdist
    crud: read
  - name: price_prevent
    crud: read
  - name: cost_with_tax
    observation: Only saves cost calculated based on cost with tax
  - name: measure_id
  - name: stock
  - name: stock_alert
  - name: stock_desired
  - name: tax_id
  - name: high
    valuetype: float
  - name: width
    valuetype: float
  - name: length
    valuetype: float
  - name: weight
    valuetype: float
  - name: weight_element
  - name: units_per_package
    valuetype: int
  - name: units_per_box
    valuetype: int
  - name: allow_fractions
    valuetype: boolean
relationships:
  - resource: pricelist_products
    hasMany: true
  - resource: parentproducts
    hasMany: false
  - resource: products
    hasMany: false
  - resource: entities
    alias: suppliers
    hasMany: true
  - resource: categories
    hasMany: false
  - resource: taxes
    hasMany: false
  - resource: measures
    hasMany: false
  - resource: currencies
    hasMany: false
  - resource: photos
    hasMany: true
  - resource: futureprices
    hasMany: true
  - resource: variant_parent
    hasMany: true
  - resource: variant_children
    hasMany: true
  - resource: compound_parent
    hasMany: true
  - resource: compound_children
    hasMany: true
filters:
  - attribute: name
    type: like
    multivalue: false
  - attribute: sku
    type: equals
    multivalue: false
  - attribute: internal_code
    type: equals
    multivalue: false
  - attribute: supplier_code
    type: equals
    multivalue: false
  - attribute: product_type
    type: equals
    multivalue: false
  - attribute: category_id
    type: equals
    multivalue: false
  - attribute: trashed
    multivalue: false
    values: null | onlyTrashed | withTrashed
entry_points:
  name: pricelists
---

#### Special relationships
Si es un producto en particular, entonces.
[pricelist_products](pricelist-products) `hasMany`{: .code}

[futureprices](futureprices) `hasMany`{: .code}

Si el atributo **conduct** es `variant_parent`{: .code}, entonces.

[variant_children](variant-children) `hasMany`{: .code}

Si el atributo **conduct** es `variant_common`{: .code}, entonces.

[variants_parent](variants-parent) `hasMany`{: .code}

[compound_parent](compound-parent) `hasMany`{: .code}

Si el atributo **conduct** es `compound`{: .code}, entonces.

[compound_children](compound-children) `hasMany`{: .code}

Si el atributo **conduct** es `common`{: .code}, entonces.

[compound_parent](compound-parent) `hasMany`{: .code}
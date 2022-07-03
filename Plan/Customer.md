# Cart

per user 
- user id (auth.id)
- per item (jsonb)
  - product id (bigint, `unique`)
  - selected-properties (jsonb, `unique`)
  - quantity (integer, `unique`)
  - created_at (timestamp, default now(), `unique`)
  - name (string, optional)
  - discount (decimal, optional)
  - price (decimal, optional)
  - availability/stock (integer, optional)
  - showAvailableOffers (Bulk, optional) - ui
- deleteButton - ui
- moveToWishlistButton - ui

calculate total price (subtotal - saving (discount+coupon+offer) + shipping = total)

#### Note:
Each user have a one raw. So list of item will save in jsonb.
* `unique` - add to jsonb
* optional - retrieve from product


# Wishlist

per user
- user id (auth.id)
- per item (jsonb)
  - product id (bigint, `unique`)
  - created_at (timestamp, default now(), `unique`)
  - name (string, optional)
  - properties (jsonb, optional)
  - discount (decimal, optional)
  - price (decimal, optional)
  - availability/stock (integer, optional)
  - rating (decimal, optional)
  - buyCount (integer, optional)
- deleteButton - ui
- moveToWishlistButton - ui
- showAvailableOffers (Bulk) - ui

calculate total price (subtotal - saving (discount+coupon+offer) + shipping = total)

#### Note:
Each user have a one raw. So list of item will save in jsonb.
* `unique` - add to jsonb
* optional - retrieve from product


# Orders

- order id (bigint, `unique`)
- user id (auth.id)
- per item (jsonb)
  - product id (bigint, `unique`)
  - selected-properties (jsonb, `unique`)
  - quantity (integer, `unique`)
  - created_at (timestamp, default now(), `unique`)
  - price at that time (decimal, `unique`)
  - discount at that time (decimal, `unique`)
  - name (string, optional)
  - availability/stock (integer, optional) - ui
  - showAvailableOffers (Bulk, optional) - ui
- totalPrice at that time (decimal, `unique`)
- totalDiscount at that time (decimal, `unique`)
- shippingId (decimal, `unique`)
- paymentId (string, `unique`)
- status (string, `unique`) { pending ,processing ,completed ,canceled ,failed, refunded, returned, onhold, shipped, delivered }


# Payment

- paymentId (string, `unique`)
- paymentMethod (string, `unique`)
- paymentStatus (string, `unique`)


#### Note:

status:
* pending - payment is not yet processed (After Buy but before payment is processed)
* completed - payment is completed
* processing - payment is done and product is moved to processing status
* shipped - order is shipped
* failed - payment is failed
* onhold - payment is done, but some issue is there, so not shipped yet
* canceled - order is canceled
* refunded - order payment is refunded
* returned - order is returned

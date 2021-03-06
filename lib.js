'use strict'

const entries =
  obj =>
    Object.keys(obj)
      .map(key => [key, obj[key]])

const listing =
  (name, price) => ({
    name,
    price
  })

const customer =
  (name, shoppingList) => ({
    name,
    shoppingList
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

/**
 * should return an array with the `itemName` repeated `count` number of times
 */
const itemRepeater =
  itemName =>
    count => {
      return new Array(count).fill(itemName)
    }

/**
 * should return an array of carts with each given customer's shopping list
 * as an array of items
 */
const constructCarts =
  listings =>
    customers => {
      const retArr = []
      customers.map(customer =>
        retArr.push({ customer: customer.name,
          items: entries(customer.shoppingList).map(item =>
          itemRepeater(item[0])(item[1])).reduce(
          (acc, val) => { return [...acc, ...val] }, []) }
        )
      )
      return retArr
    }

module.exports = {
  listing,
  customer,
  constructCarts
}

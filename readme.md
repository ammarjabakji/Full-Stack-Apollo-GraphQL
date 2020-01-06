## Mutation Example

```
mutation {
  createOrder(
    input: {
      orderName:"botato"
      quantity:2
    }
  ) {
    id
    orderName
    quantity
  }
}



```

## Query Example

note that the ID has been returned from the above mutation

```
 {  getOneOrder(id:"5dd7f5b9f5a44c30dc0dd73e"){
    id
    orderName
    quantity
  }
}
{
  getOrders {
    id
    orderName
    quantity
  }
}


```

## Update Example

```
Will be added
```

## Delete Example

```
mutation {
  deleteOrder(id:"5e1231530354335b1e94dc5d")
}
```

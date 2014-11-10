# CSS in JavaScript

The goal is to support writing CSS in pure JavaScript using object literals.

```javascript
var Styles = CSS({
  flex: 1,
  display: 'flex'
});

// On Mobile Safari Returns

{
  WebkitFlex: 1,
  display: '-webkit-flex'
}

// On Chrome Returns

{
  flex: 1,
  display: 'flex'
}
```

## Why?

[Give it 5 minutes.](https://speakerdeck.com/vjeux/react-css-in-js)

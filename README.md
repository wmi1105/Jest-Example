# JEST - Example

## setting

### normal

- yarn add jest
- yarn add --deev @types/jest

```
// package.json setting
{
  ...,

  "scripts":{
    "test":"jest"
  },
  ...
}
```

```실행
yarn test
```

### ES6

- yarn add --dev @babel/preset-env

```
// babel.config.js
module.exports = {
  presets:["@babel/preset-env"]
}
```

### TypeScript

- yarn add --dev @babel/preset-typescript

```
// babel.config.js
module.exports = {
  presets:["@babel/preset-env", "@babel/preset-typescript"]
}
```

## 참고

##### normal : https://dev-yakuza.posstree.com/ko/react/create-react-app/jest/

##### jest Expect : https://jestjs.io/docs/expect

##### ES6/Typescript : https://blog.pumpkin-raccoon.com/81

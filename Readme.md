# vue-input-digit

This is a VueJs plugin that modify input fields, allowing to input only digit data.

## Install

To install this plugin you should get in from npm repository:

```npm
$ npm install vue-digit-input
```

## Usage

To use this plugin you should import it and register in your main file:

```javascript
import Vue from 'vue';
import VueDigitInput from 'vue-digit-input/dist';
Vue.use(VueDigitInput);
```

After that you can use the available directive in your components:
```vue
<div id="app">
    <input type="text" v-digit="{maxLength: 3}">
</div>
```

## Options

The available options are: `maxLength` and `type`. Type could be `int` or `digit`.
`digit` is set by default. You can change it by adding an appropriate option in your 
directive call. `digit` type accept only digits. `int` type calls parseInt on your 
input element.
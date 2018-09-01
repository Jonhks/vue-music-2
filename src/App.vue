<template lang = 'pug'>
#app
  h1 {{ msg }}
  p(v-show = "showValue") {{ value }}
  p(v-if = "showValue") {{ value }}
  p(v-else) {{ 'No hay nada para mostrar' }}
  p(v-else-if) {{ 'esto es else if' }}
  p {{ 1+1 }}
  p {{ 'hola' + ' ' + 'mundo' }}
  p {{ 'Tu nombre es: '+  ' ' + person.name }}
  p {{ 'Tu nombre es: '+  ' ' + person.name.toUpperCase() }}
  p {{ 'Tu edad es: '+  ' ' + person.age }}
  p {{ 'Tu rol es: '+  ' ' + person.rol }}
  p {{ JSON.stringify(person) }}
  p {{ true ? false: 'false' }}
  ul  
    li(v-for="item in items") {{ 'numero ' +  ' ' + item }}
  input(v-model= "name")  
  p {{ 'tu nombre es: ' + name }}
  a(:href = "url") link
  input(v-model = "lastName")
  p {{ 'tu apellido es:' + lastName }}
  p {{ 'Te llamas: ' + fullName }}

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Mensaje de expresion {{ variables, obj, etc }}',
      showValue: false,
      value: 'Este es el valor',
      items: [1, 2, 3, 4, 5],
      person: {
        name: 'jonh',
        age: 32
      },
      rol: 'Coach',
      name: '',
      lastName: '',
      url: 'https://google.com'
    }
  },
  computed: {
    fullName () {
      return this.name + ' ' + this.lastName
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss'
</style>

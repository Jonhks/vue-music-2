<template lang="pug">
  .container
    .columns
      .column.is-5.is-offset-4
        .notification.is-danger
          slot(name="error") Algo no está bien!
</template>

<style lang="sass" scoped>
  .notification
    margin-top: 15%

</style>

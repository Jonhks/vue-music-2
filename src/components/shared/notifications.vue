<template lang="pug">
  .container
    .columns
      .column.is-4
        .notification.is-danger
          slot(name="body") Algo no está bien!
</template>

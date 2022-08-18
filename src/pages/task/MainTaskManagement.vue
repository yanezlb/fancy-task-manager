<template>
    <q-page class="bg-blue-grey-1" padding>
      <div class="row q-col-gutter-x-md">
        <div class="col-7" >
          <div class="rounded bg-white shadow-3">
            <p class="text-primary">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, ducimus
                sunt totam beatae inventore excepturi fugiat obcaecati ratione, deserunt,
                commodi nesciunt minus tenetur iure quasi ut! Iste hic rem non.asdasd
            </p>
          </div>
        </div>
        <div class="col-5" >
          <div class="rounded bg-white shadow-3">  
            <br>
            <span class="text-bold" style="margin-left: 15px; margin-top: 152px;">Fecha:</span> 02/02/2022
            <item-task></item-task>
            <item-task></item-task>
            <item-task></item-task>
          </div>
        </div>
      </div>
    </q-page>
</template>
<script setup>
import ItemTask  from 'components/ItemTask.vue'
</script>
<style scoped>
.rounded {
    border-radius: 15px;
}


</style>

<template>
  <div class="row">
    <div class="col-md-6 q-pa-md">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </div>
    <div class="col-md-6 text-right q-pa-md">
      <q-btn round color="primary" flat icon="done" size="12px">
        <q-tooltip 
          class="bg-positive" 
          transition-show="rotate"
          transition-hide="rotate"
        >
          Teminate
        </q-tooltip>
      </q-btn>
      <q-btn round color="primary" flat icon="edit" size="12px">
        <q-tooltip 
          class="bg-positive" 
          transition-show="rotate"
          transition-hide="rotate"
        >
          Edit
        </q-tooltip>
      </q-btn>
      <q-btn round color="primary" flat icon="delete" size="12px">
        <q-tooltip 
          class="bg-positive" 
          transition-show="rotate"
          transition-hide="rotate"
        >
          Delete
        </q-tooltip>
      </q-btn>
    </div>
  </div>
  <hr>
</template>

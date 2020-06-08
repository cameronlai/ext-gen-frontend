<template>
  <div>
    <b-table striped hover selectable @row-selected="onRowSelected" :items="items">
      <template v-slot:cell(start)="row">
        <b-form-input v-model="row.item.start" />
      </template>
      <template v-slot:cell(end)="row">
        <b-form-input v-model="row.item.end" />
      </template>
    </b-table>
    <b-row>
      <b-col>
        <b-button variant="outline-primary" v-on:click="add()">Add Row</b-button>
      </b-col>
      <b-col>
        <b-button variant="outline-primary" v-on:click="remove()">Remove Selected</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<style>
</style>

<script>
export default {
  props: ["items"],
  data() {
    return {
      selected: []
    };
  },
  methods: {
    add: function() {
      this.$props.items.push({
        start: "2015-11-11,9:00",
        end: "2015-11-11,12:00"
      });
    },
    remove: function() {
      for (let i = 0; i < this.selected.length; i++) {
        const index = this.$props.items.indexOf(this.selected[i]);
        if (index > -1) {
          this.$props.items.splice(index, 1);
        }
      }
    },
    onRowSelected: function(items) {
      this.selected = items;
    }
  }
};
</script>
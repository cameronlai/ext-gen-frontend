<template>
  <div>
    <b-table striped hover selectable @row-selected="onRowSelected" :items="items">
      <template v-slot:cell(name)="row">
        <b-form-input v-model="row.item.name" />
      </template>
      <template v-slot:cell(subjects)="row">
        <b-form-input v-model="row.item.subjects" />
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
        name: "Student Name",
        subjects: ""
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
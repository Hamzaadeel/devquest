export const vueCheatSheet = {
  title: "Vue.js Cheat Sheet",
  sections: [
    {
      title: "1. Basic Syntax",
      items: [
        {
          name: "Interpolation",
          description: "Display data in the template.",
          code: "<p>{{ message }}</p>",
        },
        {
          name: "v-bind",
          description: "Bind attributes dynamically.",
          code: '<img v-bind:src="imageSrc" />',
        },
        {
          name: "v-model",
          description: "Two-way binding for inputs.",
          code: '<input v-model="name" />',
        },
      ],
    },
    {
      title: "2. Directives",
      items: [
        {
          name: "v-if / v-else",
          description: "Conditional rendering.",
          code: "<p v-if='isLoggedIn'>Welcome!</p>",
        },
        {
          name: "v-for",
          description: "Loop over data.",
          code: "<li v-for='item in items' :key='item.id'>{{ item.name }}</li>",
        },
        {
          name: "v-on",
          description: "Event listener shorthand.",
          code: '<button v-on:click="doSomething">Click</button>',
        },
      ],
    },
    {
      title: "3. Computed & Watchers",
      items: [
        {
          name: "computed",
          description: "Cached reactive properties.",
          code: "computed: { fullName() { return this.first + ' ' + this.last } }",
        },
        {
          name: "watch",
          description: "React to data changes.",
          code: "watch: { count(newVal) { console.log(newVal); } }",
        },
      ],
    },
    {
      title: "4. Components",
      items: [
        {
          name: "Component Registration",
          description: "Register components locally or globally.",
          code: "Vue.component('my-component', { /* options */ })",
        },
        {
          name: "Props",
          description: "Pass data from parent to child.",
          code: "props: ['title']",
        },
        {
          name: "Emit Events",
          description: "Child to parent communication.",
          code: "this.$emit('custom-event', data)",
        },
      ],
    },
    {
      title: "5. Vue Tools & Ecosystem",
      items: [
        { name: "Vue Router", description: "Routing library for SPAs." },
        { name: "Vuex", description: "State management for Vue." },
        {
          name: "Vue Devtools",
          description: "Browser extension for debugging.",
        },
      ],
    },
  ],
};

export default vueCheatSheet;

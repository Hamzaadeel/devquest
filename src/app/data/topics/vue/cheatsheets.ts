export const vueCheatSheet = {
  title: "Vue.js Cheat Sheet",
  sections: [
    {
      title: "1. Template Syntax & Data Binding",
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
          description: "Two-way binding for form inputs.",
          code: '<input v-model="name" />',
        },
        {
          name: "v-html",
          description: "Bind raw HTML content.",
          code: '<div v-html="htmlContent"></div>',
        },
      ],
    },
    {
      title: "2. Directives & Conditionals",
      items: [
        {
          name: "v-if / v-else",
          description: "Conditionally render elements.",
          code: '<p v-if="isLoggedIn">Welcome!</p><p v-else>Login first</p>',
        },
        {
          name: "v-show",
          description: "Toggle visibility using CSS display.",
          code: '<p v-show="isVisible">I am visible</p>',
        },
        {
          name: "v-for",
          description: "Render a list using data.",
          code: '<li v-for="item in items" :key="item.id">{{ item.name }}</li>',
        },
        {
          name: "v-on",
          description: "Attach event listeners.",
          code: '<button v-on:click="doSomething">Click</button>',
        },
        {
          name: "Shorthand Syntax",
          description: "@ is shorthand for v-on, : is shorthand for v-bind.",
          code: '<button @click="doSomething">Click</button>\n<img :src="imageSrc" />',
        },
      ],
    },
    {
      title: "3. Computed Properties & Watchers",
      items: [
        {
          name: "computed",
          description: "Cached property that updates when dependencies change.",
          code: "computed: {\n  fullName() {\n    return this.first + ' ' + this.last\n  }\n}",
        },
        {
          name: "watch",
          description: "React to data changes and run custom logic.",
          code: "watch: {\n  count(newVal, oldVal) {\n    console.log(`Changed from ${oldVal} to ${newVal}`);\n  }\n}",
        },
      ],
    },
    {
      title: "4. Components & Communication",
      items: [
        {
          name: "Component Registration",
          description: "Register components globally or locally.",
          code: "Vue.component('my-component', {\n  template: '<div>A custom component</div>'\n})",
        },
        {
          name: "Props",
          description: "Pass data from parent to child components.",
          code: "props: ['title']",
        },
        {
          name: "$emit",
          description: "Send event from child to parent.",
          code: "this.$emit('custom-event', data)",
        },
        {
          name: "Slots",
          description: "Insert custom content into child components.",
          code: "<slot></slot>",
        },
      ],
    },
    {
      title: "5. Lifecycle Hooks & API Calls",
      items: [
        {
          name: "mounted()",
          description:
            "Called after the component is mounted. Great for API calls.",
          code: "mounted() {\n  fetch('/api/data')\n    .then(res => res.json())\n    .then(data => this.items = data);\n}",
        },
        {
          name: "created()",
          description: "Called after instance is created but before mounting.",
          code: "created() {\n  console.log('Component created');\n}",
        },
      ],
    },
    {
      title: "6. Vue Ecosystem",
      items: [
        {
          name: "Vue Router",
          description: "Handle routing in single-page applications.",
          code: "<router-link to='/about'>About</router-link>\n<router-view></router-view>",
        },
        {
          name: "Vuex",
          description: "Centralized state management for large applications.",
          code: "store.commit('increment')",
        },
        {
          name: "Vue Devtools",
          description:
            "Browser extension for inspecting Vue components and state.",
        },
        {
          name: "Composition API (Vue 3)",
          description: "Organize logic using setup().",
          code: "setup() {\n  const count = ref(0);\n  return { count };\n}",
        },
      ],
    },
  ],
};

export default vueCheatSheet;

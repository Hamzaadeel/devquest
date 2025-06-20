export const dsaCheatSheet = {
  title: "DSA (Data Structures & Algorithms) Cheat Sheet",
  sections: [
    {
      title: "1. Arrays",
      items: [
        {
          name: "Definition",
          description:
            "A collection of items stored at contiguous memory locations. Like boxes placed side-by-side on a shelf.",
        },
        {
          name: "Access",
          description: "Access using index. Time: O(1)",
          code: "const arr = [10, 20, 30];\nconsole.log(arr[1]); // 20",
        },
        {
          name: "Common Methods",
          description: "push, pop, shift, unshift, map, filter, reduce",
        },
        {
          name: "Example Use Case",
          description:
            "Storing daily temperatures or scores of players in a game.",
        },
      ],
    },
    {
      title: "2. Linked Lists",
      items: [
        {
          name: "Definition",
          description:
            "A linear collection of nodes where each node points to the next. Like a treasure hunt where each clue leads to the next location.",
        },
        {
          name: "Singly Linked List",
          description: "Each node has a value and a pointer to the next node.",
          code: "class Node {\n  constructor(data) {\n    this.data = data;\n    this.next = null;\n  }\n}",
        },
        {
          name: "Doubly Linked List",
          description:
            "Each node has pointers to both the next and previous nodes. Easier to go back and forth.",
        },
      ],
    },
    {
      title: "3. Stacks",
      items: [
        {
          name: "Definition",
          description:
            "LIFO (Last In, First Out) data structure. Like a stack of plates.",
        },
        {
          name: "Operations",
          description: "push(), pop(), peek(), isEmpty()",
          code: "const stack = [];\nstack.push(10);\nstack.pop();",
        },
      ],
    },
    {
      title: "4. Queues",
      items: [
        {
          name: "Definition",
          description:
            "FIFO (First In, First Out) data structure. Like people in a line at the grocery store.",
        },
        {
          name: "Operations",
          description: "enqueue(), dequeue(), front(), isEmpty()",
          code: "const queue = [];\nqueue.push(1);\nqueue.shift();",
        },
      ],
    },
    {
      title: "5. Trees",
      items: [
        {
          name: "Binary Tree",
          description: "Each node has up to two children (left and right).",
        },
        {
          name: "Binary Search Tree (BST)",
          description:
            "Left child < Parent < Right child. Enables fast lookup. Like a dictionary for fast search.",
        },
        {
          name: "Tree Traversals",
          description: "Inorder, Preorder, Postorder (DFS); Level Order (BFS)",
        },
        {
          name: "Example Use Case",
          description:
            "Hierarchical structures like file systems or family trees.",
        },
        {
          name: "DFS Code Example",
          description: "Depth-First Search (recursive)",
          code: "function dfs(node) {\n  if (!node) return;\n  console.log(node.value);\n  dfs(node.left);\n  dfs(node.right);\n}",
        },
        {
          name: "BFS Code Example",
          description: "Breadth-First Search (using queue)",
          code: "function bfs(root) {\n  const queue = [root];\n  while (queue.length) {\n    const node = queue.shift();\n    console.log(node.value);\n    if (node.left) queue.push(node.left);\n    if (node.right) queue.push(node.right);\n  }\n}",
        },
      ],
    },
    {
      title: "6. Graphs",
      items: [
        {
          name: "Definition",
          description:
            "A set of nodes (vertices) connected by edges. Like cities connected by roads.",
        },
        {
          name: "Types",
          description: "Directed, Undirected, Weighted, Unweighted",
        },
        {
          name: "Representations",
          description: "Adjacency List, Adjacency Matrix",
        },
        {
          name: "Traversals",
          description: "DFS, BFS",
        },
      ],
    },
    {
      title: "7. Hash Tables",
      items: [
        {
          name: "Definition",
          description:
            "Stores key-value pairs using a hash function. Like a dictionary where you can look up a word instantly.",
        },
        {
          name: "Time Complexity",
          description: "Average O(1), Worst O(n)",
          code: "const map = new Map();\nmap.set('a', 1);\nmap.get('a');",
        },
      ],
    },
    {
      title: "8. Recursion",
      items: [
        {
          name: "Definition",
          description:
            "A function calling itself to solve smaller instances. Like opening nested boxes until you find the smallest one.",
        },
        {
          name: "Base Case",
          description: "The condition that stops recursion.",
        },
        {
          name: "Example",
          description: "Factorial of n",
          code: "function fact(n) {\n  if (n <= 1) return 1;\n  return n * fact(n - 1);\n}",
        },
      ],
    },
    {
      title: "9. Sorting Algorithms",
      items: [
        {
          name: "Bubble Sort",
          description:
            "Repeatedly swaps adjacent elements if they are in wrong order.",
          code: "for (let i = 0; i < arr.length; i++) {\n  for (let j = 0; j < arr.length - i - 1; j++) {\n    if (arr[j] > arr[j + 1]) {\n      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];\n    }\n  }\n}",
        },
        {
          name: "Merge Sort",
          description: "Divide and conquer algorithm. Time: O(n log n).",
          code: "function mergeSort(arr) {\n  if (arr.length <= 1) return arr;\n  const mid = Math.floor(arr.length / 2);\n  const left = mergeSort(arr.slice(0, mid));\n  const right = mergeSort(arr.slice(mid));\n  return merge(left, right);\n}\n\nfunction merge(left, right) {\n  let result = [], i = 0, j = 0;\n  while (i < left.length && j < right.length) {\n    if (left[i] < right[j]) result.push(left[i++]);\n    else result.push(right[j++]);\n  }\n  return result.concat(left.slice(i)).concat(right.slice(j));\n}",
        },
        {
          name: "Quick Sort",
          description: "Uses pivot to partition array. Time: O(n log n) avg.",
          code: "function quickSort(arr) {\n  if (arr.length <= 1) return arr;\n  const pivot = arr[arr.length - 1];\n  const left = arr.filter((el, i) => el < pivot && i !== arr.length - 1);\n  const right = arr.filter(el => el >= pivot);\n  return [...quickSort(left), pivot, ...quickSort(right)];\n}",
        },
      ],
    },
    {
      title: "10. Searching Algorithms",
      items: [
        {
          name: "Linear Search",
          description: "Iterate and compare each item. Time: O(n)",
          code: "function linearSearch(arr, target) {\n  for (let i = 0; i < arr.length; i++) {\n    if (arr[i] === target) return i;\n  }\n  return -1;\n}",
        },
        {
          name: "Binary Search",
          description:
            "Search in a sorted array. Time: O(log n). Cuts the array in half each time.",
          code: "function binarySearch(arr, target) {\n  let left = 0, right = arr.length - 1;\n  while (left <= right) {\n    let mid = Math.floor((left + right) / 2);\n    if (arr[mid] === target) return mid;\n    else if (arr[mid] < target) left = mid + 1;\n    else right = mid - 1;\n  }\n  return -1;\n}",
        },
      ],
    },
    {
      title: "11. Time & Space Complexity",
      items: [
        {
          name: "Big O Notation",
          description:
            "Describes the performance in worst-case scenario. Like estimating the max time it might take.",
        },
        {
          name: "Common Complexities",
          description: "O(1), O(log n), O(n), O(n log n), O(n²)",
        },
        {
          name: "Example: Searching",
          description:
            "Looking for a book in a random pile (O(n)) vs a sorted shelf (O(log n)).",
        },
      ],
    },
  ],
};

export default dsaCheatSheet;

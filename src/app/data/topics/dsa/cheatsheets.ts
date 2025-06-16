export const dsaCheatSheet = {
  title: "DSA (Data Structures & Algorithms) Cheat Sheet",
  sections: [
    {
      title: "1. Arrays",
      items: [
        {
          name: "Definition",
          description:
            "A collection of items stored at contiguous memory locations.",
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
      ],
    },
    {
      title: "2. Linked Lists",
      items: [
        {
          name: "Definition",
          description:
            "A linear collection of nodes where each node points to the next.",
        },
        {
          name: "Singly Linked List",
          description: "Each node has a value and a pointer to the next node.",
        },
        {
          name: "Doubly Linked List",
          description:
            "Each node has pointers to both the next and previous nodes.",
        },
      ],
    },
    {
      title: "3. Stacks",
      items: [
        {
          name: "Definition",
          description: "LIFO (Last In, First Out) data structure.",
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
          description: "FIFO (First In, First Out) data structure.",
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
            "Left child < Parent < Right child. Enables fast lookup.",
        },
        {
          name: "Tree Traversals",
          description: "Inorder, Preorder, Postorder (DFS); Level Order (BFS)",
        },
      ],
    },
    {
      title: "6. Graphs",
      items: [
        {
          name: "Definition",
          description: "A set of nodes (vertices) connected by edges.",
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
          description: "Stores key-value pairs using a hash function.",
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
          description: "A function calling itself to solve smaller instances.",
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
        },
        {
          name: "Quick Sort",
          description: "Uses pivot to partition array. Time: O(n log n) avg.",
        },
      ],
    },
    {
      title: "10. Searching Algorithms",
      items: [
        {
          name: "Linear Search",
          description: "Iterate and compare each item. Time: O(n)",
        },
        {
          name: "Binary Search",
          description: "Search in a sorted array. Time: O(log n)",
          code: "function binarySearch(arr, target) {\n  let left = 0, right = arr.length - 1;\n  while (left <= right) {\n    let mid = Math.floor((left + right) / 2);\n    if (arr[mid] === target) return mid;\n    else if (arr[mid] < target) left = mid + 1;\n    else right = mid - 1;\n  }\n  return -1;\n}",
        },
      ],
    },
    {
      title: "11. Time & Space Complexity",
      items: [
        {
          name: "Big O Notation",
          description: "Describes the performance in worst-case scenario.",
        },
        {
          name: "Common Complexities",
          description: "O(1), O(log n), O(n), O(n log n), O(n²)",
        },
      ],
    },
  ],
};

export default dsaCheatSheet;

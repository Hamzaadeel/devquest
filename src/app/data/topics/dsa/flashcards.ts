const dsaFlashcards = [
  {
    question: "What is a data structure?",
    answer:
      "A data structure is a way of organizing and storing data so it can be accessed and modified efficiently.\nFor example: Imagine a bookshelf. It helps you store and find books easily.",
    subTopic: "Foundations",
  },
  {
    question: "What is an algorithm?",
    answer:
      "An algorithm is a step-by-step process to solve a problem.\nFor example: A recipe is an algorithm for cooking a dish.",
    subTopic: "Foundations",
  },
  {
    question: "What is the difference between an array and a linked list?",
    answer:
      "Arrays have fixed size and allow fast access using an index. Linked lists have flexible size and allow fast insertions/deletions.\nFor example: An array is like boxes in a row. A linked list is like a chain where each link knows the next one.",
    subTopic: "Linear Structures",
  },
  {
    question: "What is a linked list?",
    answer:
      "A linked list is a collection of nodes where each node points to the next.\nFor example: Like a treasure hunt, each clue (node) tells you where to go next.",
    subTopic: "Linear Structures",
  },
  {
    question:
      "What is the time complexity of inserting at the beginning of a linked list?",
    answer: "O(1), because you only update the head pointer.",
    subTopic: "Linear Structures",
  },
  {
    question: "What is a stack?",
    answer:
      "A stack is a data structure that follows Last In First Out (LIFO).\nFor example: A stack of plates—take the top one first.",
    subTopic: "Linear Structures",
  },
  {
    question: "What is a queue?",
    answer:
      "A queue is a data structure that follows First In First Out (FIFO).\nFor example: A line at a ticket counter—the first person in is the first one out.",
    subTopic: "Linear Structures",
  },
  {
    question: "What is a priority queue?",
    answer:
      "A priority queue removes elements based on priority, not insertion order.\nFor example: In a hospital emergency room, critical patients are treated before others.",
    subTopic: "Linear Structures",
  },
  {
    question: "What is a hash table?",
    answer:
      "A hash table stores data in key-value pairs using a hash function.\nFor example: It's like a dictionary—you look up a word (key) and find its meaning (value).",
    subTopic: "Hashing",
  },
  {
    question: "What is the Big O of inserting an element in a hash table?",
    answer: "O(1) on average, O(n) in worst case (collisions).",
    subTopic: "Hashing",
  },
  {
    question: "What is a binary tree?",
    answer:
      "A binary tree is a structure where each node has at most two children.\nFor example: Like a family tree where each parent has two children.",
    subTopic: "Trees & Graphs",
  },
  {
    question: "What is a binary search tree (BST)?",
    answer:
      "A BST is a binary tree where left child < node < right child.\nFor example: It's like a bookshelf with books in sorted order.",
    subTopic: "Trees & Graphs",
  },
  {
    question: "What is the difference between BFS and DFS?",
    answer:
      "BFS explores level by level using a queue. DFS explores depth using a stack or recursion.\nFor example: BFS is like searching all rooms on each floor before going up. DFS is like going deep into one hallway first.",
    subTopic: "Trees & Graphs",
  },
  {
    question: "What is recursion?",
    answer:
      "Recursion is when a function calls itself to solve smaller parts of a problem.\nFor example: Like placing a mirror in front of another mirror—you see smaller and smaller reflections.",
    subTopic: "Problem Solving Techniques",
  },
  {
    question: "What is the two-pointer technique?",
    answer:
      "A method where two pointers move through a structure to solve problems efficiently.\nFor example: Like two people walking toward each other from each end of a hallway.",
    subTopic: "Problem Solving Techniques",
  },
  {
    question: "What is the sliding window technique?",
    answer:
      "Used to maintain a subset of data and move through it efficiently.\nFor example: Like looking through a moving window to watch a passing train.",
    subTopic: "Problem Solving Techniques",
  },
  {
    question: "What is dynamic programming?",
    answer:
      "A technique where problems are broken into subproblems and solved using stored results.\nFor example: Like remembering results of math homework so you don’t redo the same problems.",
    subTopic: "Problem Solving Techniques",
  },
  {
    question: "What is memoization?",
    answer:
      "Memoization is storing results of function calls to avoid redundant work.\nFor example: Like writing down answers during a quiz so you don’t recalculate them.",
    subTopic: "Problem Solving Techniques",
  },
  {
    question: "What is the time complexity of binary search?",
    answer:
      "O(log n), because the array is divided in half each time.\nFor example: Like guessing a number between 1 and 100 by always choosing the middle.",
    subTopic: "Searching & Sorting",
  },
  {
    question: "What is the difference between linear and binary search?",
    answer:
      "Linear search checks one by one (O(n)). Binary search splits the data (O(log n)) but needs sorted data.\nFor example: Linear is like scanning a book page by page. Binary is like opening the middle first and narrowing down.",
    subTopic: "Searching & Sorting",
  },
];

export default dsaFlashcards;

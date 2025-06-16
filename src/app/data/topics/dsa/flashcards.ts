const dsaFlashcards = [
  {
    question: "What is a data structure?",
    answer:
      "A data structure is a way of organizing and storing data so it can be accessed and modified efficiently.",
    subTopic: "Basics",
  },
  {
    question: "What is an algorithm?",
    answer:
      "An algorithm is a step-by-step procedure to solve a specific problem.",
    subTopic: "Basics",
  },
  {
    question: "What is the difference between an array and a linked list?",
    answer:
      "Arrays have fixed size and allow random access. Linked lists have dynamic size and allow efficient insertion/deletion.",
    subTopic: "Arrays vs Linked Lists",
  },
  {
    question: "What is the time complexity of binary search?",
    answer: "O(log n), since the array is divided by 2 in each step.",
    subTopic: "Searching",
  },
  {
    question: "What is a stack?",
    answer:
      "A stack is a linear data structure that follows LIFO (Last In, First Out) order.",
    subTopic: "Stack",
  },
  {
    question: "What is a queue?",
    answer:
      "A queue is a linear data structure that follows FIFO (First In, First Out) order.",
    subTopic: "Queue",
  },
  {
    question: "What is a hash table?",
    answer:
      "A hash table stores key-value pairs using a hash function to compute the index.",
    subTopic: "Hashing",
  },
  {
    question: "What is a binary tree?",
    answer:
      "A binary tree is a tree data structure where each node has at most two children: left and right.",
    subTopic: "Trees",
  },
  {
    question: "What is a binary search tree (BST)?",
    answer:
      "A BST is a binary tree where left children are less than the node and right children are greater.",
    subTopic: "Trees",
  },
  {
    question: "What is recursion?",
    answer:
      "Recursion is a function calling itself to solve smaller instances of the same problem.",
    subTopic: "Recursion",
  },
  {
    question: "What is dynamic programming?",
    answer:
      "Dynamic programming is solving problems by breaking them down into subproblems and storing their results.",
    subTopic: "Dynamic Programming",
  },
  {
    question: "What is memoization?",
    answer:
      "Memoization is an optimization that stores the results of expensive function calls.",
    subTopic: "Dynamic Programming",
  },
  {
    question: "What is the difference between BFS and DFS?",
    answer:
      "BFS explores level by level using a queue. DFS explores depth-first using a stack or recursion.",
    subTopic: "Graph Traversal",
  },
  {
    question: "What is the Big O of inserting an element in a hash table?",
    answer: "O(1) on average, O(n) in worst case due to collisions.",
    subTopic: "Hashing",
  },
  {
    question: "What is a linked list?",
    answer:
      "A linked list is a sequence of nodes where each node points to the next.",
    subTopic: "Linked List",
  },
  {
    question:
      "What is the time complexity of inserting at the beginning of a linked list?",
    answer: "O(1), since it just updates pointers.",
    subTopic: "Linked List",
  },
  {
    question: "What is a priority queue?",
    answer:
      "A priority queue is a queue where elements are dequeued based on priority.",
    subTopic: "Queue",
  },
  {
    question: "What is the two-pointer technique?",
    answer:
      "It involves using two pointers to traverse data, often used for problems involving arrays or strings.",
    subTopic: "Techniques",
  },
  {
    question: "What is the sliding window technique?",
    answer:
      "A method to reduce nested loops into a single loop by maintaining a window of values.",
    subTopic: "Techniques",
  },
  {
    question: "What is the difference between linear and binary search?",
    answer:
      "Linear search checks each element (O(n)), binary search divides the array (O(log n)) but requires sorting.",
    subTopic: "Searching",
  },
];

export default dsaFlashcards;

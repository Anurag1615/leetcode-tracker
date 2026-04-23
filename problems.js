
window.TP_PROBLEMS= [
  {
    id: 'converging',
    section: 'Converging Pointers',
    desc: 'Left and right move toward each other from opposite ends of a sorted array.',
    complexity: 'Time: O(n) · Space: O(1)',
    problems: [
      { num:'1', title:'Two Sum', diff:'Easy', slug:'two-sum', concept:'Hash map (see #167 for sorted version)' },
      { num:'11', title:'Container With Most Water', diff:'Medium', slug:'container-with-most-water', concept:'Move shorter side inward' },
      { num:'15', title:'3Sum', diff:'Medium', slug:'3sum', concept:'Fix one + converging on rest' },
      { num:'16', title:'3Sum Closest', diff:'Medium', slug:'3sum-closest', concept:'Track min difference' },
      { num:'18', title:'4Sum', diff:'Medium', slug:'4sum', concept:'Double fix + converging' },
      { num:'167', title:'Two Sum II', diff:'Medium', slug:'two-sum-ii-input-array-is-sorted', concept:'Classic converging' },
      { num:'259', title:'3Sum Smaller', diff:'Medium', slug:'3sum-smaller', concept:'Count pairs < target' },
      { num:'349', title:'Intersection of Two Arrays', diff:'Easy', slug:'intersection-of-two-arrays', concept:'Sort + converge both' },
      { num:'392', title:'Is Subsequence', diff:'Easy', slug:'is-subsequence', concept:'Match chars greedily' },
      { num:'881', title:'Boats to Save People', diff:'Medium', slug:'boats-to-save-people', concept:'Greedy + converging' },
      { num:'977', title:'Squares of a Sorted Array', diff:'Easy', slug:'squares-of-a-sorted-array', concept:'Fill result from back' },
    ]
  },
  {
    id: 'fast-slow',
    section: 'Fast & Slow Pointers',
    desc: 'Slow moves one step; fast moves two. Meets inside a cycle or finds midpoint.',
    complexity: 'Time: O(n) · Space: O(1)',
    problems: [
      { num:'141', title:'Linked List Cycle', diff:'Easy', slug:'linked-list-cycle', concept:"Floyd's detection" },
      { num:'202', title:'Happy Number', diff:'Easy', slug:'happy-number', concept:'Cycle in number sequence' },
      { num:'287', title:'Find the Duplicate Number', diff:'Medium', slug:'find-the-duplicate-number', concept:'Array as implicit linked list' },
    ]
  },
  {
    id: 'in-place',
    section: 'In-place Array Modification',
    desc: 'Read pointer scans everything; write pointer only advances on valid elements.',
    complexity: 'Time: O(n) · Space: O(1)',
    problems: [
      { num:'26', title:'Remove Duplicates from Sorted Array', diff:'Easy', slug:'remove-duplicates-from-sorted-array', concept:'Read/write pointers' },
      { num:'27', title:'Remove Element', diff:'Easy', slug:'remove-element', concept:'Filter by value' },
      { num:'75', title:'Sort Colors', diff:'Medium', slug:'sort-colors', concept:'Dutch National Flag (3 pointers)' },
      { num:'80', title:'Remove Duplicates II', diff:'Medium', slug:'remove-duplicates-from-sorted-array-ii', concept:'Allow at most 2 duplicates' },
      { num:'283', title:'Move Zeroes', diff:'Easy', slug:'move-zeroes', concept:'Partition zeros to end' },
      { num:'905', title:'Sort Array By Parity', diff:'Easy', slug:'sort-array-by-parity', concept:'Converge + swap evens left' },
    ]
  },
  {
    id: 'expand-center',
    section: 'Palindrome — Expand From Center',
    desc: 'Expand outward from each index (odd) and each adjacent pair (even).',
    complexity: 'Time: O(n²) worst · Space: O(1)',
    problems: [
      { num:'5', title:'Longest Palindromic Substring', diff:'Medium', slug:'longest-palindromic-substring', concept:'Expand from center (odd + even)' },
      { num:'647', title:'Palindromic Substrings', diff:'Medium', slug:'palindromic-substrings', concept:'Count all expansions' },
      { num:'125', title:'Valid Palindrome', diff:'Easy', slug:'valid-palindrome', concept:'Skip non-alphanumeric' },
      { num:'680', title:'Valid Palindrome II', diff:'Easy', slug:'valid-palindrome-ii', concept:'Allow one deletion' },
    ]
  },
  {
    id: 'reversal',
    section: 'String Reversal',
    desc: 'Swap elements from both ends moving inward to reverse in-place.',
    complexity: 'Time: O(n) · Space: O(1)',
    problems: [
      { num:'151', title:'Reverse Words in a String', diff:'Medium', slug:'reverse-words-in-a-string', concept:'Reverse all, then each word' },
      { num:'344', title:'Reverse String', diff:'Easy', slug:'reverse-string', concept:'Classic swap from ends' },
      { num:'345', title:'Reverse Vowels of a String', diff:'Easy', slug:'reverse-vowels-of-a-string', concept:'Skip non-vowels' },
      { num:'541', title:'Reverse String II', diff:'Easy', slug:'reverse-string-ii', concept:'Reverse every 2k chunk' },
    ]
  },
];


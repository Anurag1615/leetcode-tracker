/**
 * data.js — Single Source of Truth for leetcodepattern.com
 * ─────────────────────────────────────────────────────────
 * HOW TO ADD / REMOVE A PROBLEM:
 *   1. Find the right category + pattern below
 *   2. Add/remove an object from its `problems` array
 *   3. That's it — index.html, two-pointers.html, sliding-window.html
 *      and all future pattern pages pick it up automatically.
 *
 * PROBLEM OBJECT SCHEMA:
 *   num     : string  — LeetCode problem number  e.g. "76"
 *   title   : string  — Problem title            e.g. "Minimum Window Substring"
 *   slug    : string  — LeetCode URL slug         e.g. "minimum-window-substring"
 *   diff    : string  — "Easy" | "Medium" | "Hard"
 *   concept : string  — One-liner teaching note   e.g. "Frequency matching"
 *
 * HOW PAGES USE THIS FILE:
 *   index.html       → uses window.LC_DATA directly (same shape as old DATA array)
 *   two-pointers.html → window.LC_DATA.getPatternPage('two-pointers')
 *   sliding-window.html → window.LC_DATA.getPatternPage('sliding-window')
 *   future pages     → window.LC_DATA.getPatternPage('<id>')
 */

(function () {
  // ─────────────────────────────────────────────────────────────────────────────
  // MASTER DATA  (15 categories, 88 patterns, 368 problems)
  // ─────────────────────────────────────────────────────────────────────────────
  const CATEGORIES = [
    // ══════════════════════════════════════════════════════
    // I. TWO POINTER PATTERNS
    // ══════════════════════════════════════════════════════
    {
      category: "I. Two Pointer Patterns",
      pageId: "two-pointers",   // links to two-pointers.html
      patterns: [
        {
          name: "Pattern 1: Two Pointers - Converging (Sorted Array Target Sum)",
          subId: "converging",
          section: "Converging Pointers",
          desc: "Left and right move toward each other from opposite ends of a sorted array.",
          complexity: "Time: O(n) · Space: O(1)",
          problems: [
            { num:"1",   title:"Two Sum",                             slug:"two-sum",                                 diff:"Easy",   concept:"Hash map (see #167 for sorted version)" },
            { num:"11",  title:"Container With Most Water",           slug:"container-with-most-water",               diff:"Medium", concept:"Move shorter side inward" },
            { num:"15",  title:"3Sum",                                slug:"3sum",                                    diff:"Medium", concept:"Fix one + converging on rest" },
            { num:"16",  title:"3Sum Closest",                        slug:"3sum-closest",                            diff:"Medium", concept:"Track min difference" },
            { num:"18",  title:"4Sum",                                slug:"4sum",                                    diff:"Medium", concept:"Double fix + converging" },
            { num:"167", title:"Two Sum II - Input Array Is Sorted",  slug:"two-sum-ii-input-array-is-sorted",        diff:"Medium", concept:"Classic converging" },
            { num:"259", title:"3Sum Smaller",                        slug:"3sum-smaller",                            diff:"Medium", concept:"Count pairs < target" },
            { num:"349", title:"Intersection of Two Arrays",          slug:"intersection-of-two-arrays",              diff:"Easy",   concept:"Sort + converge both" },
            { num:"392", title:"Is Subsequence",                      slug:"is-subsequence",                          diff:"Easy",   concept:"Match chars greedily" },
            { num:"881", title:"Boats to Save People",                slug:"boats-to-save-people",                    diff:"Medium", concept:"Greedy + converging" },
            { num:"977", title:"Squares of a Sorted Array",           slug:"squares-of-a-sorted-array",               diff:"Easy",   concept:"Fill result from back" },
          ]
        },
        {
          name: "Pattern 2: Two Pointers - Fast & Slow (Cycle Detection)",
          subId: "fast-slow",
          section: "Fast & Slow Pointers",
          desc: "Slow moves one step; fast moves two. Meets inside a cycle or finds midpoint.",
          complexity: "Time: O(n) · Space: O(1)",
          problems: [
            { num:"141", title:"Linked List Cycle",          slug:"linked-list-cycle",          diff:"Easy",   concept:"Floyd's detection" },
            { num:"202", title:"Happy Number",               slug:"happy-number",               diff:"Easy",   concept:"Cycle in number sequence" },
            { num:"287", title:"Find the Duplicate Number",  slug:"find-the-duplicate-number",  diff:"Medium", concept:"Array as implicit linked list" },
          ]
        },
        {
          name: "Pattern 3: Two Pointers - Fixed Separation (Nth Node from End)",
          subId: "fixed-separation",
          section: "Fixed Separation Pointers",
          desc: "Two pointers separated by n steps; when fast hits end, slow is at target.",
          complexity: "Time: O(n) · Space: O(1)",
          problems: [
            { num:"19",   title:"Remove Nth Node From End of List",        slug:"remove-nth-node-from-end-of-list",        diff:"Medium", concept:"Gap of n between pointers" },
            { num:"876",  title:"Middle of the Linked List",               slug:"middle-of-the-linked-list",               diff:"Easy",   concept:"Fast=2×slow" },
            { num:"2095", title:"Delete the Middle Node of a Linked List", slug:"delete-the-middle-node-of-a-linked-list", diff:"Medium", concept:"Find prev of middle" },
          ]
        },
        {
          name: "Pattern 4: Two Pointers - In-place Array Modification",
          subId: "in-place",
          section: "In-place Array Modification",
          desc: "Read pointer scans everything; write pointer only advances on valid elements.",
          complexity: "Time: O(n) · Space: O(1)",
          problems: [
            { num:"26",   title:"Remove Duplicates from Sorted Array",    slug:"remove-duplicates-from-sorted-array",    diff:"Easy",   concept:"Read/write pointers" },
            { num:"27",   title:"Remove Element",                         slug:"remove-element",                        diff:"Easy",   concept:"Filter by value" },
            { num:"75",   title:"Sort Colors",                            slug:"sort-colors",                           diff:"Medium", concept:"Dutch National Flag (3 pointers)" },
            { num:"80",   title:"Remove Duplicates from Sorted Array II", slug:"remove-duplicates-from-sorted-array-ii", diff:"Medium", concept:"Allow at most 2 duplicates" },
            { num:"283",  title:"Move Zeroes",                            slug:"move-zeroes",                           diff:"Easy",   concept:"Partition zeros to end" },
            { num:"443",  title:"String Compression",                     slug:"string-compression",                    diff:"Medium", concept:"Write compressed chars in-place" },
            { num:"905",  title:"Sort Array By Parity",                   slug:"sort-array-by-parity",                  diff:"Easy",   concept:"Converge + swap evens left" },
            { num:"2337", title:"Move Pieces to Obtain a String",         slug:"move-pieces-to-obtain-a-string",        diff:"Medium", concept:"Simulate moves with two pointers" },
            { num:"2938", title:"Separate Black and White Balls",         slug:"separate-black-and-white-balls",        diff:"Medium", concept:"Count swaps needed" },
          ]
        },
        {
          name: "Pattern 5: Two Pointers - String Comparison with Backspaces",
          subId: "backspace",
          section: "Backspace String Comparison",
          desc: "Simulate backspace by scanning from the end; skip characters cancelled by '#'.",
          complexity: "Time: O(n) · Space: O(1)",
          problems: [
            { num:"844", title:"Backspace String Compare", slug:"backspace-string-compare", diff:"Easy", concept:"Scan from end, skip on '#'" },
          ]
        },
        {
          name: "Pattern 6: Two Pointers - Expanding From Center (Palindromes)",
          subId: "expand-center",
          section: "Palindrome — Expand From Center",
          desc: "Expand outward from each index (odd) and each adjacent pair (even).",
          complexity: "Time: O(n²) worst · Space: O(1)",
          problems: [
            { num:"5",   title:"Longest Palindromic Substring", slug:"longest-palindromic-substring", diff:"Medium", concept:"Expand from center (odd + even)" },
            { num:"125", title:"Valid Palindrome",              slug:"valid-palindrome",              diff:"Easy",   concept:"Skip non-alphanumeric" },
            { num:"647", title:"Palindromic Substrings",        slug:"palindromic-substrings",        diff:"Medium", concept:"Count all expansions" },
            { num:"680", title:"Valid Palindrome II",           slug:"valid-palindrome-ii",           diff:"Easy",   concept:"Allow one deletion" },
          ]
        },
        {
          name: "Pattern 7: Two Pointers - String Reversal",
          subId: "reversal",
          section: "String Reversal",
          desc: "Swap elements from both ends moving inward to reverse in-place.",
          complexity: "Time: O(n) · Space: O(1)",
          problems: [
            { num:"151", title:"Reverse Words in a String", slug:"reverse-words-in-a-string", diff:"Medium", concept:"Reverse all, then each word" },
            { num:"344", title:"Reverse String",            slug:"reverse-string",            diff:"Easy",   concept:"Classic swap from ends" },
            { num:"345", title:"Reverse Vowels of a String",slug:"reverse-vowels-of-a-string",diff:"Easy",   concept:"Skip non-vowels" },
            { num:"541", title:"Reverse String II",         slug:"reverse-string-ii",         diff:"Easy",   concept:"Reverse every 2k chunk" },
          ]
        },
      ]
    },

    // ══════════════════════════════════════════════════════
    // II. SLIDING WINDOW PATTERNS
    // ══════════════════════════════════════════════════════
    {
      category: "II. Sliding Window Patterns",
      pageId: "sliding-window",
      patterns: [
        {
          name: "Pattern 8: Sliding Window - Fixed Size (Subarray Calculation)",
          subId: "fixed-window",
          section: "Fixed-Size Window",
          desc: "Window size k is constant. Initialize first k elements, then slide by adding one and removing one.",
          complexity: "Time: O(n) · Space: O(1)",
          problems: [
            { num:"346",  title:"Moving Average from Data Stream",       slug:"moving-average-from-data-stream",       diff:"Easy",   concept:"Running sum over fixed k" },
            { num:"643",  title:"Maximum Average Subarray I",            slug:"maximum-average-subarray-i",            diff:"Easy",   concept:"Max window sum ÷ k" },
            { num:"2461", title:"Maximum Sum of Distinct Subarrays With Length K", slug:"maximum-sum-of-distinct-subarrays-with-length-k", diff:"Medium", concept:"Fixed + distinct check" },
            { num:"2985", title:"Calculate Compressed Mean",             slug:"calculate-compressed-mean",             diff:"Easy",   concept:"Trimmed window average" },
            { num:"3254", title:"Find the Power of K-Size Subarrays I", slug:"find-the-power-of-k-size-subarrays-i",  diff:"Medium", concept:"Consecutive sorted window" },
            { num:"3318", title:"Find X-Sum of All K-Long Subarrays I", slug:"find-x-sum-of-all-k-long-subarrays-i",  diff:"Medium", concept:"Top-x frequency in fixed window" },
          ]
        },
        {
          name: "Pattern 9: Sliding Window - Variable Size (Condition-Based)",
          subId: "variable-window",
          section: "Variable-Size Window",
          desc: "Expand right unconditionally. Shrink from left when constraint is violated.",
          complexity: "Time: O(n) · Space: O(k)",
          problems: [
            { num:"3",    title:"Longest Substring Without Repeating Characters",              slug:"longest-substring-without-repeating-characters",                          diff:"Medium", concept:"Set / hashmap for duplicates" },
            { num:"76",   title:"Minimum Window Substring",                                   slug:"minimum-window-substring",                                               diff:"Hard",   concept:"Frequency matching" },
            { num:"209",  title:"Minimum Size Subarray Sum",                                  slug:"minimum-size-subarray-sum",                                              diff:"Medium", concept:"Shrink when sum ≥ target" },
            { num:"219",  title:"Contains Duplicate II",                                      slug:"contains-duplicate-ii",                                                  diff:"Easy",   concept:"Window of size k with hashset" },
            { num:"424",  title:"Longest Repeating Character Replacement",                    slug:"longest-repeating-character-replacement",                                diff:"Medium", concept:"maxCount trick" },
            { num:"713",  title:"Subarray Product Less Than K",                               slug:"subarray-product-less-than-k",                                           diff:"Medium", concept:"Product shrink" },
            { num:"904",  title:"Fruit Into Baskets",                                         slug:"fruit-into-baskets",                                                     diff:"Medium", concept:"At most 2 distinct" },
            { num:"1004", title:"Max Consecutive Ones III",                                   slug:"max-consecutive-ones-iii",                                               diff:"Medium", concept:"At most k zeros flipped" },
            { num:"1438", title:"Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit", slug:"longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit", diff:"Medium", concept:"Min/max deque" },
            { num:"1493", title:"Longest Subarray of 1's After Deleting One Element",         slug:"longest-subarray-of-1s-after-deleting-one-element",                      diff:"Medium", concept:"Treat delete as flip" },
            { num:"1658", title:"Minimum Operations to Reduce X to Zero",                     slug:"minimum-operations-to-reduce-x-to-zero",                                 diff:"Medium", concept:"Reverse: max middle window" },
            { num:"1838", title:"Frequency of the Most Frequent Element",                     slug:"frequency-of-the-most-frequent-element",                                 diff:"Medium", concept:"Sort + window cost ≤ k" },
            { num:"2516", title:"Take K of Each Character From Left and Right",               slug:"take-k-of-each-character-from-left-and-right",                           diff:"Medium", concept:"Reverse: max skippable middle" },
            { num:"2762", title:"Continuous Subarrays",                                       slug:"continuous-subarrays",                                                   diff:"Medium", concept:"Max-min ≤ 2 constraint" },
            { num:"2779", title:"Maximum Beauty of an Array After Applying Operation",        slug:"maximum-beauty-of-an-array-after-applying-operation",                    diff:"Medium", concept:"Sort + range window" },
            { num:"2981", title:"Find Longest Special Substring That Occurs Thrice I",        slug:"find-longest-special-substring-that-occurs-thrice-i",                    diff:"Medium", concept:"Count char runs" },
            { num:"3026", title:"Maximum Good Subarray Sum",                                  slug:"maximum-good-subarray-sum",                                              diff:"Medium", concept:"Track prefix min" },
            { num:"3346", title:"Maximum Frequency of an Element After Performing Operations I",  slug:"maximum-frequency-of-an-element-after-performing-operations-i",     diff:"Medium", concept:"Binary search + window" },
            { num:"3347", title:"Maximum Frequency of an Element After Performing Operations II", slug:"maximum-frequency-of-an-element-after-performing-operations-ii",    diff:"Hard",   concept:"Harder variant of #3346" },
          ]
        },
        {
          name: "Pattern 10: Sliding Window - Monotonic Queue for Max/Min",
          subId: "monotonic-deque",
          section: "Monotonic Deque Window",
          desc: "Track max/min inside the window in O(1) using a double-ended queue of indices.",
          complexity: "Time: O(n) · Space: O(k)",
          problems: [
            { num:"239",  title:"Sliding Window Maximum",                  slug:"sliding-window-maximum",                  diff:"Hard",   concept:"Decreasing deque of indices" },
            { num:"862",  title:"Shortest Subarray with Sum at Least K",   slug:"shortest-subarray-with-sum-at-least-k",   diff:"Hard",   concept:"Prefix sum + deque" },
            { num:"1696", title:"Jump Game VI",                            slug:"jump-game-vi",                            diff:"Medium", concept:"DP + deque max" },
          ]
        },
        {
          name: "Pattern 11: Sliding Window - Character Frequency Matching",
          subId: "freq-matching",
          section: "Character Frequency Matching",
          desc: "Use frequency maps to check if window matches a target character distribution.",
          complexity: "Time: O(n) · Space: O(1)",
          problems: [
            // Add problems here
          ]
        },
      ]
    },

    // ══════════════════════════════════════════════════════
    // III. TREE TRAVERSAL PATTERNS
    // ══════════════════════════════════════════════════════
    {
      category: "III. Tree Traversal Patterns (DFS & BFS)",
      pageId: null,
      patterns: [
        {
          name: "Pattern 12: Tree BFS - Level Order Traversal",
          subId: null, section: null, desc: null, complexity: null,
          problems: [
            { num:"102",  title:"Binary Tree Level Order Traversal",        slug:"binary-tree-level-order-traversal",        diff:"Medium", concept:"Queue, process level by level" },
            { num:"103",  title:"Binary Tree Zigzag Level Order Traversal", slug:"binary-tree-zigzag-level-order-traversal", diff:"Medium", concept:"Alternate direction each level" },
            { num:"199",  title:"Binary Tree Right Side View",              slug:"binary-tree-right-side-view",              diff:"Medium", concept:"Last node of each level" },
            { num:"515",  title:"Find Largest Value in Each Tree Row",      slug:"find-largest-value-in-each-tree-row",      diff:"Medium", concept:"Max per level" },
            { num:"1161", title:"Maximum Level Sum of a Binary Tree",       slug:"maximum-level-sum-of-a-binary-tree",       diff:"Medium", concept:"Sum per level, track max" },
          ]
        },
        {
          name: "Pattern 13: Tree DFS - Recursive Preorder Traversal",
          subId: null, section: null, desc: null, complexity: null,
          problems: [
            { num:"100", title:"Same Tree",                                              slug:"same-tree",                                              diff:"Easy",   concept:"Compare structure + values" },
            { num:"101", title:"Symmetric Tree",                                         slug:"symmetric-tree",                                         diff:"Easy",   concept:"Mirror check" },
            { num:"105", title:"Construct Binary Tree from Preorder and Inorder Traversal", slug:"construct-binary-tree-from-preorder-and-inorder-traversal", diff:"Medium", concept:"Root from preorder, split inorder" },
            { num:"114", title:"Flatten Binary Tree to Linked List",                     slug:"flatten-binary-tree-to-linked-list",                     diff:"Medium", concept:"Morris-like right rewiring" },
            { num:"226", title:"Invert Binary Tree",                                     slug:"invert-binary-tree",                                     diff:"Easy",   concept:"Swap children recursively" },
            { num:"257", title:"Binary Tree Paths",                                      slug:"binary-tree-paths",                                      diff:"Easy",   concept:"Collect root-to-leaf paths" },
            { num:"988", title:"Smallest String Starting From Leaf",                     slug:"smallest-string-starting-from-leaf",                     diff:"Medium", concept:"Build path, compare at leaf" },
          ]
        },
        {
          name: "Pattern 14: Tree DFS - Recursive Inorder Traversal",
          subId: null, section: null, desc: null, complexity: null,
          problems: [
            { num:"94",  title:"Binary Tree Inorder Traversal",         slug:"binary-tree-inorder-traversal",         diff:"Easy",   concept:"Left → root → right" },
            { num:"98",  title:"Validate Binary Search Tree",            slug:"validate-binary-search-tree",           diff:"Medium", concept:"Inorder must be strictly increasing" },
            { num:"173", title:"Binary Search Tree Iterator",            slug:"binary-search-tree-iterator",           diff:"Medium", concept:"Lazy inorder with stack" },
            { num:"230", title:"Kth Smallest Element in a BST",          slug:"kth-smallest-element-in-a-bst",         diff:"Medium", concept:"Inorder count to k" },
            { num:"501", title:"Find Mode in Binary Search Tree",        slug:"find-mode-in-binary-search-tree",       diff:"Easy",   concept:"Track consecutive runs" },
            { num:"530", title:"Minimum Absolute Difference in BST",     slug:"minimum-absolute-difference-in-bst",    diff:"Easy",   concept:"Diff between consecutive inorder" },
          ]
        },
        {
          name: "Pattern 15: Tree DFS - Recursive Postorder Traversal",
          subId: null, section: null, desc: null, complexity: null,
          problems: [
            { num:"104",  title:"Maximum Depth of Binary Tree",                    slug:"maximum-depth-of-binary-tree",                    diff:"Easy",   concept:"max(left,right)+1" },
            { num:"110",  title:"Balanced Binary Tree",                            slug:"balanced-binary-tree",                            diff:"Easy",   concept:"Height diff ≤ 1 at every node" },
            { num:"124",  title:"Binary Tree Maximum Path Sum",                    slug:"binary-tree-maximum-path-sum",                    diff:"Hard",   concept:"Max gain from each subtree" },
            { num:"145",  title:"Binary Tree Postorder Traversal",                 slug:"binary-tree-postorder-traversal",                 diff:"Easy",   concept:"Left → right → root" },
            { num:"337",  title:"House Robber III",                                slug:"house-robber-iii",                                diff:"Medium", concept:"Rob or skip each node" },
            { num:"366",  title:"Find Leaves of Binary Tree",                      slug:"find-leaves-of-binary-tree",                      diff:"Medium", concept:"Group by height from leaf" },
            { num:"543",  title:"Diameter of Binary Tree",                         slug:"diameter-of-binary-tree",                         diff:"Easy",   concept:"Max left+right depth" },
            { num:"863",  title:"All Nodes Distance K in Binary Tree",             slug:"all-nodes-distance-k-in-binary-tree",             diff:"Medium", concept:"Build parent map + BFS" },
            { num:"1110", title:"Delete Nodes And Return Forest",                  slug:"delete-nodes-and-return-forest",                  diff:"Medium", concept:"Set of delete nodes" },
            { num:"2458", title:"Height of Binary Tree After Subtree Removal Queries", slug:"height-of-binary-tree-after-subtree-removal-queries", diff:"Hard", concept:"Precompute max heights" },
          ]
        },
        {
          name: "Pattern 17: Tree - Lowest Common Ancestor (LCA) Finding",
          subId: null, section: null, desc: null, complexity: null,
          problems: [
            { num:"235", title:"Lowest Common Ancestor of a Binary Search Tree", slug:"lowest-common-ancestor-of-a-binary-search-tree", diff:"Medium", concept:"BST property to navigate" },
            { num:"236", title:"Lowest Common Ancestor of a Binary Tree",        slug:"lowest-common-ancestor-of-a-binary-tree",        diff:"Medium", concept:"Return node when p or q found" },
          ]
        },
        {
          name: "Pattern 18: Tree - Serialization and Deserialization",
          subId: null, section: null, desc: null, complexity: null,
          problems: [
            { num:"297", title:"Serialize and Deserialize Binary Tree", slug:"serialize-and-deserialize-binary-tree", diff:"Hard",   concept:"BFS/DFS encode with null markers" },
            { num:"572", title:"Subtree of Another Tree",               slug:"subtree-of-another-tree",               diff:"Easy",   concept:"Check same-tree at each node" },
            { num:"652", title:"Find Duplicate Subtrees",               slug:"find-duplicate-subtrees",               diff:"Medium", concept:"Serialize + hashmap count" },
          ]
        },
      ]
    },

    // ══════════════════════════════════════════════════════
    // IV. GRAPH TRAVERSAL PATTERNS
    // ══════════════════════════════════════════════════════
    {
      category: "IV. Graph Traversal Patterns (DFS & BFS)",
      pageId: null,
      patterns: [
        {
          name: "Pattern 19: Graph DFS - Connected Components / Island Counting",
          subId: null, section: null, desc: null, complexity: null,
          problems: [
            { num:"130",  title:"Surrounded Regions",            slug:"surrounded-regions",            diff:"Medium", concept:"Flood fill from border" },
            { num:"200",  title:"Number of Islands",             slug:"number-of-islands",             diff:"Medium", concept:"DFS to sink visited land" },
            { num:"417",  title:"Pacific Atlantic Water Flow",   slug:"pacific-atlantic-water-flow",   diff:"Medium", concept:"Reverse flow from both coasts" },
            { num:"547",  title:"Number of Provinces",           slug:"number-of-provinces",           diff:"Medium", concept:"DFS on adjacency matrix" },
            { num:"695",  title:"Max Area of Island",            slug:"max-area-of-island",            diff:"Medium", concept:"DFS returns size" },
            { num:"733",  title:"Flood Fill",                    slug:"flood-fill",                    diff:"Easy",   concept:"Classic DFS recolor" },
            { num:"841",  title:"Keys and Rooms",                slug:"keys-and-rooms",                diff:"Medium", concept:"DFS with key set" },
            { num:"1020", title:"Number of Enclaves",            slug:"number-of-enclaves",            diff:"Medium", concept:"DFS from border, count rest" },
            { num:"1254", title:"Number of Closed Islands",      slug:"number-of-closed-islands",      diff:"Medium", concept:"Sink border islands first" },
            { num:"1905", title:"Count Sub Islands",             slug:"count-sub-islands",             diff:"Medium", concept:"Island in grid2 must be in grid1" },
            { num:"2101", title:"Detonate the Maximum Bombs",    slug:"detonate-the-maximum-bombs",    diff:"Medium", concept:"Build graph by overlap, DFS count" },
          ]
        },
        {
          name: "Pattern 20: Graph BFS - Connected Components / Island Counting",
          subId: null, section: null, desc: null, complexity: null,
          problems: [
            { num:"127",  title:"Word Ladder",                  slug:"word-ladder",                  diff:"Hard",   concept:"BFS level = transformation count" },
            { num:"542",  title:"01 Matrix",                    slug:"01-matrix",                    diff:"Medium", concept:"Multi-source BFS from zeros" },
            { num:"994",  title:"Rotting Oranges",              slug:"rotting-oranges",              diff:"Medium", concept:"Multi-source BFS for spread" },
            { num:"1091", title:"Shortest Path in Binary Matrix",slug:"shortest-path-in-binary-matrix",diff:"Medium",concept:"BFS in 8-directional grid" },
          ]
        },
        {
          name: "Pattern 21: Graph DFS - Cycle Detection (Directed Graph)",
          subId: null, section: null, desc: null, complexity: null,
          problems: [
            { num:"207",  title:"Course Schedule",                            slug:"course-schedule",                            diff:"Medium", concept:"DFS 3-color cycle detect" },
            { num:"210",  title:"Course Schedule II",                         slug:"course-schedule-ii",                         diff:"Medium", concept:"Topo sort with cycle check" },
            { num:"802",  title:"Find Eventual Safe States",                  slug:"find-eventual-safe-states",                  diff:"Medium", concept:"Node safe if no cycle reachable" },
            { num:"1059", title:"All Paths from Source Lead to Destination",  slug:"all-paths-from-source-lead-to-destination",  diff:"Medium", concept:"All paths end at dest" },
          ]
        },
        {
          name: "Pattern 22: Graph BFS - Topological Sort (Kahn's Algorithm)",
          subId: null, section: null, desc: null, complexity: null,
          problems: [
            { num:"207",  title:"Course Schedule",                            slug:"course-schedule",                            diff:"Medium", concept:"Cycle = BFS queue empties early" },
            { num:"210",  title:"Course Schedule II",                         slug:"course-schedule-ii",                         diff:"Medium", concept:"Output order from Kahn's" },
            { num:"269",  title:"Alien Dictionary",                           slug:"alien-dictionary",                           diff:"Hard",   concept:"Build order from char pairs" },
            { num:"310",  title:"Minimum Height Trees",                       slug:"minimum-height-trees",                       diff:"Medium", concept:"Prune leaves iteratively" },
            { num:"444",  title:"Sequence Reconstruction",                    slug:"sequence-reconstruction",                    diff:"Medium", concept:"Unique topo order check" },
            { num:"1136", title:"Parallel Courses",                           slug:"parallel-courses",                           diff:"Medium", concept:"Levels in topo sort" },
            { num:"1857", title:"Largest Color Value in a Directed Graph",    slug:"largest-color-value-in-a-directed-graph",    diff:"Hard",   concept:"DP on topo order" },
            { num:"2050", title:"Parallel Courses III",                       slug:"parallel-courses-iii",                       diff:"Hard",   concept:"Longest path in DAG" },
            { num:"2115", title:"Find All Possible Recipes from Given Supplies",slug:"find-all-possible-recipes-from-given-supplies",diff:"Medium",concept:"Ingredients as graph edges" },
            { num:"2392", title:"Build a Matrix With Conditions",             slug:"build-a-matrix-with-conditions",             diff:"Hard",   concept:"Two independent topo sorts" },
          ]
        },
        {
          name: "Pattern 23: Graph - Deep Copy / Cloning",
          subId: null, section: null, desc: null, complexity: null,
          problems: [
            { num:"133", title:"Clone Graph", slug:"clone-graph", diff:"Medium", concept:"DFS/BFS + visited map to clone" },
          ]
        },
        {
          name: "Pattern 24: Graph - Shortest Path (Dijkstra's Algorithm)",
          subId: null, section: null, desc: null, complexity: null,
          problems: [
            { num:"743",  title:"Network Delay Time",                           slug:"network-delay-time",                           diff:"Medium", concept:"Classic Dijkstra" },
            { num:"778",  title:"Swim in Rising Water",                         slug:"swim-in-rising-water",                         diff:"Hard",   concept:"Min of max edge (minimax)" },
            { num:"1514", title:"Path with Maximum Probability",               slug:"path-with-maximum-probability",               diff:"Medium", concept:"Max-heap Dijkstra" },
            { num:"1631", title:"Path With Minimum Effort",                    slug:"path-with-minimum-effort",                    diff:"Medium", concept:"Minimax Dijkstra" },
            { num:"1976", title:"Number of Ways to Arrive at Destination",     slug:"number-of-ways-to-arrive-at-destination",     diff:"Medium", concept:"Count shortest paths" },
            { num:"2045", title:"Second Minimum Time to Reach Destination",    slug:"second-minimum-time-to-reach-destination",    diff:"Hard",   concept:"Track 2 shortest times" },
            { num:"2203", title:"Minimum Weighted Subgraph With the Required Paths", slug:"minimum-weighted-subgraph-with-the-required-paths", diff:"Hard", concept:"3 Dijkstra runs" },
            { num:"2290", title:"Minimum Obstacle Removal to Reach Corner",    slug:"minimum-obstacle-removal-to-reach-corner",    diff:"Hard",   concept:"0-1 BFS" },
            { num:"2577", title:"Minimum Time to Visit a Cell In a Grid",      slug:"minimum-time-to-visit-a-cell-in-a-grid",      diff:"Hard",   concept:"Dijkstra with wait-bounce" },
            { num:"2812", title:"Find the Safest Path in a Grid",              slug:"find-the-safest-path-in-a-grid",              diff:"Medium", concept:"BFS distances + binary search" },
          ]
        },
        {
          name: "Pattern 25: Graph - Shortest Path (Bellman-Ford / BFS+K)",
          subId: null, section: null, desc: null, complexity: null,
          problems: [
            { num:"787", title:"Cheapest Flights Within K Stops", slug:"cheapest-flights-within-k-stops", diff:"Medium", concept:"Bellman-Ford k iterations" },
          ]
        },
        {
          name: "Pattern 26: Graph - Union-Find (Disjoint Set Union - DSU)",
          subId: null, section: null, desc: null, complexity: null,
          problems: [
            { num:"200",  title:"Number of Islands",                              slug:"number-of-islands",                              diff:"Medium", concept:"Union adjacent land cells" },
            { num:"261",  title:"Graph Valid Tree",                               slug:"graph-valid-tree",                               diff:"Medium", concept:"n-1 edges + no cycle" },
            { num:"305",  title:"Number of Islands II",                           slug:"number-of-islands-ii",                           diff:"Hard",   concept:"Dynamic union as land added" },
            { num:"323",  title:"Number of Connected Components in an Undirected Graph", slug:"number-of-connected-components-in-an-undirected-graph", diff:"Medium", concept:"Count roots" },
            { num:"547",  title:"Number of Provinces",                            slug:"number-of-provinces",                            diff:"Medium", concept:"Union from adjacency matrix" },
            { num:"684",  title:"Redundant Connection",                           slug:"redundant-connection",                           diff:"Medium", concept:"Edge that closes a cycle" },
            { num:"721",  title:"Accounts Merge",                                 slug:"accounts-merge",                                 diff:"Medium", concept:"Union by shared email" },
            { num:"737",  title:"Sentence Similarity II",                         slug:"sentence-similarity-ii",                         diff:"Medium", concept:"Transitivity via union" },
            { num:"947",  title:"Most Stones Removed with Same Row or Column",   slug:"most-stones-removed-with-same-row-or-column",   diff:"Medium", concept:"Union rows and cols" },
            { num:"952",  title:"Largest Component Size by Common Factor",        slug:"largest-component-size-by-common-factor",        diff:"Hard",   concept:"Union number with its factors" },
            { num:"959",  title:"Regions Cut By Slashes",                         slug:"regions-cut-by-slashes",                         diff:"Medium", concept:"Split cell into 4 triangles" },
            { num:"1101", title:"The Earliest Moment When Everyone Become Friends",slug:"the-earliest-moment-when-everyone-become-friends",diff:"Medium",concept:"Sort events, union until 1 component" },
          ]
        },
      ]
    },

    // ══════════════════════════════════════════════════════
    // V. DYNAMIC PROGRAMMING  (Aditya Verma + Full FAANG Coverage)
    // ══════════════════════════════════════════════════════
    // lc  : LeetCode slug  → https://leetcode.com/problems/<slug>/
    // gfg : GFG slug       → https://www.geeksforgeeks.org/problems/<slug>/
    // If lc is null → GFG-only. Both = exists on both platforms.
    {
      category: "V. Dynamic Programming (DP) Patterns",
      pageId: "dp",
      patterns: [
        // ── AV PLAYLIST 1: 0/1 KNAPSACK ──
        {
          name: "Pattern 27: DP - 0/1 Knapsack & Variants",
          subId: "knapsack-01",
          section: "0/1 Knapsack",
          desc: "Each item picked at most once. dp[i][w] = max(exclude item i, include if weight fits). Variants: Subset Sum, Equal Partition, Count Subsets, Min Subset Diff, Target Sum, 2D Knapsack.",
          complexity: "Time: O(n·W) · Space: O(W)",
          problems: [
            { num:null,  lc:null,                              gfg:"0-1-knapsack-problem",                    title:"0/1 Knapsack",                              diff:"Medium", concept:"Classic — pick or skip each item once" },
            { num:null,  lc:null,                              gfg:"subset-sum-problem",                      title:"Subset Sum",                                diff:"Medium", concept:"Can we reach target sum with a subset?" },
            { num:"416", lc:"partition-equal-subset-sum",      gfg:"subset-sum-problem",                      title:"Partition Equal Subset Sum",                diff:"Medium", concept:"Subset Sum where target = totalSum / 2" },
            { num:null,  lc:null,                              gfg:"perfect-sum-problem",                     title:"Count Subsets with Given Sum",              diff:"Medium", concept:"Count subsets (not just yes/no)" },
            { num:null,  lc:null,                              gfg:"minimum-sum-partition",                   title:"Minimum Subset Sum Difference",             diff:"Medium", concept:"Split array — minimise |S1 − S2|" },
            { num:"494", lc:"target-sum",                      gfg:"target-sum",                              title:"Target Sum (+/− assignment)",               diff:"Medium", concept:"Count subsets: P−N=target → count=(target+sum)/2" },
            { num:null,  lc:null,                              gfg:"number-of-subsets-with-given-difference", title:"Count Subsets with Given Difference",       diff:"Medium", concept:"Reduce to count subsets with sum=(diff+total)/2" },
            { num:"474", lc:"ones-and-zeroes",                 gfg:"0-1-knapsack-problem",                    title:"Ones and Zeroes (2D Knapsack)",             diff:"Medium", concept:"2D capacity: W=max 0s, H=max 1s" },
            { num:"1049",lc:"last-stone-weight-ii",            gfg:"minimum-sum-partition",                   title:"Last Stone Weight II",                      diff:"Medium", concept:"Min diff partition = min subset sum diff" },
          ]
        },
        // ── AV PLAYLIST 2: UNBOUNDED KNAPSACK ──
        {
          name: "Pattern 28: DP - Unbounded Knapsack (Items Reusable)",
          subId: "knapsack-unbounded",
          section: "Unbounded Knapsack",
          desc: "Each item usable unlimited times. Inner loop does NOT skip current item. Variants: Rod Cutting, Coin Change, Integer Break.",
          complexity: "Time: O(n·W) · Space: O(W)",
          problems: [
            { num:null,  lc:null,                              gfg:"knapsack-with-duplicate-items",           title:"Unbounded Knapsack",                        diff:"Medium", concept:"Same as 0/1 but pick same item again allowed" },
            { num:null,  lc:null,                              gfg:"rod-cutting",                             title:"Rod Cutting",                               diff:"Medium", concept:"Lengths = items, prices = profits; unbounded" },
            { num:"322", lc:"coin-change",                     gfg:"number-of-coins",                         title:"Coin Change (Min Coins)",                   diff:"Medium", concept:"Unbounded knapsack — minimise coin count" },
            { num:"518", lc:"coin-change-ii",                  gfg:"coin-change2",                            title:"Coin Change II (Count Ways)",               diff:"Medium", concept:"Count combinations to reach amount" },
            { num:"377", lc:"combination-sum-iv",              gfg:"count-of-strings-that-can-be-formed-using-a-b-and-c", title:"Combination Sum IV (Ordered)", diff:"Medium", concept:"Ordered = permutations — outer loop over targets" },
            { num:"343", lc:"integer-break",                   gfg:"maximum-product-cutting",                 title:"Integer Break",                             diff:"Medium", concept:"Unbounded: break n into parts, max product" },
            { num:null,  lc:null,                              gfg:"maximum-number-of-segments-of-lengths-a-b-and-c", title:"Maximum Ribbon Cut",              diff:"Medium", concept:"Max pieces of ribbon of given lengths" },
          ]
        },
        // ── AV PLAYLIST 3: FIBONACCI / 1D DP ──
        {
          name: "Pattern 29: DP - Fibonacci Style (1D DP)",
          subId: "fibonacci-dp",
          section: "Fibonacci / 1D DP",
          desc: "dp[i] depends on previous 1–2 states. Covers stair climbing, house robber, and linear recurrences. Optimise space to two variables.",
          complexity: "Time: O(n) · Space: O(1)",
          problems: [
            { num:"509", lc:"fibonacci-number",                gfg:"nth-fibonacci-number",                    title:"Fibonacci Number",                          diff:"Easy",   concept:"dp[i] = dp[i-1] + dp[i-2]" },
            { num:"70",  lc:"climbing-stairs",                 gfg:"count-ways-to-reach-the-nth-stair",       title:"Climbing Stairs",                           diff:"Easy",   concept:"Same recurrence as Fibonacci" },
            { num:"746", lc:"min-cost-climbing-stairs",        gfg:"min-cost-climbing-stairs",                title:"Min Cost Climbing Stairs",                  diff:"Easy",   concept:"dp[i] = cost[i] + min(dp[i-1], dp[i-2])" },
            { num:"198", lc:"house-robber",                    gfg:"house-robber",                            title:"House Robber",                              diff:"Medium", concept:"dp[i] = max(dp[i-1], dp[i-2] + nums[i])" },
            { num:"213", lc:"house-robber-ii",                 gfg:"house-robber-ii",                         title:"House Robber II (Circular)",                diff:"Medium", concept:"Run house robber twice: [0,n-2] and [1,n-1]" },
            { num:"91",  lc:"decode-ways",                     gfg:"count-ways-to-decode",                    title:"Decode Ways",                               diff:"Medium", concept:"1-digit + 2-digit choices — like climbing stairs" },
            { num:"740", lc:"delete-and-earn",                 gfg:"delete-and-earn",                         title:"Delete and Earn",                           diff:"Medium", concept:"Freq array → house robber on values" },
            { num:"983", lc:"minimum-cost-for-tickets",        gfg:"minimum-cost-for-tickets",                title:"Minimum Cost For Tickets",                  diff:"Medium", concept:"Choose 1/7/30-day pass optimally" },
            { num:"2140",lc:"solving-questions-with-brainpower",gfg:"solving-questions-with-brainpower",      title:"Solving Questions with Brainpower",         diff:"Medium", concept:"Solve or skip; skip blocks next k questions" },
          ]
        },
        // ── AV PLAYLIST 4: LCS & VARIANTS ──
        {
          name: "Pattern 30: DP - Longest Common Subsequence & Variants",
          subId: "lcs",
          section: "LCS & Variants",
          desc: "2D dp: dp[i][j] = LCS of s1[0..i] and s2[0..j]. Match → 1+dp[i-1][j-1]; else max(skip either). Variants: Print LCS, LCSubstring, Edit Distance, SCS, LPS, Distinct Subsequences, Wildcard.",
          complexity: "Time: O(m·n) · Space: O(n)",
          problems: [
            { num:"1143",lc:"longest-common-subsequence",      gfg:"longest-common-subsequence",              title:"Longest Common Subsequence",                diff:"Medium", concept:"Classic 2D DP — match or skip" },
            { num:null,  lc:null,                              gfg:"print-longest-common-subsequence",        title:"Print LCS",                                diff:"Medium", concept:"Backtrack from dp table to reconstruct" },
            { num:null,  lc:null,                              gfg:"longest-common-substring",                title:"Longest Common Substring",                 diff:"Medium", concept:"Reset to 0 on mismatch (contiguous)" },
            { num:"583", lc:"delete-operation-for-two-strings",gfg:"minimum-number-of-deletions-and-insertions", title:"Min Deletions & Insertions to Convert", diff:"Medium", concept:"Del=len1-LCS, Ins=len2-LCS" },
            { num:"72",  lc:"edit-distance",                   gfg:"edit-distance",                           title:"Edit Distance (Levenshtein)",               diff:"Hard",   concept:"Insert/delete/replace; dp[i][j]=1+min(3 ops)" },
            { num:"1092",lc:"shortest-common-supersequence",   gfg:"shortest-common-supersequence",           title:"Shortest Common Supersequence",             diff:"Hard",   concept:"len1+len2-LCS" },
            { num:"516", lc:"longest-palindromic-subsequence", gfg:"longest-palindromic-subsequence",         title:"Longest Palindromic Subsequence",           diff:"Medium", concept:"LCS(s, reverse(s))" },
            { num:"1312",lc:"minimum-insertion-steps-to-make-a-string-palindrome", gfg:"minimum-insertions-to-make-a-string-palindrome", title:"Min Insertions to Make Palindrome", diff:"Hard", concept:"len - LPS" },
            { num:"97",  lc:"interleaving-string",             gfg:"interleaved-strings",                     title:"Interleaving String",                       diff:"Hard",   concept:"dp[i][j] = can form s3 from s1[0..i]+s2[0..j]" },
            { num:"1035",lc:"uncrossed-lines",                 gfg:"longest-common-subsequence",              title:"Uncrossed Lines",                           diff:"Medium", concept:"Exactly LCS on the two arrays" },
            { num:"115", lc:"distinct-subsequences",           gfg:"number-of-distinct-subsequences",         title:"Distinct Subsequences",                     diff:"Hard",   concept:"Count ways s is a subseq of t" },
          ]
        },
        // ── AV PLAYLIST 5: LIS & VARIANTS ──
        {
          name: "Pattern 31: DP - Longest Increasing Subsequence & Variants",
          subId: "lis",
          section: "LIS & Variants",
          desc: "dp[i] = LIS ending at index i. For each i check all j<i where arr[j]<arr[i]. O(n log n) via patience sort on tails array.",
          complexity: "Time: O(n²) dp / O(n log n) patience · Space: O(n)",
          problems: [
            { num:"300", lc:"longest-increasing-subsequence",  gfg:"longest-increasing-subsequence",          title:"Longest Increasing Subsequence",            diff:"Medium", concept:"dp[i]=max(dp[j]+1) for j<i, arr[j]<arr[i]" },
            { num:null,  lc:null,                              gfg:"print-longest-increasing-subsequence",    title:"Print LIS",                                diff:"Medium", concept:"Backtrack from dp array" },
            { num:"674", lc:"longest-continuous-increasing-subsequence", gfg:"longest-increasing-consecutive-subsequence", title:"Longest Continuous Increasing Subsequence", diff:"Easy", concept:"Contiguous — reset when decreasing" },
            { num:null,  lc:null,                              gfg:"longest-bitonic-subsequence",             title:"Longest Bitonic Subsequence",               diff:"Medium", concept:"LIS from left + LIS from right at each index" },
            { num:"646", lc:"maximum-length-of-pair-chain",    gfg:"maximum-length-chain-of-pairs",           title:"Maximum Length Chain of Pairs",             diff:"Medium", concept:"Sort by end, LIS variant on pairs" },
            { num:"354", lc:"russian-doll-envelopes",          gfg:"russian-dolls-envelopes",                 title:"Russian Doll Envelopes",                    diff:"Hard",   concept:"Sort w asc + h desc, then LIS on h" },
            { num:"673", lc:"number-of-longest-increasing-subsequence", gfg:"number-of-longest-increasing-subsequence", title:"Number of LIS",               diff:"Medium", concept:"Track count[] alongside dp[]" },
            { num:"368", lc:"largest-divisible-subset",        gfg:"largest-divisible-subset",                title:"Largest Divisible Subset",                  diff:"Medium", concept:"Sort then LIS where arr[i]%arr[j]==0" },
          ]
        },
        // ── AV PLAYLIST 6: KADANE'S ──
        {
          name: "Pattern 32: DP - Kadane's Algorithm (Max Subarray)",
          subId: "kadane",
          section: "Kadane's Algorithm",
          desc: "Greedy DP: dp[i] = max(arr[i], dp[i-1]+arr[i]). Variants: max product, circular, 2D max sum rectangle.",
          complexity: "Time: O(n) · Space: O(1)",
          problems: [
            { num:"53",  lc:"maximum-subarray",                gfg:"kadanes-algorithm",                       title:"Maximum Subarray (Kadane's)",               diff:"Medium", concept:"Reset when running sum drops below 0" },
            { num:"152", lc:"maximum-product-subarray",        gfg:"maximum-product-subarray",                title:"Maximum Product Subarray",                  diff:"Medium", concept:"Track max and min (negatives flip sign)" },
            { num:"918", lc:"maximum-sum-circular-subarray",   gfg:"max-circular-subarray",                   title:"Maximum Sum Circular Subarray",             diff:"Medium", concept:"max(kadane normal, total − kadane min)" },
            { num:null,  lc:null,                              gfg:"max-sum-rectangle",                       title:"Max Sum Rectangle in 2D Matrix",            diff:"Hard",   concept:"Fix top/bottom rows, run Kadane on col sums" },
          ]
        },
        // ── AV PLAYLIST 7: MCM / INTERVAL DP ──
        {
          name: "Pattern 33: DP - Matrix Chain Multiplication (Interval DP)",
          subId: "mcm",
          section: "Matrix Chain / Interval DP",
          desc: "Partition problems: try every split k in [i,j]. Template: for len=2..n, for i, j=i+len-1, try all k. dp[i][j] = optimal cost for subproblem [i..j].",
          complexity: "Time: O(n³) · Space: O(n²)",
          problems: [
            { num:null,  lc:null,                              gfg:"matrix-chain-multiplication",             title:"Matrix Chain Multiplication",               diff:"Hard",   concept:"Try all split points; cost = left+right+dims" },
            { num:"1039",lc:"minimum-score-triangulation-of-polygon", gfg:"minimum-score-triangulation-of-polygon", title:"Min Score Triangulation of Polygon", diff:"Medium", concept:"MCM on polygon vertices" },
            { num:"312", lc:"burst-balloons",                  gfg:"burst-balloons",                          title:"Burst Balloons",                            diff:"Hard",   concept:"Last balloon burst in range [i,j]" },
            { num:"1547",lc:"minimum-cost-to-cut-a-stick",     gfg:"minimum-cost-to-cut-a-stick",             title:"Minimum Cost to Cut a Stick",               diff:"Hard",   concept:"Interval DP on cut positions" },
            { num:"375", lc:"guess-number-higher-or-lower-ii", gfg:"optimal-strategy-for-a-game",             title:"Guess Number Higher or Lower II",           diff:"Medium", concept:"Minimax interval DP" },
            { num:null,  lc:null,                              gfg:"boolean-parenthesization",                title:"Boolean Parenthesization",                  diff:"Hard",   concept:"Count ways to parenthesise to get True/False" },
            { num:"241", lc:"different-ways-to-add-parentheses",gfg:"different-ways-to-add-parentheses",      title:"Different Ways to Add Parentheses",         diff:"Medium", concept:"Split at each operator, recurse both sides" },
            { num:"410", lc:"split-array-largest-sum",         gfg:"split-array-largest-sum",                 title:"Split Array Largest Sum",                   diff:"Hard",   concept:"Partition into k subsets, minimise max sum" },
            { num:"664", lc:"strange-printer",                 gfg:"strange-printer",                         title:"Strange Printer",                           diff:"Hard",   concept:"Interval DP: range merges with matching chars" },
          ]
        },
        // ── AV PLAYLIST 8: DP ON TREES ──
        {
          name: "Pattern 34: DP on Trees",
          subId: "dp-trees",
          section: "DP on Trees",
          desc: "State at each node depends on children. Postorder processing. Return pair [include, exclude] from each subtree.",
          complexity: "Time: O(n) · Space: O(h)",
          problems: [
            { num:"337", lc:"house-robber-iii",                gfg:"house-robber-iii",                        title:"House Robber III",                          diff:"Medium", concept:"Return [rob, skip] pair from each subtree" },
            { num:"543", lc:"diameter-of-binary-tree",         gfg:"diameter-of-a-binary-tree",               title:"Diameter of Binary Tree",                   diff:"Easy",   concept:"At each node: ans = max(ans, L+R depth)" },
            { num:"124", lc:"binary-tree-maximum-path-sum",    gfg:"binary-tree-maximum-path-sum",            title:"Binary Tree Maximum Path Sum",              diff:"Hard",   concept:"gain=max(0,left,right); path=L+R+val" },
            { num:"968", lc:"binary-tree-cameras",             gfg:"binary-tree-cameras",                     title:"Binary Tree Cameras",                       diff:"Hard",   concept:"DP states: covered, has camera, needs camera" },
            { num:"2246",lc:"longest-path-with-different-adjacent-characters", gfg:"longest-path-in-tree",    title:"Longest Path with Different Adjacent Chars", diff:"Hard",   concept:"DFS returning top-2 child paths; combine" },
          ]
        },
        // ── AV PLAYLIST 9: DP ON GRID ──
        {
          name: "Pattern 35: DP on Grid",
          subId: "dp-grid",
          section: "DP on Grid",
          desc: "2D dp where movement is right/down. dp[i][j] = optimal value at (i,j). Optimise space to O(n) by reusing one row.",
          complexity: "Time: O(m·n) · Space: O(n)",
          problems: [
            { num:"62",  lc:"unique-paths",                    gfg:"count-all-possible-paths",                title:"Unique Paths",                              diff:"Medium", concept:"dp[i][j] = dp[i-1][j] + dp[i][j-1]" },
            { num:"63",  lc:"unique-paths-ii",                 gfg:"unique-paths-in-a-grid",                  title:"Unique Paths II (With Obstacles)",          diff:"Medium", concept:"Zero out obstacle cells" },
            { num:"64",  lc:"minimum-path-sum",                gfg:"minimum-path-sum",                        title:"Minimum Path Sum",                          diff:"Medium", concept:"dp[i][j] = grid[i][j] + min(top, left)" },
            { num:"120", lc:"triangle",                        gfg:"triangle-path-sum",                       title:"Triangle (Min Path Top to Bottom)",         diff:"Medium", concept:"Bottom-up: dp[j] = tri[i][j]+min(dp[j],dp[j+1])" },
            { num:"931", lc:"minimum-falling-path-sum",        gfg:"minimum-falling-path-sum",                title:"Minimum Falling Path Sum",                  diff:"Medium", concept:"Min of 3 cells in row above" },
            { num:"221", lc:"maximal-square",                  gfg:"maximum-size-rectangle-binary-sub-matrix-with-all-1s", title:"Maximal Square of 1s",        diff:"Medium", concept:"dp[i][j]=min(top,left,diagonal)+1" },
            { num:"174", lc:"dungeon-game",                    gfg:"dungeon-game",                            title:"Dungeon Game",                              diff:"Hard",   concept:"Reverse DP: min hp at each cell from bottom-right" },
            { num:"576", lc:"out-of-boundary-paths",           gfg:"out-of-boundary-paths",                   title:"Out of Boundary Paths",                     diff:"Medium", concept:"Count paths leaving grid in max N moves" },
          ]
        },
        // ── AV PLAYLIST 10: DP ON STRINGS ──
        {
          name: "Pattern 36: DP on Strings (Word Break & Pattern Matching)",
          subId: "dp-strings",
          section: "DP on Strings",
          desc: "dp[i] = can we form/count ways for string[0..i]. Try all valid words/partitions ending at i. Memoize on index.",
          complexity: "Time: O(n²·L) · Space: O(n)",
          problems: [
            { num:"139", lc:"word-break",                      gfg:"word-break",                              title:"Word Break",                                diff:"Medium", concept:"dp[i] = any j: dp[j] && s[j..i] in dict" },
            { num:"140", lc:"word-break-ii",                   gfg:"word-break-part-2",                       title:"Word Break II (All Sentences)",             diff:"Hard",   concept:"Backtrack with memoized suffix solutions" },
            { num:"132", lc:"palindrome-partitioning-ii",      gfg:"palindromic-partitioning",                title:"Palindrome Partitioning II (Min Cuts)",     diff:"Hard",   concept:"dp[i] = min cuts for s[0..i]" },
            { num:"10",  lc:"regular-expression-matching",     gfg:"match-specific-pattern",                  title:"Regular Expression Matching",               diff:"Hard",   concept:"Handle * with zero or more prev char" },
            { num:"44",  lc:"wildcard-matching",               gfg:"wildcard-pattern-matching",               title:"Wildcard Pattern Matching",                 diff:"Hard",   concept:"* matches empty or any sequence" },
          ]
        },
        // ── NEW PATTERN 11: DP ON STOCKS ──
        {
          name: "Pattern 37: DP - Stock Buy & Sell (State Machine)",
          subId: "dp-stocks",
          section: "DP on Stocks",
          desc: "State machine DP: at each day you are in one of (hold, sold, rest) states. Transitions define the recurrence. Most variants solved with 2-4 states.",
          complexity: "Time: O(n) · Space: O(1)",
          problems: [
            { num:"121", lc:"best-time-to-buy-and-sell-stock",        gfg:"stock-buy-and-sell",               title:"Best Time to Buy/Sell Stock (1 tx)",        diff:"Easy",   concept:"Track min price; ans = max(ans, price−min)" },
            { num:"122", lc:"best-time-to-buy-and-sell-stock-ii",     gfg:"stock-buy-and-sell-2",             title:"Best Time to Buy/Sell Stock II (∞ tx)",     diff:"Medium", concept:"Greedy: collect every upward difference" },
            { num:"123", lc:"best-time-to-buy-and-sell-stock-iii",    gfg:"buy-and-sell-a-share-at-most-twice", title:"Stock III (2 transactions)",              diff:"Hard",   concept:"4 states: buy1, sell1, buy2, sell2" },
            { num:"188", lc:"best-time-to-buy-and-sell-stock-iv",     gfg:"best-time-to-buy-and-sell-stock-iv", title:"Stock IV (k transactions)",              diff:"Hard",   concept:"dp[k][day]: generalise III to k" },
            { num:"309", lc:"best-time-to-buy-and-sell-stock-with-cooldown", gfg:"buy-stock-with-cooldown",   title:"Stock with Cooldown",                       diff:"Medium", concept:"3 states: hold, sold, rest" },
            { num:"714", lc:"best-time-to-buy-and-sell-stock-with-transaction-fee", gfg:"buy-stock-with-transaction-fee", title:"Stock with Transaction Fee",   diff:"Medium", concept:"2 states: hold, cash; subtract fee on sell" },
          ]
        },
        // ── NEW PATTERN 12: BITMASK DP ──
        {
          name: "Pattern 38: DP - Bitmask DP",
          subId: "dp-bitmask",
          section: "Bitmask DP",
          desc: "State = bitmask of visited items. dp[mask] = optimal cost when items in mask chosen. Fits when n ≤ 20 (2²⁰ ≈ 10⁶ states).",
          complexity: "Time: O(2ⁿ · n) · Space: O(2ⁿ)",
          problems: [
            { num:null,  lc:null,                              gfg:"travelling-salesman-problem",             title:"Travelling Salesman Problem (TSP)",          diff:"Hard",   concept:"dp[mask][i] = min cost to visit cities in mask ending at i" },
            { num:"691", lc:"stickers-to-spell-word",          gfg:"stickers-to-spell-word",                  title:"Stickers to Spell Word",                    diff:"Hard",   concept:"Bitmask on target chars; min stickers to cover" },
            { num:"847", lc:"shortest-path-visiting-all-nodes",gfg:"shortest-path-visiting-all-nodes",        title:"Shortest Path Visiting All Nodes",           diff:"Hard",   concept:"BFS + bitmask state (node, visited set)" },
            { num:"1125",lc:"smallest-sufficient-team",        gfg:"smallest-sufficient-team",                title:"Smallest Sufficient Team",                  diff:"Hard",   concept:"Bitmask on skills; min people covering all" },
            { num:"2305",lc:"fair-distribution-of-cookies",    gfg:"fair-distribution-of-cookies",            title:"Fair Distribution of Cookies",              diff:"Medium", concept:"Bitmask over cookie bags; assign to k children" },
          ]
        },
        // ── NEW PATTERN 13: DIGIT DP ──
        {
          name: "Pattern 39: DP - Digit DP",
          subId: "dp-digit",
          section: "Digit DP",
          desc: "Count integers in [lo, hi] satisfying a digit-level constraint. State: (position, tight, started). Build f(n) = count in [0,n], answer = f(hi) − f(lo−1).",
          complexity: "Time: O(digits × states) · Space: O(same)",
          problems: [
            { num:"357", lc:"count-numbers-with-unique-digits",  gfg:"count-numbers-with-unique-digits",      title:"Count Numbers with Unique Digits",           diff:"Medium", concept:"Digit DP or combinatorics — no repeated digit" },
            { num:"600", lc:"non-negative-integers-without-consecutive-ones", gfg:"count-of-integers-in-a-range-with-no-two-consecutive-1s", title:"No Consecutive Ones", diff:"Hard", concept:"Binary digit DP; no two adjacent 1-bits" },
            { num:"902", lc:"numbers-at-most-n-given-digit-set", gfg:"count-all-numbers-with-unique-digits",  title:"Numbers At Most N Given Digit Set",          diff:"Hard",   concept:"Digit DP with restricted digit set" },
            { num:"233", lc:"number-of-digit-one",               gfg:"number-of-digit-one",                   title:"Number of Digit One",                       diff:"Hard",   concept:"Count 1s in all numbers from 1 to n" },
          ]
        },
        // ── NEW PATTERN 14: PROBABILITY DP ──
        {
          name: "Pattern 40: DP - Probability & Expected Value",
          subId: "dp-probability",
          section: "Probability DP",
          desc: "dp[state] = probability of reaching state or expected moves. Transition probabilities must sum to 1. Common in random-walk, dice, card problems.",
          complexity: "Time: O(states) · Space: O(states)",
          problems: [
            { num:"688", lc:"knight-probability-in-chessboard", gfg:"knight-probability-in-chessboard",       title:"Knight Probability in Chessboard",           diff:"Medium", concept:"dp[r][c][k] = prob of being at (r,c) after k moves" },
            { num:"808", lc:"soup-servings",                    gfg:"soup-servings",                           title:"Soup Servings",                             diff:"Medium", concept:"Expected value DP; probability A empties first" },
            { num:"837", lc:"new-21-game",                      gfg:"new-21-game",                             title:"New 21 Game",                               diff:"Medium", concept:"dp[i] = prob score exactly i; prefix sum optimisation" },
          ]
        },
        // ── NEW PATTERN 15: GAME THEORY DP ──
        {
          name: "Pattern 41: DP - Game Theory (Minimax)",
          subId: "dp-game-theory",
          section: "Game Theory DP",
          desc: "Two players alternate, both play optimally. dp[state] = true if current player wins, or dp[i][j] = max score current player can guarantee from [i,j].",
          complexity: "Time: O(n²) or O(n) · Space: O(n²) or O(1)",
          problems: [
            { num:"292", lc:"nim-game",                         gfg:"nim-game",                                title:"Nim Game",                                   diff:"Easy",   concept:"Win if n%4 != 0" },
            { num:"877", lc:"stone-game",                       gfg:"stone-game",                              title:"Stone Game",                                diff:"Medium", concept:"dp[i][j] = max score gap current player can guarantee" },
            { num:"486", lc:"predict-the-winner",               gfg:"predict-the-winner",                      title:"Predict the Winner",                        diff:"Medium", concept:"dp[i][j] = max score diff (my − opp) in [i,j]" },
            { num:"375", lc:"guess-number-higher-or-lower-ii",  gfg:"optimal-strategy-for-a-game",             title:"Guess Number Higher or Lower II",            diff:"Medium", concept:"Minimax: dp[i][j] = min guaranteed cost to win in [i,j]" },
            { num:"464", lc:"can-i-win",                        gfg:"can-i-win",                               title:"Can I Win",                                 diff:"Medium", concept:"Bitmask game theory: track used numbers" },
          ]
        },
        // ── NEW PATTERN 16: COUNTING SUBSEQUENCES ──
        {
          name: "Pattern 42: DP - Counting Subsequences & Palindromes",
          subId: "dp-subsequences",
          section: "Counting Subsequences",
          desc: "Count subsequences/substrings satisfying a condition. State = index or index pair. Careful with modular arithmetic for large counts.",
          complexity: "Time: O(n²) · Space: O(n)",
          problems: [
            { num:"5",   lc:"longest-palindromic-substring",    gfg:"longest-palindromic-substring-in-a-string", title:"Longest Palindromic Substring",           diff:"Medium", concept:"Expand from centre O(n²) or Manacher O(n)" },
            { num:"647", lc:"palindromic-substrings",           gfg:"count-palindrome-sub-strings-of-a-string",  title:"Palindromic Substrings (Count)",          diff:"Medium", concept:"Expand from centre or dp[i][j] = is palindrome" },
            { num:"1048",lc:"longest-string-chain",             gfg:"longest-string-chain",                    title:"Longest String Chain",                      diff:"Medium", concept:"Sort by length; LIS variant on word predecessors" },
            { num:"940", lc:"distinct-subsequences-ii",         gfg:"number-of-distinct-subsequences",         title:"Distinct Subsequences II",                  diff:"Hard",   concept:"Count distinct subsequences; subtract duplicates" },
          ]
        },
      ]
    },

        // ══════════════════════════════════════════════════════
    // VI. HEAP (PRIORITY QUEUE) PATTERNS
    // ══════════════════════════════════════════════════════
    {
      category: "VI. Heap (Priority Queue) Patterns",
      pageId: null,
      patterns: [
        { name:"Pattern 38: Heap - Top K Elements (Selection/Frequency)", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"215",  title:"Kth Largest Element in an Array",   slug:"kth-largest-element-in-an-array",  diff:"Medium", concept:"Min-heap of size k" },
          { num:"347",  title:"Top K Frequent Elements",           slug:"top-k-frequent-elements",          diff:"Medium", concept:"Freq map + min-heap" },
          { num:"451",  title:"Sort Characters By Frequency",      slug:"sort-characters-by-frequency",     diff:"Medium", concept:"Max-heap by freq" },
          { num:"506",  title:"Relative Ranks",                    slug:"relative-ranks",                   diff:"Easy",   concept:"Sort + rank map" },
          { num:"703",  title:"Kth Largest Element in a Stream",   slug:"kth-largest-element-in-a-stream",  diff:"Easy",   concept:"Min-heap size k, top = kth" },
          { num:"973",  title:"K Closest Points to Origin",        slug:"k-closest-points-to-origin",       diff:"Medium", concept:"Max-heap or quickselect" },
          { num:"1046", title:"Last Stone Weight",                 slug:"last-stone-weight",                diff:"Easy",   concept:"Max-heap, smash top 2" },
          { num:"2558", title:"Take Gifts From the Richest Pile",  slug:"take-gifts-from-the-richest-pile", diff:"Easy",   concept:"Max-heap k rounds" },
        ]},
        { name:"Pattern 39: Heap - Two Heaps for Median Finding", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"295",  title:"Find Median from Data Stream", slug:"find-median-from-data-stream", diff:"Hard",   concept:"Max-heap left + min-heap right" },
          { num:"1825", title:"Finding MK Average",          slug:"finding-mk-average",           diff:"Hard",   concept:"3 heaps + sliding window" },
        ]},
        { name:"Pattern 40: Heap - K-way Merge", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"23",  title:"Merge k Sorted Lists",                     slug:"merge-k-sorted-lists",                     diff:"Hard",   concept:"Min-heap of list heads" },
          { num:"373", title:"Find K Pairs with Smallest Sums",          slug:"find-k-pairs-with-smallest-sums",          diff:"Medium", concept:"Heap of (sum, i, j)" },
          { num:"378", title:"Kth Smallest Element in a Sorted Matrix",  slug:"kth-smallest-element-in-a-sorted-matrix",  diff:"Medium", concept:"Min-heap row-by-row" },
          { num:"632", title:"Smallest Range Covering Elements from K Lists",slug:"smallest-range-covering-elements-from-k-lists",diff:"Hard",concept:"Advance min pointer each step" },
        ]},
        { name:"Pattern 41: Heap - Scheduling / Minimum Cost (Greedy with Priority Queue)", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"253",  title:"Meeting Rooms II",                      slug:"meeting-rooms-ii",                      diff:"Medium", concept:"Min-heap of end times" },
          { num:"767",  title:"Reorganize String",                     slug:"reorganize-string",                     diff:"Medium", concept:"Interleave by freq" },
          { num:"857",  title:"Minimum Cost to Hire K Workers",        slug:"minimum-cost-to-hire-k-workers",        diff:"Hard",   concept:"Sort by ratio + heap" },
          { num:"1642", title:"Furthest Building You Can Reach",       slug:"furthest-building-you-can-reach",       diff:"Medium", concept:"Greedily use ladders on largest gaps" },
          { num:"1792", title:"Maximum Average Pass Ratio",            slug:"maximum-average-pass-ratio",            diff:"Medium", concept:"Greedy: add to class with max gain" },
          { num:"1834", title:"Single-Threaded CPU",                   slug:"single-threaded-cpu",                   diff:"Medium", concept:"Event simulation with heap" },
          { num:"1942", title:"The Number of the Smallest Unoccupied Chair",slug:"the-number-of-the-smallest-unoccupied-chair",diff:"Medium",concept:"Sort arrivals, reuse freed chairs" },
          { num:"2402", title:"Meeting Rooms III",                     slug:"meeting-rooms-iii",                     diff:"Hard",   concept:"Two heaps: free + in-use rooms" },
        ]},
      ]
    },

    // ══════════════════════════════════════════════════════
    // VII. BACKTRACKING PATTERNS
    // ══════════════════════════════════════════════════════
    {
      category: "VII. Backtracking Patterns",
      pageId: null,
      patterns: [
        { name:"Pattern 42: Backtracking - Subsets (Include/Exclude)", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"17", title:"Letter Combinations of a Phone Number", slug:"letter-combinations-of-a-phone-number", diff:"Medium", concept:"DFS over digit mapping" },
          { num:"77", title:"Combinations",                          slug:"combinations",                          diff:"Medium", concept:"Choose k from n" },
          { num:"78", title:"Subsets",                               slug:"subsets",                               diff:"Medium", concept:"Include or exclude each element" },
          { num:"90", title:"Subsets II",                            slug:"subsets-ii",                            diff:"Medium", concept:"Skip duplicates at same level" },
        ]},
        { name:"Pattern 43: Backtracking - Permutations", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"31", title:"Next Permutation",   slug:"next-permutation",   diff:"Medium", concept:"Find next lexicographic order" },
          { num:"46", title:"Permutations",        slug:"permutations",        diff:"Medium", concept:"Swap-based or visited array" },
          { num:"60", title:"Permutation Sequence",slug:"permutation-sequence",diff:"Hard",   concept:"Math: factorial number system" },
        ]},
        { name:"Pattern 44: Backtracking - Combination Sum", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"39", title:"Combination Sum",   slug:"combination-sum",    diff:"Medium", concept:"Reuse elements allowed" },
          { num:"40", title:"Combination Sum II", slug:"combination-sum-ii", diff:"Medium", concept:"Skip same value at same depth" },
        ]},
        { name:"Pattern 45: Backtracking - Parentheses Generation", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"22",  title:"Generate Parentheses",    slug:"generate-parentheses",    diff:"Medium", concept:"open<n, close<open" },
          { num:"301", title:"Remove Invalid Parentheses",slug:"remove-invalid-parentheses",diff:"Hard",concept:"BFS by removal count" },
        ]},
        { name:"Pattern 46: Backtracking - Word Search / Path Finding in Grid", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"79",   title:"Word Search",                           slug:"word-search",                           diff:"Medium", concept:"DFS + visited mark" },
          { num:"212",  title:"Word Search II",                        slug:"word-search-ii",                        diff:"Hard",   concept:"Trie + DFS" },
          { num:"2018", title:"Check if Word Can Be Placed In Crossword",slug:"check-if-word-can-be-placed-in-crossword",diff:"Medium",concept:"Check 4 directions" },
        ]},
        { name:"Pattern 47: Backtracking - N-Queens / Constraint Satisfaction", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"37", title:"Sudoku Solver", slug:"sudoku-solver", diff:"Hard",   concept:"Try 1-9, backtrack on conflict" },
          { num:"51", title:"N-Queens",      slug:"n-queens",      diff:"Hard",   concept:"Track cols+diagonals" },
        ]},
        { name:"Pattern 48: Backtracking - Palindrome Partitioning", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"131", title:"Palindrome Partitioning", slug:"palindrome-partitioning", diff:"Medium", concept:"Cut at each palindrome prefix" },
        ]},
      ]
    },

    // ══════════════════════════════════════════════════════
    // VIII. GREEDY PATTERNS
    // ══════════════════════════════════════════════════════
    {
      category: "VIII. Greedy Patterns",
      pageId: null,
      patterns: [
        { name:"Pattern 49: Greedy - Interval Merging/Scheduling", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"56",   title:"Merge Intervals",                         slug:"merge-intervals",                         diff:"Medium", concept:"Sort start, extend end" },
          { num:"57",   title:"Insert Interval",                         slug:"insert-interval",                         diff:"Medium", concept:"Find overlap window, merge" },
          { num:"759",  title:"Employee Free Time",                      slug:"employee-free-time",                      diff:"Hard",   concept:"Merge all, find gaps" },
          { num:"986",  title:"Interval List Intersections",             slug:"interval-list-intersections",             diff:"Medium", concept:"Two-pointer on sorted lists" },
          { num:"2406", title:"Divide Intervals Into Minimum Number of Groups", slug:"divide-intervals-into-minimum-number-of-groups", diff:"Medium", concept:"Sweep line / max overlap" },
        ]},
        { name:"Pattern 51: Greedy - Jump Game Reachability/Minimization", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"45", title:"Jump Game II", slug:"jump-game-ii", diff:"Medium", concept:"Greedy BFS levels" },
          { num:"55", title:"Jump Game",    slug:"jump-game",    diff:"Medium", concept:"Track max reach" },
        ]},
        { name:"Pattern 52: Greedy - Buy/Sell Stock", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"121", title:"Best Time to Buy and Sell Stock",   slug:"best-time-to-buy-and-sell-stock",    diff:"Easy",   concept:"Track min price so far" },
          { num:"122", title:"Best Time to Buy and Sell Stock II",slug:"best-time-to-buy-and-sell-stock-ii", diff:"Medium", concept:"Collect every upward diff" },
        ]},
        { name:"Pattern 53: Greedy - Gas Station Circuit", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"134", title:"Gas Station", slug:"gas-station", diff:"Medium", concept:"Reset start when tank < 0" },
        ]},
        { name:"Pattern 54: Greedy - Task Scheduling (Frequency Based)", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"621", title:"Task Scheduler", slug:"task-scheduler", diff:"Medium", concept:"Idle slots from max freq task" },
        ]},
      ]
    },

    // ══════════════════════════════════════════════════════
    // IX. BINARY SEARCH PATTERNS
    // ══════════════════════════════════════════════════════
    {
      category: "IX. Binary Search Patterns",
      pageId: null,
      patterns: [
        { name:"Pattern 55: Binary Search - On Sorted Array/List", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"35",   title:"Search Insert Position",              slug:"search-insert-position",              diff:"Easy",   concept:"Lower bound" },
          { num:"69",   title:"Sqrt(x)",                             slug:"sqrtx",                               diff:"Easy",   concept:"Search on answer" },
          { num:"74",   title:"Search a 2D Matrix",                  slug:"search-a-2d-matrix",                  diff:"Medium", concept:"Map 2D to 1D index" },
          { num:"278",  title:"First Bad Version",                   slug:"first-bad-version",                   diff:"Easy",   concept:"Find leftmost true" },
          { num:"374",  title:"Guess Number Higher or Lower",        slug:"guess-number-higher-or-lower",        diff:"Easy",   concept:"Standard binary search" },
          { num:"540",  title:"Single Element in a Sorted Array",    slug:"single-element-in-a-sorted-array",    diff:"Medium", concept:"Parity of index" },
          { num:"704",  title:"Binary Search",                       slug:"binary-search",                       diff:"Easy",   concept:"Classic template" },
          { num:"1539", title:"Kth Missing Positive Number",         slug:"kth-missing-positive-number",         diff:"Easy",   concept:"BS on missing count" },
        ]},
        { name:"Pattern 56: Binary Search - Find Min/Max in Rotated Sorted Array", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"33",   title:"Search in Rotated Sorted Array",     slug:"search-in-rotated-sorted-array",     diff:"Medium", concept:"Determine which half is sorted" },
          { num:"81",   title:"Search in Rotated Sorted Array II",  slug:"search-in-rotated-sorted-array-ii",  diff:"Medium", concept:"Handle duplicates: shrink both" },
          { num:"153",  title:"Find Minimum in Rotated Sorted Array",slug:"find-minimum-in-rotated-sorted-array",diff:"Medium",concept:"Min is at rotation point" },
          { num:"162",  title:"Find Peak Element",                   slug:"find-peak-element",                  diff:"Medium", concept:"Move toward larger neighbor" },
          { num:"852",  title:"Peak Index in a Mountain Array",      slug:"peak-index-in-a-mountain-array",     diff:"Easy",   concept:"Find apex" },
          { num:"1095", title:"Find in Mountain Array",              slug:"find-in-mountain-array",             diff:"Hard",   concept:"3 binary searches" },
        ]},
        { name:"Pattern 57: Binary Search - On Answer / Condition Function", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"410",  title:"Split Array Largest Sum",                    slug:"split-array-largest-sum",                    diff:"Hard",   concept:"BS on max subarray sum" },
          { num:"774",  title:"Minimize Max Distance to Gas Station",      slug:"minimize-max-distance-to-gas-station",      diff:"Hard",   concept:"BS on max gap" },
          { num:"875",  title:"Koko Eating Bananas",                        slug:"koko-eating-bananas",                        diff:"Medium", concept:"BS on speed" },
          { num:"1011", title:"Capacity To Ship Packages Within D Days",   slug:"capacity-to-ship-packages-within-d-days",   diff:"Medium", concept:"BS on capacity" },
          { num:"1482", title:"Minimum Number of Days to Make m Bouquets", slug:"minimum-number-of-days-to-make-m-bouquets", diff:"Medium", concept:"BS on bloom day" },
          { num:"1760", title:"Minimum Limit of Balls in a Bag",           slug:"minimum-limit-of-balls-in-a-bag",           diff:"Medium", concept:"BS on max bag size" },
          { num:"2064", title:"Minimized Maximum of Products Distributed to Any Store", slug:"minimized-maximum-of-products-distributed-to-any-store", diff:"Medium", concept:"BS on max per store" },
          { num:"2226", title:"Maximum Candies Allocated to K Children",   slug:"maximum-candies-allocated-to-k-children",   diff:"Medium", concept:"BS on candies per child" },
        ]},
        { name:"Pattern 58: Binary Search - Find First/Last Occurrence", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"34",  title:"Find First and Last Position of Element in Sorted Array", slug:"find-first-and-last-position-of-element-in-sorted-array", diff:"Medium", concept:"Two BS calls: lower + upper bound" },
          { num:"658", title:"Find K Closest Elements",                                slug:"find-k-closest-elements",                                diff:"Medium", concept:"BS on window start" },
        ]},
        { name:"Pattern 59: Binary Search - Median of Two Sorted Arrays", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"4", title:"Median of Two Sorted Arrays", slug:"median-of-two-sorted-arrays", diff:"Hard", concept:"Partition both arrays" },
        ]},
      ]
    },

    // ══════════════════════════════════════════════════════
    // X. STACK PATTERNS
    // ══════════════════════════════════════════════════════
    {
      category: "X. Stack Patterns",
      pageId: null,
      patterns: [
        { name:"Pattern 60: Stack - Valid Parentheses Matching", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"20",   title:"Valid Parentheses",                              slug:"valid-parentheses",                              diff:"Easy",   concept:"Push open, pop on close" },
          { num:"32",   title:"Longest Valid Parentheses",                      slug:"longest-valid-parentheses",                      diff:"Hard",   concept:"Stack of indices" },
          { num:"921",  title:"Minimum Add to Make Parentheses Valid",         slug:"minimum-add-to-make-parentheses-valid",         diff:"Medium", concept:"Count unmatched open + close" },
          { num:"1249", title:"Minimum Remove to Make Valid Parentheses",      slug:"minimum-remove-to-make-valid-parentheses",      diff:"Medium", concept:"Mark indices to remove" },
          { num:"1963", title:"Minimum Number of Swaps to Make the String Balanced", slug:"minimum-number-of-swaps-to-make-the-string-balanced", diff:"Medium", concept:"Greedy balance pairs" },
        ]},
        { name:"Pattern 61: Stack - Monotonic Stack", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"402",  title:"Remove K Digits",                        slug:"remove-k-digits",                        diff:"Medium", concept:"Maintain increasing stack" },
          { num:"496",  title:"Next Greater Element I",                 slug:"next-greater-element-i",                 diff:"Easy",   concept:"Decreasing stack + map" },
          { num:"503",  title:"Next Greater Element II",                slug:"next-greater-element-ii",                diff:"Medium", concept:"Circular: double loop" },
          { num:"739",  title:"Daily Temperatures",                     slug:"daily-temperatures",                     diff:"Medium", concept:"Stack of indices, pop on warmer" },
          { num:"901",  title:"Online Stock Span",                      slug:"online-stock-span",                      diff:"Medium", concept:"Stack of (price, span)" },
          { num:"907",  title:"Sum of Subarray Minimums",               slug:"sum-of-subarray-minimums",               diff:"Medium", concept:"Previous/next smaller element" },
          { num:"962",  title:"Maximum Width Ramp",                     slug:"maximum-width-ramp",                     diff:"Medium", concept:"Decreasing prefix stack" },
          { num:"1475", title:"Final Prices With a Special Discount in a Shop", slug:"final-prices-with-a-special-discount-in-a-shop", diff:"Easy", concept:"Next smaller or equal" },
          { num:"1673", title:"Find the Most Competitive Subsequence",  slug:"find-the-most-competitive-subsequence",  diff:"Medium", concept:"Greedy monotonic stack" },
        ]},
        { name:"Pattern 62: Stack - Expression Evaluation (RPN/Infix)", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"150", title:"Evaluate Reverse Polish Notation", slug:"evaluate-reverse-polish-notation", diff:"Medium", concept:"Push numbers, pop on operator" },
          { num:"224", title:"Basic Calculator",                 slug:"basic-calculator",                 diff:"Hard",   concept:"Stack for sign + parentheses" },
          { num:"227", title:"Basic Calculator II",              slug:"basic-calculator-ii",              diff:"Medium", concept:"Handle precedence with stack" },
          { num:"772", title:"Basic Calculator III",             slug:"basic-calculator-iii",             diff:"Hard",   concept:"Recursive or stack both" },
        ]},
        { name:"Pattern 63: Stack - Simulation / Backtracking Helper", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"71",  title:"Simplify Path",   slug:"simplify-path",   diff:"Medium", concept:"Stack of path components" },
          { num:"394", title:"Decode String",   slug:"decode-string",   diff:"Medium", concept:"Stack of (count, partial)" },
          { num:"735", title:"Asteroid Collision",slug:"asteroid-collision",diff:"Medium",concept:"Stack: positive asteroid, check collision" },
        ]},
        { name:"Pattern 64: Stack - Min Stack Design", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"155", title:"Min Stack", slug:"min-stack", diff:"Medium", concept:"Parallel stack or (val, min) pairs" },
        ]},
        { name:"Pattern 65: Stack - Largest Rectangle in Histogram", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"84", title:"Largest Rectangle in Histogram", slug:"largest-rectangle-in-histogram", diff:"Hard",   concept:"Monotonic stack for boundaries" },
          { num:"85", title:"Maximal Rectangle",              slug:"maximal-rectangle",              diff:"Hard",   concept:"Histogram per row + #84" },
        ]},
      ]
    },

    // ══════════════════════════════════════════════════════
    // XI. BIT MANIPULATION PATTERNS
    // ══════════════════════════════════════════════════════
    {
      category: "XI. Bit Manipulation Patterns",
      pageId: null,
      patterns: [
        { name:"Pattern 66: Bitwise XOR - Finding Single/Missing Number", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"136", title:"Single Number",    slug:"single-number",    diff:"Easy", concept:"XOR cancels duplicates" },
          { num:"137", title:"Single Number II", slug:"single-number-ii", diff:"Medium", concept:"Count bits mod 3" },
          { num:"268", title:"Missing Number",   slug:"missing-number",   diff:"Easy", concept:"XOR with indices" },
          { num:"389", title:"Find the Difference",slug:"find-the-difference",diff:"Easy",concept:"XOR both strings" },
        ]},
        { name:"Pattern 67: Bitwise AND - Counting Set Bits (Hamming Weight)", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"191", title:"Number of 1 Bits", slug:"number-of-1-bits", diff:"Easy", concept:"n & (n-1) clears lowest set bit" },
        ]},
        { name:"Pattern 70: Bitwise DP - Counting Bits Optimization", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"338", title:"Counting Bits", slug:"counting-bits", diff:"Easy", concept:"dp[i] = dp[i>>1] + (i&1)" },
        ]},
        { name:"Pattern 69: Bitwise Operations - Power of Two/Four Check", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"231", title:"Power of Two",  slug:"power-of-two",  diff:"Easy", concept:"n & (n-1) == 0" },
          { num:"342", title:"Power of Four", slug:"power-of-four", diff:"Easy", concept:"Power of 2 + bit position check" },
        ]},
      ]
    },

    // ══════════════════════════════════════════════════════
    // XII. LINKED LIST PATTERNS
    // ══════════════════════════════════════════════════════
    {
      category: "XII. Linked List Manipulation Patterns",
      pageId: null,
      patterns: [
        { name:"Pattern 71: Linked List - In-place Reversal", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"25",  title:"Reverse Nodes in k-Group",            slug:"reverse-nodes-in-k-group",            diff:"Hard",   concept:"Reverse k nodes, recurse" },
          { num:"82",  title:"Remove Duplicates from Sorted List II",slug:"remove-duplicates-from-sorted-list-ii",diff:"Medium",concept:"Skip all nodes of duplicate value" },
          { num:"83",  title:"Remove Duplicates from Sorted List",   slug:"remove-duplicates-from-sorted-list",   diff:"Easy",   concept:"Skip next if equal" },
          { num:"92",  title:"Reverse Linked List II",               slug:"reverse-linked-list-ii",               diff:"Medium", concept:"Splice reversed sublist back" },
          { num:"206", title:"Reverse Linked List",                  slug:"reverse-linked-list",                  diff:"Easy",   concept:"prev/curr/next triple" },
          { num:"234", title:"Palindrome Linked List",               slug:"palindrome-linked-list",               diff:"Easy",   concept:"Find mid, reverse second half" },
        ]},
        { name:"Pattern 72: Linked List - Merging Two Sorted Lists", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"21", title:"Merge Two Sorted Lists", slug:"merge-two-sorted-lists", diff:"Easy", concept:"Compare heads, advance smaller" },
        ]},
        { name:"Pattern 73: Linked List - Addition of Numbers", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"2",   title:"Add Two Numbers",       slug:"add-two-numbers",        diff:"Medium", concept:"Carry through digits" },
          { num:"369", title:"Plus One Linked List",  slug:"plus-one-linked-list",   diff:"Medium", concept:"Find rightmost non-9" },
        ]},
        { name:"Pattern 74: Linked List - Intersection Detection", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"160", title:"Intersection of Two Linked Lists", slug:"intersection-of-two-linked-lists", diff:"Easy", concept:"Equalize length then meet" },
        ]},
        { name:"Pattern 75: Linked List - Reordering / Partitioning", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"24",  title:"Swap Nodes in Pairs", slug:"swap-nodes-in-pairs", diff:"Medium", concept:"Swap every adjacent pair" },
          { num:"61",  title:"Rotate List",         slug:"rotate-list",         diff:"Medium", concept:"Find new tail at len-k%len" },
          { num:"86",  title:"Partition List",      slug:"partition-list",      diff:"Medium", concept:"Two dummy-head lists" },
          { num:"143", title:"Reorder List",        slug:"reorder-list",        diff:"Medium", concept:"Find mid, reverse, merge" },
          { num:"328", title:"Odd Even Linked List",slug:"odd-even-linked-list",diff:"Medium", concept:"Two lists: odd indices, even indices" },
        ]},
      ]
    },

    // ══════════════════════════════════════════════════════
    // XIII. ARRAY / MATRIX PATTERNS
    // ══════════════════════════════════════════════════════
    {
      category: "XIII. Array/Matrix Manipulation Patterns",
      pageId: null,
      patterns: [
        { name:"Pattern 76: Array/Matrix - In-place Rotation", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"48",  title:"Rotate Image", slug:"rotate-image", diff:"Medium", concept:"Transpose then reverse rows" },
          { num:"189", title:"Rotate Array", slug:"rotate-array", diff:"Medium", concept:"3 reversal trick" },
        ]},
        { name:"Pattern 77: Array/Matrix - Spiral Traversal", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"54",   title:"Spiral Matrix",    slug:"spiral-matrix",    diff:"Medium", concept:"Shrink bounds after each side" },
          { num:"885",  title:"Spiral Matrix III",slug:"spiral-matrix-iii",diff:"Medium", concept:"Walk spiral, collect in-bounds" },
          { num:"2326", title:"Spiral Matrix IV", slug:"spiral-matrix-iv", diff:"Medium", concept:"Fill matrix in spiral order" },
        ]},
        { name:"Pattern 78: Array/Matrix - Set Matrix Zeroes (In-place Marking)", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"73", title:"Set Matrix Zeroes", slug:"set-matrix-zeroes", diff:"Medium", concept:"Use first row/col as flags" },
        ]},
        { name:"Pattern 79: Array - Product Except Self (Prefix/Suffix Products)", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"238", title:"Product of Array Except Self", slug:"product-of-array-except-self", diff:"Medium", concept:"Prefix pass then suffix pass" },
        ]},
        { name:"Pattern 80: Array - Plus One (Handling Carry)", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"66", title:"Plus One", slug:"plus-one", diff:"Easy", concept:"Scan right-to-left for carry" },
        ]},
        { name:"Pattern 81: Array - Merge Sorted Array (In-place from End)", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"88", title:"Merge Sorted Array", slug:"merge-sorted-array", diff:"Easy", concept:"Fill from back" },
        ]},
        { name:"Pattern 82: Array - Cyclic Sort", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"41",  title:"First Missing Positive",              slug:"first-missing-positive",              diff:"Hard",   concept:"Place each number at index num-1" },
          { num:"268", title:"Missing Number",                      slug:"missing-number",                      diff:"Easy",   concept:"XOR or cyclic sort" },
          { num:"287", title:"Find the Duplicate Number",           slug:"find-the-duplicate-number",           diff:"Medium", concept:"Cyclic sort or Floyd's" },
          { num:"442", title:"Find All Duplicates in an Array",     slug:"find-all-duplicates-in-an-array",     diff:"Medium", concept:"Negate at index num-1" },
          { num:"448", title:"Find All Numbers Disappeared in an Array",slug:"find-all-numbers-disappeared-in-an-array",diff:"Easy",concept:"Index absent = number missing" },
        ]},
        { name:"Pattern 83: Array - Kadane's Variant for Maximum Product", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"152", title:"Maximum Product Subarray", slug:"maximum-product-subarray", diff:"Medium", concept:"Track max and min (negatives flip)" },
        ]},
      ]
    },

    // ══════════════════════════════════════════════════════
    // XIV. STRING MANIPULATION PATTERNS
    // ══════════════════════════════════════════════════════
    {
      category: "XIV. String Manipulation Patterns",
      pageId: null,
      patterns: [
        { name:"Pattern 84: String - Palindrome Check (Two Pointers / Reverse)", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"9",   title:"Palindrome Number",   slug:"palindrome-number",   diff:"Easy", concept:"Reverse half of number" },
          { num:"125", title:"Valid Palindrome",    slug:"valid-palindrome",    diff:"Easy", concept:"Skip non-alphanumeric" },
          { num:"680", title:"Valid Palindrome II", slug:"valid-palindrome-ii", diff:"Easy", concept:"Allow one deletion" },
        ]},
        { name:"Pattern 85: String - Anagram Check (Frequency Count/Sort)", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"49",  title:"Group Anagrams", slug:"group-anagrams", diff:"Medium", concept:"Sort key or freq tuple" },
          { num:"242", title:"Valid Anagram",  slug:"valid-anagram",  diff:"Easy",   concept:"Freq count compare" },
        ]},
        { name:"Pattern 86: String - Roman to Integer Conversion", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"13", title:"Roman to Integer", slug:"roman-to-integer", diff:"Easy", concept:"Subtract if current < next" },
        ]},
        { name:"Pattern 87: String - String to Integer (atoi)", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"8", title:"String to Integer (atoi)", slug:"string-to-integer-atoi", diff:"Medium", concept:"State machine: whitespace, sign, digits" },
        ]},
        { name:"Pattern 88: String - Multiply Strings (Manual Simulation)", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"43", title:"Multiply Strings", slug:"multiply-strings", diff:"Medium", concept:"Grade-school multiplication on arrays" },
        ]},
        { name:"Pattern 89: String Matching - Naive / KMP / Rabin-Karp", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"28",   title:"Find the Index of the First Occurrence in a String", slug:"find-the-index-of-the-first-occurrence-in-a-string", diff:"Easy",   concept:"KMP or built-in" },
          { num:"214",  title:"Shortest Palindrome",                                slug:"shortest-palindrome",                                diff:"Hard",   concept:"KMP failure function" },
          { num:"686",  title:"Repeated String Match",                              slug:"repeated-string-match",                              diff:"Medium", concept:"Repeat until length + KMP" },
          { num:"796",  title:"Rotate String",                                      slug:"rotate-string",                                      diff:"Easy",   concept:"Check if s in s+s" },
          { num:"3008", title:"Find Beautiful Indices in the Given Array II",       slug:"find-beautiful-indices-in-the-given-array-ii",       diff:"Hard",   concept:"KMP + two pointers" },
        ]},
        { name:"Pattern 90: String - Repeated Substring Pattern Detection", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"459", title:"Repeated Substring Pattern", slug:"repeated-substring-pattern", diff:"Easy", concept:"s in (s+s)[1:-1]" },
        ]},
      ]
    },

    // ══════════════════════════════════════════════════════
    // XV. DESIGN PATTERNS
    // ══════════════════════════════════════════════════════
    {
      category: "XV. Design Patterns",
      pageId: null,
      patterns: [
        { name:"Pattern 91: Design (General/Specific)", subId:null, section:null, desc:null, complexity:null, problems:[
          { num:"146",  title:"LRU Cache",                              slug:"lru-cache",                              diff:"Medium", concept:"HashMap + doubly linked list" },
          { num:"155",  title:"Min Stack",                              slug:"min-stack",                              diff:"Medium", concept:"Parallel min stack" },
          { num:"208",  title:"Implement Trie (Prefix Tree)",           slug:"implement-trie-prefix-tree",             diff:"Medium", concept:"26-way tree nodes" },
          { num:"211",  title:"Design Add and Search Words Data Structure",slug:"design-add-and-search-words-data-structure",diff:"Medium",concept:"Trie + DFS for wildcard" },
          { num:"225",  title:"Implement Stack using Queues",           slug:"implement-stack-using-queues",           diff:"Easy",   concept:"Rotate queue on push" },
          { num:"232",  title:"Implement Queue using Stacks",           slug:"implement-queue-using-stacks",           diff:"Easy",   concept:"Lazy transfer between stacks" },
          { num:"251",  title:"Flatten 2D Vector",                      slug:"flatten-2d-vector",                      diff:"Medium", concept:"Iterator with skip-empty" },
          { num:"271",  title:"Encode and Decode Strings",              slug:"encode-and-decode-strings",              diff:"Medium", concept:"Length-prefix encoding" },
          { num:"295",  title:"Find Median from Data Stream",           slug:"find-median-from-data-stream",           diff:"Hard",   concept:"Two heaps" },
          { num:"341",  title:"Flatten Nested List Iterator",           slug:"flatten-nested-list-iterator",           diff:"Medium", concept:"Stack of iterators" },
          { num:"346",  title:"Moving Average from Data Stream",        slug:"moving-average-from-data-stream",        diff:"Easy",   concept:"Circular buffer / deque" },
          { num:"353",  title:"Design Snake Game",                      slug:"design-snake-game",                      diff:"Medium", concept:"Deque for body + set for O(1) check" },
          { num:"359",  title:"Logger Rate Limiter",                    slug:"logger-rate-limiter",                    diff:"Easy",   concept:"HashMap: message → last time" },
          { num:"362",  title:"Design Hit Counter",                     slug:"design-hit-counter",                     diff:"Medium", concept:"Circular buffer of 300 slots" },
          { num:"379",  title:"Design Phone Directory",                 slug:"design-phone-directory",                 diff:"Medium", concept:"Set of available numbers" },
          { num:"380",  title:"Insert Delete GetRandom O(1)",           slug:"insert-delete-getrandom-o1",             diff:"Medium", concept:"HashMap + array" },
          { num:"432",  title:"All O`one Data Structure",               slug:"all-oone-data-structure",                diff:"Hard",   concept:"Doubly linked list of buckets" },
          { num:"460",  title:"LFU Cache",                              slug:"lfu-cache",                              diff:"Hard",   concept:"Min-freq + freq buckets" },
          { num:"604",  title:"Design Compressed String Iterator",      slug:"design-compressed-string-iterator",      diff:"Easy",   concept:"Parse char+count pairs" },
          { num:"622",  title:"Design Circular Queue",                  slug:"design-circular-queue",                  diff:"Medium", concept:"Array with head/tail mod" },
          { num:"641",  title:"Design Circular Deque",                  slug:"design-circular-deque",                  diff:"Medium", concept:"Array with two pointers" },
          { num:"642",  title:"Design Search Autocomplete System",      slug:"design-search-autocomplete-system",      diff:"Hard",   concept:"Trie + freq tracking" },
          { num:"706",  title:"Design HashMap",                         slug:"design-hashmap",                         diff:"Easy",   concept:"Array of buckets / chaining" },
          { num:"715",  title:"Range Module",                           slug:"range-module",                           diff:"Hard",   concept:"Sorted interval list" },
          { num:"900",  title:"RLE Iterator",                           slug:"rle-iterator",                           diff:"Medium", concept:"Advance through encoded segments" },
          { num:"981",  title:"Time Based Key-Value Store",             slug:"time-based-key-value-store",             diff:"Medium", concept:"HashMap → sorted list + BS" },
          { num:"1146", title:"Snapshot Array",                         slug:"snapshot-array",                         diff:"Medium", concept:"Per-index version list + BS" },
          { num:"1348", title:"Tweet Counts Per Frequency",             slug:"tweet-counts-per-frequency",             diff:"Medium", concept:"HashMap + bucket by interval" },
          { num:"1352", title:"Product of the Last K Numbers",          slug:"product-of-the-last-k-numbers",          diff:"Medium", concept:"Prefix product, reset on zero" },
          { num:"1381", title:"Design a Stack With Increment Operation",slug:"design-a-stack-with-increment-operation", diff:"Medium", concept:"Lazy increment array" },
          { num:"1756", title:"Design Most Recently Used Queue",        slug:"design-most-recently-used-queue",        diff:"Medium", concept:"Fenwick tree + array" },
          { num:"2013", title:"Detect Squares",                         slug:"detect-squares",                         diff:"Medium", concept:"Count diagonal opposite corners" },
          { num:"2034", title:"Stock Price Fluctuation",                slug:"stock-price-fluctuation",                diff:"Medium", concept:"Map + two heaps or sorted set" },
          { num:"2296", title:"Design a Text Editor",                   slug:"design-a-text-editor",                   diff:"Hard",   concept:"Two stacks / rope" },
          { num:"2336", title:"Smallest Number in Infinite Set",        slug:"smallest-number-in-infinite-set",        diff:"Medium", concept:"Min-heap + added-back set" },
        ]},
      ]
    },
  ];

  // ─────────────────────────────────────────────────────────────────────────────
  // PUBLIC API
  // ─────────────────────────────────────────────────────────────────────────────

  /**
   * getIndexData()
   * Returns data in the shape index.html's DATA array expects.
   * Each pattern only exposes { name, problems: [{num, title, slug}] }
   */
  function getIndexData() {
    return CATEGORIES.map(cat => ({
      category: cat.category,
      patterns: cat.patterns.map(p => ({
        name: p.name,
        problems: p.problems.map(q => ({ num: q.num, title: q.title, slug: q.slug }))
      }))
    }));
  }

  /**
   * getPatternPage(pageId)
   * Returns array in the shape pattern pages expect:
   * [{ id, section, desc, complexity, problems: [{num, title, diff, slug, concept}] }]
   *
   * Usage in two-pointers.html / sliding-window.html:
   *   const TP_PROBLEMS = window.LC_DATA.getPatternPage('two-pointers');
   *   const SW_PROBLEMS = window.LC_DATA.getPatternPage('sliding-window');
   */
  function getPatternPage(pageId) {
    const cat = CATEGORIES.find(c => c.pageId === pageId);
    if (!cat) return [];
    return cat.patterns
      .filter(p => p.subId)
      .map(p => ({
        id: p.subId,
        section: p.section,
        desc: p.desc,
        complexity: p.complexity,
        problems: p.problems.map(q => ({
          num:     q.num  || null,
          title:   q.title,
          diff:    q.diff,
          lc:      q.lc   || q.slug || null,   // LC slug (new schema)
          gfg:     q.gfg  || null,             // GFG slug
          slug:    q.lc   || q.slug || null,   // backward-compat alias
          concept: q.concept
        }))
      }));
  }

  /**
   * getRawCategories()
   * Returns the full CATEGORIES array for any page that needs complete data.
   */
  function getRawCategories() {
    return CATEGORIES;
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // EXPOSE ON WINDOW
  // ─────────────────────────────────────────────────────────────────────────────
  window.LC_DATA = {
    getIndexData,
    getPatternPage,
    getRawCategories,
    // backward-compat alias so problems.js doesn't need a rewrite
    TP_PROBLEMS: null,   // filled below
    SW_PROBLEMS: null,   // filled below
  };

  // Fill backward-compat arrays
  window.LC_DATA.TP_PROBLEMS = getPatternPage('two-pointers');
  window.LC_DATA.SW_PROBLEMS = getPatternPage('sliding-window');

  // Also expose as window.TP_PROBLEMS and window.SW_PROBLEMS
  // so existing code in two-pointers.html / sliding-window.html works unchanged
  window.TP_PROBLEMS = window.LC_DATA.TP_PROBLEMS;
  window.SW_PROBLEMS = window.LC_DATA.SW_PROBLEMS;

})();

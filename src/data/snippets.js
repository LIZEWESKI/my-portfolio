export const snippets = {
    algorithm: {
      title: "Binary Search Implementation",
      description:
        "An efficient O(log n) search algorithm that works on sorted arrays by repeatedly dividing the search interval in half.",
      javascript: `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid; // Target found, return its index
    }
    
    if (arr[mid] < target) {
      left = mid + 1; // Target is in the right half
    } else {
      right = mid - 1; // Target is in the left half
    }
  }
  
  return -1; // Target not found
}

// Example usage
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17];
const targetValue = 7;
const result = binarySearch(sortedArray, targetValue);
console.log(\`Found at index: \${result}\`); // Output: Found at index: 3`,
      php: `function binarySearch($arr, $target) {
    $left = 0;
    $right = count($arr) - 1;
    
    while ($left <= $right) {
        $mid = floor(($left + $right) / 2);
        
        if ($arr[$mid] === $target) {
            return $mid; // Target found, return its index
        }
        
        if ($arr[$mid] < $target) {
            $left = $mid + 1; // Target is in the right half
        } else {
            $right = $mid - 1; // Target is in the left half
        }
    }
    
    return -1; // Target not found
}

// Example usage
$sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17];
$targetValue = 7;
$result = binarySearch($sortedArray, $targetValue);
echo "Found at index: " . $result; // Output: Found at index: 3`,
    },
    dataStructure: {
      title: "Linked List Implementation",
      description:
        "A linear data structure where elements are stored in nodes, each pointing to the next node in the sequence.",
      javascript: `class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  
  append(value) {
    const newNode = new Node(value);
    
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    
    this.length++;
    return this;
  }
  
  prepend(value) {
    const newNode = new Node(value);
    
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    
    this.length++;
    return this;
  }
  
  delete(value) {
    if (!this.head) return null;
    
    if (this.head.value === value) {
      this.head = this.head.next;
      this.length--;
      return this;
    }
    
    let current = this.head;
    
    while (current.next && current.next.value !== value) {
      current = current.next;
    }
    
    if (current.next) {
      current.next = current.next.next;
      this.length--;
    }
    
    return this;
  }
}

// Example usage
const list = new LinkedList();
list.append(10).append(20).append(30);
console.log(list); // LinkedList with values 10 -> 20 -> 30`,
      php: `class Node {
    public $value;
    public $next;
    
    public function __construct($value) {
        $this->value = $value;
        $this->next = null;
    }
}

class LinkedList {
    public $head;
    public $tail;
    public $length;
    
    public function __construct() {
        $this->head = null;
        $this->tail = null;
        $this->length = 0;
    }
    
    public function append($value) {
        $newNode = new Node($value);
        
        if (!$this->head) {
            $this->head = $newNode;
            $this->tail = $newNode;
        } else {
            $this->tail->next = $newNode;
            $this->tail = $newNode;
        }
        
        $this->length++;
        return $this;
    }
    
    public function prepend($value) {
        $newNode = new Node($value);
        
        if (!$this->head) {
            $this->head = $newNode;
            $this->tail = $newNode;
        } else {
            $newNode->next = $this->head;
            $this->head = $newNode;
        }
        
        $this->length++;
        return $this;
    }
    
    public function delete($value) {
        if (!$this->head) return null;
        
        if ($this->head->value === $value) {
            $this->head = $this->head->next;
            $this->length--;
            return $this;
        }
        
        $current = $this->head;
        
        while ($current->next && $current.next.value !== $value) {
            $current = $current.next;
        }
        
        if ($current.next) {
            $current.next = $current.next.next;
            $this->length--;
        }
        
        return $this;
    }
}

// Example usage
$list = new LinkedList();
$list->append(10)->append(20)->append(30);
print_r($list); // LinkedList with values 10 -> 20 -> 30`,
    },
    utility: {
      title: "Deep Clone Function",
      description:
        "A utility function that creates a deep copy of complex nested objects and arrays, maintaining the original structure.",
      javascript: `function deepClone(obj) {
  // Handle primitive types and null/undefined
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  // Handle Date objects
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }
  
  // Handle Array objects
  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }
  
  // Handle Object literals
  const clonedObj = {};
  
  Object.keys(obj).forEach(key => {
    clonedObj[key] = deepClone(obj[key]);
  });
  
  return clonedObj;
}

// Example usage
const originalObject = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'New York',
    coordinates: [40.7128, -74.0060]
  },
  hobbies: ['reading', 'gaming', { type: 'sports', favorite: 'basketball' }]
};

const clonedObject = deepClone(originalObject);
console.log(clonedObject);
console.log(clonedObject === originalObject); // false (different references)`,
      php: `function deepClone($obj) {
    // Handle primitive types and null
    if ($obj === null || !is_object($obj) && !is_array($obj)) {
        return $obj;
    }
    
    // Handle DateTime objects
    if ($obj instanceof DateTime) {
        return clone $obj;
    }
    
    // Handle Array
    if (is_array($obj)) {
        $clonedArray = [];
        foreach ($obj as $key => $value) {
            $clonedArray[$key] = deepClone($value);
        }
        return $clonedArray;
    }
    
    // Handle Object
    $clonedObj = clone $obj;
    
    foreach (get_object_vars($obj) as $key => $value) {
        $clonedObj->$key = deepClone($value);
    }
    
    return $clonedObj;
}

// Example usage
$originalObject = [
    'name' => 'John',
    'age' => 30,
    'address' => [
        'street' => '123 Main St',
        'city' => 'New York',
        'coordinates' => [40.7128, -74.0060]
    ],
    'hobbies' => ['reading', 'gaming', ['type' => 'sports', 'favorite' => 'basketball']]
];

$clonedObject = deepClone($originalObject);
print_r($clonedObject);
var_dump($clonedObject === $originalObject); // bool(false) (different references)`,
    },
  }
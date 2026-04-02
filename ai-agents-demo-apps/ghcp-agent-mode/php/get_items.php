<?php
// Set headers to allow cross-origin requests and specify JSON content type
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

// Normally this would come from a database, but for this example, we'll create sample data
$items = [
    [
        'id' => 1,
        'description' => 'Laptop',
        'quantity' => 10,
        'cost' => 899.99
    ],
    [
        'id' => 2,
        'description' => 'Smartphone',
        'quantity' => 15,
        'cost' => 499.99
    ],
    [
        'id' => 3,
        'description' => 'Headphones',
        'quantity' => 20,
        'cost' => 79.99
    ],
    [
        'id' => 4,
        'description' => 'Tablet',
        'quantity' => 8,
        'cost' => 349.99
    ],
    [
        'id' => 5,
        'description' => 'Monitor',
        'quantity' => 12,
        'cost' => 249.99
    ],
    [
        'id' => 6,
        'description' => 'LCD TV',
        'quantity' => 20,
        'cost' => 2409.99
    ]
];

// Return the items as JSON
echo json_encode($items);
?>

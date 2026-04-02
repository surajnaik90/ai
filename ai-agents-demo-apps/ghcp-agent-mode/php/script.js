// Global variables
let items = [];
let sortDirection = 1; // 1 for ascending, -1 for descending
let sortColumn = 0;    // Default sort by ID column

// Load items from the PHP backend when the page loads
document.addEventListener('DOMContentLoaded', function() {
    fetchItems();
});

/**
 * Fetch items from the PHP backend
 */
function fetchItems() {
    const loadingElement = document.getElementById('loading');
    const errorElement = document.getElementById('error');
    const tableElement = document.getElementById('itemsTable');
    
    // Show loading indicator
    loadingElement.style.display = 'block';
    errorElement.style.display = 'none';
    tableElement.style.display = 'none';
    
    // Use XMLHttpRequest for maximum compatibility with old browsers
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'get_items.php', true);
    
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            try {
                items = JSON.parse(xhr.responseText);
                displayItems();
                loadingElement.style.display = 'none';
                tableElement.style.display = 'table';
            } catch (e) {
                showError('Error parsing data from server.');
            }
        } else {
            showError('Failed to load items from server.');
        }
    };
    
    xhr.onerror = function() {
        showError('Network error occurred. Please check your connection.');
    };
    
    xhr.send();
}

/**
 * Display error message
 * @param {string} message - The error message to display
 */
function showError(message) {
    const loadingElement = document.getElementById('loading');
    const errorElement = document.getElementById('error');
    const tableElement = document.getElementById('itemsTable');
    
    loadingElement.style.display = 'none';
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    tableElement.style.display = 'none';
}

/**
 * Display items in the table
 */
function displayItems() {
    const tbody = document.getElementById('itemsTableBody');
    tbody.innerHTML = '';
    
    let totalQuantity = 0;
    let totalValue = 0;
    
    // Sort items before display
    items.sort((a, b) => {
        const keys = ['id', 'description', 'quantity', 'cost'];
        const key = keys[sortColumn];
        
        // Handle string comparisons for description
        if (key === 'description') {
            return sortDirection * a[key].localeCompare(b[key]);
        }
        
        // Numeric comparison for other columns
        return sortDirection * (a[key] - b[key]);
    });
    
    // Create table rows
    items.forEach(item => {
        const row = document.createElement('tr');
        const itemValue = item.quantity * item.cost;
        
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.description}</td>
            <td>${item.quantity}</td>
            <td>$${item.cost.toFixed(2)}</td>
            <td>$${itemValue.toFixed(2)}</td>
        `;
        
        tbody.appendChild(row);
        
        // Update totals
        totalQuantity += item.quantity;
        totalValue += itemValue;
    });
    
    // Update totals in footer
    document.getElementById('totalQuantity').textContent = totalQuantity;
    document.getElementById('totalValue').textContent = '$' + totalValue.toFixed(2);
}

/**
 * Sort the table by clicking on headers
 * @param {number} columnIndex - The index of the column to sort by
 */
function sortTable(columnIndex) {
    // If clicking the same column, reverse the sort direction
    if (sortColumn === columnIndex) {
        sortDirection *= -1;
    } else {
        sortColumn = columnIndex;
        sortDirection = 1;
    }
    
    // Re-display the sorted items
    displayItems();
}

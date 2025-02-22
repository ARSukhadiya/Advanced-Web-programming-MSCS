var menuTitle = document.getElementById('menuTitle')
var menuItems = document.getElementById('menuItems')
var prices = document.querySelectorAll('span.price')

onAddRule = () => {
    // Insert Rule button - Calls insertRule() to add a new paragraph rule that turns the menu items' font color blue
    menuItems.style.color = 'blue'
    prices.forEach(element => {
        element.style.fontWeight = 'bold'
    });
}

onChangeRule = () => {
    // Change Rule button - Calls changeRule() to change the paragraph rule's color to red.
    menuItems.style.color = 'red'
    prices.forEach(element => {
        element.style.fontStyle = 'italic'
    });
}

onDeleteRule = () => {
    // Delete Rule button - Calls deleteRule() to delete the paragraph rule, which turns the font color back to green.
    menuItems.style.color = 'green'
    prices.forEach(element => {
        element.style.fontStyle = null
        element.style.fontWeight = null
    });
}
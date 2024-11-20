function highlightItem(element) {
    // Remove 'selected' class from all items
    const items = document.querySelectorAll('.timeline-item');
    items.forEach(item => item.classList.remove('selected'));

    // Add 'selected' class to the clicked item
    element.classList.add('selected');
}
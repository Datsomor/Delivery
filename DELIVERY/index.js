// Products data
const products = {
    condoms: [
      { id: 'fiesta', name: 'Fiesta Condoms', image: 'fiesta.jpg', price: 10 },
      { id: 'kiss', name: 'Kiss Condoms', image: 'kiss.jpg', price: 8 },
      // Add more condom products here
    ],
    contraceptives: [
      { id: 'postinor', name: 'Postinor Two', image: 'postinor 2.jpg', price: 15 },
      { id: 'contra72', name: 'Contra 72', image: 'contra 72.jpg', price: 12 },
      // Add more contraceptive products here
    ],
    pregnancyTestKits: [
    { id: 'clearblue', name: 'Clearblue Pregnancy Test Kit', image: 'clearblue.jpg', price: 18 },
    { id: 'firstResponse', name: 'First Response Pregnancy Test Kit', image: 'first-response.jpg', price: 15 },
    // Add more pregnancy test kits here
  ],
  };
  
  // Create an empty array to store the items in the cart
  const cart = [];
  
  // Function to add an item to the cart
  function addToCart(productId) {
    const selectedProduct = getProductById(productId);
    cart.push(selectedProduct);
  }
  
  // Function to remove an item from the cart
  function removeFromCart(productId) {
    const selectedProduct = getProductById(productId);
    const index = cart.indexOf(selectedProduct);
  
    if (index !== -1) {
      cart.splice(index, 1);
    }
  }
  
 // Function to confirm the order
// Function to confirm the order
function confirmOrder(event) {
    event.preventDefault();
  
    const phoneNumber = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
  
    // Get the selected items from the cart
    const selectedItems = cart.map(item => item.name).join(', ');
  
    // Perform order confirmation logic
  
    const confirmationMessage = document.getElementById('confirmation-message');
    confirmationMessage.textContent =
      'Thank you for your order! Your product will be delivered shortly. If any further information is required, we will contact you.';
  
    const checkoutSection = document.getElementById('checkout');
    checkoutSection.style.display = 'none';
  
    const orderConfirmationSection = document.getElementById('order-confirmation');
    orderConfirmationSection.style.display = 'block';
  
    const emailSubject = 'New Order';
    const emailBody = `Phone Number: ${phoneNumber}\nAddress: ${address}\nItems: ${selectedItems}`;
    const emailRecipient = 'datswilson1@gmail.com';
  
    const mailtoUrl = `mailto:${emailRecipient}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  
    window.open(mailtoUrl);
  }
  
  
  
  // Function to edit the order
  function editOrder() {
    const orderConfirmationSection = document.getElementById('order-confirmation');
    orderConfirmationSection.style.display = 'none';
  
    const checkoutSection = document.getElementById('checkout');
    checkoutSection.style.display = 'block';
  }
  
  // Function to get product by ID
  function getProductById(productId) {
    for (const category in products) {
      for (const product of products[category]) {
        if (product.id === productId) {
          return product;
        }
      }
    }
    return null;
  }
  
  // Function to show products by category
  function showCategory(category) {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = '';
  
    const productsList = products[category];
    for (const product of productsList) {
      const productElement = createProductElement(product);
      productsContainer.appendChild(productElement);
    }
  }
  
  // Function to create product element
 // Function to create product element
// Function to create product element (updated version)
function createProductElement(product) {
  const productWrapper = document.createElement('div');
  productWrapper.classList.add('product-wrapper');

  const productElement = document.createElement('div');
  productElement.classList.add('card'); // Use the class "card" for the product

  const imageElement = document.createElement('div');
  imageElement.classList.add('image');

  const textElement = document.createElement('span');
  textElement.classList.add('text');
  textElement.textContent = product.name;
  imageElement.appendChild(textElement);

  productElement.appendChild(imageElement);

  const titleElement = document.createElement('span');
  titleElement.classList.add('title');
  titleElement.textContent = product.name;
  productElement.appendChild(titleElement);

  const priceElement = document.createElement('span');
  priceElement.classList.add('price');
  priceElement.textContent = `$${product.price}`;
  productElement.appendChild(priceElement);

  // Add event listener to "Add to Cart" button
  const addButton = document.createElement('button');
  addButton.textContent = 'Add to Cart';
  addButton.addEventListener('click', function () {
    addToCart(product.id);
    updateCartUI();
  });
  productElement.appendChild(addButton);

  return productElement;
}

    
    // Function to initialize the product selection
   // Function to initialize the product selection
function initializeProductSelection() {
    const categoryButtons = document.querySelectorAll('#categories button');
    categoryButtons.forEach((button) => {
      button.addEventListener('click', function() {
        showCategory(button.dataset.category);
      });
    });
  
    updateCartUI();
  }
  
    
    // Function to update the cart UI
    // Function to update the cart UI
// Function to update the cart UI
function updateCartUI() {
  const cartItemsElement = document.getElementById('cart-items');
  cartItemsElement.innerHTML = '';

  for (const product of cart) {
    const cartItemElement = document.createElement('li');
    cartItemElement.textContent = `${product.name} - Price: $${product.price}`;
    cartItemsElement.appendChild(cartItemElement);
  }
}
  
  
    
    // Function to handle the checkout process
    function checkout() {
    const cartSection = document.getElementById('cart');
    cartSection.style.display = 'none';
    
    const checkoutSection = document.getElementById('checkout');
    checkoutSection.style.display = 'block';
    
    updateCartUI();
    }
    
    // Event listeners
    document.getElementById('categories').addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
    showCategory(event.target.dataset.category);
    }
    });
    

      
      
    
    document.getElementById('checkout-button').addEventListener('click', checkout);
    document.getElementById('checkout-form').addEventListener('submit', confirmOrder);
    document.getElementById('edit-order-button').addEventListener('click', editOrder);
    
    // Call the initialization function
    initializeProductSelection();
    // ...

// Function to continue ordering
// Function to continue ordering
// Function to continue ordering
// Function to continue ordering
// Function to continue ordering
//function continueOrdering() {
 //   window.location.href = 'http://127.0.0.1:5500/index.html';
  //}
  function refreshPage() {
    window.location.href = 'http://127.0.0.1:5500/index.html';
    location.reload();
  }
  
  
  
  // ...
  
  // Function to initialize the product selection
 // function initializeProductSelection() {
 //   showCategory('condoms');
  //  const cartSection = document.getElementById('cart');
  //  cartSection.style.display = 'none';
 // }
 // 
  // ...
  
  // Event listeners
  
  // ...
  
 // document.getElementById('continue-ordering-button').addEventListener('click', function() {
//    location.reload(); // Reload the page
 // });
  



  
  // ...
  
  // Call the initialization function
 // initializeProductSelection();
  
  
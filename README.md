# Ice Cream Shop App 🍦

This is a simple two-page React application built with Vite, designed to manage ice cream orders. It features a user-friendly interface for customers to submit orders and a backend view for staff to manage and serve those orders.

## Features
- **Two Pages**:
  1. **Order Page**: Allows customers to enter their ice cream order details.
  2. **Order Queue**: Displays all current orders for the backend staff, with the ability to mark orders as served.
- **Interactive UI**: Includes a hamburger menu for easy navigation and a sticky footer for a polished layout.
- **React State Management**: Uses `useState` for form handling and dynamic updates.
- **React Router**: Implements routing for seamless navigation between pages.

## Technologies Used
- React (with Vite)
- React Router
- CSS for styling

## Components
1. **Navbar**: Contains a hamburger menu for toggling navigation links.
2. **Order Form**: A form for customers to input their order details.
3. **Order Queue**: Displays a list of orders with a "Serve Order" button to remove them from the queue.
4. **Sticky Footer**: A footer that stays fixed at the bottom of the screen.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ice-cream-shop.git
2. Navigate to the project directory:
   ```bash
   cd ice-cream-shop
3. Install dependencies: 
   ```bash
   npm install
4. Start the development server:
   ```bash
   npm run dev

## Usage
1. Open the application in your browser (default: `http://localhost:5173`).
2. Use the navigation bar to switch between pages:
    - Order Page: Fill out the form and submit an order.
    - Order Queue: View the submitted orders and click "Serve Order" to remove served orders.
3. The state updates dynamically as orders are added or removed.


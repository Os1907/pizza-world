import { Ipizza } from "@/interface/Ipizza";

export interface IItems {
  pizza: Ipizza[];
}
export const Items = {
  pizza: [
    {
      id: "Ma1",
      name: "Margherita",
      price: 119.99,
      time: "25 min",
      img: "/Images/Pizza/Margherita/main.png",
      description:
        "Tomato sauce, fresh mozzarella, basil, and extra-virgin olive oil.",
      photos: [
        "/Images/Pizza/Margherita/shot1 (1).jpg",
        "/Images/Pizza/Margherita/shot1 (2).jpg",
        "/Images/Pizza/Margherita/shot1 (3).jpg",
        "/Images/Pizza/Margherita/shot1 (4).jpg",
      ],
    },
    {
      id: "MeL2",
      name: "Meat Lovers",
      price: 139.99,
      time: "35 min",
      img: "/Images/Pizza/Meat Lovers/main.png",
      description: "Fresh mozzarella, sausage, bacon, and ground beef.",
      photos: [
        "/Images/Pizza/Margherita/shot1 (1).jpg",
        "/Images/Pizza/Margherita/shot1 (2).jpg",
        "/Images/Pizza/Margherita/shot1 (3).jpg",
        "/Images/Pizza/Margherita/shot1 (4).jpg",
      ],
    },
    {
      id: "pep3",
      name: "Pepperoni",
      price: 124.99,
      time: "32 min",
      img: "/Images/Pizza/Pepperoni/main.png",
      description:
        " Tomato sauce, pepperoni, fresh mozzarella,and extra-virgin olive oil.",
      photos: [
        "/Images/Pizza/Margherita/shot1 (1).jpg",
        "/Images/Pizza/Margherita/shot1 (2).jpg",
        "/Images/Pizza/Margherita/shot1 (3).jpg",
        "/Images/Pizza/Margherita/shot1 (4).jpg",
      ],
    },
    {
      id: "Qua4",
      name: "Quattro Formaggi",
      price: 114.99,
      time: "30 min",
      img: "/Images/Pizza/Quattro/main.png",
      description:
        " Four types of cheese: typically mozzarella, gorgonzola, parmesan, and fontina.",
      photos: [
        "/Images/Pizza/Margherita/shot1 (1).jpg",
        "/Images/Pizza/Margherita/shot1 (2).jpg",
        "/Images/Pizza/Margherita/shot1 (3).jpg",
        "/Images/Pizza/Margherita/shot1 (4).jpg",
      ],
    },
    {
      id: "fri5",
      name: "Fried Chicken",
      price: 124.99,
      time: "40 min",
      img: "/Images/Pizza/fried/main.png",
      description: "Fried chicken, fresh mozzarella, tomato sauce, and onion.",
      photos: [
        "/Images/Pizza/Margherita/shot1 (1).jpg",
        "/Images/Pizza/Margherita/shot1 (2).jpg",
        "/Images/Pizza/Margherita/shot1 (3).jpg",
      ],
    },
    {
      id: "hawa6",
      name: "Hawaiian",
      price: 159.99,
      time: "23 min",
      img: "/Images/Pizza/Hawaiian/main.png",
      description:
        "Combine pineapple with tomato sauce and mozzarella cheese for a sweet and savory flavor.",
      photos: [
        "/Images/Pizza/Margherita/shot1 (1).jpg",
        "/Images/Pizza/Margherita/shot1 (2).jpg",
        "/Images/Pizza/Margherita/shot1 (3).jpg",
      ],
    },
    {
      id: "veg7",
      name: "Vegetarian",
      price: 109.99,
      time: "32 min",
      img: "/Images/Pizza/Vegetarian/main.png",
      description:
        "variety of fresh vegetables like bell peppers, mushrooms, onions, and olives, along with tomato sauce and mozzarella cheese.",
      photos: [
        "/Images/Pizza/Margherita/shot1 (1).jpg",
        "/Images/Pizza/Margherita/shot1 (2).jpg",
        "/Images/Pizza/Margherita/shot1 (3).jpg",
      ],
    },
    {
      id: "salm8",
      name: "Salmon",
      price: 179.99,
      time: "20 min",
      img: "/Images/Pizza/Salmon/main.png",
      description:
        " Smoked salmon, cream cheese, dill, capers, red onions, and a lemon-dill sauce on a crispy pizza crust.",
      photos: [
        
      ],
    },
    {
      id: "shri9",
      name: "Shrimp",
      price: 169.99,
      time: "30 min",
      img: "/Images/Pizza/Shrimp/main.png",
      description:
        " Sautéed shrimp, garlic, mozzarella cheese, fresh basil, tomatoes, and a light garlic sauce on a crispy pizza crust.",
      photos: [
        
      ],
    },
  ],
  dessert: [
    {
      id: "ches1",
      name: "Cheese cake",
      price: 79.99,
      time: "20 min",
      img: "/Images/Dessert/Cheese cake/main.png",
      description:
        "A creamy, smooth dessert with a rich, tangy cream cheese filling on a buttery graham cracker crust, topped with fruit or a sweet sauce.",
      photos: [ ],
    },
    {
      id: "Churros2",
      name: "Churros",
      price: 54.99,
      time: "10 min",
      img: "/Images/Dessert/Churros/main.png",
      description:
        "A creamy, smooth dessert with a rich, tangy cream cheese fillingCrispy, golden-brown dough pastries coated in cinnamon sugar,  served with a side of chocolate or caramel dipping sauce.",
      photos: [ ],
    },
    {
      id: "Dount3",
      name: " Chocolate Dounts",
      price: 39.99,
      time: "10 min",
      img: "/Images/Dessert/Dounts/main.png",
      description:
        "Soft, fluffy donuts coated in a rich chocolate glaze,  topped with sprinkles or drizzled with extra chocolate for added indulgence.",
      photos: [ ],
    },
    {
      id: "Mango4",
      name: " Mango Pie",
      price: 74.99,
      time: "15 min",
      img: "/Images/Dessert/Mango/main.png",
      description:
        "A sweet and tangy pie filled with ripe mango chunks and a creamy filling, encased in a buttery, flaky crust.",
      photos: [ ],
    },
    {
      id: "molten5",
      name: " Molten Cake ",
      price: 84.99,
      time: "18 min",
      img: "/Images/Dessert/molten cake/main.png",
      description:
       " A decadent dessert featuring a rich chocolate cake with a gooey, molten center that flows when cut, offering a luxurious, melt-in-your-mouth experience.",
      photos: [ ],
    },
    {
      id: "Nutella6",
      name: " Nutella Pie ",
      price: 84.99,
      time: "15 min",
      img: "/Images/Dessert/Nutella/main.png",
      description:
       " A featuring a buttery, flaky crust and a rich, sweet filling packed with a variety of nuts such as pecans, walnuts, or almonds.",
      photos: [ ],
    },
    {
      id: "strawberry7",
      name: " Strawberry pancake  ",
      price: 64.99,
      time: "15 min",
      img: "/Images/Dessert/strawberry pancake/main.png",
      description:
       " Fluffy pancakes bursting with sweet, juicy strawberries and a hint of vanilla, perfect for a delightful breakfast or brunch.",
      photos: [ ],
    },
  ]
}; 
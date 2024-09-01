
const names = [
    "Ahmed Ali", "Mohamed Ibrahim", "Karim Hassan", "Aya Khaled", "Sara Mohamed",
    "Omar Mostafa", "Heba Ahmed", "Youssef Tarek", "Marwa Sameh", "Mona Ibrahim",
    "Mahmoud Reda", "Noha Adel", "Salma Ali", "Hussein Mahmoud", "Fatma Hassan",
    "Ayman Fathy", "Nour Mohamed", "Mostafa Youssef", "Laila Amr", "Hager Mohamed",
    "Amira Ahmed", "Hassan Omar", "Rania Salah", "Hatem Mohamed", "Reem Adel",
    "Zainab Ali", "Waleed Saeed", "Maha Tamer", "Samir Mohamed", "Doaa Khaled",
    "Tamer Ali", "Manal Reda", "Yara Mohamed", "Sherif Hassan", "Ramy Mahmoud",
    "Ingy Hassan", "Fady Mohamed", "Marina Nabil", "Yasmin Mohamed", "Mariam Ayman",
    "Bassam Khaled", "Ghada Ali", "Hazem Fathy", "Nadine Samir", "Karim Mohamed",
    "Hossam Ahmed", "Basma Tarek", "Rami Mohamed", "Dina Hassan", "Sally Youssef"
  ];
  
  
  
 export  const data = names.map(items => {
      return {
          orderId: `#${Math.floor(100000 + Math.random() * 900000)}` ,
          name:items,
               price: Math.floor((Math.random() * 1000 + 50)),
          status:"Delivered"
  
      }
  } )
background(0);
fill(255);

// Array

String[]protein= {"Chicken", "Fish", "Shrimp", "Tofu", "Beans", "Turkey", "Tuna", "Eggs", "Tempeh", "Quinoa", "Seitan", "TVP",}; 
String[]vege= {"Romaine", "Spring Mix", "Zuchinni", "Cabbage", "Broccoli", "Kale", "Spinach", "Swiss Chard", "Collards",} ;
String[]flavor= {"Citrus", "Italian", "Asian", "Southwest", "Indian", "Middle East", "North Africa", "West Africa", "Greek",} ;

int n = int(random(12)); // random number between 0 and 5
int m = int(random(9));
int o = int(random(9));

text(protein[n], 10, 50);
text(vege[m], 10, 30);
text(flavor[o], 10, 70)

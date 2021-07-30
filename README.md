# E-commerce Back End Starter Code

Videos: ***There are two videos because I forgot to include some of the content in the first video, they are posted in the correct order to be watched***
https://drive.google.com/file/d/1iuc_TJzu3axcHS5ihua8GFsgQDTU72CK/view
https://drive.google.com/file/d/15zOwtFrKaVtyck9b0Cdt14r3FNL26Vcs/view

This assignment required us to refactor code for an e-commerce website's backend to allow for data to be stored in tables in a mySQL database. This required the 
sequelize package to interact with mySQL, and the express package to create API routes to perform CRUD operations on the tables.
It also involved using some of the key's from one tables, such as the ID from 'Categories' as foreign keys in other tables.

Unfortunately, I was only able to establish the associations between the "Categories" and "Products" tables, in which each item in each of these tables displayed
the correct corresponding information that would be seen on the other table based on the category ID being the same for both records. I was unable to establish the 
many-to-many relationship between the products and their tags, as I kept receiving an error that I think was related to the seeding of the tables - I believe the 
ProductTag class was attempting to take in foreign key information from the products table before the table had been populated. 

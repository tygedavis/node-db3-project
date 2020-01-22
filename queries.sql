-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT ProductName, CategoryName 
FROM Product as p
JOIN Category as c
  ON p.CategoryId = c.Id;
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. (FUN FACT: August 9 is my birthday 🙂) Shows 429 records.
SELECT o.Id, o.OrderDate, s.CompanyName as ShippedBy
FROM `Order` as o
JOIN Shipper as s
  ON s.Id = o.ShipVia
WHERE o.OrderDate < '2012-08-09';
-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT *
FROM OrderDetail as o
JOIN Product as p
  ON o.ProductId = p.Id
WHERE o.OrderId = 10251
ORDER BY p.ProductName;
-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT o.OrderId, c.CompanyName, e.lastname
FROM `Order` as oo
JOIN OrderDetail as o
  ON oo.Id = o.OrderId
JOIN Customer as c
  ON oo.CustomerId = c.Id
JOIN Employee as e
  ON oo.EmployeeId = e.Id;
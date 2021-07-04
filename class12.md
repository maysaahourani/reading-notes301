 
SQL                                                   	NoSQL
|       Relational Databases (RDBMS)             	|   non-relational or distributed database.  |
|---     table based databases                      |document based, key-value pairs, graph databases or wide-column stores  |
|   SQL databases have predefined schema          	|NoSQL databases have dynamic schema for unstructured data.  	                 	  	|
|  vertically scalable                            	|horizontally scalable              |
 	 s SQL ( structured query language ) for defining and manipulating the data,  | queries are focused on collection of documents
 	 
 	 
 	 
What kind of data is a good fit for an SQL database?Give a real world example.
 SQL databases are not best fit for hierarchical data storage. But, NoSQL database fits better for the hierarchical data storage as it follows the key-value pair way of storing data similar to JSON data. 

What kind of data is a good fit a NoSQL database?NoSQL database are highly preferred for large data set (i.e for big data). Hbase is an example for this purpose.
Give a real world example.Hbase
Which type of database is best for hierarchical data storage?SQL
Which type of database is best for scalability?noSQL



What does SQL stand for? Structured Query Language

What is a realational database?
A relational database is a collection of data items with pre-defined relationships between them. These items are organized as a set of tables with columns and rows. ... Each row in a table could be marked with a unique identifier called a primary key, and rows among multiple tables can be made related using foreign keys.

What type of structure does a relational database work with?
What is a ‘schema’?
What is a NoSQL database?
Howo does it work?
What is inside of a Mongo database?
Which is more flexible - SQL or MongoDB? and why.

QL Databases Record
While MongoDB is more flexible and ensures high and diverse data availability, a SQL Database operates with the ACID (Atomicity, Consistency, Isolation, and Durability) properties and ensures greater reliability of transactions


Advantages and Disadvantages of NoSQL databases – what you should know
Less mature. RDBMSs have been around a lot longer than NoSQL databases. ...
Less support. ...
Business intelligence and analytics. ...
Administration. ...
No advanced expertise. ...





Model()
Parameters
doc «Object» values for initial set
optional «[fields]» object containing the fields that were selected in the query which returned this document. You do not need to set this parameter to ensure Mongoose handles your query projection.
[skipId=false] «Boolean» optional boolean. If true, mongoose doesn't add an _id field to the document.
A Model is a class that's your primary tool for interacting with MongoDB. An instance of a Model is called a Document.

In Mongoose, the term "Model" refers to subclasses of the mongoose.Model class. You should not use the mongoose.Model class directly. The mongoose.model() and connection.model() functions create subclasses of mongoose.Model as shown below.
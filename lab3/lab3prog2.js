db.createCollection("Customers")
db.Customers.insert({_id:1,"name":"abcd","Cust_Id":"100","Acc_Bal":"22000","Acc_Type":"X"});
db.Customers.insert({_id:2,"name":"efgh","Cust_Id":"121","Acc_Bal":"212002","Acc_Type":"Z"});
db.Customers.insert({_id:3,"name":"ijk","Cust_Id":"130","Acc_Bal":"400000","Acc_Type":"Z"});
db.Customers.insert({_id:4,"name":"lmno","Cust_Id":"100","Acc_Bal":"23000","Acc_Type":"Y"});
db.Customers.insert({_id:5,"name":"pqr","Cust_Id":"130","Acc_Bal":"6000","Acc_Type":"X"});
db.Customers.find({});
db.Customers.find({"Acc_Bal":{"$gte":"1200"}},{"Acc_Type":"Z",_id:0});
db.Customers.find({"Acc_Bal":{"$min":"","$max":""}},{"Cust_Id":"100",_id:0});
db.Customers.find({"Acc_Bal":{"$min":"","$max":""}},{"Cust_Id":"121",_id:0});
db.Customers.find({"Acc_Bal":{"$min":"","$max":""}},{"Cust_Id":"130",_id:0});
insert overwrite local directory ({'C:\Users\Preksha\Desktop\mongodb'})
db.Customers.find({});
db.Customers.drop();
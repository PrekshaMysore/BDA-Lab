db.createCollection("Employee");
db.createCollection("Department");

db.Employee.insert({_id:1, "EmployeeID":"069", "Name":"Preksha", "Department":"CSE", "Age":21,DeptNo.:1001});
db.Employee.save({_id:2, "EmployeeID":"056", "Name":"Rakshitha", "Department":"CSE", "Age":21,DeptNo:1001});
db.Employee.update({_id:2, "EmployeeID":"052", "Name":"Raghav", "Department":"CSE", "Age":21},{$set:{DeptNo:1001}},{upsert:true});
db.Employee.insert({_id:4, "EmployeeID":"055", "Name":"Ram", "Department":"ISE", "Age":21,DeptNo:1002});
db.Employee.insert({_id:5, "EmployeeID":"111", "Name":"Anand", "Department":"ECE", "Age":21,DeptNo:1003});
db.Employee.find({});
db.Department.insert({_id:1,deptname:"CSE",deptno:1001});
db.Department.save({_id:2,deptname:"ISE",deptno:1002});
db.Department.update({_id:3,deptname:"ECE"},{$set:{deptno:1003}},{upsert:true});
db.Department.insert({_id:4,deptname:"EEE",deptno:1004});
db.Department.insert({_id:5,deptname:"ME",deptno:1005});
db.Employee.update({_id:3},{$set:{"Name":"Abhishek","Age":30}},{upsert:false});
db.Employee.find({Name:/^A/});
db.Employee.find({ "DeptNo": { "$gte": 1001,"$lte":1005}},{Name:1,DeptNo:1,_id:0});
db.Employee.find({ "Age": { "$gt": 30 }});
db.getCollection("employee").find({}).pretty()
db.getCollection("department").find({}).pretty()

db.createCollection("student1")
db.student1.insert({_id:1,"name":"DFE","rollNo":"10","age":"20","contact":"99163 21232","emailId":"abc@gmail.com"});
db.student1.insert({_id:2,"name":"ABC","rollNo":"11","age":"21","contact":"99163 89032","emailId":"defgh@gmail.com"});
db.student1.insert({_id:3,"name":"GHI","rollNo":"12","age":"20","contact":"99243 21232","emailId":"abchi@gmail.com"});
db.student1.insert({_id:4,"name":"JKL","rollNo":"13","age":"23","contact":"88163 21232","emailId":"jkl@gmail.com"});
db.student1.insert({_id:5,"name":"MNO","rollNo":"14","age":"22","contact":"88967 21232","emailId":"mno@gmail.com"});
db.student1.find({});
db.student1.update({_id:1,"name":"DFE","rollNo":"10"}{$set:{"emailId":"dfe@gmail.com"}},{upsert:true});
db.student1.replaceOne({_id:2,"rollNo":"11","name":"ABC"},{"name":"FEM"},{upsert:true});
insert overwrite local directory 'C:\Users\Preksha\Desktop\mongodb'
db.student1.find({});
db.student1.drop();
public with sharing class contactListService {
    
@AuraEnabled (cacheable = true)
public static List<sObject> getContactList(String name){
    String key = '%'+name+'%';
    String Query  = 'select id,name,phone,email from contact where name like :key';
    return Database.query(query);
   
}

@AuraEnabled (cacheable = true)
public static List<sObject> getAccountList(String name){
    String key = '%'+name+'%';
    String Query  = 'select id,name,industry from account where name like :key';
    return Database.query(query);
   
}



}

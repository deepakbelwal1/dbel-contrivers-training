public with sharing class AccountParentContainer {
    @AuraEnabled(Cacheable=true)
    public static List<account> getAccount(string name1st) {
            try{
                String nameSearch='%' + name1st + '%';
                return[SELECT Id, Name,Industry, Website FROM Account WHERE Name Like :nameSearch];
            }
         catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
            }
     }
    }
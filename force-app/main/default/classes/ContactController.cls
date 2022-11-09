public with sharing class ContactController {
    
        @AuraEnabled(cacheable=true)
        public static List<Contact> getContacts(Integer i) {
            return [
                SELECT Name, Email
                FROM Contact
                WITH SECURITY_ENFORCED
                ORDER BY FirstName ASC Limit : i
            ];
        }
    }    

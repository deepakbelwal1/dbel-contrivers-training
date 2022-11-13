trigger LastNameLenght on Lead (before insert, before update) {
    if(trigger.isInsert || trigger.isUpdate){
        for(Lead lNameLength: trigger.new){
            lNameLength.LengthChar__c=  lNameLength.LastName.Length();
        }

    }

}
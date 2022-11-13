trigger noEmailContact on Contact (before insert, before update) {
    if(trigger.isInsert || trigger.isUpdate){
        for(Contact nullemailCont: trigger.new){
           if(nullemailCont.Email==null){
            nullemailCont.Email='noemail@gmail.com';
           }
        }
    }
}

//Write a flow that update the Contact email address as noemail@gmail.com 
//if the email is not entered when contact is created or updated
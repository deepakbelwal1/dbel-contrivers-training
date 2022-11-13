trigger errorMsgAccount on Contact (after insert, after update) {
  if(trigger.isInsert || trigger.isUpdate){
    for(Contact accName: trigger.new){
        if(accName.FirstName==accName.LastName){
            accName.addError('FirstName and LastName Cannot be Same');
        }
    }
  }
}

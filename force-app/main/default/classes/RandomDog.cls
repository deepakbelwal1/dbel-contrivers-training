public class RandomDog {
    @AuraEnabled(cacheable=true)
    Public Static String getRandomBreed(){
         Http http = new Http();
         HttpRequest request = new HttpRequest();
         request.setEndpoint('https://dog.ceo/api/breeds/image/random');
         request.setMethod('GET');
         HttpResponse response = http.send(request);

          String Dog;
         
          // If the request is successful, parse the JSON response.
         if(response.getStatusCode() == 200) {
             // Deserializes the JSON string into collections of primitive data types.
             Map<String, Object> results = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());             
           Dog=String.valueof(results.get('message'));
            
           
         } 
         return Dog; 
         
 }
     
 }

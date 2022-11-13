public with sharing class catApi {
    public static void catFacts() {
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://catfact.ninja/fact');
        request.setMethod('GET');
        HttpResponse response = http.send(request);

         // If the request is successful, parse the JSON response.
         if(response.getStatusCode() == 200) {
            // Deserializes the JSON string into collections of primitive data types.
            Map<String, Object> results = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
            List<Object> catFactsPrint = (List<Object>) results.get('fact');
            
            system.debug('Facts are' + string.valueof((results.get('fact'))));

    }
}
}



//write an API call to get the facts about cat and print on system.debug screen
//endpoint : https://catfact.ninja/fact
//method: GET
//sample payload: {“fact”:“Cats sleep 16 to 18 hours per day. When cats are asleep, they are still alert to incoming stimuli. 
//If you poke the tail of a sleeping cat, it will respond accordingly.“,”length”:167}
public with sharing class utilityClass {
    public utilityClass() {

    }

    @AuraEnabled
    public static Map<String,Integer> mapdemo(){
        Map<String,Integer> testMap = new Map<String,Integer>();
        testMap.put('Amit Singh',1);
        testMap.put('Anup Singh',2);
        testMap.put('Arun Singh',3);
        testMap.put('Ankit Singh',4);
        return testMap;
      
    }

    @AuraEnabled
    public static string methodtest(){
        return 'I was a apex class.';
    }
}

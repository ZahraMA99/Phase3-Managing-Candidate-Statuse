# senario_2: 
Feature: Uplode txt file and make asserstion on it's content 

   Scenario: Admin should successfully Uplode txt file and make asserstion on it's content
   Given the admin is on the system 
   And Start to create new employee, job title and vacancy
   
   When the admin clicked into recruitment tab
   And clicked into candidate tab 
   And searche for candidate with status Application Initiated or Hired
   And clicked into eye icon 
   And clicked into edit switch
   And uploade txt file 
   And save edits 
   And return into candidate page 
   And search for the candidate with uploaded file 
   And download the file
   
   Then the content of the file should be matched
# senario_1: status => passed
Feature: Candidate interview result verification
   Admin want to verify candidate interview results

   Scenario: Admin should successfully assign the candidate's status into "Interview Passed"
      Given the admin is on the system

      When the admin start to type your And step here created new employee, job title and vacancy
      And the admin clicked into recruitment tab
      And the admin clicked into candidate tab
      And the admin searched for specific candidate
      And the admin clicked into passed button

      Then the status will be passed

   Scenario: Admin should successfully assign the candidate's status into "Interview Failed"
      Given the admin is on the system

      When the admin start to type your And step here created new employee, job title and vacancy
      And the admin clicked into recruitment tab
      And the admin clicked into candidate tab
      And the admin searched for specific candidate
      And the admin clicked into failed button

      Then the status will be failed


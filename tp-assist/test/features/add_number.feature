Feature: Adding a number to the WipeOut directory

As a user,
I want to add a number to my WipeOut list,
In order to receive help from another friend

Scenario: user adds a number to WipeOut
  Given Jon wants to add Tiam to the list
  When he adds his number <>
  Then he should see Tiam and his number in the list

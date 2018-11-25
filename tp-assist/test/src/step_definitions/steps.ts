import {
  Start
} from '../tasks/start'

export = function wipeOutSteps() {

  this.Given(/^(.*)) wants to add (.*)) to the list$/, function (actor: string, name: string) {
    return this.stage.theActorCalled(name).attemptsTo(
           Start.withList());
  });

  this.When(/^he adds his number (.*)$/, function (number: string) {
      // Write code here that turns the phrase above into concrete actions
      //callback(null, 'pending');
  });

  this.Then(/^s?he should see (.*) and his number in the list$/, function (callback) {
      // Write code here that turns the phrase above into concrete actions
      //callback(null, 'pending');
  });


}

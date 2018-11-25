import { Open, PerformsTasks, ResizeBrowserWindow, step, Task } from 'serenity-js/lib/screenplay-protractor';


export class Start implements Task {
  public static withList(): Start {
        return new Start();
  }

  public static withATodoListContaining(items: string[]): Start {
          return new Start(items);
}

  @step('{0} starts with a todo list containing #todoListDescription')
  performAs(actor: PerformsTasks): PromiseLike<void> {
      return actor.attemptsTo(
          Open.browserOn('localhost:3000'),
          ResizeBrowserWindow.toMaximum()
      );
  }
}

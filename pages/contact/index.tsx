import { app, Component } from 'apprun';
import { Button } from 'antd';

export default class ContactComponent extends Component {
  state = 0;

  view = state => (
    <>
      <h1>Contact</h1>
      <div>This is a component</div>
      <h1>{state}</h1>
      <Button onClick={() => this.run('add', -1)}>-1</Button>
      <Button onClick={() => this.run('add', +1)}>+1</Button>
    </>
  );

  update = {
    add: (state, num) => state + num,
  };
}


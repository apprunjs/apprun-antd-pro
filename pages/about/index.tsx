import app from 'apprun';
import { Button, DatePicker, version } from 'antd';
import { Component } from 'apprun';
import dayjs from 'dayjs';

export default class AboutComponent extends Component {
  state = {
    version,
    date: dayjs(),
  };

  view = ({ version, date }) => <div>
    <h1>About</h1>
    <h2>antd version: {version}</h2>
    <p />
    <DatePicker defaultValue={date} onChange={(d) => this.run('dateChange', d)} />
    <Button type="primary" style={{ marginLeft: 8 }}>
      Primary Button
    </Button>
    <p />
  </div>;

  update = {
    '/about': state => state,
    dateChange: (state, date) => ({ ...state, date }),
  };
}



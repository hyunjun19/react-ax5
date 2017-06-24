import * as _ from 'lodash';

export default class StyleHelper {
  static toString(style: object) {
    const styles = _.map(style, (value: string, key: string) => {
      return `${key}:${value}`;
    });

    return styles.join(';');
  }
}
